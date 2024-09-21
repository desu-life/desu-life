import { defineStore } from "pinia";
import { ref } from "vue";
import { getSystemLanguage } from "@/utils/locale";

function isRegionCN(): boolean {
  const search = new URLSearchParams(window.location.search);
  return (
    window.location.href.includes("cn.desu.life") ||
    search.get("region")?.toUpperCase() == "CN"
  );
}

function getLanguage() {
  if (localStorage.getItem("i18nLanguage")) {
    if (localStorage.getItem("autoLanguage") === "true") {
      localStorage.removeItem("autoLanguage");
    }
    return localStorage.getItem("i18nLanguage") as string;
  }

  if (localStorage.getItem("autoLanguage") === null) {
    localStorage.setItem("autoLanguage", "true");
  }
  return getSystemLanguage();
}

export const useSiteStore = defineStore("site", () => {
  const isCN = ref(isRegionCN());
  const i18nLanguage = ref(isCN.value ? "zh-Hans" : getLanguage());
  const setLanguage = (language: string) => {
    i18nLanguage.value = language;
  };
  return { isCN, i18nLanguage, setLanguage };
});
