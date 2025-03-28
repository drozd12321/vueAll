<template>
  <AppUIMsg :query="query" />
  {{ message }}
  <RouterView></RouterView>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import AppUIMsg from "../ui/AppUIMsg.vue";
import { useStore } from "vuex";
import useError from "@/utils/useError";
import { computed, watch } from "vue";
import router from "@/router";
const message = computed(() => store.getters.getMsg);
const route = useRoute();
const store = useStore();
const query = computed(() => route.query.message);

watch(
  () => query,
  (newQuery) => {
    if (newQuery) {
      store.dispatch("setMsg", {
        value: useError(String(query)),
        type: "warning",
      });

      router.replace({ query: { ...route.query, message: undefined } });
    }
  }
);
</script>
<style scoped></style>
