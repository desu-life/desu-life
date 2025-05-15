<template>
  <div class="container" id="contact">
    <div class="header" id="__header">
      <div class="logo">
        <img :src="logo" draggable="false" alt="Text Logo" />
      </div>
    </div>
    <div class="cards">
      <!-- Discord卡片 -->
      <div class="card">
        <div class="card-content">
          <div class="mlogo">
            <img :src="catlogo" alt="Discord" draggable="false" />
          </div>
          <div class="text-content">
            <div class="label">{{ $t('page.contact.discord.label') }}</div>
            <div class="name">{{ $t('page.contact.discord.name') }}</div>
          </div>
          <div class="btn-group">
            <div class="btn">
              <n-button size="large" @click="toDiscord">
                <div class="btn-content">
                  <div class="circle-icon discord"></div>
                  <span>{{ $t('page.contact.discord.btn') }}</span>
                </div>
              </n-button>
            </div>
          </div>
        </div>
      </div>
      <!-- Bot QQ群卡片 -->
      <div class="card">
        <div class="card-content">
          <div class="mlogo">
            <img :src="botQQLogo" alt="Bot QQ群" draggable="false" class="rounded" />
          </div>
          <div class="text-content">
            <div class="label">{{ $t('page.contact.bot-qq-group.label') }}</div>
            <div class="name">{{ $t('page.contact.bot-qq-group.name') }}</div>
          </div>
          <div class="btn-group">
            <div class="btn">
              <n-button size="large" @click="toBotQQ">
                <div class="btn-content">
                  <div class="circle-icon qq"></div>
                  <span>{{ $t('page.contact.bot-qq-group.btn') }}</span>
                </div>
              </n-button>
            </div>
          </div>
        </div>
      </div>
      <!-- 设备交流群卡片 -->
      <div class="card">
        <div class="card-content">
          <div class="mlogo">
            <img :src="deviceQQLogo" alt="设备交流群" draggable="false" class="rounded" />
          </div>
          <div class="text-content">
            <div class="label">{{ $t('page.contact.device-qq-group.label') }}</div>
            <div class="name">{{ $t('page.contact.device-qq-group.name') }}</div>
          </div>
          <div class="btn-group">
            <div class="btn">
              <n-button size="large" @click="toDeviceQQ">
                <div class="btn-content">
                  <div class="circle-icon qq"></div>
                  <span>{{ $t('page.contact.device-qq-group.btn') }}</span>
                </div>
              </n-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import logo from "@/assets/desulife-logo-typography.svg"
import catlogo from "@/assets/desulife-logo-icon-text.svg"
import botQQLogo from "@/assets/images/contact/botqqgroup.png"
import deviceQQLogo from "@/assets/images/contact/deviceqqgroup.png"

const toDiscord = () => {
  window.open("https://discord.gg/eGAm24FjQ8")
}
const toBotQQ = () => {
  window.open("https://qm.qq.com/q/o4VZlDbyOA")
}
const toDeviceQQ = () => {
  window.open("https://qm.qq.com/q/g5ueRvMRHO")
}
</script>

<style scoped lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: #181818;

  .header {
    padding: 4%;
    width: 100%;
    .logo {
      width: clamp(200px, 100%, 270px);
      transition: transform 0.3s ease;
      &:hover {
        transform: scale(1.02);
      }
      img {
        width: 100%;
        filter: drop-shadow(0 0 10px rgba(255,255,255,0.1));
      }
    }
  }

  .cards {
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
    margin-top: 10vh;

    .card {
      flex: 1 1 320px;
      min-width: 320px;
      max-width: 380px;
      background: rgba(53, 53, 53, 0.85);
      backdrop-filter: blur(10px);
      border-radius: 18px;
      border: 1px solid rgba(255, 255, 255, 0.12);
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.10);
      transition: transform 0.3s, box-shadow 0.3s;
      padding: 2.5rem 2rem 2rem 2rem;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 2rem;
      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
      }
      .card-content {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .mlogo {
        width: 100px;
        height: 100px;
        position: relative;
        margin-bottom: 18px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 0 12px rgba(127, 231, 196, 0.18));
          transition: transform 0.3s;
          &:hover {
            transform: scale(1.05);
          }
          &.rounded {
            border-radius: 50%;
          }
        }
      }
      .text-content {
        text-align: center;
        margin-bottom: 18px;
      }
      .label {
        font-size: 1.05rem;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 7px;
        letter-spacing: 0.5px;
      }
      .name {
        font-size: 1.3rem;
        font-weight: 700;
        color: #fff;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.13);
        letter-spacing: 0.5px;
      }
      .btn-group {
        margin-top: 18px;
        width: 100%;
        max-width: 320px;
        .btn {
          width: 100%;
          :deep(.n-button) {
            width: 100%;
            background: linear-gradient(45deg, rgba(127, 231, 196, 0.18), rgba(127, 231, 196, 0.28));
            border: 1px solid rgba(127, 231, 196, 0.22);
            backdrop-filter: blur(5px);
            transition: all 0.3s;
            &:hover {
              background: linear-gradient(45deg, rgba(127, 231, 196, 0.28), rgba(127, 231, 196, 0.38));
              transform: translateY(-2px);
            }
            &:active {
              transform: translateY(0);
            }
          }
          .btn-content {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }
          .circle-icon {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: #7fe7c4;
            box-shadow: 0 0 10px rgba(127, 231, 196, 0.5);
            animation: pulse 2s infinite;
          }
          .circle-icon.discord {
            background-color: #7fe7c4;
          }
          .circle-icon.qq {
            background-color: #4eacf6;
          }
          span {
            font-size: 1.05rem;
            color: #fff;
            font-weight: 500;
            letter-spacing: 0.5px;
          }
        }
      }
    }
  }
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(127, 231, 196, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(127, 231, 196, 0); }
  100% { box-shadow: 0 0 0 0 rgba(127, 231, 196, 0); }
}

@media screen and (max-width: 1100px) {
  .cards {
    max-width: 800px;
  }
}
@media screen and (max-width: 860px) {
  .container {
    margin: 10vh 0;
    .cards {
      flex-direction: column;
      align-items: center;
      .card {
        max-width: 98vw;
        padding: 1.5rem 0.5rem 1.5rem 0.5rem;
        .mlogo {
          width: 80px;
          height: 80px;
        }
        .name {
          font-size: 1.1rem;
        }
        .btn-group {
          max-width: 98vw;
        }
        &:hover {
          box-shadow: none;
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .container {
    .cards {
      .card {
        background: none;
        border: none;
        box-shadow: none;
        padding: 0;
        max-width: 100vw;
        .mlogo {
          width: 64px;
          height: 64px;
        }
        .text-content {
          margin-bottom: 12px;
        }
        .label {
          font-size: 0.95rem;
        }
        .name {
          font-size: 1rem;
        }
        .btn-group {
          margin-top: 12px;
          .btn span {
            font-size: 0.95rem;
          }
        }
      }
    }
  }
}
</style> 