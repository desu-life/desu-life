<template>
  <div class="container" id="partners">
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

import partners_data from "@/data/partners"
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
  .partner {
    margin-top: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    img {
      width: 100%;
      max-height: 50px;
      object-fit: contain;
    }
  }
}

@media screen and (max-width: 860px) {
  .container {
    display: block;
    position: unset;
    padding: 0 6vw;

    .partner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem 3rem;
      justify-self: center;
      margin: 5vh 0;
    }
  }
}
</style>