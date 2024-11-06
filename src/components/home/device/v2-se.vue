<script setup lang="ts">
import { onMounted, ref } from "vue";
import { VueMarkdownIt } from '@f3ve/vue-markdown-it';

import defaultModalVue from "./default-modal.vue"

import i18n from "@/utils/i18n";

import md_zhHans from "@/locales/device/zh-Hans/meowpad_v2.md?raw";
import md_zhHant from "@/locales/device/zh-Hant/meowpad_v2.md?raw";
import md_en from "@/locales/device/en/meowpad_v2.md?raw";
import md_ja from "@/locales/device/ja/meowpad_v2.md?raw";
import md_ko from "@/locales/device/ko/meowpad_v2.md?raw";

import '@/assets/styles/markdown.css';

import meowpad from "@/assets/meowpad/meowpad_v2_se.webp";
import custom_trigger from "@/assets/meowpad/custom-trigger.svg";
import Light from "@/assets/meowpad/LightbulbOutlined.svg";
import Speed from "@/assets/meowpad/SpeedFilled.svg";
import USBC from "@/assets/meowpad/usb-c-port.svg";

const isMobile = () => {
  return window.innerWidth <= 768;
};

const toMarket = () => {
  window.open("https://shop245156856.taobao.com/");
};

const toOldMarket = () => {
  window.open("https://shop172145884.taobao.com/");
}

const getMarkdown = async () => {
  switch (i18n.global.locale.value) {
    case "zh-Hans":
      content.value = md_zhHans;
      break;
    case "zh-Hant":
      content.value = md_zhHant;
      break;
    case "en":
      content.value = md_en;
      break;
    case "ja":
      content.value = md_ja;
      break;
    case "ko":
      content.value = md_ko;
      break;
    default:
      content.value = md_en;
  }
}

const content = ref("");

onMounted(async () => {
  await getMarkdown();
})

const showModal = ref(false);

const openDialog = () => {
  showModal.value = true;
};
</script>

<template>
  <div class="main __rtl" id="__main">
    <div class="left" id="__left">
      <div class="text" id="__text">
        <h1>{{ $t("page.device.v2Se.title") }}</h1>
        <h2>{{ $t("page.device.v2Se.subtitle") }}</h2>
        <div class="icon-group" id="__icon-group">
          <div class="item">
            <div class="icon">
              <img :src="USBC" alt="" draggable="false" />
            </div>
            <div class="label">{{ $t("page.device.v2Se.benefits.0") }}</div>
          </div>
          <div class="item">
            <div class="icon small">
              <img :src="Speed" alt="" draggable="false" />
            </div>
            <div class="label">{{ $t("page.device.v2Se.benefits.1") }}</div>
          </div>
          <div class="item">
            <div class="icon small">
              <img :src="Light" alt="" draggable="false" />
            </div>
            <div class="label">{{ $t("page.device.v2Se.benefits.2") }}</div>
          </div>
          <div class="item">
            <div class="icon small">
              <img :src="custom_trigger" alt="" draggable="false" />
            </div>
            <div class="label">{{ $t("page.device.v2Se.benefits.3") }}</div>
          </div>
        </div>
        <n-tooltip trigger="hover" v-if="!isMobile()">
          <template #trigger>
            <n-button text class="btn" type="info" @click="toMarket"
              >{{ $t("page.device.v2Se.linkToMarket") }}</n-button
            >
          </template>
          {{ $t("page.device.v2Se.linkTooltip") }}
        </n-tooltip>
        <n-button text class="btn" type="info" @click="toOldMarket" v-if="!isMobile()"
          >{{ $t("page.device.v2Se.linkToOldMarket") }}</n-button
        >
        <n-button
          v-if="isMobile()"
          text
          class="btn"
          id="__btn"
          type="info"
          @click="toMarket"
          >{{ $t("page.device.v2Se.linkToMarket") }}</n-button
        >
        <n-button
          v-if="isMobile()"
          text
          class="btn"
          id="__btn"
          type="info"
          @click="toOldMarket"
          >{{ $t("page.device.v2Se.linkToOldMarket") }}</n-button
        >
        <n-tooltip trigger="hover" v-if="!isMobile()">
          <template #trigger>
            <n-button text class="btn" type="info" @click="openDialog"
              >{{ $t("page.device.v2Se.btnOpenDialog") }}</n-button
            >
          </template>
          {{ $t("page.device.v2Se.btnTooltip") }}
        </n-tooltip>
        <n-button
          v-else
          text
          class="btn"
          id="__btn"
          type="info"
          @click="openDialog"
          >{{ $t("page.device.v2Se.btnOpenDialog") }}</n-button
        >
      </div>
    </div>
    <div class="right" id="__right">
      <img :src="meowpad" alt="" draggable="false" />
    </div>
  </div>
  <div class="modal">
    <n-modal
      v-model:show="showModal"
      preset="card"
      :style="{ width: isMobile() ? '100%' : '50%', lineheight: '51px' }"
      :title="$t('page.device.v2Se.modalTitle')"
      :bordered="false"
    >
    <vue-markdown-it :source="content" v-if="content != ''" class="markdown" />
    <div v-else>
      <defaultModalVue />
    </div>
    </n-modal>
  </div>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 0 auto;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  .right {
    flex: 6;
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;

    // background-color: aqua;
    img {
      height: 50%;
    }
  }

  .left {
    flex: 4;
    width: 100%;
    max-height: 60vh;
    // background-color: red;
    display: flex;
    align-items: center;

    .text {
      white-space: nowrap;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 75%;
      max-height: 350px;
      font-family: SourceHanSC;
      color: #fff;
      width: 100%;

      h1 {
        font-size: 2.5rem;
      }

      h2 {
        font-size: 1.2rem;
        color: #ccc;
      }

      .btn {
        width: max-content;
        margin: 0.5rem 0;
      }

      .icon-group {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        max-width: 500px;
        margin: 1rem 0;

        .item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .icon {
            width: 4rem;
            height: 4rem;
            padding: 0.1rem;
            margin-bottom: 5px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
              width: 100%;
            }
          }

          .small {
            img {
              width: 90%;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1280px) and (min-width: 860px) {
  .main {
    .left {
      .text {
        height: 90% !important;
        max-height: 500px !important;
        .icon-group {
          display: grid !important;
          grid-template: 1fr 1fr / 1fr 1fr;
          grid-gap: 20px;
        }
      }
    }
  }
}

@media screen and (max-width: 860px) {
  .main {
    margin-top: 10vh;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    width: 100%;

    .left {
      .text {
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
    }

    .right {
      height: 10vh;
      margin: 6vh 0;
      img {
        max-height: 20vh;
      }
    }
  }
  
}
</style>
