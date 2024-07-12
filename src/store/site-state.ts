import { defineStore } from 'pinia'
import { ref } from 'vue'

function checkRegion() : boolean {
    const search = new URLSearchParams(window.location.search)
    return window.location.href.includes('cn.desu.life') || search.get('region')?.toUpperCase() == 'CN'
}

export const useSiteStore = defineStore('site', () => {
    const isCN = ref(checkRegion())
    const i18nLanguage = ref(isCN.value ? 'zh-CN': "")
    return { isCN, i18nLanguage }
})