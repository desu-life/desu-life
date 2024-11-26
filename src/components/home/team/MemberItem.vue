<template>
  <n-thing>
    <template #avatar>
      <n-avatar :src="member.avatar" />
    </template>
    <template #header>
      {{ member.name }}
    </template>
    <template #header-extra>
      <n-space size="small" style="margin-top: 4px">
        <n-tag
          :bordered="false"
          type="info"
          size="small"
          v-for="tag in member.tags"
          :key="tag"
        >
          {{ tag }}
        </n-tag>
      </n-space>
    </template>
    <template #description>
      {{ member.desc }}
    </template>
  </n-thing>
</template>

<script setup lang="ts">
import type { MemberItem } from "@/data/entities/members";
const props = defineProps<{
  member: MemberItem
}>()
</script>

<style lang="scss" scoped>

</style>