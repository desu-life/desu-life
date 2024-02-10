<script setup lang="ts">
import { computed } from 'vue'
import { useOsTheme, darkTheme } from 'naive-ui'
import { RouterView } from 'vue-router'

const osThemeRef = useOsTheme()

const theme = computed(() => (osThemeRef.value === 'dark' ? darkTheme : null))
</script>

<template>
    <n-config-provider :theme="theme">
        <n-message-provider>
            <RouterView />
        </n-message-provider>
    </n-config-provider>
</template>

<style scoped lang="scss">
</style>
