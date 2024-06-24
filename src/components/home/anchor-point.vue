<template>
    <Transition>
        <div class="anchor-point" id="__anchor-point" v-if="current != ''">
          <div
            @click="jumpTo('kanonbot')"
            class="circle"
            :class="current == 'kanonbot' ? 'current' : ''"
          ></div>
          <div
            @click="jumpTo('device')"
            class="circle"
            :class="current == 'device' ? 'current' : ''"
          ></div>
          <div
            @click="jumpTo('discord')"
            class="circle"
            :class="current == 'discord' ? 'current' : ''"
          ></div>
          <div
            @click="jumpTo('support')"
            class="circle"
            :class="current == 'support' ? 'current' : ''"
          ></div>
          <div
            @click="jumpTo('about')"
            class="circle"
            :class="current == 'about' ? 'current' : ''"
          ></div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const jumpTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView();
};

const current = ref("");

// 获取组件元素的位置信息
const getComponentPosition = (componentId: string) => {
  const element = document.getElementById(componentId);
  return element ? element.offsetTop : -1;
};

const handleScroll = () => {
    if (window.scrollY < getComponentPosition("kanonbot")) {
        current.value = "";
        return;
    }
  for (let i = 0; i < 5; i++) {
    const componentId = [
      "kanonbot",
      "device",
      "discord",
      "support",
      "about",
    ][i];
    if (getComponentPosition(componentId) >= window.scrollY) {
      current.value = componentId;
      break;
    }
  }
};
onMounted(() => {
    window.addEventListener("scroll", handleScroll);
})
onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
})
</script>

<style scoped lang="scss">
.anchor-point {
  position: fixed;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  height: 100px;

  .circle {
    cursor: pointer;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.5;
    transition: all 0.3s ease;

    &.current {
      opacity: 1;
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
