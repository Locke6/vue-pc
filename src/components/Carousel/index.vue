<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="carousel in carouselList"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
//swiper轮播插件
import Swiper, { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
Swiper.use([Pagination, Navigation, Autoplay])

export default {
  name: 'Carousel',
  props: {
    carouselList: {
      type: Array,
      required: true,
    },
  },
  watch: {
    carouselList() {
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          loop: true, // 循环模式选项
          // 自动播放
          autoplay: {
            delay: 2000,
            disableOnInteraction: false, // 当用户点击下一页时，仍会开启自动轮播
          },
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },

          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        })
      })
    },
  },
}
</script>

<style lang="less" scoped>
</style>
