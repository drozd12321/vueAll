<template>
  fsdfds
  {{ dataZavkaId }}
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import useModalForm from "@/use/useModalForm";
import { computed } from "vue";
import getZavkaId from "@/utils/getZavkaId";
import { useStore } from "vuex";
const route = useRoute();
const store = useStore();
const dataZavkaId = computed(() => getZavkaId(store, route.params.id[0]));
const {
  fBlur,
  fError,
  fio,
  isSubmitting,
  onSubmit,
  sBlur,
  sError,
  stError,
  status,
  sum,
  tBlur,
  tError,
  tlf,
} = useModalForm();
</script>
<style scoped></style>
