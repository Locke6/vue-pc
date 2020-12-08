import { reqLogin, reqRegister } from '@api/user'

export default {
  state: {
    token: localStorage.getItem('token') || '',
    name: localStorage.getItem('name') || ''
  },
  getter: {},
  actions: {
    // 注册函数
    async register ({ commit }, { phone, password, code }) {
      await reqRegister({ phone, password, code })
      console.log(commit)
    },

    //  登录函数
    async login ({ commit }, { phone, password }) {
      const user = await reqLogin(phone, password)
      commit('ADD_LOGIN_INFO', user)
    }



  },
  mutations: {
    ADD_LOGIN_INFO (state, user) {
      state.token = user.token
      state.name = user.name
    },

    // 退出登录
    LOGIN_OUT (state) {
      state.token = ''
      state.name = ''
    }
  }
}