import Vue from 'vue'
import '../../lib/common.js';
import { Toast } from 'vant';
Vue.use(Toast);

import login from './Login.vue';
/* eslint-disable no-new */
new Vue({
  el: '#root',
  components: {
    login
  },
  template: '<login/>'
})
