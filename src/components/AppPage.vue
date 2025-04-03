<template>
  <div class="glavn">
    <div class="head">
      <h2 @click="emit('gotoHome')">{{ title }}</h2>
      <slot name="header"></slot>
    </div>

    <slot />
  </div>
</template>
<script setup>
import { defineEmits } from "vue";
import { defineProps } from "vue";
const emit = defineEmits(["gotoHome"]);
const props = defineProps({
  title: {
    type: String,
    requared: true,
  },
});
</script>
<style scoped>
.glavn {
  background-color: white;
  margin: 1rem auto;
  width: 80%;
  padding: 10px;
  border-radius: 6px;
}
h2 {
  cursor: pointer;
}
.head {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
