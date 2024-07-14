import { defineStore } from 'pinia'
import { ref } from 'vue'


function checkRegion() : boolean {
    const search = new URLSearchParams(window.location.search)
    return window.location.href.includes('cn.desu.life') || search.get('region')?.toUpperCase() == 'CN'
}

function getSystemLanguage() : string {
    if (localStorage.getItem('i18nLanguage')) return localStorage.getItem('i18nLanguage') as string
    let lang = navigator.language
    
    // 中文判断
    if (lang.includes("zh-Hans")) return "zh-Hans"
    if (lang.includes("zh-Hant")) return "zh-Hant"
    if (lang.includes("yue-Hans")) return "zh-Hans"
    if (lang.includes("yue-Hant")) return "zh-Hant"
    if (lang.includes("zh")) return "zh-Hans"

    // 其余语言
    return navigator.language.split('-')[0]
}


export const useSiteStore = defineStore('site', () => {
    const isCN = ref(checkRegion())
    const i18nLanguage = ref(isCN.value ? 'zh-Hans': getSystemLanguage())
    const setLanguage = (language: string) => {
        i18nLanguage.value = language
    }
    return { isCN, i18nLanguage, setLanguage }
})