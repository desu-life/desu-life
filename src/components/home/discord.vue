<template>
    <div class="container" id="discord">
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
                    {{ $t("page.discord.label") }}
                </div>
                <div class="name">
                    {{ $t("page.discord.name") }}
                </div>
                <div class="btn-group" id="__btn-group">
                    <div class="btn">
                        <n-button size="medium" color="#00000045" @click="toDiscord">
                            <div class="circle-icon"></div>
                            <span>
                                {{ $t("page.discord.btn") }}
                            </span>
                        </n-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// import { useMessage } from 'naive-ui'

import logo from "@/assets/textlogo.svg"
import catlogo from "@/assets/desu.life_logo_2023.svg"

// const message = useMessage()

const toDiscord = () => {
    window.open("https://discord.gg/eGAm24FjQ8")
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
            padding: 4%;
            border: 1px solid #FFFFFF80;
            outline: 2px solid #55555560;

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