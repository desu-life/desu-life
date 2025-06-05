<template>
  <div class="device-info">
    <div class="content">
      <h1>{{ $t(config.i18n.titleKey) }}</h1>
      <h2>{{ $t(config.i18n.subtitleKey) }}</h2>
      <div class="icon-group">
        <div
          v-for="(icon, index) in config.icons"
          :key="index"
          class="icon-item"
        >
          <div class="icon">
            <img :src="icon.src" :alt="icon.alt" draggable="false" />
          </div>
          <div class="label">{{ $t(icon.labelKey) }}</div>
        </div>
      </div>
      <n-tooltip trigger="hover" v-if="!isMobile">
        <template #trigger>
          <n-button text class="btn" type="info" @click="toMarket">
            {{ $t(config.i18n.linkToMarketText) }}
          </n-button>
        </template>
        {{ $t(config.i18n.linkTooltip) }}
      </n-tooltip>
      <n-button
        v-else
        text
        class="btn"
        type="info"
        @click="toMarket"
      >
        {{ $t(config.i18n.linkToMarketText) }}
      </n-button>
      <n-tooltip trigger="hover" v-if="!isMobile">
        <template #trigger>
          <n-button text class="btn" type="info" @click="toSupport">
            {{ $t(config.i18n.btnSupportText) }}
          </n-button>
        </template>
        {{ $t(config.i18n.btnTooltip) }}
      </n-tooltip>
      <n-button
        v-else
        text
        class="btn"
        type="info"
        @click="toSupport"
      >
        {{ $t(config.i18n.btnSupportText) }}
      </n-button>
    </div>
    <div class="image">
      <img :src="config.imageSrc" :alt="config.imageAlt" draggable="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { importDeviceModel, i18n, useIsMobile } from "@/utils";
import { type DeviceInfo } from "./config"
import '@/assets/styles/markdown.css';

const { config } = defineProps({
  config: {
    type: Object as () => DeviceInfo,
    required: true,
  },
})

const isMobile = useIsMobile();

const toMarket = () => {
  window.open("https://kagamistudio.taobao.com/", "_blank");
};

const toSupport = () => {
  window.open("https://support.desu.life/", "_blank");
};


</script>

<style scoped lang="scss">
.device-info {
  width: 80%;
  margin: 0 auto;
  transform: translateX(5%);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  .content {
    flex: 4;
    display: flex;
    flex-direction: column;
    gap: .6rem;

    h1 {
      font-size: 2.5rem;
      color: #fff;
    }

    h2 {
      font-size: 1.2rem;
      color: #ccc;
    }

    .icon-group {
      display: flex;
      justify-content: space-around;
      max-width: 500px;
      margin: 1rem 0;

      .icon-item {
        display: flex;
        flex-direction: column;
        align-items: center;

        .icon img {
          width: 4rem;
          height: 4rem;
          padding: 0.1rem;
        }

        .label {
          margin-top: 0.5rem;
          font-size: 0.9rem;
          text-align: center;
        }
      }
    }
  }

  .image {
    flex: 6;
    display: flex;
    height: 60vh;
    justify-content: center;
    align-items: center;

    img {
      height: 54%;
    }
  }

  .btn {
      width: max-content;
      margin: 0.5rem 0;
  }
}

@media screen and (max-width: 1280px) and (min-width: 860px) {
    .content {
      height: 90% !important;
      max-height: 500px !important;

      .icon-group {
        display: grid !important;
        grid-template: 1fr 1fr / 1fr 1fr;
        grid-gap: 20px;
      }
    }
  }

@media screen and (max-width: 860px) {
  .device-info {
    margin-top: 10vh;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    width: 100%;

    .content {
      display: flex;
      align-content: center;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;
      height: 100%;
      max-height: 100%;

      .icon-group {
        margin-bottom: 50px;
        display: grid;
        grid-template: 1fr 1fr / 1fr 1fr;
        grid-gap: 20px;
      }
    }

    .image {
      height: 10vh;
      margin: 6vh 0;

      img {
        max-height: 20vh;
      }
    }
  }
}
</style>
