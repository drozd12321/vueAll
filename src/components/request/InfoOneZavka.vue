<template>
  <div class="inf"><RequestRow :one="getDataZavkaById" /></div>
  <div class="btn">
    <button>Изменить</button>
    <button class="dlt">Удалить</button>
  </div>
</template>
<script setup lang="ts">
import getZavkaId from "@/utils/getZavkaId";
import RequestRow from "./RequestRow.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const getDataZavkaById = computed(() => {
  if (!Array.isArray(route.params.id)) {
    return getZavkaId(route.params.id);
  }
});
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
