<template>
  <AppPage title="Список заявок">
    <template #header>
      <button @click="modal">Создать</button>
    </template>
    <Request :request="['fff', 'hhh']" />
    <teleport to="body">
      <AppModal>
        <RequestModal />
      </AppModal>
    </teleport>
  </AppPage>
</template>
<script setup lang="ts">
import AppModal from "@/components/AppModal.vue";
import AppPage from "@/components/AppPage.vue";
import Request from "@/components/request/Request.vue";
import RequestModal from "@/components/request/RequestModal.vue";
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const showModal = ref(false);
const modal = () => {
  store.dispatch("modal/actionTextCreated", {
    isOpen: true,
  });
};
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
  color: white;
}
button:hover {
  background-color: rgb(30, 90, 170);
}
</style>
