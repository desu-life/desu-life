import i18n from "./i18n";
import type { NotificationApiInjection } from "naive-ui/es/notification/src/NotificationProvider";

function notificationLang(language: string, isFirst: boolean = false, notification: NotificationApiInjection) {
  let countdown: number = 10,
      lang: string = "",
      region: string = "",
      key: string = "notify.lang.content" + (isFirst ? "_first" : "")
  // 获取语言名称和地区名称
  if (isFirst) {
    language = navigator.language
    region = getRegionName(language)
  }
  // 提示切换语言
  const n = notification.info({
    title: i18n.global.t("notify.lang.title"),
    content: `${i18n.global.t(key, { region })} \
              ${i18n.global.t("notify.lang.countdown", { countdown })}`,
    duration: 10000,
    onAfterEnter: () => {
      const minusCount = () => {
        countdown--
        n.content = `${i18n.global.t(key, { region })} \
                     ${i18n.global.t("notify.lang.countdown", { countdown })}`
        if (countdown > 0) {
          window.setTimeout(minusCount, 1000)
        }
      }
      window.setTimeout(minusCount, 1000)
    }
  })
}

function getRegionName(lang: string): string {
  try {
      const regionCode = lang.split('-')[1] || lang.split('_')[1];
      if (!regionCode) return 'Unknown Region';

      const regionName = new Intl.DisplayNames([lang], { type: 'region' }).of(regionCode.toUpperCase());
      return regionName || 'Unknown Region';
  } catch (error) {
      console.error('Error getting region name:', error);
      return 'Unknown Region';
  }
}

function getLanguageName(lang: string): string {
  try {
      const languageCode = lang.split('-')[0]; // 提取语言代码（如 en, zh）
      const languageName = new Intl.DisplayNames([lang], { type: 'language' }).of(languageCode);
      return languageName || 'Unknown Language';
  } catch (error) {
      console.error('Error getting language name:', error);
      return 'Unknown Language';
  }
}

function getSystemLanguage() : string {

  let params = new URLSearchParams(window.location.search)
  if (params.get('lang')) return params.get('lang') as string

  // 系统语言判断
  let lang = navigator.language
  
  // 中文判断
  if (lang.includes("zh-Hans")) return "zh-Hans"
  if (lang.includes("zh-Hant")) return "zh-Hant"
  if (lang.includes("zh-tw")) return "zh-Hant"
  if (lang.includes("zh-hk")) return "zh-Hant"
  if (lang.includes("yue-Hans")) return "zh-Hans"
  if (lang.includes("yue-Hant")) return "zh-Hant"
  if (lang.includes("zh")) return "zh-Hans"

  // 其余语言
  return navigator.language.split('-')[0]
}

export { getLanguageName, getRegionName, getSystemLanguage, notificationLang };