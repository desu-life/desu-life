<template>
    <div class="container" id="teamspeak">
        <div class="anchor-point" id="__anchor-point">
            <div @click="jumpTo('kanonbot')" class="circle"></div>
            <div @click="jumpTo('meowpad')" class="circle"></div>
            <div class="circle current"></div>
            <div @click="jumpTo('support')" class="circle"></div>
            <div @click="jumpTo('about')" class="circle"></div>
        </div>
        <div class="header" id="__header">
            <div class="logo">
                <img :src="logo" draggable="false" />
            </div>
        </div>
        <div class="main" id="__main">
            <div class="card" id="__card">
                <div class="mlogo">
                    <img :src="catlogo" alt="" draggable="false" />
                </div>
                <div class="label">
                    DESU.Life 邀请您加入
                </div>
                <div class="name">
                    Discord 服务器
                </div>
                <div class="btn-group" id="__btn-group">
                    <div class="btn">
                        <n-button size="medium" color="#00000045" @click="toDiscord">
                            <div class="circle-icon"></div>
                            <span>
                                点击加入
                            </span>
                        </n-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMessage } from 'naive-ui'

import logo from "../assets/textlogo.svg"
import catlogo from "../assets/desulife_logo.png"

const message = useMessage()

const jumpTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView();
}

const toDiscord = () => {
    window.open("https://discord.gg/eGAm24FjQ8")
}

const copyStr = (str: string) => {
    navigator.clipboard.writeText(str).then(() => {
        message.success(`成功复制 ${str}`)
    },
    () => {
        message.error(`无法访问剪贴板`)
    })
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
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        

        .card {
            width: 50%;
            margin: 0 auto;
            background-color: #353535;
            border-radius: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2%;

            .mlogo {
                width: 150px;
                height: 150px;

                img {
                    width: 100%;
                }
            }

            .label {
                font-size: 1rem;
            }

            .name {
                font-size: 1.5rem;
                font-weight: bold;
                color: #fff;
            }

            .btn-group {
                margin-top: 3%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: clamp(320px, 100%, 380px);

                .btn {
                    .circle-icon {
                        width: 12px;
                        height: 12px;
                        border-radius: 50%;
                        background-color: #7fe7c4;
                        margin-right: .5rem;
                    }

                    span {
                        font-size: 1.1rem;
                        color: #fff;
                        margin-top: -1px;
                    }

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: auto;
                }
            }
        }     
    }
} 

@media screen and (max-width: 860px) {
    #__card {
        width: 100%;
        background-color: #00000000;
    }
    #__btn-group {
        flex-direction: column;
        align-items: center;
        .btn {
            margin-bottom: 1rem;
        }
    }
}

</style>