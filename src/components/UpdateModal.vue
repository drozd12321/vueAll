<template>
  <AppPage
    @gotoHome="gotoHome"
    :title="`Редактирование заявки ${zavkaId}`"
  ></AppPage>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import useModalForm from "@/use/useModalForm";
import { computed } from "vue";
import getZavkaId from "@/utils/getZavkaId";
import { useStore } from "vuex";
import AppPage from "./AppPage.vue";
const route = useRoute();
const router = useRouter();
const store = useStore();
const zavkaId = route.params.id;
const dataZavkaId = computed(() => getZavkaId(store, route.params.id[0]));
const getDataZavkaById = computed(() => {
  if (!Array.isArray(zavkaId) && zavkaId) {
    return getZavkaId(store, zavkaId);
  }
});
const gotoHome = () => {
  router.push("/");
};
</script>
<style scoped></style>
