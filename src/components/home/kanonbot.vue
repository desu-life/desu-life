<template>
    <div class="container" id="kanonbot">
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
                    <h1>{{ $t("page.kanonbot.title") }}</h1>
                    <h2>{{ $t("page.kanonbot.subtitle" )}}</h2>
                    <p></p>
                    <p>{{ $t("page.kanonbot.description.0") }}</p>
                    <p>{{ $t("page.kanonbot.description.1") }}</p>
                    <p>{{ $t("page.kanonbot.description.2") }}</p>
                    <p></p>
                    <n-tooltip trigger="hover">
                        <template #trigger>
                            <n-button text class="btn" id="__btn" type="info" @click="toDetail">{{ $t("page.kanonbot.linkToDetail") }}</n-button>
                        </template>
                        {{ $t("page.kanonbot.linkTooltip") }}
                    </n-tooltip>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import logo from "@/assets/textlogo.svg"
import left from "@/assets/kanonbot/kanonbot.png"

const toDetail = () => {
    window.open("https://info.desu.life/?p=383")
}
</script>

<style scoped lang="scss">
@import url("../../assets/sub.css");
.container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

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