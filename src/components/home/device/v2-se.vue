<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { VueMarkdownIt } from '@f3ve/vue-markdown-it';

import '@/assets/markdown.css';

import meowpad from "@/assets/meowpad/meowpad_v2_se.webp";

import custom_trigger from "@/assets/meowpad/custom-trigger.svg";
import Light from "@/assets/meowpad/LightbulbOutlined.svg";
import Speed from "@/assets/meowpad/SpeedFilled.svg";
import USBC from "@/assets/meowpad/usb-c-port.svg";

const isMobile = () => {
  return window.innerWidth <= 768;
};

const toMarket = () => {
  window.open("https://shop172145884.taobao.com/");
};

const content = ref("");

axios.get("/meowpad_v2_se.md").then((res: { data: string }) => {
  content.value = res.data;
});

const showModal = ref(false);

const openDialog = () => {
  showModal.value = true;
};
</script>

<template>
  <div class="main __rtl" id="__main">
    <div class="left" id="__left">
      <div class="text" id="__text">
        <h1>Meowpad SE v2</h1>
        <h2>多场景适用的磁轴小键盘</h2>
        <div class="icon-group" id="__icon-group">
          <div class="item">
            <div class="icon">
              <img :src="USBC" alt="" draggable="false" />
            </div>
            <div class="label">USB-C 接口</div>
          </div>
          <div class="item">
            <div class="icon small">
              <img :src="Speed" alt="" draggable="false" />
            </div>
            <div class="label">1ms 高速响应</div>
          </div>
          <div class="item">
            <div class="icon small">
              <img :src="Light" alt="" draggable="false" />
            </div>
            <div class="label">可调背光</div>
          </div>
          <div class="item">
            <div class="icon small">
              <img :src="custom_trigger" alt="" draggable="false" />
            </div>
            <div class="label">自定义触发</div>
          </div>
        </div>
        <n-tooltip trigger="hover" v-if="!isMobile()">
          <template #trigger>
            <n-button text class="btn" type="info" @click="toMarket"
              >这么好？给我也整一个！ >></n-button
            >
          </template>
          打开猫盘淘宝店铺页
        </n-tooltip>
        <n-button
          v-else
          text
          class="btn"
          id="__btn"
          type="info"
          @click="toMarket"
          >这么好？给我也整一个！ >></n-button
        >
        <n-tooltip trigger="hover" v-if="!isMobile()">
          <template #trigger>
            <n-button text class="btn" type="info" @click="openDialog"
              >已经整了？下载驱动！ >></n-button
            >
          </template>
          下载驱动程序
        </n-tooltip>
        <n-button
          v-else
          text
          class="btn"
          id="__btn"
          type="info"
          @click="openDialog"
          >已经整了？下载驱动！ >></n-button
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
      title="下载 Meowpad 驱动"
      :bordered="false"
    >
    <vue-markdown-it :source="content" v-if="content != ''" class="markdown" />
    <div v-else>
      <p>desu.life device 交流群：722122663 | 309702152</p>
      <p><br />Meowpad V2：</p>
      <p>
        meowpad_v2 配置器(1.0.1)：
        <n-button
          text
          type="info"
          tag="a"
          href="https://desu.life/device/app/download/MeowpadConfiguratorForV2_1.0.1.exe"
          >Windows x64</n-button
        >
        |
        <n-button
          text
          type="info"
          tag="a"
          href="https://desu.life/device/app/download/meowpad-configurator-for-v2_1.0.1.deb"
          >Linux x64(deb)</n-button
        >
        |
        <n-button
          text
          type="info"
          tag="a"
          href="https://desu.life/device/app/download/meowpad-configurator-for-v2_1.0.1.AppImage"
          >Linux x64(appimage)</n-button
        >
      </p>
      <p>
        meowpad_v2 standard edition 固件 (1.0.1)：
        <n-button
          text
          type="info"
          tag="a"
          href="https://desu.life/device/firmware/meowpad_v2/meowpad_v2_standard_edition_app_0.1.1.bin"
          >本地下载</n-button
        >
      </p>
      <p><br />Meowpad V1：</p>
      <p>
        产品说明及固件升级教程：
        <n-button text type="info" tag="a" href="https://info.desu.life/?p=338"
          >前往资讯站查看</n-button
        >
      </p>
      <p>
        meowpad_v1 配置器(0.3.1)：
        <n-button
          text
          type="info"
          tag="a"
          href="https://desu.life/device/app/download/MeowpadConfigurator_0.3.1_x64_en-US.msi.zip"
          >Windows x64</n-button
        >
        |
        <n-button
          text
          type="info"
          tag="a"
          href="https://desu.life/device/app/download/MeowpadConfigurator_0.3.1_amd64.deb.zip"
          >Linux x64 (deb)</n-button
        >
        |
        <n-button
          text
          type="info"
          tag="a"
          href="https://desu.life/device/app/download/MeowpadConfigurator_0.3.1_macos-app.zip"
          >MacOS x64</n-button
        >
      </p>
      <p>
        meowpad_v1.1_hs固件 (Hall Effect release 1.0.0 patch 23090101)：
        <n-button
          text
          type="info"
          tag="a"
          href="https://desu.life/device/firmware/meowpad_v1_hs_edition/download/meowpad_v1_app_hs_edition_1.0.0_ptach_23090101.bin"
          >本地下载</n-button
        >
      </p>
      <p>
        meowpad_v1.0固件 (Mechanical beta 0.1.6)：
        <n-button
          text
          type="info"
          tag="a"
          href="https://desu.life/device/firmware/meowpad_v1/download/meowpad_v1_app_0.1.6.bin"
          >本地下载</n-button
        >
      </p>
      <p>
        meowpad_v1固件升级套件 (dfu-util)：
        <n-button
          text
          type="info"
          tag="a"
          href="https://desu.life/device/firmware/meowpad_v1/download/firmware_updater.zip"
          >本地下载</n-button
        >
      </p>
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
