<script setup lang="ts">
import { darkTheme } from 'naive-ui'

import Main from './components/main.vue'
import Kanonbot from './components/kanonbot.vue'
import Meowpad from './components/meowpad.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
    <n-config-provider :theme="darkTheme">
        <Main class="component" />
        <Kanonbot class="component" />
        <Meowpad class="component" />
        <n-back-top :right="100" :visibility-height="188" />
    </n-config-provider>
</template>

<style scoped lang="scss">
.component {
    scroll-snap-align: start;
}
</style>
