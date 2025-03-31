<template>
  <div class="glavn">
    <div class="head">
      <h2>{{ title }}</h2>
      <slot name="header"></slot>
    </div>

    <slot />
  </div>
</template>
<script setup>
import { defineProps } from "vue";
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

.head {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
