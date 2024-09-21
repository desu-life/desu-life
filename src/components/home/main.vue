<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useRouter } from "vue-router";
import i18n from '@/i18n';

import { KeyCommand16Filled, News24Regular } from "@vicons/fluent";
import randombg from "./main/randombg.vue"
import {
  KeyboardArrowDownFilled,
  AlternateEmailFilled,
  LogInRound,
} from "@vicons/material";
import { useNotification } from "naive-ui";
import { notificationLang } from "@/utils/locale";

const router = useRouter();
const notification = useNotification()

const viewType = ref<string>("");
let HshouldUpdate = ref(true);
let VshouldUpdate = ref(true);

onMounted(() => {
    if (localStorage.getItem("autoLanguage") === "true") {
        notificationLang(i18n.global.locale.value, true, notification)
        localStorage.setItem("autoLanguage", "false")
    }
})

watch(() => i18n.global.locale.value, () => {
  options.value = updateOptions();
  document.documentElement.setAttribute("lang", i18n.global.locale.value)
  notification.destroyAll()
  notificationLang(i18n.global.locale.value, false, notification)
});

const updateOptions = () => {
  return [
    {
      label: i18n.global.t('page.main.menu.options.info'),
      key: "https://info.desu.life/",
    },
    {
      label: i18n.global.t('page.main.menu.options.mail'),
      key: "https://mail.desu.life/",
    },
  ];
}

const options = ref(updateOptions());

const toNewPage = (url: string) => {
  window.open(url);
};
const jumpTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView();
};

onMounted(() => {
  // fetchRandomImage(viewType.value);
  handleFlipAnimate();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

const handleResize = () => {
  const isWideScreen = window.innerWidth > window.innerHeight;
  const shouldUpdate = isWideScreen ? HshouldUpdate.value : VshouldUpdate.value;

  if (shouldUpdate) {
    viewType.value = isWideScreen ? "h" : "v";
    HshouldUpdate.value = !isWideScreen;
    VshouldUpdate.value = isWideScreen;
  }
};


handleResize();

window.addEventListener("resize", handleResize);

const toLogin = () => {
  router.push("/login");
};

const flipanimate = ref(false);

const handleFlipAnimate = () => {
  if (Math.random() * 100 <= 98) return;
  if (flipanimate.value) return;
  flipanimate.value = true;
  setTimeout(() => {
    flipanimate.value = false;
  }, 1000);
};
</script>

<template>
  <div class="container" id="main">
    <randombg :view-type="viewType" />
    <!-- <div class="login-btn">
      <LogInRound class="icon" @click="toLogin" />
    </div> -->
    <div class="menu-box" id="__menu-box">
      <div class="menu">
        <li>
          <n-dropdown
            trigger="click"
            :options="options"
            @select="toNewPage"
            placement="bottom-start"
          >
            <KeyCommand16Filled class="more" />
          </n-dropdown>
        </li>
        <li @click="jumpTo('kanonbot')">{{$t('page.main.menu.kanonbot')}}</li>
        <li @click="jumpTo('device')">{{$t('page.main.menu.device')}}</li>
        <li @click="jumpTo('discord')">{{$t('page.main.menu.discord')}}</li>
        <li @click="jumpTo('support')">{{$t('page.main.menu.support')}}</li>
        <li @click="jumpTo('about')">{{$t('page.main.menu.about')}}</li>
      </div>
    </div>
    <div class="title" @click="handleFlipAnimate">
      <span
        id="__title"
        :class="flipanimate ? 'animate__animated animate__flip' : ''"
        >DESU.Life</span
      >
    </div>
    <div class="micons" id="__micons">
      <News24Regular
        class="icon"
        @click="toNewPage('https://info.desu.life/')"
      />
      <AlternateEmailFilled
        class="icon"
        @click="toNewPage('https://mail.desu.life/')"
      />
      <!--<MastodonIcon class="icon" @click="toNewPage('https://m.desu.life/')" />
      <OsuIcon class="icon" @click="toNewPage('https://osu.desu.life/')" />-->
    </div>
    <div class="arrowdown">
      <i @click="jumpTo('kanonbot')">
        <KeyboardArrowDownFilled class="arrowdown-icon scroll-down-effects" />
      </i>
    </div>
  </div>
</template>

<style scoped lang="scss">

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
