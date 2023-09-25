<template>
    <div class="container" id="about">
        <div class="anchor-point">
            <div @click="jumpTo('kanonbot')" class="circle"></div>
            <div @click="jumpTo('meowpad')" class="circle"></div>
            <div @click="jumpTo('teamspeak')" class="circle"></div>
            <div @click="jumpTo('support')" class="circle"></div>
            <div class="circle current"></div>
        </div>
        <div class="header">
            <div class="logo">
                <img :src="logo" draggable="false" />
            </div>
        </div>
        <div class="main">
            <n-grid cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen" :collapsed-rows=3>
                <n-gi class="p-card" v-for="i in members" @click="openURL(i.url)">
                    <div class="avatar" v-if="i.avatar">
                        <img :src="i.avatar" alt="" draggable="false" />
                    </div>
                    <div class="name" :style="{marginTop: i.avatar ? '2.2rem' : '0px'}">{{ i.name }}</div>
                    <div class="desc">{{ i.desc }}</div>
                </n-gi>
            </n-grid>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import axios from 'axios';
import { ref, type Ref } from 'vue';
import logo from "../assets/textlogo.svg";

const members: Ref<{ avatar?: string; name?: string; desc?: string; url?: string }[]> = ref([{}]);

const jumpTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView();
}

axios.get("/members.json").then((res: { data: { avatar?: string; name?: string; desc?: string; url?: string }[]; }) => {
    members.value = res.data;
})

const openURL = (url: string | undefined) => {
    if(url) {
        window.open(url);
    }
}
</script>

<style scoped lang="scss">
.container {
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;

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
        padding-top: 5vh;
        width: 100%;

        .logo {
            margin: 0 auto;
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
        margin-top: 10vh;

        .p-card {
            background-color: #9a9a9a45;
            border-radius: 12px;
            padding: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: 0rem 1rem 3rem 1rem;
            transition: all 0.3s ease;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
            min-height: 125px;

            .avatar {
                max-width: 5rem;
                max-height: 5rem;
                position: absolute;
                transform: translateY(-3.2rem);

                img {
                    box-shadow: 0 0 6px #000;
                    width: 100%;
                    border-radius: 50%;
                    background-color: #fff;
                }
            }

            .name {
                text-align: center;
                font-family: SourceHanSans;
                font-weight: 600;
                font-size: 1.2rem;
                color: #fff;
            }
        }
        .p-card:hover {
            background-color: #33669945;
        }
    }
}</style>