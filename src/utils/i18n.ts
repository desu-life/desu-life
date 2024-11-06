import { createI18n } from 'vue-i18n'

import zhHans from '@/locales/lang/zh-Hans.json'
import zhHant from '@/locales/lang/zh-Hant.json'
import en from '@/locales/lang/en.json'
import ja from '@/locales/lang/ja.json'
import ko from '@/locales/lang/ko.json'

export const messages = {
    'zh-Hans': zhHans,
    'zh-Hant': zhHant,
    en,
    ja,
    ko
}

export default createI18n({
    locale: "",
    fallbackLocale: 'en',
    globalInjection: true, // 全局注册$t方法
    legacy: false,
    messages,
    
    // 忽略警告
    silentTranslationWarn: false,
    missingWarn: false,
    silentFallbackWarn: false,
    fallbackWarn: false
})