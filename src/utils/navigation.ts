// utils/navigation.ts

/**
 * 在外链跳转提示页中打开链接
 * @param url 要打开的链接（必须是有效字符串）
 * @param target 打开链接的方式，默认为"_blank"
 */
function openURL(url: string | undefined, target: string = "_blank"): void {
  if (typeof url === "string" && url.trim().length > 0) {
    // 如果 URL 是有效字符串，进行跳转
    const redirectURL = `/external-redirect?url=${encodeURIComponent(url)}`;
    window.open(redirectURL, target);
  }
}

export { openURL };