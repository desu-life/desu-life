<template>
  <div class="content">
    <div class="grid">
        <div class="form">
          <h3>创建 DESU.Life 账户</h3>
          <h2>向我们提供你的邮箱</h2>
          <n-form
            ref="formRef"
            size="large"
            :show-label="false"
            :rules="rules"
            :model="formModel"
          >
            <n-form-item path="email">
              <n-input
                placeholder="请输入邮箱"
                v-model:value="formModel.email"
                @keydown.enter.prevent
              >
                <template #prefix>
                  <n-icon :component="AlternateEmailRound" />
                </template>
              </n-input>
            </n-form-item>
            <n-form-item path="cftoken">
              <vue-turnstile
                site-key="0x4AAAAAAARM2HiXd91R578H"
                v-model="formModel.cftoken"
              />
              <!-- <vue-turnstile site-key="0x4AAAAAAARH6Wmm-J-vlqIu" v-model="formModel.cftoken" /> -->
            </n-form-item>
            <n-form-item>
                <n-button
                  type="primary"
                  block
                  strong
                  size="large"
                  @click="handleSubmit"
                  :disabled="formModel.cftoken === '' || formModel.email === '' || sendingMail"
                >
                  发送验证邮件
                </n-button>
            </n-form-item>
            <n-form-item v-if="isMobile">
                <n-button
                    secondary
                    block
                    strong
                    type="error"
                    @click="handleClose"
                >
                    关闭
                </n-button>
            </n-form-item>
          </n-form>
        </div>
        <div class="steps">
            <n-steps :vertical="!isMobile" :current="1">
                <n-step
                    title="发送验证邮件"
                    :description="!isMobile ? '向我们提供你的邮箱，DESU.Life 将会发送一封验证邮件到你的邮箱' : ''"
                />
                <n-step
                    title="设置密码"
                    :description="!isMobile ? '打开验证邮件中的链接继续注册，设置密码' : ''"
                />
                <n-step
                    title="完成注册"
                    :description="!isMobile ? '注册完成，登录 DESU.Life 账户吧！' : ''"
                />
            </n-steps>
        </div>
        <Logo class="logo" v-if="isMobile" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { AlternateEmailRound } from "@vicons/material";
import VueTurnstile from "vue-turnstile";
import { ref } from "vue";
import { type FormInst, type FormRules, type FormItemRule, useMessage } from "naive-ui";

import Logo from "@/components/Logo.vue"

const emit = defineEmits(['close']);

const handleClose = () => {
    emit('close');
}

const sendingMail = ref(false);

const message = useMessage();

const formRef = ref<FormInst | null>(null);

const rules: FormRules = {
  email: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error("请输入邮箱");
        } else if (
          !/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)
        ) {
          return new Error("请输入正确的邮箱格式");
        }
        return true;
      },
      trigger: ["blur", "input"],
    },
  ],
  cftoken: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error("请完成人机验证");
        }
        return true;
      },
    },
  ],
};

const formModel = ref({
  email: "",
  cftoken: "",
});

const handleSubmit = (e: MouseEvent) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
        if (!errors) {
            message.success('验证邮件已发送，请查收')
            sendingMail.value = true;
            // axios
        } else {
        console.log(errors)
        }
    })
};

const isMobile = ref(window.innerWidth <= 800);
</script>

<style scoped lang="scss">
.logo {
  margin-top: 2rem;
}
.content {
  width: 100%;
  padding: 0 40px 0 40px;
  display: flex;
  flex-direction: column;
  margin-top: 65px;
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
