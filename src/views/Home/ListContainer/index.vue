<template>
  <div class="list-container">
    <div class="block">
      <!-- <span class="demonstration">Click 指示器触发</span> -->
      <el-carousel trigger="click" height="500px">
        <el-carousel-item v-for="item in path" :key="item">
          <!-- <h3 class="small">{{ item }}</h3> -->
          <img :src="item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListContainer',
  data() {
    return {
      path: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606720985117&di=a5cc66e5f891f5eecf78a28f7c04618a&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F27%2F67%2F01300000921826141299672233506.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606720985116&di=b4d2bb9bb62f09df2ad6e39e8d26f851&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F86%2F10%2F01300000184180121920108394217.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606720985116&di=c966f89d66c735fef3705f9668997125&imgtype=0&src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0829%2F372edfeb74c3119b666237bd4af92be5.jpg',
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.list-container {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
.block {
  width: 740px;
  padding: 5px;
  position: absolute;
  top: 0;
  left: 210px;
}
.block img {
  width: 730px;
  height: 490px;
}
</style>
