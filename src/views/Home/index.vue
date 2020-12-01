<template>
  <div>
    <!-- 商品导航 -->
    <Category />
    <!-- 幻灯片及精灵图 -->
    <ListContainer />
    <!-- 今日推荐 -->
    <TodayRecommend />
    <!-- 排行 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!-- 楼一 -->
    <Floor v-for="floor in floors" :key="floor.id" :floor="floor" />
    <!-- 品牌推荐 -->
    <Brand />
  </div>
</template>

<script>
import Category from '@comps/Category'
import ListContainer from '@views/Home/ListContainer/ListContainer'
import TodayRecommend from '@views/Home/TodayRecommend/TodayRecommend'
import Rank from '@views/Home/Rank/Rank'
import Like from '@views/Home/Like/Like'
import Floor from '@views/Home/Floor/Floor'
import Brand from '@views/Home/Brand/Brand'

import { mapState, mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {
    Category,
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  computed: {
    ...mapState({
      floors: (state) => state.home.floors,
    }),
  },
  methods: {
    ...mapActions(['GetFloors']),
  },
  mounted() {
    this.GetFloors()
  },
}
</script>

<style lang="less" scoped>
</style>
