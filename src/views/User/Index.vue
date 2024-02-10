<template>
  <div class="container">
    <div class="header">
      <Logo class="logo" />
      <div class="right">
        <div class="email">
          {{ email }}
        </div>
        <div class="exit">
          <n-button text style="font-size: 1.2rem" @click="logout">
            <n-icon :component="ExitToAppRound"></n-icon>
          </n-button>
        </div>
      </div>
    </div>
    <div class="content">
      <n-grid cols="1 800:2 1200:3" :x-gap="12" :y-gap="12">
        <n-grid-item>
          <n-card class="card" title="账户信息">
            <div class="profile-card">
              <div class="avatar">
                <img
                  :src="avatar"
                  draggable="false"
                  :title="
                    avatar == DefaultAvatar ? '绑定 osu!/QQ 后显示头像' : ''
                  "
                />
              </div>
              <div class="info">
                <p>用户名</p>
                <p>{{ username }}</p>
                <p>邮箱</p>
                <p>{{ email }}</p>
                <p>osu!</p>
                <p>{{ osuid ? osuid : "未绑定" }}</p>
                <p>QQ</p>
                <p>{{ qq ? qq : "未绑定" }}</p>
                <p>discord</p>
                <p>{{ discordid ? discordid : "未绑定" }}</p>
                <p></p>
              </div>
            </div>
          </n-card>
        </n-grid-item>
        <n-grid-item>
          <n-card class="card" title="osu!">
            <n-result
              :status="osuid ? 'success' : 'info'"
              :title="osuid ? `已绑定至 ${osuid}` : '未绑定 osu!'"
              size="small"
            >
              <template #footer v-if="!osuid">
                <n-button>点我绑定 osu!</n-button>
              </template>
            </n-result>
          </n-card>
        </n-grid-item>
        <n-grid-item>
          <n-card class="card" title="QQ">
            <n-result
              :status="qq ? 'success' : 'info'"
              :title="qq ? `已绑定至 ${qq} `: '未绑定 QQ'"
              size="small"
            >
              <template #footer v-if="!qq">
                <n-button>点我绑定 QQ</n-button>
              </template>
            </n-result>
          </n-card>
        </n-grid-item>
        <n-grid-item>
          <n-card class="card" title="Discord">
            <n-result
              :status="discordid ? 'success' : 'info'"
              :title="discordid ? `已绑定至 ${discordid}` : '未绑定 Discord'"
              size="small"
            >
              <template #footer v-if="!discordid">
                <n-button>点我绑定 Discord</n-button>
              </template>
            </n-result>
          </n-card>
        </n-grid-item>
      </n-grid>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ExitToAppRound } from "@vicons/material";
import { ref } from "vue";
import { useRouter } from "vue-router";

import Logo from "@/components/Logo.vue";
import DefaultAvatar from "@/assets/user/default-profile-picture1.jpg";

const router = useRouter();

const username = ref("mono");
const email = ref("example@desu.life");
const osuid = ref("");
const qq = ref("");
const discordid = ref("");

const avatar = ref(DefaultAvatar);

const test = () => {
  window.open('http://192.168.184.56:5173/user/index',"222", "height=754, width=1277, top=0, left=2, toolbar=no, menubar=no, scrollbars=no, resizable=yes,location=no, status=no")
}

const test2 = () => {
  window.opener.location.reload()
  window.close()
}
const logout = () => {
  router.push("/");
};
</script>

<style lang="scss" scoped>
.container {
  padding: 10px 80px;
  .header {
    padding: 20px;
    max-height: 80px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    .logo {
      height: 30px;
    }
    .right {
      margin-right: 20px;
      display: flex;
      & div {
        display: flex;
        align-items: baseline;
        justify-content: center;
        margin-right: 20px;
        line-height: 1.2rem;
      }
    }
  }
  .content {
    min-height: calc(100vh - 90px);
    padding: 24px;
    // grid-auto-rows: minmax(100px, auto);
    .card {
      // width: fit-content;
      // height: fit-content;
      height: 100%;
      background-color: #fff;
      border-radius: 16px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      .profile-card {
        display: flex;
        gap: 2rem;
        .avatar {
          width: 90px;
          height: 90px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 8px;
            object-fit: cover;
          }
        }
        .info {
          display: grid;
          grid-template-columns: 1fr 2fr;
          column-gap: 1rem;
          p {
            white-space: nowrap;
          }
        }
      }
    }
  }
}

@media (max-width: 800px) {
  .header .right {
    margin-right: 0 !important;
    & div {
      margin-right: 10px !important;
    }
  }
  .container {
    padding: 10px 0 !important;
  }
  .profile-card {
    gap: 1rem !important;
  }
}

@media (prefers-color-scheme: light) {
  .container {
    background-color: #f5f5f5;
  }
}

@media (prefers-color-scheme: dark) {
  .container {
    background-color: #15151c;
    .card {
      background-color: #181818 !important;
      box-shadow: none !important;
    }
  }
  .modal {
    background-color: #181818;
  }
  .bgimg {
    filter: brightness(0.7);
  }
  .card {
    background-color: var(--color-black-soft);
    box-shadow: none;
  }
}
</style>
