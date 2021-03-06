import Vue from 'vue';
import store from './store';
import vuetify from '@/plugins/vuetify'
import router from './router';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


