<template>
  <div class="container">
    <n-card class="card">
      <div class="bg">
        <img :src="bgImg" draggable="false" class="bgimg" />
        <img
          :src="bgWave"
          draggable="false"
          class="bgwave"
          v-if="theme == 'light'"
        />
        <img :src="bgWaveDark" draggable="false" class="bgwave" v-else />
        <img
          :src="bgWaveStroke"
          draggable="false"
          class="bgstroke"
          v-if="theme == 'light'"
        />
        <img
          :src="bgWaveStrokeDark"
          draggable="false"
          class="bgstroke"
          v-else
        />
      </div>
      <div class="content">
        <Logo />
        <div class="form">
          <h3>欢迎回来</h3>
          <h2>登录到 DESU.Life</h2>
          <n-form
            size="large"
            :show-label="false"
            ref="loginFormRef"
            :rules="rules"
            :model="loginFormModel"
          >
            <n-form-item-row path="mailAddress">
              <n-input
                placeholder="请输入邮箱"
                v-model:value="loginFormModel.mailAddress"
                @keydown.enter.prevent
              >
                <template #prefix>
                  <n-icon :component="AlternateEmailRound" />
                </template>
              </n-input>
            </n-form-item-row>
            <n-form-item-row path="password">
              <n-input
                type="password"
                show-password-on="click"
                placeholder="请输入密码"
                v-model:value="loginFormModel.password"
                @keydown.enter.prevent
              >
                <template #prefix>
                  <n-icon :component="PasswordRound" />
                </template>
              </n-input>
            </n-form-item-row>
          </n-form>
          <n-button
            type="primary"
            block
            secondary
            strong
            size="large"
            @click="handleLogin"
          >
            登录
          </n-button>
          <p>
            还没有账户？<n-button
              text
              type="primary"
              @click="handleOpenRegister"
              >立即创建</n-button
            >
          </p>
        </div>
      </div>
    </n-card>
  </div>
  <n-modal
    v-model:show="showModal"
    :mask-closable="false"
    transform-origin="center"
    class="animate__animated animate__faster"
    :class="showModal ? 'animate__slideInUp' : 'animate__slideOutDown'"
  >
    <n-card
      class="modal"
      :bordered="false"
      size="huge"
      role="dialog"
      closable
      @close="showModal = false"
      aria-modal="true"
    >
      <template #header>
        <Logo style="position: absolute; top: 65px; left: 60px" />
      </template>
      <Register />
    </n-card>
  </n-modal>
  <n-drawer v-model:show="showDrawer" height="100%" placement="bottom">
    <n-drawer-content>
      <Register @close="closeDrawer" />
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
import { AlternateEmailRound, PasswordRound } from "@vicons/material";
import { type FormInst, FormRules, FormItemRule, useOsTheme, useMessage } from "naive-ui";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import Register from "@/components/register/step-1.vue";
import Logo from "@/components/Logo.vue";

import bgImg from "@/assets/login/background.jpg";
import bgWave from "@/assets/login/wave.svg";
import bgWaveStroke from "@/assets/login/wave_stroke.svg";
import bgWaveDark from "@/assets/login/wave_dark.svg";
import bgWaveStrokeDark from "@/assets/login/wave_stroke_dark.svg";

import service from "@/api";

const router = useRouter();
const message = useMessage();

const osThemeRef = useOsTheme();
const theme = computed(() => (osThemeRef.value === "dark" ? "dark" : "light"));

const showModal = ref(false);
const showDrawer = ref(false);

const handleOpenRegister = () => {
  if (window.innerWidth < 800) {
    showDrawer.value = true;
  } else {
    showModal.value = true;
  }
};

const loginFormRef = ref<FormInst | null>(null);

const rules: FormRules = {
  mailAddress: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error("请输入邮箱");
        }
        return true;
      },
      trigger: ["blur", "input"],
    },
    {
      validator(rule: FormItemRule, value: string) {
        if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value) && value) {
          return new Error("请输入正确的邮箱格式");
        }
        return true;
      },
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
    },
  ],
};

const loginFormModel = ref({
  mailAddress: "",
  password: "",
});

const handleLogin = (e: MouseEvent) => {
  e.preventDefault();
  loginFormRef.value?.validate((errors) => {
    if (!errors) {
      service.post("/login", 
        JSON.stringify(loginFormModel.value),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      ).then((res) => {
        router.push("/user");
      }).catch((err) => {
        // console.error(err)
        message.error("登录失败，请检查用户名或密码");
      });
    } else {
      console.log(errors);
    }
  });
};

const handleResize = () => {
  if (window.innerWidth < 800 && showModal.value) {
    showModal.value = false;
    setTimeout(() => {
      showDrawer.value = true;
    }, 100);
  }
  if (window.innerWidth >= 800 && showDrawer.value) {
    showDrawer.value = false;
    setTimeout(() => {
      showModal.value = true;
    }, 100);
  }
};

const closeDrawer = () => {
  showDrawer.value = false;
};

// 手机返回键关闭抽屉
const handleBack = (event) => {
  if (showDrawer.value && event.state !== null) {
    showDrawer.value = false;
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  // 检查是否支持 history.pushState
  if (window.history && window.history.pushState) {
    history.pushState(null, null, document.URL);
    window.addEventListener("popstate", handleBack, false);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  if (window.history && window.history.pushState) {
    window.removeEventListener("popstate", handleBack);
  }
});
</script>

<style lang="scss" scoped>
.modal {
  width: clamp(780px, 70%, 1200px);
  height: clamp(500px, 80vh, 90vh);
  background-color: #fff;
  border-radius: 24px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e9eef2;
  .card {
    width: clamp(780px, 70%, 1200px);
    height: clamp(500px, 80%, 90vh);
    background-color: #fff;
    border-radius: 24px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: relative;
    .content {
      width: 58%;
      height: 100%;
      padding: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .form {
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: clamp(350px, 70%, 500px);
        padding: 40px;
        padding-bottom: 11vh;
        h2 {
          font-size: 1.7rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        p {
          margin-top: 1rem;
        }
      }
    }
    .bg {
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      .bgimg {
        filter: brightness(0.9);
        position: absolute;
        // z-index: -1;
        top: 0;
        right: 0;
        border-radius: 0 24px 24px 0;
        height: 100%;
        width: 400px;
        object-fit: cover;
      }
      .bgwave {
        position: absolute;
        // z-index: -1;
        top: 0;
        right: 1px;
        height: 100%;
        width: 400px;
        object-fit: cover;
      }
      .bgstroke {
        position: absolute;
        top: 0;
        right: -80px;
        height: 100%;
        width: 600px;
        object-fit: cover;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .bgstroke {
    right: -11vw !important;
  }
}

@media screen and (max-width: 800px) {
  .bgwave,
  .bgstroke,
  .bgimg {
    display: none;
  }
  .card {
    width: 100vw !important;
    height: 100vh !important;
    margin: 0 !important;
    border-radius: 0 !important;
    padding: 0 !important;
    span,
    p,
    h1,
    h2,
    h3 {
      text-align: center;
    }
    .content {
      align-items: center;
      justify-content: center !important;
      margin: 0 auto;
      padding: 0 !important;
    }
    .form {
      width: clamp(200px, 100vw, 400px) !important;
    }
    background: transparent !important;
    box-shadow: none !important;
  }
}

@media (prefers-color-scheme: dark) {
  .container {
    background-color: #15151c;
    .card {
      background-color: #181818;
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
