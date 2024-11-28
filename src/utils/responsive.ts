import { ref, onMounted, onUnmounted, type Ref } from 'vue';

// 全局状态
const isMobile = ref(window.innerWidth <= 768);
let listenerCount = 0; // 当前使用该状态的组件数量

// 单一 resize 监听器
const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};

/**
 * 判断是否为移动设备，支持共享状态
 * @returns {Ref<boolean>} - 是否为移动设备
 */
export function useIsMobile(): Ref<boolean> {
  onMounted(() => {
    listenerCount++;
    if (listenerCount === 1) {
      // 第一个组件挂载时添加事件监听器
      window.addEventListener('resize', handleResize);
    }
  });

  onUnmounted(() => {
    listenerCount--;
    if (listenerCount === 0) {
      // 最后一个组件卸载时移除事件监听器
      window.removeEventListener('resize', handleResize);
    }
  });

  return isMobile;
}
