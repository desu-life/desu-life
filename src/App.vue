<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { ref } from 'vue';
import Main from './components/main.vue'
import Kanonbot from './components/kanonbot.vue'
import Meowpad from './components/meowpad.vue'
import Discord from './components/discord.vue'
import Support from './components/support.vue'
import About from './components/about.vue'
import Footer from './components/footer.vue'
import AnchorPoint from './components/anchor-point.vue'
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
    <n-config-provider :theme="darkTheme">
        <n-message-provider>
            <!-- <div class="container"> -->
                <AnchorPoint v-if="!isMobile" />
                <Main class="component" />
                <Kanonbot class="component" />
                <Meowpad class="component" />
                <Discord class="component" />
                <Support class="component" />
                <About class="component" />
                <Footer class="component"/>
            <!-- </div> -->
            <n-back-top :bottom="95" :right="100" :visibility-height="188" v-if="!isMobile" />
        </n-message-provider>
    </n-config-provider>
</template>

<style scoped lang="scss">
.component {
    scroll-snap-align: start;
}
.about {
    scroll-snap-stop: always; 
}
</style>
