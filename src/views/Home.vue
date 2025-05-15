<script setup lang="ts">
import { onMounted, defineAsyncComponent } from "vue";
import { useIsMobile } from "@/utils";

// 首屏组件
import AnchorPoint from "@/components/common/AnchorNavigation.vue";
import Main from "@/components/home/sections/Main.vue";

// 非首屏组件懒加载
const Kanonbot = defineAsyncComponent(() => import("@/components/home/sections/Kanonbot.vue"));
const Device = defineAsyncComponent(() => import("@/components/home/sections/Device.vue"));
const Contact = defineAsyncComponent(() => import("@/components/home/sections/Contact.vue"));
const Support = defineAsyncComponent(() => import("@/components/home/sections/Support.vue"));
const Team = defineAsyncComponent(() => import("@/components/home/sections/Team.vue"));
const Footer = defineAsyncComponent(() => import("@/components/home/sections/Footer.vue"));
const Partners = defineAsyncComponent(() => import("@/components/home/sections/Partners.vue"));

const isMobile = useIsMobile();

onMounted(() => {
  // 检测是否带有锚点
  if (window.location.hash) {
    const id = window.location.hash.slice(1);
    jumpTo(id);
  }
  // 检测 search 参数
  const search = new URLSearchParams(window.location.search);
  if (search.has("to")) {
    const id = search.get("to") as string;
    jumpTo(id);
  }
});

const jumpTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView();
};
</script>

<template>
  <AnchorPoint />
  <Main class="component" />
  <Kanonbot class="component dark" />
  <Device class="component dark" />
  <Contact class="component dark" />
  <Support class="component dark" />
  <Team class="component no-force-scroll dark" />
  <Partners class="component no-force-scroll dark" />
  <Footer class="component dark" />
  <n-back-top
    :bottom="95"
    :right="100"
    :visibility-height="188"
    v-if="!isMobile"
  />
</template>

<style scoped lang="scss">
.component {
  scroll-snap-align: start;
}
.dark {
  color: var(--vt-c-text-dark-2);
  background: var(--vt-c-black);
}
.no-force-scroll {
  scroll-snap-stop: always;
}
</style>
