import { reqUpdateCartCount, reqGetShopCartList, reqDelShopCart } from '@api/shopcart'
export default {
  state: {
    shopCartList: [],
    cartInfo: {}
  },
  getters: {
  },
  actions: {
    // 添加到购物车,修改数量
    async updateCartCount ({ commit }, { skuID, skuNum }) {
      // 修改服务器中的商品数量
      await reqUpdateCartCount(skuID, skuNum)
      // 修改vuex中的商品数量，由于是响应式会动态修改
      commit('UPDATE_CARTCOUNT', { skuID, skuNum })
    },

    //获取购物车列表
    async getShopCartList ({ commit }) {
      const shopCartList = await reqGetShopCartList()
      commit('GET_SHOPCART_LIST', shopCartList)
    },

    // 删除购物车商品
    async delShopCart ({ commit },skuID) {
      await reqDelShopCart(skuID)
      console.log(commit)
    },
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
    },

    // 添加数据到购物车成功页面
    UPDATE_CARTINFO (state, { skuName, skuImg, skuNum }) {
      const cartInfo = {
        skuName,
        skuImg,
        skuNum
      }
      state.cartInfo = cartInfo
    }
  }
}