// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-resource'
Vue.use(VueRouter);
Vue.http.options.root = 'http://www.kusaki.xyz:8081';
Vue.http.options.emulateJSON = true;

Vue.config.productionTip = false;

import moment from 'moment'
Vue.filter('dateFormat', function (dateStr,pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dateStr).format(pattern);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>'
})
