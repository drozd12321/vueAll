<template>
  <AppPage @gotoHome="gotoHome" :title="`Заявка  ${zavkaId}`">
    <div class="inf"><RequestRow :one="getDataZavkaById" /></div>
    <div class="btn">
      <button @click="gotoUpdate">Изменить</button>
      <button class="dlt" @click="deleteZavka">Удалить</button>
    </div>
  </AppPage>
</template>
<script setup lang="ts">
import getZavkaId from "@/utils/getZavkaId";
import RequestRow from "./RequestRow.vue";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import AppPage from "../AppPage.vue";
const route = useRoute();
const router = useRouter();
const store = useStore();
const zavkaId = route.params.id;
const getDataZavkaById = computed(() => {
  if (!Array.isArray(zavkaId) && zavkaId) {
    return getZavkaId(store, zavkaId);
  }
});
const deleteZavka = () => {
  store.dispatch("modal/actiondeletZavka", zavkaId);
  router.push("/");
};
const gotoUpdate = () => {
  router.push(`/user/${zavkaId}/update`);
};
const gotoHome = () => {
  router.push("/");
};
</script>
<style scoped>
.btn {
  display: flex;
  align-items: center;
  gap: 20px;
}
.dlt {
  background-color: rgba(224, 5, 5, 0.938);
}
img:hover {
  fill: red;
}
.dlt:hover {
  background-color: rgba(131, 51, 51, 0.938);
}
.inf {
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 5px;
  font-size: 17px;
  align-items: center;
  justify-items: center;
  padding: 15px;
}
button {
  width: 130px;
  font-size: 17px;
  border: none;
  padding: 10px;
  margin-top: 15px;
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
