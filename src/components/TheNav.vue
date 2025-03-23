<template>
  <header class="navbar">
    <h3 class="h3">OnlinkBank</h3>
    <div class="cont">
      <span class="one"><RouterLink to="/">Заявки</RouterLink></span>
      <span class="two"><RouterLink to="/help">Помощь</RouterLink></span>
      <span class="three"
        ><RouterLink to="/message">Сообщения</RouterLink></span
      >
      <span class="foo">Выход</span>
    </div>
  </header>
</template>
<script setup lang="ts"></script>
<style scoped>
.navbar {
  display: grid;
  grid-template-areas: "h3 cont";
  align-items: center;
  font-size: 18px;
  color: rgb(5, 5, 5);
  background-color: rgb(255, 255, 255);
  position: sticky;
  top: 0;
}
.cont {
  grid-area: cont;
  display: grid;
  grid-template-areas: "one two three foo";
  justify-content: space-around;
}
.one {
  grid-area: one;
}
.two {
  grid-area: two;
}
.three {
  grid-area: three;
}
.three {
  grid-area: three;
}
.foo {
  grid-area: foo;
}
.h3 {
  grid-area: h3;
  font-size: 22px;
}
a {
  text-decoration: none;
  color: rgb(5, 5, 5);
}
.active {
  border-bottom: 3px solid black;
  padding: 4px;
}
</style>
