<template>
  <Transition>
    <div class="scroll-navigator" v-if="!isMobile && current !== ''">
      <!-- 绝对定位的覆盖点 -->
      <div class="cover-point" :style="coverStyle"></div>

      <!-- 导航锚点 -->
      <div
        v-for="(item, index) in navItems"
        :key="item.id"
        class="circle"
        :class="{ current: current === item.id }"
        @click="handleClick(item.id, index)"
      ></div>
    </div>
  </Transition>
</template>


<script setup lang="ts">
import { useIsMobile } from "@/utils";
import { ref, onMounted, onBeforeUnmount } from "vue";

const navItems = [
  { id: "kanonbot" },
  { id: "device" },
  { id: "discord" },
  { id: "support" },
  { id: "team" },
  { id: "partners" },
];

const current = ref(""); // 当前激活的锚点
const currentIndex = ref(0); // 当前激活的锚点索引
const coverStyle = ref({ top: "0px" }); // 覆盖点的位置

const isMobile = useIsMobile();

const jumpTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const handleClick = (id: string, index: number) => {
  // 滚动到指定位置
  jumpTo(id);

  // 更新当前锚点状态
  current.value = id;
  currentIndex.value = index;
};

const handleScroll = () => {
  const scrollY = window.scrollY;
  let activeId = "";

  for (const item of navItems) {
    const offsetTop = document.getElementById(item.id)?.offsetTop || 0;
    if (scrollY >= offsetTop - 10) {
      activeId = item.id;
      currentIndex.value = navItems.indexOf(item);
    }
  }
  // 更新覆盖点位置
  coverStyle.value = {
    top: `calc(${currentIndex.value} * 0.8rem + ${currentIndex.value} * 10px)`,
  };

  current.value = activeId;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>


<style scoped lang="scss">
.scroll-navigator {
  position: fixed;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  gap: 10px;

  .circle {
    position: relative;
    cursor: pointer;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: #ccc;
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  .cover-point {
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: #ccc;
    z-index: 1; 
    transition: top 0.3s ease;
  }
}
</style>
