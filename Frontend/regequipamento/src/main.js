import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

const baseURL = "https://serene-journey-00109.herokuapp.com";
//const baseURL = "http://localhost:4000";

const base = axios.create({
  baseURL: baseURL
});

Vue.prototype.$http = base;

Vue.config.productionTip = false;
Vue.use( BootstrapVue );
Vue.use( IconsPlugin);
//Vue.use( BootstrapVueIcons );
//Vue.use( bootstrap );

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
