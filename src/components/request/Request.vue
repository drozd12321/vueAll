<template>
  <h4 v-if="request?.length === 0" class="vif">Заявок нет</h4>
  <div class="table" v-else>
    <div class="head">
      <h4>1</h4>
      <h4>2</h4>
      <h4>3</h4>
      <h4>4</h4>
      <h4>5</h4>
      <h4>6</h4>
    </div>
    <div v-for="(req, i) in request" :key="i" class="row">
      <RequestRow :one="req" />
    </div>
  </div>
</template>
<script setup lang="ts">
import RequestRow from "./RequestRow.vue";

const props = defineProps({
  request: {
    type: Array,
  },
});
</script>
<style scoped>
.vif {
  text-align: center;
}
.table {
  display: grid;
  grid-template-areas:
    "head head head head head head"
    "row row row row row row";
  gap: 10px;
}
.table > div {
  text-align: center;
}
.row {
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
.head {
  grid-area: head;
}
.head {
  grid-area: head;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
</style>
