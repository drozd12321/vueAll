<template>
  <form class="glavn" @submit.prevent="emit('submit')">
    <div class="inf">
      <h2>Войти в систему</h2>
      <div class="inpdiv">
        <label class="label" for="email">Email:</label>

        <input
          :class="['input', { invalid: eError }]"
          type="email"
          id="email"
          :value="emailVal"
          @input="emit('update:emailVal', $event.target.value)"
          @blur="emit('eblur', $event)"
        />
      </div>
      <div class="inpdiv">
        <label class="label" for="email">Password:</label>
        <input
          :class="['input', { invalid: pError }]"
          type="password"
          id="password"
          :value="passwordVal"
          @input="emit('update:passwordVal', $event.target.value)"
          @blur="emit('pblur', $event)"
        />
      </div>
      <button type="submit" :disabled="isSubmitting || istomanyAttemots">
        Войти
      </button>
      <div class="span" v-if="istomanyAttemots && isSubmitting">
        Слишком часто пытаетесь войти
      </div>
    </div>
  </form>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
const emit = defineEmits([
  "update:emailVal",
  "update:passwordVal",
  "submit",
  "eblur",
  "pblur",
]);
const props = defineProps({
  emailVal: String,
  passwordVal: String,
  eError: String,
  pError: String,
  isSubmitting: Boolean,
  istomanyAttemots: Boolean,
});
</script>
<style scoped>
.span {
  color: red;
}
button {
  padding: 7px;
  font-size: 15px;
  width: 100px;
  border: 3px solid rgba(255, 255, 255, 0.911);
  background-color: transparent;
  color: white;
  border-radius: 4px;
  transition: all 0.4s ease;
}
button:hover {
  background-color: rgba(85, 83, 83, 0.61);
}
button:disabled {
  cursor: not-allowed;
  color: red;
  border: 3px solid rgba(252, 2, 2, 0.911);
}
.inpdiv {
  display: grid;
  grid-template-areas: "label input";
  width: 400px;
  font-size: 18px;
  align-items: center;
  margin-bottom: 2rem;
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
  background-color: transparent;
  color: white;
  border: 2px solid white;
  font-size: 14px;
}
.glavn {
  border: 3px solid rgb(247, 247, 247);
  background-color: rgba(0, 0, 0, 0.445);
  margin: 1rem auto;
  width: 80%;
  padding: 10px;
  border-radius: 6px;
  color: rgb(255, 252, 252);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.inf {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  box-shadow: 0 5px 10px rgba(247, 245, 245, 0.2);
  width: 600px;
  height: 300px;
  border-radius: 3px;
  border: 3px solid rgb(255, 255, 255);
}
h2 {
  background-color: transparent;
  padding: 7px;
  border-radius: 7px;
  margin-bottom: 3rem;
  box-shadow: 0 10px 8px rgba(0, 0, 0, 0.5);
}
</style>
