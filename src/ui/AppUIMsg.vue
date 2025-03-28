<template>
  <VueFinalModal
    v-model="ismessage"
    :class="{ 'custom-modal': true }"
    content-class="modal-content"
    overlay-class="modal-overlay"
    @closed="clearMsg"
  >
    <div class="alert">
      <h2 class="h2" v-if="message.type === Title_Map.danger">Ошибка</h2>
      <h2 class="h2" v-else-if="message.type === Title_Map.primary">
        Сообщение
      </h2>
      <h2 class="h2" v-else-if="message.type === Title_Map.warning">
        Предупреждение
      </h2>
      <p class="p">
        {{ message.value }}
      </p>
      <div
        :class="{
          danger: message.type === 'danger',
          primary: message.type === 'primary',
          warning: message.type === 'warning',
        }"
      ></div>
    </div>
  </VueFinalModal>
</template>
<script setup>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { VueFinalModal } from "vue-final-modal";
const store = useStore();
const Title_Map = {
  danger: "danger",
  primary: "primary",
  warning: "warning",
};
const ismessage = ref(false);
const message = computed(() => store.getters.getMsg);
const clearMsg = () => {
  store.commit("deleteMessage");
};
watch(
  () => message.value,
  (newMsg) => {
    if (newMsg && newMsg.value) {
      ismessage.value = true;
    }
  },
  { deep: true }
);
</script>
<style>
.p {
  text-align: center;
}
.h2 {
  text-align: center;
}
.primary {
  width: 100%;
  height: 10px;
  background-color: rgb(21, 255, 0);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
.warning {
  width: 100%;
  height: 10px;
  background-color: rgb(195, 216, 7);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
.danger {
  width: 100%;
  height: 10px;
  background-color: red;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
.custom-modal {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background-color: rgb(255, 255, 255);

  border-radius: 10px;
  width: 60%;
}

.modal-overlay {
  background-color: rgb(10, 10, 10);
  opacity: 0.7;
}
</style>
