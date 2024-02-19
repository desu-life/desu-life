<template>
  <n-card class="card" title="QQ">
    <n-result
      :status="qq ? 'success' : 'info'"
      :title="qq ? `已绑定至 ${qq} ` : '未绑定 QQ'"
      size="small"
    >
      <template #footer v-if="!qq">
        <n-button>点我绑定 QQ</n-button>
      </template>
    </n-result>
  </n-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  qq: string | null;
}>();
</script>

<style lang="scss" scoped></style>
