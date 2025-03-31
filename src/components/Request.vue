<template>
  <div class="table">
    <div class="head">
      <h4>1</h4>
      <h4>2</h4>
      <h4>3</h4>
      <h4>4</h4>
      <h4>5</h4>
      <h4>6</h4>
    </div>
    <div class="one">1</div>
    <div class="two">2</div>
    <div class="three">3</div>
    <div class="foo">4</div>
    <div class="five">5</div>
    <div class="six">6</div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.table {
  display: grid;
  grid-template-areas:
    "head head head head head head"
    "one two three foo five six";
}
.table > div {
  text-align: center;
}
.head {
  grid-area: head;
}
.head {
  grid-area: head;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
.two {
  grid-area: two;
}
.three {
  grid-area: three;
}
.foo {
  grid-area: foo;
}
.five {
  grid-area: five;
}
.six {
  grid-area: six;
}
</style>
