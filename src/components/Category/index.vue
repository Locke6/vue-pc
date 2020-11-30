<template>
  <div class="category">
    <div class="category-container">
      <div
        class="category-whole"
        @mouseenter="isSearchShow = true"
        @mouseleave="isSearchShow = false"
      >
        <!-- 列表大标题 -->
        <h2 class="category-all">全部商品分类</h2>
        <!-- 分类列表 -->
        <transition name="categoryShow">
          <div
            class="category-sort"
            @click="goSearch"
            v-show="isShow || isSearchShow"
          >
            <div
              class="category-items"
              v-for="category in categories"
              :key="category.categoryId"
            >
              <h3>
                <!-- 一级分类 -->
                <a
                  :data-categoryName="category.categoryName"
                  :data-categoryId="category.categoryId"
                  :data-categoryType="1"
                  >{{ category.categoryName }}</a
                >
              </h3>
              <div class="category-itemlist">
                <div class="category-item">
                  <dl
                    v-for="child in category.categoryChild"
                    :key="child.categoryId"
                  >
                    <dt>
                      <!-- 二级分类 -->
                      <a
                        :data-categoryName="child.categoryName"
                        :data-categoryId="child.categoryId"
                        :data-categoryType="2"
                        >{{ child.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <em
                        v-for="grandChild in child.categoryChild"
                        :key="grandChild.categoryId"
                      >
                        <!-- 三级分类 -->
                        <a
                          :data-categoryName="grandChild.categoryName"
                          :data-categoryId="grandChild.categoryId"
                          :data-categoryType="3"
                          >{{ grandChild.categoryName }}</a
                        >
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="category-nav">
        <a href="#">服装城</a>
        <a href="#">美妆馆</a>
        <a href="#">尚品汇超市</a>
        <a href="#">全球购</a>
        <a href="#">闪购</a>
        <a href="#">团购</a>
        <a href="#">有趣</a>
        <a href="#">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Category',
  data() {
    return {
      isSearchShow: false,
      isShow: this.$route.path === '/',
    }
  },
  computed: {
    ...mapState({
      categories: (state) => state.home.categories,
    }),
  },
  methods: {
    ...mapActions(['getCategories']),
    //委托跳转
    goSearch(e) {
      const { categoryname, categoryid, categorytype } = e.target.dataset
      //如果点击不是a标签，没有跳转
      if (!categoryname) return
      // 隐藏列表
      this.isSearchShow = false
      const location = {
        name: 'search',
        query: {
          categoryName: categoryname,
          [`category${categorytype}Id`]: categoryid,
        },
      }
      const { searchText } = this.$route.params
      if (searchText) {
        location.params = { searchText }
      }
      this.$router.push(location)
    },
  },
  mounted() {
    this.getCategories()
  },
}
</script>

<style lang="less" scoped>
.category {
  border-bottom: 2px solid #e1251b;
  min-width: 1200px;
}

.category-container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  position: relative;
  z-index: 9999;
}
.category-all {
  width: 210px;
  height: 45px;
  line-height: 45px;
  background-color: #e1251b;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
}
.category-nav {
  height: 45px;
  line-height: 45px;
}
.category-nav a {
  color: #333;
  font-size: 16px;
  margin: 0 22px;
}
.category-sort {
  position: absolute;
  width: 210px;
  background: #fafafa;
  top: 47px;
  // 隐藏到显示过程
  &.categoryShow-enter-active {
    transition: height 3s;
  }
  &.categoryShow-enter {
    height: 0px;
  }
}

.category-itemlist {
  position: absolute;
  left: 210px;
  width: 734px;
  height: 500px;
  top: 0;
  background: #f7f7f7;
  border: 1px solid #ddd;
  display: none;
}
.category-item {
  width: 650px;
  padding: 0 4px 0 8px;
}
.category-items:hover {
  background-color: #ccc;
}
.category-items:hover .category-itemlist {
  display: block;
}
.category-items h3 {
  text-align: left;
  padding: 0 20px;
}
.category-items h3 a {
  font-size: 14px;

  font-weight: 400;
  color: #333;
  line-height: 30px;
}
.category-item dl {
  display: flex;
  font-size: 12px;
  align-items: flex-start;
  padding: 6px 0;
}
.category-item dt {
  text-align: right;
  padding: 0 6px;
  width: 70px;
  height: 14px;
  margin: 5px;
  font-weight: 700;
}
.category-item dd {
  width: 415px;
  float: left;
  overflow: hidden;
}
.category-item em {
  display: inline-block;
  height: 14px;
  line-height: 14px;
  padding: 0 6px;
  margin-top: 5px;
  border-left: 1px solid #ccc;
}
.category-item em:last-child {
  border-right: 1px solid #ccc;
}
</style>
