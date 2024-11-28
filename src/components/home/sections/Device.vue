<template>
  <div class="container" id="device">
    <div class="header" id="__header">
      <div class="logo">
        <img :src="logo" draggable="false" alt="Text Logo" />
      </div>
    </div>
    <div class="anchor" v-if="!isMobile">
      <div
        class="anchor-item"
        v-for="(_, index) in Object.values(devices)"
        :key="index"
        :class="{ active: swiperAnchor === index }"
        @click="switchToOther(index)"
      ></div>
    </div>
    <div v-if="isMobile">
      <DeviceInfo
        v-for="(device, index) in devices"
        :key="index"
        :config="device"
      />
    </div>
    <SwiperContainer
      v-else
      :modules="[Autoplay, Scrollbar]"
      :spaceBetween="30"
      :slides-per-view="1"
      @swiper="setSwiper"
      @autoplayTimeLeft="onAutoplayTimeLeft"
      @slideChange="handleSlideChange"
      class="swiper"
      :autoplay="{
        delay: 10000,
        disableOnInteraction: true,
      } as any"
      :scrollbar="{
        hide: true,
      } as any"
    >
      <SwiperSlide
        v-for="(device, index) in devices"
        :key="index"
        class="swiper-item"
      >
        <DeviceInfo :config="device" />
      </SwiperSlide>
      <template #container-end>
        <div class="autoplay-progress">
          <svg viewBox="0 0 48 48" ref="progressCircle">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref="progressContent"></span>
        </div>
      </template>
    </SwiperContainer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/vue";
import { Autoplay, Scrollbar } from "swiper/modules";

import "swiper/css";
import logo from "@/assets/desulife-logo-typography.svg";
import DeviceInfo from "@/components/home/device/DeviceInfo.vue";

import { Swiper } from "swiper/types";

import { devices } from "@/components/home/device/config"

const progressCircle = ref<HTMLElement | null>(null);
const progressContent = ref<HTMLElement | null>(null);

const onAutoplayTimeLeft = (s: Swiper, timeLeft: number, percentage: number) => {
  progressCircle.value?.style.setProperty(
    "--progress",
    (1 - percentage).toString()
  );
  progressContent.value!.textContent = `${Math.ceil(timeLeft / 1000)}s`;
};

const isMobile = ref(window.innerWidth <= 860);

const handleResize = () => {
  isMobile.value = window.innerWidth <= 860;
};

const swiperAnchor = ref(0);

const switchToOther = (index: number) => {
  if (swiperRef.value?.snapIndex === index) return;
  swiperRef.value?.slideTo(index);
};

const swiperRef = ref<Swiper | null>(null);

const setSwiper = (swiper: Swiper) => {
  swiperRef.value = swiper;
};

const handleSlideChange = (swiper: Swiper) => {
  swiperAnchor.value = swiper.snapIndex;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped lang="scss">

.anchor {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 200px;
  width: 10vw;
  height: 1.2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  z-index: 2;
  overflow: hidden;
  gap: 1rem;

  .anchor-item {
    width: 46%;
    height: 100%;
    border-radius: 100px;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--vt-c-white);
    transition:
      transform 0.3s ease-in-out,
      opacity 0.5s ease-in-out;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;

    &.active {
      cursor: default;
      background-color: rgba(255, 255, 255, 0.8);
      opacity: 1;
      transform: translateX(0);

      &::before {
        opacity: 1;
      }
    }

    &::before {
      content: attr(data-text);
      transition:
        opacity 0.5s ease-in-out,
        transform 0.5s ease-in-out;
    }
  }
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}

.swiper {
  width: 100%; /* 视口宽度 */
  height: 100vh; /* 视口高度 */
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide {
  width: 80%;
}
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .modal {
    p {
      line-height: 5%;
    }
  }

  .header {
    padding: 4%;
    width: 100%;

    .logo {
      width: clamp(200px, 100%, 270px);

      img {
        width: 100%;
      }
    }
  }
}
</style>
