import { reqAddCartSuccess, reqShopCartList } from '@api/shopcart'
export default {
  state: {
    shopCartList: []
  },
  getters: {
  },
  actions: {
    // 添加到购物车,修改数量
    async updateCartCount ({ commit }, { skuID, skuNum }) {
      // 修改服务器中的商品数量
      await reqAddCartSuccess(skuID, skuNum)
      // 修改vuex中的商品数量，由于是响应式会动态修改
      commit('UPDATE_CARTCOUNT', { skuID, skuNum })
    },

    //获取购物车列表
    async getShopCartList ({ commit }) {
      const shopCartList = await reqShopCartList()
      commit('GET_SHOPCART_LIST', shopCartList)
    }
  },
  mutations: {
    UPDATE_CARTCOUNT (state, { skuID, skuNum }) {
      state.shopCartList = state.shopCartList.forEach(shopCart => {
        if (shopCart.skuID === skuID) {
          shopCart.skuNum += skuNum
        }
      })
    },
    GET_SHOPCART_LIST (state, shopCartList) {
      state.shopCartList = shopCartList
    }
  }
}