<template>
  <form class="glavn" @submit.prevent="emit('submit')">
    <div class="divinp">
      <label for="fio">ФИО</label>
      <input
        type="text"
        id="fio"
        :value="fioval"
        @input="emit('update:fioval', $event.target.value)"
        @blur="emit('fBlur', $event)"
      />
    </div>
    <div class="divinp">
      <label for="tlf">Телефон</label>
      <input
        type="text"
        id="tlf"
        :value="tlfval"
        @input="emit('update:tlfval', $event.target.value)"
        @blur="emit('tBlur', $event)"
      />
    </div>
    <div class="divinp">
      <label for="sum">Сумма</label>
      <input
        type="number"
        id="sum"
        :value="sumval"
        @input="emit('update:sumval', $event.target.value)"
        @blur="emit('sBlur', $event)"
      />
    </div>
    <div class="divinp">
      <label>Статус</label>
      <div class="radio">
        <div class="check">
          <input
            type="radio"
            name="status"
            id="status1"
            value="Оплачено"
            @change="handleradio1('Оплачено')"
          />
          <label for="status1">Оплачено</label>
        </div>
        <div class="check">
          <input
            type="radio"
            name="status"
            id="status2"
            value="Ожидание"
            @change="handleradio1('Ожидание')"
          />
          <label for="status2">Ожидание</label>
        </div>
        <div class="check">
          <input
            type="radio"
            name="status"
            id="status3"
            value="Неизвестно"
            @change="handleradio1('Неизвестно')"
          />
          <label for="status3">Неизвестно</label>
        </div>
      </div>
    </div>
    <button type="submit">Создать</button>
  </form>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
const handleradio1 = (newValue: string) => {
  emit("update:statusval", newValue);
};
const props = defineProps({
  fioval: String,
  statusval: String,
  tlfval: String,
  sumval: String,
  isSubmitting: Boolean,
  fError: String,
  sError: String,
  stError: String,
  tError: String,
});

const emit = defineEmits([
  "update:fioval",
  "update:statusval",
  "update:tlfval",
  "update:sumval",
  "submit",
  "fBlur",
  "sBlur",
  "stBlur",
  "tBlur",
]);
</script>
<style scoped>
.check {
  display: grid;
  grid-template-columns: 0.7fr 1.6fr;
}
.check label {
  text-align: left;
}
.radio {
  display: flex;
  flex-direction: column;
}
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 90%;
}
.divinp {
  display: grid;
  grid-template-columns: 0.8fr 2fr;
}
button {
  padding: 7px;
  font-size: 15px;
  width: 100px;
  outline: none;
  align-self: center;
  background-color: rgba(12, 113, 228, 0.795);
  transition: all 0.4s ease;
  border-radius: 7px;
  border: 1px solid rgba(12, 113, 228, 0.795);
}
button:hover {
  background-color: rgba(6, 44, 124, 0.61);
}
button:disabled {
  cursor: not-allowed;
  color: red;
  border: 3px solid rgba(252, 2, 2, 0.911);
}
.label {
  grid-area: label;
  width: 20px;
}
.input {
  grid-area: input;
  width: 100%;
}
.input.invalid {
  border: 3px solid red;
}
input {
  padding: 6px;
  border-radius: 6px;
  outline: none;
  border: 2px solid rgb(122, 122, 122);
  font-size: 14px;
}
</style>
