<template>
  <RequestForm
    @fBlur="fBlur"
    @sBlur="sBlur"
    @tBlur="tBlur"
    @submit="onSubmit"
    :fError="fError"
    :sError="sError"
    :stError="stError"
    :tError="tError"
    :isSubmitting="isSubmitting"
    v-model:fioval="fio"
    v-model:statusval="status"
    v-model:sumval="sum"
    v-model:tlfval="tlf"
  />
</template>
<script setup lang="ts">
import useModalForm from "@/use/useModalForm";
import RequestForm from "./RequestForm.vue";

const {
  fBlur,
  fError,
  fio,
  onSubmit,
  sBlur,
  sError,
  stError,
  status,
  sum,
  tBlur,
  tError,
  tlf,
  isSubmitting,
} = useModalForm();
</script>
<style scoped></style>
