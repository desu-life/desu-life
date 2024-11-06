<template>
    <div class="container" id="about">
        <div class="main">
            <div class="header">
                <div class="logo">
                    <img :src="logo" draggable="false" />
                </div>
            </div>
            <n-grid cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen" :collapsed-rows=3>
                <n-gi class="p-card" v-for="i in members" @click="openURL(i.url)" :style="{cursor: i.url ? 'pointer' : 'default'}" :key="i.name">
                    <div class="avatar" v-if="i.avatar">
                        <img :src="i.avatar" alt="" draggable="false" />
                    </div>
                    <div class="name" :style="{marginTop: i.avatar ? '2.5rem' : '0px'}">{{ i.name }}</div>
                    <div class="desc">{{ i.desc }}</div>
                </n-gi>
            </n-grid>
        </div>
    </div>
</template>
  
<script setup lang="ts">
// import axios from 'axios';
import { ref, type Ref } from 'vue';
import logo from "@/assets/textlogo.svg";
import members_json from "@/data/members.json"

const members: Ref<{ avatar: string; name: string; desc?: any; url?: any; }[]> = ref(members_json.sort(() => Math.random() - 0.5))

// axios.get("/members.json").then((res: { data: { avatar?: string; name?: string; desc?: string; url?: string }[]; }) => {
//     // 随机打乱数组
//     res.data.sort(() => Math.random() - 0.5);
//     members.value = res.data;
// })

const openURL = (url: string | undefined) => {
    if(url) {
        window.open(url);
    }
}
</script>

<style scoped lang="scss">
@import url("../../assets/styles/markdown.css");

@media screen and (max-width: 860px) {
    .container {
        min-height: 300vh !important;
    }
}

.container {
    min-height: 120vh;
    // max-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;

    .header {
        padding-bottom: 8vh;
        width: 100%;

        .logo {
            margin: 0 auto;
            margin-top: 60px;
            width: clamp(160px, 100%, 200px);

            img {
                width: 100%;
            }
        }
    }

    .main {
        position: absolute;
        top: 45%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        width: 75%;

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
            min-height: 150px;

            .avatar {
                max-width: 5rem;
                max-height: 5rem;
                position: absolute;
                transform: translateY(-3.6rem);

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