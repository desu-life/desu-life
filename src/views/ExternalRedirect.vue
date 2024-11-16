<template>
  <div class="external-redirect">
    <img :src="logo" alt="DESU.Life" class="logo" />
    <n-card class="card" title="外链跳转提示">
      <p>您即将离开 DESU.Life，去往：</p>
      <span class="link" @click="proceed">{{ decodedUrl || `无效的 URL，将在 ${countdown} 秒后返回` }}</span>
      <n-divider></n-divider>
      <n-flex justify="end">
        <n-button @click="proceed" type="primary" secondary>继续访问</n-button>
        <n-button @click="cancel" type="error" secondary>取消</n-button>
      </n-flex>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
import logo from "@/assets/desulife-logo-typography.svg";

import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const decodedUrl = decodeURIComponent(route.query.url as string || '');
const countdown = ref(5); // 倒计时（单位：秒）

// 跳转到目标 URL
const proceed = () => {
  window.location.href = decodedUrl || "/";
};

// 返回上一页
const cancel = () => {
  router.back();
};

// 倒计时逻辑
let interval: number | undefined;
onMounted(() => {
  if (!decodedUrl) {
    interval = window.setInterval(() => {
      if (countdown.value > 0) {
        countdown.value -= 1;
      } else {
        clearInterval(interval);
        proceed(); // 倒计时结束后自动跳转
      }
    }, 1000);
  }
});

onUnmounted(() => {
  if (interval) {
    clearInterval(interval);
  }
});
</script>

<style lang="scss" scoped>
p, span {
  line-height: 2em;
}

.external-redirect {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: -2rem;
  .link {
    color: #409eff;
    cursor: pointer;
  }
  .card {
    width: 80%;
    max-width: 600px;
    padding: 1rem;
  }
  img {
    width: 30%;
    max-width: 220px;
    margin-bottom: 2rem;
  }
}

</style>
