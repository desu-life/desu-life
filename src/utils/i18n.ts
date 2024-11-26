import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: "",
    fallbackLocale: 'en',
    messages: {},
    globalInjection: true, // 全局注册$t方法
    legacy: false,
    
    // 忽略警告
    silentTranslationWarn: false,
    missingWarn: false,
    silentFallbackWarn: false,
    fallbackWarn: false
});

export const loadLocale = async (locale: string) => {
    const messages = await import(`../locales/lang/${locale}.json`);
    i18n.global.setLocaleMessage(locale, messages.default);
    i18n.global.locale.value = locale;
};

export default i18n;

