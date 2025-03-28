<template>
  <AppUIMsg :query="query" />
  <RouterView></RouterView>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import AppUIMsg from "../ui/AppUIMsg.vue";
const route = useRoute();
console.log(route.query);
const query = route.query.message;
</script>
<style scoped></style>
