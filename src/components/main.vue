<script setup lang="ts">
import defaultBgImg from "../assets/main/background.jpg";
const bgImg = ref<string>("https://desu.life/resource/images/defaultbg.jpg");
const HbgImg = ref<string>("null");
const VbgImg = ref<string>("null");
const viewType = ref<string>('');
let HshouldUpdate = ref(true);
let VshouldUpdate = ref(true);
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { KeyCommand16Filled, News24Regular } from "@vicons/fluent";
import { KeyboardArrowDownFilled, AlternateEmailFilled, LogInRound } from "@vicons/material";

//import MastodonIcon from "../assets/footer/mastodon.vue";
//import OsuIcon from "../assets/footer/osu.vue";

const options = [
  {
    label: "资讯站",
    key: "https://info.desu.life/"
  },
  {
    label: "邮箱",
    key: "https://mail.desu.life/"
  },
];

const toNewPage = (url: string) => {
  window.open(url)
}
const jumpTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView();
}

const fetchRandomImage = async (viewType: string) => {
  try {
    if (viewType === 'h') {
      if (HbgImg.value === "null")
        HbgImg.value = (await fetch(`https://desu.life/random_image?viewType=${viewType}`)).url;
      if (bgImg.value !== HbgImg.value) bgImg.value = HbgImg.value;
    } else {
      if (VbgImg.value === "null")
        VbgImg.value = (await fetch(`https://desu.life/random_image?viewType=${viewType}`)).url;
      if (bgImg.value !== VbgImg.value) bgImg.value = VbgImg.value;
    }
  } catch (error) {
    console.error('Failed to fetch random image:', error);
  }
}

onMounted(() => {
  // fetchRandomImage(viewType.value);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

const handleResize = () => {
  const isWideScreen = window.innerWidth > window.innerHeight;
  const shouldUpdate = isWideScreen ? HshouldUpdate.value : VshouldUpdate.value;

  if (shouldUpdate) {
    viewType.value = isWideScreen ? 'h' : 'v';
    HshouldUpdate.value = !isWideScreen;
    VshouldUpdate.value = isWideScreen;
    fetchRandomImage(viewType.value);
  }
};

handleResize();

window.addEventListener('resize', handleResize);

const bgLoadFailed = () => {
  bgImg.value = defaultBgImg;
}
</script>

<template>
  <div class="container" id="main">
    <div class="login-btn">
      <LogInRound class="icon" />
      <!-- <n-button size="tiny" type="primary">登录</n-button> -->
    </div>
    <img :src="bgImg" alt="" class="bg" @error="bgLoadFailed" />
    <div class="menu-box" id="__menu-box">
      <div class="menu">
        <li>
          <n-dropdown trigger="click" :options="options" @select="toNewPage" placement="bottom-start">
            <KeyCommand16Filled class="more" />
          </n-dropdown>
        </li>
        <li @click="jumpTo('kanonbot')">Bot</li>
        <li @click="jumpTo('meowpad')">猫盘</li>
        <li @click="jumpTo('discord')">Discord</li>
        <li @click="jumpTo('support')">赞助</li>
        <li @click="jumpTo('about')">关于</li>
      </div>
    </div>
    <div class="title">
      <span id="__title">DESU.Life</span>
    </div>
    <div class="micons" id="__micons">
      <News24Regular class="icon" @click="toNewPage('https://info.desu.life/')" />
      <AlternateEmailFilled class="icon" @click="toNewPage('https://mail.desu.life/')" />
      <!--<MastodonIcon class="icon" @click="toNewPage('https://m.desu.life/')" />
      <OsuIcon class="icon" @click="toNewPage('https://osu.desu.life/')" />-->
    </div>
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
  filter: brightness(70%);
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .login-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    .icon {
      width: 1.5rem;
      margin: 0 0.5rem;
      color: #fff;
      cursor: pointer;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  .menu-box {
    position: absolute;
    top: 20%;
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
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-family: SourceHanSans;
      font-weight: 600;
      font-size: 6rem;
      color: #fff;
      flex: 3;
      -webkit-user-select: none;
      user-select: none;
    }
  }

  .micons {
    display: none;
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

@media screen and (max-width: 860px) {
  #__title {
    font-size: 3rem;
    flex: none;
    padding: 0;
    margin: 0;
  }

  #__micons {
    display: flex;
    flex: none;
    padding: 0;
    margin: 0;

    .icon {
      width: 2rem;
      margin: 0 0.5rem;
      color: #fff;
      cursor: pointer;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  #__menu-box {
    display: none;
  }
}
</style>
