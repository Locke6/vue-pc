<template>
  <div>
    <!-- 商品导航 -->
    <Category/>
    <!-- 幻灯片及精灵图 -->
    <ListContainer/>
    <!-- 今日推荐 -->
    <TodayRecommend/>
    <!-- 排行 -->
    <Rank/>
    <!-- 猜你喜欢 -->
    <Like/>
    <!-- 楼一 -->
    <Floor/>
    <!-- 楼二 -->
    <Floor/>
    <!-- 品牌推荐 -->
    <Brand/>

  </div>
</template>

<script>
import Category from '@comps/Category'
import ListContainer from '@views/Home/ListContainer'
import TodayRecommend from '@views/Home/TodayRecommend'
import Rank from '@views/Home/Rank'
import Like from '@views/Home/Like'
import Floor from '@views/Home/Floor'
import Brand from '@views/Home/Brand'

export default {
  name: 'Home',
  components:{
    Category,
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand
  }
}
</script>

<style lang="less" scoped>
</style>
