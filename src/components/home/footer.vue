<template>
    <div class="footer-container">
        <div class="f-menu" id="__f-menu">
            <div class="icon btn" @click="toNewPage('https://info.desu.life/')">
                <News24Regular class="i" />
            </div>
            <div class="logo" @click="backTop" id="__logo">
                <img :src="catlogo" draggable="false" />
            </div>
            <div class="icon btn" @click="toNewPage('https://mail.desu.life/')">
                <AlternateEmailFilled class="i" />
            </div>
        </div>
        <div class="footer" id="__footer">
            <div class="left footer-block">
                <div v-for="i in footer.left">
                    <a v-if="i.includes('<link>')" :href="i.match(/\((.*)\)/)?.[0].slice(1,-1)" target="_blank">{{ i.match(/\[(.*)\]/)?.[0].slice(1,-1) }}</a>
                    <span v-else>{{ i }}</span>
                </div>
            </div>
            <div class="center footer-block">
                <div v-for="i in footer.center">
                    <a v-if="i.includes('<link>')" :href="i.match(/\((.*)\)/)?.[0].slice(1,-1)" target="_blank">{{ i.match(/\[(.*)\]/)?.[0].slice(1,-1) }}</a>
                    <span v-else>{{ i }}</span>
                </div>
                <div v-if="footer.icp && fromChina">
                    <a v-if="footer.icp.includes('<link>')" :href="footer.icp.match(/\((.*)\)/)?.[0].slice(1,-1)" target="_blank">{{ footer.icp.match(/\[(.*)\]/)?.[0].slice(1,-1) }}</a>
                    <span v-else>{{ footer.icp }}</span>
                </div>
            </div>
            <div class="right footer-block">
                <span>Web Design By <a href="https://im0o.top">Jz0ojiang</a></span>
                <div v-for="i in footer.right">
                    <a v-if="i.includes('<link>')" :href="i.match(/\((.*)\)/)?.[0].slice(1,-1)" target="_blank">{{ i.match(/\[(.*)\]/)?.[0].slice(1,-1) }}</a>
                    <span v-else>{{ i }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { News24Regular } from "@vicons/fluent"
import { AlternateEmailFilled } from "@vicons/material";
//import MastodonIcon from "@/assets/footer/mastodon.vue";
//import OsuIcon from "@/assets/footer/osu.vue";
import catlogo from "@/assets/desulife_logo.png"

import axios from 'axios'
import { ref, type Ref, onMounted } from 'vue'
import { getCookie } from 'typescript-cookie'

const footer: Ref<{ left?: string[], center?: string[], right?: string[], icp?: string }> = ref({})
axios.get("/footer.json").then((res: { data: {}; }) => {
    footer.value = res.data
})
const toNewPage = (url: string) => {
  window.open(url)
}
const backTop = () => {
  document.getElementById("main")?.scrollIntoView();
}

const fromChina = ref(true)

const checkRegion = () => {
    // query 方式
    const search = new URLSearchParams(window.location.search)
    if (search.has('region') || search.has('from')) {
        fromChina.value = (search.get('region').toUpperCase() == 'CN')
    } else {
        // cookie 方式
        let region = getCookie('region')
        if (region != undefined) {
            console.log("欢迎来自", region, "的用户")
            fromChina.value = (region.toUpperCase() == 'CN')
        } else {
            // 来源 ip 方式
            axios.get("https://ipinfo.io/json").then((res: {data: {country: string};}) => {
                fromChina.value = (res.data.country.toUpperCase() === "CN")
            }).catch(() => {
                fromChina.value = true
            })
        }
    }
}

onMounted(() => {
    checkRegion()
    
})

</script>

<style scoped lang="scss">
@import url("../../assets/sub.css");
.footer-container {
    max-height: 40vh;
    display: flex;
    flex-direction: column;

    .f-menu {
        height: 50%;
        width: 50%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 0 auto;

        .icon {
            width: 40px;
            min-width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 1rem;
            cursor: pointer;
            padding: 4px;

            &:hover {
                filter: brightness(0.8);
            }

            .i {
                color: #000;
            }
        }

        .osu {
            padding: 0;

            .i {
                width: 100%;
            }

            &:hover {
                filter: brightness(0.8);
            }
        }

        .logo {
            width: 100px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 1rem;
            cursor: pointer;
            padding: 2px;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .footer {
        height: 50%;
        display: flex;
        flex-direction: row;

        .footer-block {
            padding: 1rem;
            font-size: 1.2rem;
            color: #fff;
            font-family: SourceHanSans;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-top: 1px solid #fff;
            a {
                color: #fff;
                text-decoration: none;
                &:hover {
                    color: #369
                }
            }
        }

        .left {
            flex: 1;
            text-align: left;
        }

        .center {
            flex: 1;
            text-align: center;
        }

        .right {
            flex: 1;
            text-align: right;
        }
    }
}
@media screen and (max-width: 860px) {
    #__footer {
        border-top: 1px solid #fff;
        flex-direction: column;
        .footer-block {
            border-top: none;
            padding: 0;
            margin: 0.5rem 0;
            font-size: 1rem;
            a {
                color: #fff;
                text-decoration: none;
                &:hover {
                    color: #369
                }
            }
        }
        .left {
            text-align: center;
        }
        .center {
            text-align: center;
        }
        .right {
            text-align: center;
        }
    }
    #__f-menu {
        width: 100%;
        #__logo {
            padding: 0;
            margin: 0;
            width: 80px;
            height: 80px;
        }
    }
}
</style>
