<template>
  <AppForm
    @update:email="email"
    @update:password="password"
    @submit="onSubmit"
    @eblur="eBlur"
    @pblur="pBlur"
    :eError="eError"
    :pError="pError"
    :isSubmitting="isSubmitting"
    :istomanyAttemots="istomanyAttemots"
  />
</template>
<script setup lang="ts">
import AppForm from "@/components/AppForm.vue";
import useLoginForm from "../use/useLoginForm";
const {
  email,
  eError,
  eBlur,
  password,
  pBlur,
  pError,
  onSubmit,
  isSubmitting,
  istomanyAttemots,
} = useLoginForm();
</script>
<style scoped></style>
