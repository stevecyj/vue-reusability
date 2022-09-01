import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/main.css';
import dayjs from 'dayjs';
import errorImg from './assets/error.png';

const app = createApp(App);

app.directive('timeformat', {
  mounted(el, binding) {
    const time = dayjs(binding.value).format('YYYY年MM月DD日');
    el.innerText = time;
  },
});

app.directive('src', (el, binding) => {
  el.style.opacity = 0;
  if (binding.value) {
    const img = new Image();
    img.src = binding.value;
    img.onload = () => {
      el.src = binding.value;
      el.style.opacity = 1;
      el.style.width = '128px';
      el.style.height = '128px';
    };
    img.onerror = () => {
      el.src = errorImg;
      el.style.opacity = 1;
      el.style.width = '128px';
      el.style.height = '128px';
    };
  }
});

app.use(router);

app.mount('#app');
