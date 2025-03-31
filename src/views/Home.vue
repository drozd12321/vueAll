<template>
  <AppPage title="Список заявок">
    <template #header>
      <button>Создать</button>
    </template>
    <Request />
  </AppPage>
</template>
<script setup lang="ts">
import AppPage from "@/components/AppPage.vue";
import Request from "@/components/Request.vue";
</script>
<style scoped>
button {
  width: 130px;
  font-size: 17px;
  border: none;
  padding: 10px;
  background-color: rgba(12, 113, 228, 0.795);
  color: rgb(0, 0, 0);
  border-radius: 7px;
  transition: all 0.4s ease;
}
button:hover {
  background-color: rgb(30, 90, 170);
}
</style>
