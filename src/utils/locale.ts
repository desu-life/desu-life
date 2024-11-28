import i18n, { loadLocale } from "./i18n";
import type { MessageApiInjection } from "naive-ui/es/message/src/MessageProvider";
import type { NotificationApiInjection } from "naive-ui/es/notification/src/NotificationProvider";

// 检查是否为合法的 Locale
const availableLocales = ['en', 'zh-Hans', 'zh-Hant', 'ja', 'ko'] as const;
type Locale = (typeof availableLocales)[number];

function validateLocale(locale: string): locale is Locale {
  return availableLocales.includes(locale as Locale);
}

function getValidatedLocale(locale: string): Locale {
  if (validateLocale(locale)) return locale;

  console.warn(`Invalid locale: ${locale}. Falling back to default.`);
  return "en";
}


// 获取用户系统语言并进行验证
function getSystemLanguage(): Locale {
  const lang = navigator.language;
  if (validateLocale(lang)) return lang;

  // 中文特例处理
  if (lang.includes("zh")) {
    // Hans: CN, Hans, zh
    if (lang.includes("Hans")) return "zh-Hans";
    // Hant: TW, HK, zh
    if (lang.includes("Hant")) return "zh-Hant";
    if (lang.includes("TW") || lang.includes("HK")) return "zh-Hant";

    // 默认使用简体中文
    return "zh-Hans";
  }

  return "en"; // 默认值
}

function isMessageApi(
  notificationMethod: NotificationApiInjection | MessageApiInjection
): notificationMethod is MessageApiInjection {
  // 根据唯一方法 'loading' 来判断是否为 MessageApiInjection
  return (notificationMethod as MessageApiInjection).loading !== undefined;
}

// 通知用户切换语言
function notificationLang(
  { notificationMethod, countdown = 10, region }: {
    notificationMethod: NotificationApiInjection | MessageApiInjection,
    countdown?: number,
    region?: string,
  }
) {
  const key = `notify.lang.content${region ? "_first" : ""}`;

  if (isMessageApi(notificationMethod)) {
    notificationMethod.info(i18n.global.t(key, { region }), {duration: countdown * 500})
  } else {
    const n = notificationMethod.info({
      title: i18n.global.t("notify.lang.title"),
      content: `${i18n.global.t(key, { region })} \n${i18n.global.t("notify.lang.countdown", { countdown })}`,
      duration: countdown * 1000,
      onAfterEnter: () => {
        const minusCount = () => {
          countdown--;
          n.content = `${i18n.global.t(key, { region })} \n${i18n.global.t("notify.lang.countdown", { countdown })}`;
          if (countdown > 0) {
            setTimeout(minusCount, 1000);
          }
        };
        setTimeout(minusCount, 1000);
      },
    });
  }
}

// 获取地区名称
function getRegionName(lang: string): string {
  try {
    const regionCode = lang.split("-")[1] || lang.split("_")[1];
    if (!regionCode) return "Unknown Region";

    const regionName = new Intl.DisplayNames([lang], { type: "region" }).of(
      regionCode.toUpperCase()
    );
    return regionName || "Unknown Region";
  } catch (error) {
    console.error("Error getting region name:", error);
    return "Unknown Region";
  }
}

// 获取语言名称
function getLanguageName(lang: string): string {
  try {
    const languageCode = lang.split("-")[0]; // 提取语言代码（如 en, zh）
    const languageName = new Intl.DisplayNames([lang], { type: "language" }).of(
      languageCode
    );
    return languageName || "Unknown Language";
  } catch (error) {
    console.error("Error getting language name:", error);
    return "Unknown Language";
  }
}

// 初始化语言
export async function initLocale(): Promise<void> {
  const locale = localStorage.getItem("i18nLanguage") || getSystemLanguage();
  try {
    await loadLocale(locale);
    document.documentElement.setAttribute("lang", locale);
  } catch (error) {
    console.error(`Failed to load locale: ${locale}`, error);
  }
}

// 切换语言
export async function switchLocale(locale: string): Promise<void> {
  const validatedLocale = getValidatedLocale(locale);

  try {
    await loadLocale(validatedLocale);
    document.documentElement.setAttribute("lang", validatedLocale);
  } catch (error) {
    console.error(`[switchLocale] Failed to switch locale to ${validatedLocale}:`, error);
  }
}

export {
  getLanguageName,
  getRegionName, 
  getSystemLanguage,
  notificationLang 
};
