/**
 * Created by minyi on 2017/10/12.
 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'
import './assets/css/css.css';
import App from './App.vue';
import router from './router/index';

// Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});