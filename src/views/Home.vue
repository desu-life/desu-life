<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Main from '@/components/home/main.vue'
import Kanonbot from '@/components/home/kanonbot.vue'
import Device from '@/components/home/device.vue'
import Discord from '@/components/home/discord.vue'
import Support from '@/components/home/support.vue'
import About from '@/components/home/about.vue'
import Footer from '@/components/home/footer.vue'
import AnchorPoint from '@/components/home/anchor-point.vue'
// import TheWelcome from './components/TheWelcome.vue'
console.log(`
======================================
| 严厉批判 Zh_jk 同学每天都催我做网页 |
| 害得我没法咕咕咕 没法偷懒 只能干活  |
======================================
|      禁     止     摸     鱼      |
======================================
`)
// ↑ 怎么这样（哭）

const isMobile = ref(window.innerWidth < 860)

// 监听窗口大小
const handleResize = () => {
    isMobile.value = window.innerWidth < 860
}

onMounted(()=> {
    window.addEventListener('resize', handleResize)
    // 检测是否带有锚点
    if (window.location.hash) {
        const id = window.location.hash.slice(1)
        jumpTo(id)
    }
    // 检测 search 参数
    const search = new URLSearchParams(window.location.search)
    if (search.has('to')) {
        const id = search.get('to') as string
        jumpTo(id)
    }
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
})

// const isMobile = () => {
//     return window.innerWidth <= 768
// }
const jumpTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView();
}

</script>

<template>
    <AnchorPoint v-if="!isMobile" />
    <Main class="component" />
    <Kanonbot class="component dark" />
    <Device class="component dark" />
    <Discord class="component dark" />
    <Support class="component dark" />
    <About class="component no-force-scroll dark" />
    <Footer class="component dark"/>
    <n-back-top :bottom="95" :right="100" :visibility-height="188" v-if="!isMobile" />
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
