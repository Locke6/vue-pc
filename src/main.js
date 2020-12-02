import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from '@store/'

import './styles/reset.css'
import './styles/index.css'
import './plugins/element.js'
// 引入mock
import './mock/mockServer'
Vue.config.productionTip = false;

//引入字体图标
import './styles/iconfont.css'
new Vue({
  beforeCreate () {
    Vue.prototype.$bus = this
  },
  render: (h) => h(App),
  router,
  store
}).$mount("#app");
