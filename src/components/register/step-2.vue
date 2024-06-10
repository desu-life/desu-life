<template>
  <div class="content">
    <Logo class="logo" />
    <div class="grid">
      <div class="form">
        <h3>创建 DESU.Life 账户</h3>
        <h2>设置你的密码</h2>
        <n-form
          ref="formRef"
          size="large"
          :show-label="false"
          :rules="rules"
          :model="formModel"
        >
          <n-form-item path="username">
            <n-input
              placeholder="设置用户名"
              v-model:value="formModel.username"
              @keydown.enter.prevent
            >
              <template #prefix>
                <n-icon :component="PersonOutlineRound" />
              </template>
            </n-input>
          </n-form-item>
          <n-form-item path="password">
            <n-input
              placeholder="设置密码"
              v-model:value="formModel.password"
              type="password"
              @keydown.enter.prevent
            >
              <template #prefix>
                <n-icon :component="PasswordRound" />
              </template>
            </n-input>
          </n-form-item>
          <n-form-item path="reenteredPassword" first>
            <n-input
              placeholder="重复密码"
              v-model:value="formModel.reenteredPassword"
              :disabled="!formModel.password"
              type="password"
              @keydown.enter.prevent
            >
              <template #prefix>
                <n-icon :component="PasswordRound" />
              </template>
            </n-input>
          </n-form-item>
          <n-form-item>
            <n-button
              type="primary"
              block
              strong
              size="large"
              @click="handleSubmit"
              :disabled="
                formModel.reenteredPassword === '' ||
                formModel.password === '' ||
                settingPassword
              "
            >
              设置密码
            </n-button>
          </n-form-item>
        </n-form>
      </div>
      <div class="steps">
        <n-steps :vertical="!isMobile" :current="2">
          <n-step
            title="发送验证邮件"
            :description="
              !isMobile
                ? '向我们提供你的邮箱，DESU.Life 将会发送一封验证邮件到你的邮箱'
                : ''
            "
          />
          <n-step
            title="设置密码"
            :description="
              !isMobile ? '打开验证邮件中的链接继续注册，设置密码' : ''
            "
          />
          <n-step
            title="完成注册"
            :description="!isMobile ? '注册完成，登录 DESU.Life 账户吧！' : ''"
          />
        </n-steps>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PersonOutlineRound, PasswordRound } from "@vicons/material";
import { ref, onMounted, onBeforeUnmount } from "vue";
import {
  type FormInst,
  type FormRules,
  type FormItemRule,
} from "naive-ui";

import Logo from "@/components/Logo.vue"

const props = defineProps<{
  token: string;
}>();

const emit = defineEmits(["next"]);

const nextStep = () => {
  emit("next");
};

const settingPassword = ref(false);

const formRef = ref<FormInst | null>(null);

function validatePasswordStartWith(rule: FormItemRule, value: string): boolean {
  return (
    !!formModel.value.password &&
    formModel.value.password.startsWith(value) &&
    formModel.value.password.length >= value.length
  );
}
function validatePasswordSame(rule: FormItemRule, value: string): boolean {
  return value === formModel.value.password;
}

const rules: FormRules = {
  username: [{ required: true, message: "请输入用户名" }],
  password: [
    {
      required: true,
      message: "请输入密码",
    },
  ],
  reenteredPassword: [
    {
      required: true,
      message: "请再次输入密码",
      trigger: ["input", "blur"],
    },
    {
      validator: validatePasswordStartWith,
      message: "两次密码输入不一致",
      trigger: "input",
    },
    {
      validator: validatePasswordSame,
      message: "两次密码输入不一致",
      trigger: ["blur", "password-input"],
    },
  ],
};

const formModel = ref({
  username: "",
  password: "",
  reenteredPassword: "",
});

const handleSubmit = (e: MouseEvent) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      settingPassword.value = true;
      // axios
      nextStep();
    } else {
      console.log(errors);
    }
  });
};

const isMobile = ref(window.innerWidth <= 800);

const handleResize = () => {
  isMobile.value = window.innerWidth <= 800;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped lang="scss">
.logo {
  height: 120px;
  margin-top: -2vh;
}
.content {
  width: 95%;
  padding: 0 40px 0 40px;
  display: flex;
  flex-direction: column;
  // margin-top: 65px;
  .grid {
    display: grid;
    grid-template-columns: 58% 40%;
    gap: 2rem;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .form {
    width: clamp(350px, 70%, 500px);
    h2 {
      font-size: 1.7rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    p {
      margin-top: 1rem;
    }
  }
  .steps {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media screen and (max-width: 800px) {
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .grid {
    display: flex !important;
    flex-direction: column-reverse;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
  .steps {
    transform: scale(0.9);
  }
}
</style>
