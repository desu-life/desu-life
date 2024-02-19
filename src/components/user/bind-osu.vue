<template>
  <n-card class="card" title="osu!">
    <n-result
      :status="osuid ? 'success' : 'info'"
      :title="osuid ? `已绑定至 ${osuid}` : '未绑定 osu!'"
      size="small"
    >
      <template #footer v-if="!osuid">
        <n-button>点我绑定 osu!</n-button>
      </template>
    </n-result>
  </n-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  osuid: string | null
}>()

</script>

<style lang="scss" scoped>

</style>
