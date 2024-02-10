<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Main from '@/components/home/main.vue'
import Kanonbot from '@/components/home/kanonbot.vue'
import Meowpad from '@/components/home/meowpad.vue'
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

const isMobile = ref(false)

// 监听窗口大小
const handleResize = () => {
    isMobile.value = window.innerWidth <= 768
}

onMounted(()=> {
    window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
})

// const isMobile = () => {
//     return window.innerWidth <= 768
// }
</script>

<template>
    <AnchorPoint v-if="!isMobile" />
    <Main class="component" />
    <Kanonbot class="component dark" />
    <Meowpad class="component dark" />
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
