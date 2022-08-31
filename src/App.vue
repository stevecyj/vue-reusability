<script setup>
import { reactive, ref, watch } from 'vue';
import { RouterView } from 'vue-router';
import { useMouse } from './composables/mouse';
import { useFetch } from './composables/fetch.js';

const age = ref(12);

const people1 = ref({
  num: 0,
});

const people2 = reactive({
  num: 0,
});

setTimeout(() => {
  age.value = 18;
  people1.value.num = 100;
  people2.num = 100;
}, 2000);

watch(age, () => {
  console.log('age changed!');
});
watch(
  people1,
  () => {
    console.log('people1 changed!');
  },
  { deep: true }
);
watch(people2, () => {
  console.log('people2 changed!');
});

const { x, y } = useMouse();
const { data, error } = useFetch('https://randomuser.me/api/');
</script>

<template>
  <div>
    <h1>{{ age }}</h1>
    <h1>{{ people1.num }}</h1>
    <h1>{{ people2.num }}</h1>
    Mouse position is at: {{ x }}, {{ y }}
    <h6>{{ data }}</h6>
    <h1>{{ error }}</h1>
  </div>
  <RouterView />
</template>

<style scoped></style>
