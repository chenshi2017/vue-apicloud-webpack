// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import '../../lib/common.js';
import {
  Toast
} from 'vant';
Vue.use(Toast);
import  vfooter  from "../components/Footer";
Vue.component('v-footer', vfooter);
import home from './Index.vue';
new Vue({
  el: '#root',
  components: {
    home,
    // vfooter
  },
  template: '<home/>'
})
