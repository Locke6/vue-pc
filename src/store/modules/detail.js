import { reqGetProductInfos } from '@api/detail'
export default {
  state: {
    productInfos: {}
  },
  getters: {
    categoryView (state) {
      return state.productInfos.categoryView
    },
    spuSaleAttrList (state) { 
      return state.productInfos.spuSaleAttrList
    },
    skuInfo (state) { 
      return state.productInfos.skuInfo
    }
  },
  actions: {
    // 获取商品详情信息
    async getProductInfos ({ commit }, id) {
      const productInfos = await reqGetProductInfos(id)
      commit("GET_PRODUCTINFOS", productInfos)
    }
  },
  mutations: {
    GET_PRODUCTINFOS (state, productInfos) {
      state.productInfos = productInfos
    }
  }
}