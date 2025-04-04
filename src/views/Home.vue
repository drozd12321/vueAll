<template>
  <AppPage @gotoHome="gotoHome" title="Список заявок">
    <template #header>
      <button @click="modal">Создать</button>
    </template>
    <Request v-if="!isZavkaComp" />
    <RouterView></RouterView>
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
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
const modal = () => {
  store.dispatch("modal/actionTextCreated", {
    isOpen: true,
  });
};
const request = computed(() => {
  return store.getters["modal/getrequest"];
});
const route = useRoute();
const isZavkaComp = computed(() => route.path.includes("user"));
const gotoHome = () => {
  router.push("/");
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
