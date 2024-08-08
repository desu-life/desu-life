<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { VueMarkdownIt } from '@f3ve/vue-markdown-it';

import defaultModalVue from "./default-modal.vue"
import getMarkdown from "@/components/home/device/getmd";
import i18n from "@/i18n";

import '@/assets/markdown.css';

import meowpad from "@/assets/meowpad/meowpad_v2.webp";
import custom_trigger from "@/assets/meowpad/custom-trigger.svg";
import Light from "@/assets/meowpad/LightbulbOutlined.svg";
import Speed from "@/assets/meowpad/SpeedFilled.svg";
import Lightning from "@/assets/meowpad/Lightning.svg";


const isMobile = () => {
  return window.innerWidth <= 768;
};

const toMarket = () => {
  window.open("https://shop245156856.taobao.com/");
};

const content = ref("");

watch(() => i18n.global.locale.value, async () => {
  content.value = await getMarkdown("meowpad_v2");
});

onMounted(async () => {
  content.value = await getMarkdown("meowpad_v2");
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
      
        <h1>{{ $t("page.device.v2.title") }}</h1>
        <h2>{{ $t("page.device.v2.subtitle") }}</h2>
        <div class="icon-group" id="__icon-group">
          <div class="item">
            <div class="icon small">
              <img :src="Lightning" alt="" draggable="false" />
            </div>
            <div class="label">{{ $t("page.device.v2.benefits.0") }}</div>
          </div>
          <div class="item">
            <div class="icon small">
              <img :src="Speed" alt="" draggable="false" />
            </div>
            <div class="label">{{ $t("page.device.v2.benefits.1") }}</div>
          </div>
          <div class="item">
            <div class="icon small">
              <img :src="Light" alt="" draggable="false" />
            </div>
            <div class="label">{{ $t("page.device.v2.benefits.2") }}</div>
          </div>
          <div class="item">
            <div class="icon small">
              <img :src="custom_trigger" alt="" draggable="false" />
            </div>
            <div class="label">{{ $t("page.device.v2.benefits.3") }}</div>
          </div>
        </div>
        <n-tooltip trigger="hover" v-if="!isMobile()">
          <template #trigger>
            <n-button text class="btn" type="info" @click="toMarket"
              >{{ $t("page.device.v2.linkToMarket") }}</n-button
            >
          </template>
          {{ $t("page.device.v2.linkTooltip") }}
        </n-tooltip>
        <n-button
          v-else
          text
          class="btn"
          id="__btn"
          type="info"
          @click="toMarket"
          >{{ $t("page.device.v2.linkToMarket") }}</n-button
        >
        <n-tooltip trigger="hover" v-if="!isMobile()">
          <template #trigger>
            <n-button text class="btn" type="info" @click="openDialog"
              >{{ $t("page.device.v2.btnOpenDialog") }}</n-button
            >
          </template>
          {{ $t("page.device.v2.btnTooltip") }}
        </n-tooltip>
        <n-button
          v-else
          text
          class="btn"
          id="__btn"
          type="info"
          @click="openDialog"
          >{{ $t("page.device.v2.btnOpenDialog") }}</n-button
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
      :title="$t('page.device.v2.modalTitle')"
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
// @import url("../../../assets/markdown.css");

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
      height: 55%;
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
