import Vue from 'vue'
import '../../lib/common.js';
import { Toast } from 'vant';
Vue.use(Toast);

import register from './Register.vue';
/* eslint-disable no-new */
new Vue({
  el: '#root',
  components: {
    register
  },
  template: '<register/>'
})
