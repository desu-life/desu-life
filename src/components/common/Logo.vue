<template>
    <div class="logo">
        <img
        :src="logo"
        alt="DESU.Life Logo"
        draggable="false"
        v-if="theme == 'light'"
        />
        <img :src="logoDarkMode" alt="DESU.Life Logo" draggable="false" v-else />
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useOsTheme } from "naive-ui";
import logo from "@/assets/login/textlogo.svg";
import logoDarkMode from "@/assets/desulife-logo-typography.svg";
const osThemeRef = useOsTheme();
const theme = computed(() => (osThemeRef.value === "dark" ? "dark" : "light"));
</script>

<style lang="scss" scoped>
.logo {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 160px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>