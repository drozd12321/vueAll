<template>
  <div class="one">{{ one.fio }}</div>
  <div class="two">{{ one.tlf }}</div>
  <div class="three">{{ one.status }}</div>
  <div class="foo">{{ one.sum }}</div>
</template>
<script setup lang="ts">
import type { PropType } from "vue";

export interface RequerestI {
  fio: string;
  tlf: string;
  status: string;
  sum: number;
}
const props = defineProps({
  one: {
    type: Object as PropType<RequerestI>,
    required: true,
  },
});
</script>
<style scoped>
.table > div {
  text-align: center;
}

.one {
  cursor: pointer;
  transition: all ease 0.4s;
}
.one:hover {
  transform: translateY(-10px);
}
</style>
