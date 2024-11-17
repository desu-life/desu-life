<template>
    <div class="container" id="support">
            <vue-danmaku
                v-model:danmus="danmus"
                :speeds=70
                :debounce=1000
                loop
                randomChannel
                isSuspend
                :fontSize=15
                class="danmu"
                id="__danmu"
            ></vue-danmaku>
        <div class="header" id="__anchor-point">
            <div class="logo">
                <img :src="logo" draggable="false" />
            </div>
        </div>
        <div class="main __rtl" id="__main">
            <div class="left" id="__left">
                <div class="text" id="__text">
                    <h1>{{ $t("page.support.title") }}</h1>
                    <p>{{ $t("page.support.content.0") }}</p>
                    <p>{{ $t("page.support.content.1") }}</p>
                    <p>{{ $t("page.support.content.2") }}</p>
                    <p>{{ $t("page.support.content.3") }}</p>
                    <p>{{ $t("page.support.content.4") }}</p>
                    <p>{{ $t("page.support.content.5") }}</p>
                    <!--<n-button id="__btn" text class="btn" type="info" @click="toAfdian">前往爱发电页 >></n-button> -->
                </div>
            </div>
            <div class="right" id="__right">
                <img :src="support" class="flip party-popper" draggable="false" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import vueDanmaku from 'vue3-danmaku'
import { ref, onMounted } from 'vue'
// import axios from 'axios'

import logo from "@/assets/desulife-logo-typography.svg"
import support from "@/assets/images/support/party-popper-color.svg"

import supporters from "@/data/content/supporters.json"

const danmus = ref([''])

onMounted(() => {
    var result: string[] = []
    supporters.sort(() => Math.random() - .5).forEach((el: any) => {
        result.push(`￥${el.value} ${el.comment} @${el.name}${el.qq?`[${el.qq}]`:''} - ${el.time}`)
    });
    danmus.value = result
})
</script>

<style scoped lang="scss">

.flip {
    -moz-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    transform: scaleX(-1);
    /*兼容IE*/
}

.container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .danmu {
        position: absolute;
        top: 10px;
        left: 0;
        width: 100%;
        height: 98%;
        pointer-events: none;
        z-index: 9;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-family: SourceHanSC;
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
        width: 75%;

        .right {
            flex: 6;
            width: 100%;
            height: 60vh;
            display: flex;
            justify-content: center;
            align-items: center;

            // background-color: aqua;
            img {
                width: 100%;
                height: 100%;
                max-height: 50vh;
            }
        }

        .left {
            flex: 4;
            width: 100%;
            max-height: 68vh;
            // background-color: red;
            display: flex;
            align-items: center;

            .text {
                white-space: nowrap;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 60%;
                font-family: SourceHanSC;
                color: #fff;
                width: 100%;

                h1 {
                    font-size: 2.5rem;
                }

                h2 {
                    font-size: 1.2rem;
                    color: #ccc;
                }

                .btn {
                    width: max-content;
                    margin: .5rem 0;
                }
            }
        }
    }
}
@media screen and (max-width: 860px) {
    #__text {
        width: 90%;
        margin: 0 auto;
        p {
            line-height: 2rem;
            white-space: normal;
        }
    }
    #__danmu {
        top: 0;
        height: 80%;
        
    }

    #__right {
        img {
            max-height: 40vh;
        }
    }
}
</style>