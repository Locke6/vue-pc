import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store'

import Home from "../views/Home";
import Search from "../views/Search";
import Login from "../views/Login";
import Register from "../views/Register";
import Detail from "@views/Detail"
import AddCartSuccess from "@views/AddCartSuccess"
import ShopCart from "@views/ShopCart"
import Trade from '@views/Trade'
import Pay from '@views/Pay'
import PaySuccess from '@views/PaySuccess'
import Center from '@views/Center'


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

const router = new VueRouter({
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
    {
      name: 'detail',
      path: "/detail/:id",
      component: Detail
    },
    {
      name: 'shopcart',
      path: "/shopcart",
      component: ShopCart
    },
    {
      name: 'addcartsuccess',
      path: "/addcartsuccess",
      component: AddCartSuccess
    },
    {
      name: 'trade',
      path: "/trade",
      component: Trade
    },
    {
      name: 'pay',
      path: "/pay",
      component: Pay
    },
    {
      name: 'paysuccess',
      path: "/paysuccess",
      component: PaySuccess
    },
    {
      name: 'center',
      path: "/center",
      component: Center
    },

  ],
  // 每次切换路由页面滚动条位置
  scrollBehavior () {
    return { x: 0, y: 0 }
  }

});

// 全局前置守卫
// 设置需要进行权限认证的地址
const permissionUrl = ['/trade', '/pay', '/center']
router.beforeEach((to, from, next) => {
  if (permissionUrl.indexOf(to.path) > -1 && !store.state.user.token) {
    return next('/login')
  }
  next()
})
export default router
