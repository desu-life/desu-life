import { createI18n } from 'vue-i18n'

import zhHans from '@/locales/zh-Hans'
import zhHant from '@/locales/zh-Hant'
import en from '@/locales/en'
import ja from '@/locales/ja'

const messages = {
    'zh-Hans': zhHans,
    'zh-Hant': zhHant,
    en,
    ja
}

export default createI18n({
    locale: "",
    fallbackLocale: 'zh-Hans',
    globalInjection: true, // 全局注册$t方法
    legacy: false,
    messages,
    
    // 忽略警告
    silentTranslationWarn: false,
    missingWarn: false,
    silentFallbackWarn: false,
    fallbackWarn: false
})