import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import Search from "../views/Search";
import Login from "../views/Login";
import Register from "../views/Register";
Vue.use(VueRouter);
// console.log(new VueRouter)
//重写$router的push方法,因为原生push会返回promise，如果重复调用push会报错
const push = VueRouter.prototype.push
VueRouter.prototype.push = function (location, onComplete, onAbort) {
  if (onComplete || onAbort) {
    return push.call(this, location, onComplete, onAbort)
  }

  return push.call(this, location, onComplete, () => { })
}

//重写$router的replace方法
const replace = VueRouter.prototype.replace
VueRouter.prototype.replace = function (location, onComplete, onAbort) {
  if (onComplete || onAbort) {
    return replace.call(this, location, onComplete, onAbort)
  }
  return replace.call(this, location, onComplete, () => { })
}

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      name: 'search',
      path: "/search/:searchText?",
      component: Search,

    },
    {
      path: "/login",
      component: Login,
      meta: {
        isFooterShow: true
      }
    },
    {
      path: "/register",
      component: Register,
      meta: {
        isFooterShow: true
      }
    },
  ],
});
