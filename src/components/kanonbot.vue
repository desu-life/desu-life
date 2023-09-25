<template>
    <div class="container" id="kanonbot">
        <div class="anchor-point" id="__anchor-point">
            <div class="circle current"></div>
            <div @click="jumpTo('meowpad')" class="circle"></div>
            <div @click="jumpTo('teamspeak')" class="circle"></div>
            <div @click="jumpTo('support')" class="circle"></div>
            <div @click="jumpTo('about')" class="circle"></div>
        </div>
        <div class="header" id="__header">
            <div class="logo">
                <img :src="logo" draggable="false" />
            </div>
        </div>
        <div class="main" id="__main">
            <div class="left" id="__left">
                <img :src="left" alt="" draggable="false" />
            </div>
            <div class="right" id="__right">
                <div class="text">
                    <h1>KanonBot</h1>
                    <h2>支持多平台的 osu! 查分机器人</h2>
                    <p></p>
                    <p>个人资料、游玩成绩、对比 pp+ 数据</p>
                    <p>查询赛事 cost 值、查询今日新增 bp、推荐铺面（std）</p>
                    <p>Kanon 勋章系统、自定义 osu! infopanel 图像</p>
                    <p></p>
                    <n-tooltip trigger="hover">
                        <template #trigger>
                            <n-button text class="btn" type="info" @click="toDetail">猫猫还可以做的更多！ >></n-button>
                        </template>
                        前往资讯站查看 KanonBot2022 使用文档
                    </n-tooltip>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import logo from "../assets/textlogo.svg"
import left from "../assets/kanonbot/kanonbot.png"

const toDetail = () => {
    window.open("https://info.desu.life/?p=383")
}

const jumpTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView();
}
</script>

<style scoped lang="scss">
@import url("../assets/sub.css");
.container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .anchor-point {
        position: absolute;
        right: 5%;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        z-index: 1;
        height: 100px;
        .circle {
            cursor: pointer;
            width: .8rem;
            height: .8rem;
            border-radius: 50%;
            background-color: #fff;
            opacity: 0.5;
            transition: all 0.3s ease;
            &.current {
                opacity: 1;
            }
        }
    }

    .header {
        padding: 4%;
        width: 100%;
        .logo {
            width: clamp(200px, 100%, 270px);
            img {
                width: 100%;
            }
        }
    }
    .main {
        display: flex;
        flex-direction: row;
        width: 80%;
        .left {
            flex: 6;
            width: 100%;
            height: 60vh;
            // background-color: aqua;
            img {
                height: 100%;
            }
        }
        .right {
            flex: 4;
            width: 100%;
            max-height: 60vh;
            // background-color: red;
            display:flex;
            align-items: center;
            .text {
                display:flex;
                flex-direction: column;
                justify-content: space-between;
                height: 32vh;
                font-family: SourceHanSC;
                color: #fff;

                h1 {
                    font-size: 2.5rem;
                }
                h2 {
                    font-size: 1.2rem;
                }
                .btn {
                    width: max-content;
                }
            }
        }
    }
}
</style>