import _ from 'lodash';
import Vue from 'vue';
import App from './App.vue';
import i18n from './plugins/translation';
import './Assets/global.css';
import '@fortawesome/fontawesome-free/js/all.js';

Vue.config.productionTip = false;

new Vue({
  i18n,
  el: '#app',
  render: h => h(App),
});