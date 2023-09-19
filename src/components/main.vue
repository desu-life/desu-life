<script setup lang="ts">
import bgImg from "../assets/background.jpg"
import { KeyCommand16Filled } from "@vicons/fluent"
</script>

<template>
    <img :src="bgImg" alt="" class="bg">
    <div class="container">
        <div class="menu">
            <li><KeyCommand16Filled/></li>
            <li>Bot</li>
            <li>猫盘</li>
            <li>TS</li>
            <li>赞助</li>
            <li>关于</li>
        </div>
        <div class="title">
            DESU.Life
        </div>
        <div class="arrowdown">

        </div>
    </div>
</template>



<style scoped lang="scss">
.bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #353535;
        border-radius: 12px;
        padding: 5px;
        li {
            list-style: none;
            margin: 0 1rem;
            font-family: SourceHanSans;
            font-weight: 600;
            font-size: 1.2rem;
            color: #fff;
            cursor: pointer;
            &:hover {
                color: #ccc;
            }
            svg {
                color: #fff;
            }
        }
    }
    .title {
        font-family: SourceHanSans;
        font-weight: 600;
        font-size: 4rem;
        color: #fff
    }
}
</style>