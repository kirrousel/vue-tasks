import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/sprite/index';

// Importing the global css styles
import "@/assets/css/_import.css"

Vue.config.productionTip = false;

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app');
