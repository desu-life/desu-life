<template>
  <div class="content">
    <div class="logo">
      <img
        :src="logo"
        alt="desu.life"
        draggable="false"
        v-if="theme == 'light'"
      />
      <img :src="logoDarkMode" alt="desu.life" draggable="false" v-else />
    </div>
    <div class="grid">
        <div class="form">
          <h3>创建 DESU.Life 账户</h3>
          <h2>完成注册</h2>
          <div>
            <p>{{ countdown }} 秒后将跳转至 <RouterLink to="/login">登录</RouterLink></p>
          </div>
        </div>
        <div class="steps">
            <n-steps :vertical="!isMobile" :current="3">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useOsTheme } from "naive-ui";

import logo from "@/assets/login/textlogo.svg";
import logoDarkMode from "@/assets/textlogo.svg";
import confetti from 'canvas-confetti'
import { useRouter } from "vue-router";


const router = useRouter();

const osThemeRef = useOsTheme();
const theme = computed(() => (osThemeRef.value === "dark" ? "dark" : "light"));

const countdown = ref(5);
const timer = setInterval(() => {
  countdown.value--;
  if (countdown.value === 0) {
    clearInterval(timer);
    router.push("/login");
  }
}, 1000);

const isMobile = ref(window.innerWidth <= 800);

const handleResize = () => {
  isMobile.value = window.innerWidth <= 800;
}

const confettiAnimate = () => {
  if (isMobile.value) {
    confetti({
      particleCount: 200,
      spread: 120,
      angle: -90,
      startVelocity: 55,
      origin: {
        x: 0.5,
        y: -1
      }
    });
  } else {
    confetti({
      particleCount: 200,
      spread: 120,
      angle: 10,
      startVelocity: 55,
      origin: {
        x: -0.1,
        y: 0.5
      }
    });
    confetti({
      particleCount: 200,
      spread: 120,
      angle: 170,
      startVelocity: 55,
      origin: {
        x: 1.1,
        y: 0.5
      }
    });
  }
}

onMounted(() => {
  window.addEventListener("resize", handleResize);
  confettiAnimate()
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  clearInterval(timer);
});
</script>

<style scoped lang="scss">
.logo {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 160px;
  height: 120px;
  margin-top: -2vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.content {
  width: 95%;
  padding: 0 40px 0 40px;
  display: flex;
  flex-direction: column;
  a {
    color: #096dd9;
    text-decoration: none;
  }
  // margin-top: 65px;
  .grid {
    height: 50vh;
    display: grid;
    grid-template-columns: 38% 50%;
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
    // align-items: center;
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
      height: unset !important;
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
