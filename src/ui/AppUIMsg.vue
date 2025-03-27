<template>
  <div class="alert">Message Alert {{ message }}</div>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const message = computed(() => store.getters.getMsg);
</script>
<style scoped>
.alert {
  z-index: 100;
  background-color: white;
  padding: 20px;
}
</style>
