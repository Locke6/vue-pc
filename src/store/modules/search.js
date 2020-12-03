import { reqGetProductList } from '@api/search'
export default {
  state: {
    productList: {}
  },
  getters: {
    trademarkList (state) {
      return state.productList.trademarkList
    },
    attrsList (state) {
      return state.productList.attrsList
    },
    goodsList (state) {
      return state.productList.goodsList
    },
    total (state) {
      return state.productList.total
    },
    pageSize (state) {
      return state.productList.pageSize
    },
    pageNo (state) {
      return state.productList.pageNo
    }
  },
  actions: {
    // 获取搜索页面商品列表
    async getProductList ({ commit }, data = {}) {
      const productList = await reqGetProductList(data)
      commit("GET_PRODUCTLIST", productList)
    }
  },
  mutations: {
    GET_PRODUCTLIST (state, productList) {
      state.productList = productList
    }
  }
}