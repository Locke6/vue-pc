import { reqUpdateCartCount, reqGetShopCartList, reqDelShopCart, reqSwitchIsChecked } from '@api/shopcart'
export default {
  state: {
    shopCartList: [],
    cartInfo: {}
  },
  getters: {
  },
  actions: {
    // 添加到购物车,修改数量
    async updateCartCount ({ commit }, { skuId, skuNum }) {
      // 修改服务器中的商品数量
      await reqUpdateCartCount(skuId, skuNum)
      // 修改vuex中的商品数量，由于是响应式会动态修改
      commit('UPDATE_CARTCOUNT', { skuId, skuNum })
    },

    //获取购物车列表
    async getShopCartList ({ commit }) {
      const shopCartList = await reqGetShopCartList()
      commit('GET_SHOPCART_LIST', shopCartList)
    },

    // 删除购物车商品
    async delShopCart ({ commit }, skuId) {
      await reqDelShopCart(skuId)
      console.log(commit)
    },

    // 切换商品选中状态
    async switchIsChecked ({ commit }, { skuId, isChecked }) {
      await reqSwitchIsChecked(skuId, isChecked)
      commit('SWITCH_ISCHECKED', { skuId, isChecked })
    },

  },
  mutations: {
    UPDATE_CARTCOUNT (state, { skuId, skuNum }) {
      state.shopCartList.forEach(shopCart => {
        if (shopCart.skuId === skuId) {
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
    },

    SWITCH_ISCHECKED (state, { skuId, isChecked }) {
      state.shopCartList.forEach(shopCart => {
        if (shopCart.skuId === skuId) {
          shopCart.isChecked = isChecked
        }
      })
    }
  }
}