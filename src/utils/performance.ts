// utils/performance.ts

/**
 * 节流函数
 * @param fn 需要节流的函数
 * @param delay 节流时间间隔（毫秒）
 * @returns 节流后的函数
 */
export const throttle = (fn: (ev: Event) => void, delay: number): (ev: Event) => void => {
  let lastExecutionTime = 0;

  return function (this: Window, ev: Event) {
    const now = Date.now();
    if (now - lastExecutionTime >= delay) {
      lastExecutionTime = now;
      fn.call(this, ev);
    }
  };
};


/**
 * 防抖函数
 * @param fn 需要防抖的函数
 * @param delay 防抖时间间隔（毫秒）
 * @returns 一个经过防抖优化的函数
 */
export const debounce = (fn: Function, delay: number): Function => {
  let timeoutId: number | null = null;

  return (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => fn(...args), delay) as unknown as number;
  };
};
