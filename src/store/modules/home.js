import { reqGetCategories, reqGetBanners, reqGetFloors, reqGetRecommends } from '@api/home'
export default {
  state: {
    categories: [],
    banners: [],
    floors: [],
    recommends: []
  },
  getters: {},
  actions: {
    // 请求分类列表
    async getCategories ({ commit }) {
      const categories = await reqGetCategories()
      commit("GET_CATEGORIES", categories)
    },

    // 请求轮播图
    async getBanners ({ commit }) {
      const banners = await reqGetBanners()
      commit("GET_BANNERS", banners)
    },

    // 请求展示列表数据
    async getFloors ({ commit }) {
      const floors = await reqGetFloors()
      commit("GET_FLOORS", floors)
    },

    //请求每日推荐图片
    async getRecommends ({ commit }) {
      const recommends = await reqGetRecommends()
      commit("GET_RECOMMENDS", recommends)
    }
  },
  mutations: {
    GET_CATEGORIES (state, categories) {
      state.categories = categories
    },

    GET_BANNERS (state, banners) {
      state.banners = banners
    },

    GET_FLOORS (state, floors) {
      state.floors = floors
    },

    GET_RECOMMENDS (state, recommends) {
      state.recommends = recommends
    },
  }
}