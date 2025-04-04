<template>
  <div v-if="one" class="one" @click="goToZavka">{{ one.fio }}</div>
  <div v-if="one" class="two">{{ one.tlf }}</div>
  <div v-if="one" class="three">{{ one.status }}</div>
  <div v-if="one" class="foo">{{ one.sum }}</div>
</template>
<script setup lang="ts">
export interface RequerestI {
  fio: string;
  tlf: string;
  status: string;
  sum: number;
  id: string;
}
import type { PropType } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({
  one: {
    type: Object as PropType<RequerestI>,
    required: true,
  },
});

const router = useRouter();
const goToZavka = () => {
  router.push(`/user/${props.one.id}`);
};
</script>
<style scoped>
.table > div {
  text-align: center;
}

.one {
  cursor: pointer;
  transition: all ease 0.4s;
  text-align: center;
}
.one:hover {
  transform: translateY(-10px);
}
</style>
