<template>
  <div class="container" id="partners">
    <div class="header">
      <h1>{{ $t("page.partners.title") }}</h1>
    </div>
    <div class="partners-grid">
      <!-- 满行部分 -->
      <div class="grid-row" v-for="(row, idx) in fullRows" :key="'full-' + idx">
        <div
          v-for="i in (row || [])"
          :key="i.name"
          class="partner-item"
          @click="openURL(i.url)"
          :style="{ cursor: i.url ? 'pointer' : 'default' }"
        >
          <img v-lazy="{ src: i.logo }" :alt="i.name" draggable="false" />
        </div>
      </div>

      <!-- 最后一行不满部分，居中展示 -->
      <div class="last-row" v-if="lastRow.length > 0">
        <div
          v-for="i in lastRow"
          :key="i.name"
          class="partner-item"
          @click="openURL(i.url)"
          :style="{ cursor: i.url ? 'pointer' : 'default' }"
        >
          <img v-lazy="{ src: i.logo }" :alt="i.name" draggable="false" />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from "vue"
import { openURL } from "@/utils"
import partners_data from "@/data/entities/partners"

const partners = ref(partners_data)
const fullRows = ref<{ name: string; logo: any; url: string }[][]>([])
const lastRow = ref<{ name: string; logo: any; url: string }[]>([])

function splitRows() {
  const all = [...partners.value]
  const count = window.innerWidth < 480 ? 1 : window.innerWidth < 900 ? 2 : 4
  const rows = Math.floor(all.length / count)
  fullRows.value = Array.from({ length: rows }, (_, i) =>
    all.slice(i * count, i * count + count)
  )
  lastRow.value = all.slice(rows * count)
}

onMounted(() => {
  splitRows()
  window.addEventListener("resize", splitRows)
})
</script>


<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 5vh 1rem 20vh;
  width: 100%;
  box-sizing: border-box;

  .header {
    text-align: center;
    margin-bottom: 8vh;

    h1 {
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: 600;
      color: #fff;
    }
  }

  .partners-grid {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    .grid-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 4rem 3rem;
      justify-items: center;
      padding: 0 2rem;
    }

    .last-row {
      display: flex;
      justify-content: center;
      gap: 3rem;
      padding: 0 2rem;
      flex-wrap: wrap;
    }

    .partner-item {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s ease;
      min-width: 120px;
      max-width: 200px;

      &:hover {
        transform: translateY(-5px);
      }

      img {
        width: 100%;
        height: auto;
        max-height: 64px;
        object-fit: contain;
        filter: brightness(1);
        transition: filter 0.3s ease;

        &:hover {
          filter: brightness(1.2);
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .container {
    .partners-grid {
      .grid-row {
        grid-template-columns: repeat(2, 1fr);
      }
      .partner-item img {
        max-height: 56px;
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .container {
    .partners-grid {
      .grid-row {
        grid-template-columns: 1fr;
      }
      .partner-item img {
        max-height: 64px;
      }
    }
  }
}
</style>
