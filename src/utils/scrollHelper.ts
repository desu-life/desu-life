// utils/scrollHelper.ts

/**
 * 滚动到指定元素
 * @param id 元素的 ID
 */
export const scrollToElement = (id: string): void => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

/**
 * 获取元素的 Y 轴位置
 * @param id 元素的 ID
 */
export const getElementOffsetTop = (id: string): number => {
  const element = document.getElementById(id);
  return element ? element.offsetTop : -1;
};
