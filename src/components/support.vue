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
        <div class="anchor-point" id="__anchor-point">
            <div @click="jumpTo('kanonbot')" class="circle"></div>
            <div @click="jumpTo('meowpad')" class="circle"></div>
            <div @click="jumpTo('teamspeak')" class="circle"></div>
            <div class="circle current"></div>
            <div @click="jumpTo('about')" class="circle"></div>
        </div>
        <div class="header" id="__anchor-point">
            <div class="logo">
                <img :src="logo" draggable="false" />
            </div>
        </div>
        <div class="main __rtl" id="__main">
            <div class="left" id="__left">
                <div class="text" id="__text">
                    <h1>支持 DESU.Life</h1>
                    <p>DESU.Life 的运营离不开大家的支持</p>
                    <p>感谢屏幕上飘过的所有小伙伴对 DESU.Life 的支持</p>
                    <p>所有发电金额将全部用于服务器、域名、各种云服务的费用支出。</p>
                    <p>如果您的赞助没有被记录，请在爱发电私信或群里私聊群主。</p>
                    <n-button id="__btn" text class="btn" type="info" @click="toAfdian">前往爱发电页 >></n-button>
                </div>
            </div>
            <div class="right" id="__right">
                <img :src="support" class="flip" draggable="false" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import vueDanmaku from 'vue3-danmaku'
import { ref, onMounted } from 'vue'
import axios from 'axios'

import logo from "../assets/textlogo.svg"
import support from "../assets/support/party_popper_color.svg"
// import support from "../assets/support/support.png"
const danmus = ref([''])

const jumpTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView();
}

const toAfdian = () => {
    window.open("https://afdian.net/a/Mo0oOo0oOo0o")
}

onMounted(() => {
    axios.get("/supporters.json").then((res: { data: any[] }) => {
        var result: string[] = []
        res.data.sort(() => Math.random() - .5).forEach((el: any) => {
            result.push(`￥${el.value} ${el.comment} @${el.name}${el.qq?`[${el.qq}]`:''} - ${el.time}`)
        });
        danmus.value = result
    })
})
</script>

<style scoped lang="scss">
@import url("../assets/sub.css");
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
                height: 100%;
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
@media screen and (max-width: 768px) {
    #__text {
        width: 90%;
        margin: 0 auto;
        p {
            white-space: normal;
        }
    }
    #__danmu {
        top: 0;
        height: 80%;
        
    }
}
</style>