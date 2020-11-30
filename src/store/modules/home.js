import { category } from '@api/category'
export default {
  state: {
    categories: []
  },
  getters: {},
  actions: {
    async getCategories ({ commit }) {
      const categories = await category()
      commit("GET_CATEGORIES", categories)
    }
  },
  mutations: {
    GET_CATEGORIES (state, categories) {
      state.categories = categories
    }
  }
}