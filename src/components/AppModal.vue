<template>
  <VueFinalModal
    v-model="modalValue"
    :class="{ 'custom-mod': true }"
    content-class="modalcnt"
    overlay-class="modaloverl"
    @closed="clearModal"
  >
    <div>
      <h4>Создать заявку</h4>
      <slot />
    </div>
  </VueFinalModal>
</template>
<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { VueFinalModal } from "vue-final-modal";
import { useStore } from "vuex";

const modalValue = ref(false);
const store = useStore();
const ModalCreate = computed(() => store.getters["modal/getTextCreate"]);
const clearModal = () => {
  store.commit("modal/deleteTextCreate");
  modalValue.value = false;
};
watch(
  ModalCreate,
  (newVal) => {
    console.log("gg", newVal);
    if (newVal.isOpen) {
      modalValue.value = true;
    } else {
      modalValue.value = false;
    }
  },
  { deep: true }
);
</script>
<style>
.custom-mod {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modalcnt {
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  width: 60%;
  text-align: center;
  padding: 10px;
}
.modaloverl {
  background-color: rgb(10, 10, 10);
  opacity: 0.7;
}
</style>
