<template>
  <n-card class="card" title="Discord">
    <n-result
      :status="discordid ? 'success' : 'info'"
      :title="discordid ? `已绑定至 ${discordid}` : '未绑定 Discord'"
      size="small"
    >
      <template #footer v-if="!discordid">
        <n-button>点我绑定 Discord</n-button>
      </template>
    </n-result>
  </n-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  discordid: string | null;
}>();
</script>

<style lang="scss" scoped></style>
