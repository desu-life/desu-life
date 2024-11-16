<template>
    <div class="container" id="about">
        <div class="members">
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
        <div class="collaborator">
            <img v-for="i in collaborators" :src="i.logo" :alt="i.name" draggable="false" @click="openURL(i.url)" :style="{cursor: i.url ? 'pointer' : 'default'}" />
        </div>
    </div>
</template>
  
<script setup lang="ts">
// import axios from 'axios';
import { ref, type Ref } from 'vue';
import logo from "@/assets/desulife-logo-typography.svg";
import members_json from "@/data/members.json"
import collaborators_json from "@/data/collaborators.json"

const members: Ref<{ avatar: string; name: string; desc?: any; url?: any; }[]> = ref(members_json.sort(() => Math.random() - 0.5))
const collaborators: Ref<{ logo: string; name: string; url?: any; }[]> = ref(collaborators_json)

const openURL = (url: string | undefined) => {
    if(url) {
        // router.push({ path: "/external-redirect", query: { url: url }})
        window.open("/external-redirect?url=" + url, "_blank")
    }
}
</script>

<style scoped lang="scss">
@import url("../../assets/styles/markdown.css");

.container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .header {
        padding-bottom: 8vh;
        width: 100%;

        .logo {
            margin: 0 auto;
            width: clamp(160px, 100%, 200px);

            img {
                width: 100%;
            }
        }
    }

    .members {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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

    .collaborator {
        margin-top: 8vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 3rem;
        img {
            width: 100%;
            max-width: 100px;
        }
    }
}

@media screen and (max-width: 860px) {
    .container {
        // min-height: 180vh;
        display: block;
        position: unset;
        padding: 0 6vw;
        .members {
            width: 100%;
            position: unset;
            transform: none;
        }
        .collaborator {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem 3rem;
            justify-self: center;
            margin: 5vh 0;
        }
    }
}
</style>