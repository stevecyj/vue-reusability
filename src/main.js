import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// import './assets/main.css';
import dayjs from 'dayjs';

const app = createApp(App);

app.directive('timeformat', {
  mounted(el, binding) {
    const time = dayjs(binding.value).format('YYYY年MM月DD日');
    el.innerText = time;
  },
});

app.use(router);

app.mount('#app');
