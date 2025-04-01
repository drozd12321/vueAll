<template>
  <div class="one">{{ one }}</div>
  <div class="two">2</div>
  <div class="three">3</div>
  <div class="foo">4</div>
  <div class="five">5</div>
  <div class="six">6</div>
</template>
<script setup lang="ts">
const props = defineProps({
  one: {
    type: String,
  },
});
</script>
<style scoped>
.table > div {
  text-align: center;
}
/* .one {
  grid-area: one;
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
} */
</style>
