<template>
    <div class="container">
        <div class="card">
            <RegisterStep2 :token="token" @next="nextStep" v-if="step==2" />
            <RegisterStep3 v-else-if="step==3" />
            <n-result
                v-else
                status="403"
                title="403 禁止访问"
                :description="description"
            >
                <template #footer>
                <n-button @click="nextStep">返回登录</n-button>
                </template>
            </n-result>
        </div>
    </div>
</template>

<script setup lang="ts">
import RegisterStep2 from "@/components/register/step-2.vue";
import RegisterStep3 from "@/components/register/step-3.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
import { useMessage } from 'naive-ui';
const route = useRoute();
const token = ref(route.query.token as string);

const step = ref(2);

const description = ref("注册链接不合法");

// if (!token.value) {
//     step.value = -1;
// } else {
//     // axios
//     description.value = "注册链接已失效，请重新注册";
//     step.value = -1;
// }

const nextStep = () => {
    step.value++;
}
</script>

<style scoped lang="scss">
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
    display: flex;
    justify-content: center;
    align-items: center;
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