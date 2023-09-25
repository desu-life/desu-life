<script setup lang="ts">
import { darkTheme } from 'naive-ui'

import Main from './components/main.vue'
import Kanonbot from './components/kanonbot.vue'
import Meowpad from './components/meowpad.vue'
import Teamspeak from './components/teamspeak.vue'
import Support from './components/support.vue'
import About from './components/about.vue'
import Footer from './components/footer.vue'
// import TheWelcome from './components/TheWelcome.vue'
console.log(`
======================================
| 严厉批判 Zh_jk 同学每天都催我做网页 |
| 害得我没法咕咕咕 没法偷懒 只能干活  |
======================================
`)
</script>

<template>
    <n-config-provider :theme="darkTheme">
        <n-message-provider>
            <!-- <div class="container"> -->
                <Main class="component" />
                <Kanonbot class="component" />
                <Meowpad class="component" />
                <Teamspeak class="component" />
                <Support class="component" />
                <About class="component" />
                <Footer class="component"/>
            <!-- </div> -->
            <n-back-top :bottom="95" :right="100" :visibility-height="188" />
        </n-message-provider>
    </n-config-provider>
</template>

<style scoped lang="scss">
.container {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh;
    position: relative;
}
.container::-webkit-scrollbar {
    display: none;
}
.component {
    scroll-snap-align: start;
}
.about {
    scroll-snap-stop: always; 
}
</style>
