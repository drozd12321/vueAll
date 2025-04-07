<template>
  <AppPage @gotoHome="gotoHome" :title="`Редактирование заявки ${zavkaId}`">
    <RequestForm
      v-model:fioval="getDataZavkaById.fio"
      v-model:statusval="getDataZavkaById.status"
      v-model:sumval="getDataZavkaById.sum"
      v-model:tlfval="getDataZavkaById.tlf"
      @fBlur="fBlur"
      @sBlur="sBlur"
      @tBlur="tBlur"
      @submit="onSub"
      :isSubmitting="isSubmitting"
      :tError="tError"
      :sError="sError"
      :fError="fError"
      :stError="stError"
      btnText="Изменить"
    />
    {{ getDataZavkaById }}
  </AppPage>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import useModalForm from "@/use/useModalForm";
import { computed } from "vue";
import getZavkaId from "@/utils/getZavkaId";
import { useStore } from "vuex";
import AppPage from "./AppPage.vue";
import RequestForm from "./request/RequestForm.vue";
import type { ItextCreate } from "./interface/interfaceStore";
const route = useRoute();
const router = useRouter();
const store = useStore();
const zavkaId = route.params.id;
const getDataZavkaById = computed<ItextCreate>(() => {
  if (!Array.isArray(zavkaId) && zavkaId) {
    return getZavkaId(store, zavkaId);
  }
});
const gotoHome = () => {
  router.push("/");
};
const onSub = () => {
  const data: ItextCreate extends Event = {
    fio: getDataZavkaById.value.fio,
    tlf: getDataZavkaById.value.tlf,
    sum: getDataZavkaById.value.sum,
    status: getDataZavkaById.value.status,
  };
  if (getDataZavkaById) {
    onSubmit(data);
  }
};
const {
  fBlur,
  fError,
  isSubmitting,
  onSubmit,
  sBlur,
  sError,
  stError,
  tBlur,
  tError,
} = useModalForm();
</script>
<style scoped></style>
