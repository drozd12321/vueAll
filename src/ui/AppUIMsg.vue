<template>
  <VueFinalModal
    v-model="ismessage"
    class="custom-modal"
    content-class="modal-content"
    overlay-class="modal-overlay"
  >
    <div class="alert">Message Alert {{ message }}</div>
  </VueFinalModal>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { VueFinalModal } from "vue-final-modal";
const store = useStore();

const ismessage = true;
const message = computed(() => store.getters.getMsg);
</script>
<style scoped></style>
