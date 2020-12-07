import { reqLogin, reqRegister } from '@api/user'

export default {
  state: {},
  getter: {},
  actions: {
    // 注册函数
    async register ({ commit }, { phone, password, code }) {
      await reqRegister({ phone, password, code })
      console.log(commit)
    },

    //  登录函数
    async login ({ commit }, { phone, password}) {
      await reqLogin({ phone, password})
      console.log(commit)
    }
  },
  mutations: {}
}