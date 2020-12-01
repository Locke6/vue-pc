<template>
  <div class="list-container">
    <div class="list-container-center">
      <!--banner轮播-->
      <Carousel :carouselList="banners" />
    </div>
    <div class="list-container-right">
      <div class="news">
        <div class="news-top">
          <h4>尚品汇快报</h4>
          <p>更多 ></p>
        </div>
        <div class="news-bottom">
          <ul>
            <li><span>[特惠]</span><span>备战开学季 全民半价购数码</span></li>
            <li><span>[特惠]</span><span>备战开学季 全民半价购数码</span></li>
            <li><span>[特惠]</span><span>备战开学季 全民半价购数码</span></li>
            <li><span>[特惠]</span><span>备战开学季 全民半价购数码</span></li>
            <li><span>[特惠]</span><span>备战开学季 全民半价购数码</span></li>
            <li><span>[特惠]</span><span>备战开学季 全民半价购数码</span></li>
          </ul>
        </div>
      </div>
      <ul class="lifeservices">
        <li class="life-item">
          <i class="list-item"></i>
          <span class="service-intro">话费</span>
        </li>
        <li class="life-item">
          <i class="list-item"></i>
          <span class="service-intro">机票</span>
        </li>
        <li class="life-item">
          <i class="list-item"></i>
          <span class="service-intro">电影票</span>
        </li>
        <li class="life-item">
          <i class="list-item"></i>
          <span class="service-intro">游戏</span>
        </li>
        <li class="life-item">
          <i class="list-item"></i>
          <span class="service-intro">彩票</span>
        </li>
        <li class="life-item">
          <i class="list-item"></i>
          <span class="service-intro">加油站</span>
        </li>
        <li class="life-item">
          <i class="list-item"></i>
          <span class="service-intro">酒店</span>
        </li>
        <li class="life-item">
          <i class="list-item"></i>
          <span class="service-intro">火车票</span>
        </li>
        <li class="life-item">
          <i class="list-item"></i>
          <span class="service-intro">众筹</span>
        </li>
        <li class="life-item">
          <i class="list-item"></i>
          <span class="service-intro">理财</span>
        </li>
        <li class="life-item">
          <i class="list-item"></i>
          <span class="service-intro">礼品卡</span>
        </li>
        <li class="life-item">
          <i class="list-item"></i>
          <span class="service-intro">白条</span>
        </li>
      </ul>
      <div class="list-ad">
        <img src="./images/ad1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Carousel from '@comps/Carousel'

export default {
  name: 'ListContainer',
  computed: {
    ...mapState({
      banners: (state) => state.home.banners,
    }),
  },
  components: {
    Carousel,
  },
  methods: {
    ...mapActions(['getBanners']),
  },
  async mounted() {
    await this.getBanners()
  },
}
</script>

<style lang="less" scoped>
.list-container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
}
.list-container-center {
  width: 730px;
  height: 500px;
  padding: 5px;
}
.list-container-right {
  margin-top: 5px;
}
.news {
  width: 250px;
  box-sizing: border-box;
  border: 1px solid #e4e4e4;
}
.news-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 5px 0;
  border-bottom: 1px solid #e4e4e4;
  height: 32px;
}

.news-top h4 {
  font-size: 14px;
  font-weight: bold;
  padding: 0 10px;
}
.news-top p {
  padding: 0 10px;
}
.news-bottom {
  padding: 5px 15px;
  height: 166px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.news-bottom li {
  height: 27px;
  line-height: 27px;
}
.news-bottom li span:first-child {
  font-weight: bold;
}
.lifeservices {
  border-right: 1px solid #e4e4e4;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  box-sizing: border-box;

  .life-item {
    border-left: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    margin-right: -1px;
    height: 64px;
    text-align: center;
    position: relative;
    cursor: pointer;
    width: 25%;

    .list-item {
      background-image: url(../../../assets/images/icons.png);
      width: 61px;
      height: 40px;
      display: block;
    }

    .service-intro {
      line-height: 22px;
      width: 60px;
      display: block;
    }

    &:nth-child(1) {
      .list-item {
        background-position: 0px -5px;
      }
    }

    &:nth-child(2) {
      .list-item {
        background-position: -62px -5px;
      }
    }

    &:nth-child(3) {
      .list-item {
        background-position: -126px -5px;
      }
    }

    &:nth-child(4) {
      .list-item {
        background-position: -190px -5px;
      }
    }

    &:nth-child(5) {
      .list-item {
        background-position: 0px -76px;
      }
    }

    &:nth-child(6) {
      .list-item {
        background-position: -62px -76px;
      }
    }

    &:nth-child(7) {
      .list-item {
        background-position: -126px -76px;
      }
    }

    &:nth-child(8) {
      .list-item {
        background-position: -190px -76px;
      }
    }

    &:nth-child(9) {
      .list-item {
        background-position: 0px -146px;
      }
    }

    &:nth-child(10) {
      .list-item {
        background-position: -62px -146px;
      }
    }

    &:nth-child(11) {
      .list-item {
        background-position: -126px -146px;
      }
    }

    &:nth-child(12) {
      .list-item {
        background-position: -190px -146px;
      }
    }
  }
}
.list-ad {
  margin-top: 5px;
}
.list-ad img {
  width: 250px;
}
</style>
