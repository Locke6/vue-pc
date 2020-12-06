<template>
  <div class="spec-preview" @mousemove="maskMove" ref="preview">
    <img :src="skuImage" />
    <div class="event"></div>
    <div class="big">
      <img
        :src="skuImage"
        :style="{ left: imgLeft + 'px', top: imgTop + 'px' }"
      />
    </div>
    <div
      class="mask"
      :style="{ left: left + 'px', top: top + 'px' }"
      ref="mask"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'Zoom',
  data() {
    return {
      left: 0,
      top: 0,
      imgLeft: 0,
      imgTop: 0,
    }
  },
  props: {
    skuImage: String,
  },
  methods: {
    // 移动蒙版
    maskMove(e) {
      let maskLeft = e.offsetX - this.$refs.mask.offsetWidth / 2
      let maskTop = e.offsetY - this.$refs.mask.offsetHeight / 2
      const maxLeft =
        this.$refs.preview.clientWidth - this.$refs.mask.offsetWidth
      const maxTop =
        this.$refs.preview.clientHeight - this.$refs.mask.offsetHeight
      if (maskLeft <= 0) {
        maskLeft = 0
      }
      if (maskLeft > maxLeft) {
        maskLeft = maxLeft
      }
      if (maskTop <= 0) {
        maskTop = 0
      }
      if (maskTop > maxTop) {
        maskTop = maxTop
      }
      this.left = maskLeft
      this.top = maskTop
      this.imgLeft = -2 * maskLeft
      this.imgTop = -2 * maskTop
    },
  },
}
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }
  // 处理闪现，定义一个兄弟元素，将其层级设置为最高，宽度和高度与父级相等，鼠标移入时最近定位元素就是此元素
  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>