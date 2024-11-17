<template>
  <div class="container" id="partners">
    <div class="header">
      <h1>合作伙伴</h1>
    </div>
    <div class="partner">
        <div v-for="i in partners" @click="openURL(i.url)" :style="{cursor: i.url ? 'pointer' : 'default'}" >
            <img :src="i.logo" :alt="i.name" draggable="false" />
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { openURL } from "@/utils";

import partners_data from "@/data/entities/partners"
const partners: Ref<{ logo: string; name: string; url?: any; }[]> = ref(partners_data)

</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-bottom: 20vh;
  .header {
   h1 {
     font-size: 3rem;
     font-weight: 600;
     margin-bottom: 3vh;
     color: #fff;
   }
  }
  .partner {
    margin-top: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    img {
      width: 100%;
      max-height: 64px;
      object-fit: contain;
    }
  }
}

@media screen and (max-width: 860px) {
  .container {

    .header {
      text-align: center;
      h1 {
        font-size: 2.5rem;
        font-weight: 600;
        margin-bottom: 3vh;
        color: #fff;
      }
    }
    .partner {
      display: grid;
      // grid-template-columns: 1fr 1fr;
      grid-auto-flow: column;
      grid-template-rows: 1fr 1fr;
      gap: 1.5rem 3rem;
      margin: 5vh 0;

      img {
        max-height: 70px;
      }
    }
  }
}
</style>