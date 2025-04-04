<template>
  <h4 v-if="!request || request.length === 0" class="vif">Заявок нет</h4>
  <div class="table" v-else>
    <div class="head">
      <h4>ФИО</h4>
      <h4>Телефон</h4>
      <h4>Статус</h4>
      <h4>Сумма</h4>
    </div>
    <div v-for="(req, i) in request" :key="i" class="row">
      <RequestRow v-if="req" :one="req" />
      <div v-else>Нету такой заявки</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import RequestRow from "./RequestRow.vue";
import { useStore } from "vuex";
const store = useStore();
const request = computed(() => {
  return store.getters["modal/getrequest"];
});
</script>
<style scoped>
.vif {
  text-align: center;
}
.table {
  display: grid;
  grid-template-areas:
    "head head head head"
    "row row row row";
  gap: 10px;
}
.table > div {
  text-align: center;
}
.row {
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 5px;
  font-size: 17px;
}
.head {
  grid-area: head;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  font-size: 20px;
}
</style>
