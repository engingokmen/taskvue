import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from '../translations/en.json';
import tr from '../translations/tr.json';

Vue.use(VueI18n);

const messages = {
  en,
  tr,
};

const i18n = new VueI18n({
  locale: 'tr', // set locale
  messages, // set locale messages
  silentTranslationWarn: true,
});

export default i18n;