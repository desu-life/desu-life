<script setup lang="ts">
import bgImg from "../assets/main/background.jpg";
import { KeyCommand16Filled } from "@vicons/fluent";
import { KeyboardArrowDownFilled } from "@vicons/material";

const options = [
  {
    label: "资讯站",
    key: "https://info.desu.life/"
  },
  {
    label: "邮箱",
    key: "https://mail.desu.life/"
  },
  {
    label: "Mastodon",
    key: "https://m.desu.life/"
  },
  {
    label: "镜像站",
    key: "https://osu.desu.life/"
  },
];

const toNewPage = (url: string) => {
  window.open(url)
}
const jumpTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView();
}
</script>

<template>
  <div class="container" id="main">
    <img :src="bgImg" alt="" class="bg" />
    <div class="menu-box">
      <div class="menu">
        <li>
          <n-dropdown trigger="click" :options="options" @select="toNewPage" placement="bottom-start">
            <KeyCommand16Filled class="more" />
          </n-dropdown>
        </li>
        <li @click="jumpTo('kanonbot')">Bot</li>
        <li>猫盘</li>
        <li>TS</li>
        <li>赞助</li>
        <li>关于</li>
      </div>
    </div>
    <div class="title">DESU.Life</div>
    <div class="arrowdown">
        <i>
            <KeyboardArrowDownFilled class="arrowdown-icon scroll-down-effects" />
        </i>
    </div>
</div>
</template>

<style scoped lang="scss">
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .menu-box {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #353535;
    border-radius: 12px;
    padding: 5px;
    max-height: 3rem;
    li {
      list-style: none;
      margin: 0 1rem;
      font-family: SourceHanSans;
      font-weight: 600;
      font-size: 1.2rem;
      color: #fff;
      cursor: pointer;
      &:hover {
        color: #ccc;
      }
    }
    .more {
      color: #fff;
      width: 1.5rem;
      vertical-align: sub;
      cursor: pointer;
      &:hover {
        color: #ccc;
      }
    }
  }
  .title {
    padding-top: 6rem;
    font-family: SourceHanSans;
    font-weight: 600;
    font-size: 6rem;
    color: #fff;
    flex: 3;
    -webkit-user-select: none;
    user-select: none;
  }
}
.arrowdown {
  position: absolute;
  bottom: 0;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.arrowdown-icon {
  width: 3rem;
  position: relative;
}
.scroll-down-effects {
  -webkit-animation: scroll-down-effect 1.5s infinite;
  -moz-animation: scroll-down-effect 1.5s infinite;
  -o-animation: scroll-down-effect 1.5s infinite;
  -ms-animation: scroll-down-effect 1.5s infinite;
  animation: scroll-down-effect 1.5s infinite;
}
@keyframes scroll-down-effect {
  0% {
    top: 0;
    opacity: 0.4;
    filter: alpha(opacity=40);
  }
  50% {
    top: -16px;
    opacity: 1;
    -ms-filter: none;
    filter: none;
  }
  100% {
    top: 0;
    opacity: 0.4;
    filter: alpha(opacity=40);
  }
}
</style>
