// markdownLoader.ts

/**
 * 动态引入 markdown 文件
 * @param device 设备名称
 * @param locale 语言
 * @returns 
 */
export async function importDeviceModel(device: string, locale: string): Promise<string> {
  try {
    const content = await import(`@/locales/device/${device}/${locale}.md?raw`)
    return content.default
  } catch(error) {
    console.warn(`Markdown file not found for ${device} in ${locale}, falling back.`)
    return "Content not found."
  }
}