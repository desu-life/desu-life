function getSystemLanguage() : string {
  if (localStorage.getItem('i18nLanguage')) {
    if (localStorage.getItem('autoLanguage') === "true") {
      localStorage.removeItem('autoLanguage')
    }
    return localStorage.getItem('i18nLanguage') as string
  }

  if (localStorage.getItem('autoLanguage') === null) {
    localStorage.setItem('autoLanguage', "true")
  }

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

export { getSystemLanguage }