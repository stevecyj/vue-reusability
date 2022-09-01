<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const imgArr = ref([]);

    onMounted(() => {
      axios
        .get('https://610cd85966dd8f0017b76eb5.mockapi.io/api/employee_list')
        .then((res) => {
          imgArr.value = res.data;
        });
    });

    return {
      imgArr,
    };
  },
};
</script>
<template>
  <div>
    this is avatar page
    <img v-for="item in imgArr" :key="item.id" v-src="item.avatar" />
    <img
      v-src="'https://media2.giphy.com/media/dqCzXP6iGRc5bgmDDb/giphy123.gif'"
    />
    <img
      v-src="'https://media2.giphy.com/media/cIjoabyYG4khdfK7sR/giphy.gif'"
    />
  </div>
</template>

<style>
img {
  transition: opacity 0.3s;
}
</style>
