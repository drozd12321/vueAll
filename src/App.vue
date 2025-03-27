<template>
  <component :is="lay">
    <RouterView></RouterView>
    <ModalsContainer />
  </component>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import { ModalsContainer } from "vue-final-modal";

const route = useRoute();

const lay = computed(() => {
  const layoutName = `${route.meta.layout}Layout`;
  return layoutName;
});
</script>

<style scoped></style>
