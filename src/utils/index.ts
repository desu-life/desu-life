function openURL(url: string): void
function openURL(url: undefined): void

function openURL(url: string | undefined) {
  if (typeof url === "string" && url) {
    // 处理字符串类型输入
    window.open("/external-redirect?url=" + encodeURIComponent(url), "_blank");
  } else {
    // 处理 undefined 输入
    console.warn("No URL provided");
  }
}

export { openURL };