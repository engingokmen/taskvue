import _ from 'lodash';
import Vue from 'vue';
import App from './App.vue';
import i18n from './plugins/translation';
import router from './plugins/router';
import './Assets/global.css';
import '@fortawesome/fontawesome-free/js/all.js';

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  el: '#app',
  render: h => h(App),
});