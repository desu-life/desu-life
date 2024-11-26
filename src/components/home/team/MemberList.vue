<template>
  <n-card class="modal-card" closable @close="emit('close')">
    <template #header>
      {{ $t("page.team.modalTitle") }}
    </template>
    <n-list hoverable clickable class="member-list">
      <n-list-item v-for="(member, index) in members" :key="index" @click="openURL(member.url)">
        <MemberItem :member="member" />
      </n-list-item>
      <n-list-item>
        <n-thing>
          <template #header>
            {{ $t("page.team.modalContent") }}
          </template>
        </n-thing>
      </n-list-item>
      <n-list-item v-for="(member, index) in pastMembers" :key="index" @click="openURL(member.url)">
        <MemberItem :member="member" />
      </n-list-item>
    </n-list>
  </n-card>
</template>

<script setup lang="ts">
import { members, pastMembers } from "@/data/entities/members";
import { openURL } from "@/utils";
import MemberItem from "./MemberItem.vue";

const emit = defineEmits(["close"]);
</script>

<style lang="scss" scoped>
.modal-card {
  width: clamp(500px, 50vw, 800px);
  height: clamp(400px, 50vh, 800px);
}

.member-list {
  height: clamp(200px, 40vh, 600px);
  overflow-y: auto;
}

@media screen and (max-width: 860px) {
  .modal-card {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .member-list {
    height: 90vh;
  }
  
}
</style>
