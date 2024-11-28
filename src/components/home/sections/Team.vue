<template>
  <div class="container" id="team">
    <div class="members">
      <div class="header">
        <div class="logo">
          <img :src="logo" draggable="false" alt="Text Logo" />
        </div>
      </div>
      <n-grid
        cols="2 s:3 m:4 l:5 xl:6 2xl:7"
        responsive="screen"
        :collapsed-rows="3"
      >
        <n-gi
          class="p-card"
          v-for="i in members"
          @click="openURL(i.url)"
          :style="{ cursor: i.url ? 'pointer' : 'default' }"
          :key="i.name"
        >
          <div class="avatar" v-if="i.avatar">
            <img v-lazy="{ src: i.avatar }" alt="" draggable="false" />
          </div>
          <div class="name" :style="{ marginTop: i.avatar ? '2.5rem' : '0px' }">
            {{ i.name }}
          </div>
          <div class="desc">{{ i.desc }}</div>
        </n-gi>
      </n-grid>
      <n-flex justify="end" class="button-container">
        <n-button
          text
          type="tertiary"
          @click="openModal"
          :disable="!showModal"
          icon-placement="right"
          :focusable="false"
          >
          {{ $t("page.team.modalBtn") }}
          <template #icon>
            <n-icon><ArrowRight /></n-icon>
          </template>
        </n-button>
      </n-flex>
    </div>
    <n-modal v-model:show="showModal" :on-after-leave="closeModal">
      <MemberList @close="closeModal" />
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";
import { openURL } from "@/utils";

import logo from "@/assets/desulife-logo-typography.svg";
import { KeyboardDoubleArrowRightRound as ArrowRight } from "@vicons/material";
import { members as members_data } from "@/data/entities/members";
import MemberList from "../team/MemberList.vue";

const members: Ref<{ avatar: string; name: string; desc?: any; url?: any }[]> =
  ref(members_data.sort(() => Math.random() - 0.5));

const showModal = ref(false);
const openModal = () => {
  showModal.value = true;
  // 禁用页面滚动
  document.body.style.overflow = "hidden";
};
const closeModal = () => {
  showModal.value = false;
  // 启用页面滚动
  document.body.style.removeProperty("overflow");
};
</script>

<style scoped lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .header {
    padding-bottom: 8vh;
    width: 100%;

    .logo {
      margin: 0 auto;
      width: clamp(160px, 100%, 200px);

      img {
        width: 100%;
      }
    }
  }

  .members {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 75%;

    .p-card {
      min-height: 150px;
      margin: 0rem 1rem 3rem 1rem;
      padding: 1rem;
      border-radius: 12px;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      background-color: #9a9a9a45;
      transition: all 0.3s ease;

      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;

      .avatar {
        max-width: 5rem;
        max-height: 5rem;
        position: absolute;
        transform: translateY(-3.6rem);

        img {
          box-shadow: 0 0 6px #000;
          width: 100%;
          border-radius: 50%;
          background-color: #fff;
        }
      }

      .name {
        text-align: center;
        font-weight: 600;
        font-size: 1.2rem;
        color: #fff;
      }
    }
    .p-card:hover {
      background-color: #33669945;
    }
  }
  .button-container {
    width: 90%;
  }
}

@media screen and (max-width: 860px) {
  .container {
    // min-height: 180vh;
    display: block;
    position: unset;
    padding: 0 6vw;
    .members {
      width: 100%;
      position: unset;
      transform: none;
    }
    .partner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem 3rem;
      justify-self: center;
      margin: 5vh 0;
    }
  }
}
</style>
