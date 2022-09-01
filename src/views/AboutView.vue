<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const postCard = ref([]);

    onMounted(() => {
      axios
        .get('https://60bd9841ace4d50017aab3ec.mockapi.io/api/post_card')
        .then((res) => {
          postCard.value = res.data;
        });
    });

    return {
      postCard,
    };
  },
};
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div class="card" v-for="card in postCard" :key="card.id">
    <header>
      <img class="avatar" :src="card.avatar" />
      <div>
        <h1>{{ card.name }}</h1>
        <p v-timeformat="card.post_date"></p>
      </div>
    </header>
    <p class="content">{{ card.content }}</p>
    <img class="post_photo" :src="card.photo" alt="" />
  </div>
</template>

<style></style>
