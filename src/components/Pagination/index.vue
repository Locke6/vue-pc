<template>
  <div class="pagination">
    <div class="pagination-container">
      <span>共 {{ total }} 条</span>
      <select @change="setPageSize(myPageSize)" v-model="myPageSize">
        <option :value="5">5页/条</option>
        <option :value="10">10页/条</option>
        <option :value="15">15页/条</option>
        <option :value="20">20页/条</option>
      </select>
      <div class="page">
        <button
          @click="setCurrentPage(myCurrentPage - 1)"
          :disabled="myCurrentPage === 1"
        >
          上一页
        </button>
        <button
          @click="setCurrentPage(1)"
          :class="{ active: myCurrentPage === 1 }"
        >
          1
        </button>
        <!-- 起始页为1隐藏 -->
        <button v-show="startEnd.start > 2">...</button>
        <!-- 遍历生成中间button -->
        <button
          v-for="item in mapBtnsNum"
          :key="item"
          :class="{ active: myCurrentPage === startEnd.start + item - 1 }"
          @click="setCurrentPage(startEnd.start + item - 1)"
        >
          {{ startEnd.start + item - 1 }}
        </button>
        <!-- 终止页为所有页-1隐藏 -->
        <button v-show="startEnd.end < totalPages - 1">...</button>
        <button
          v-show="totalPages > 1"
          @click="setCurrentPage(totalPages)"
          :class="{ active: myCurrentPage === totalPages }"
        >
          {{ totalPages }}
        </button>
        <button
          @click="setCurrentPage(myCurrentPage + 1)"
          :disabled="myCurrentPage === totalPages"
        >
          下一页
        </button>
      </div>
      <div class="headTo">
        <span>前往</span>
        <input
          type="text"
          @keydown.enter="setCurrentPage(parseInt(setPage))"
          v-model="setPage"
        />
        <span>页</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data() {
    return {
      myCurrentPage: this.currentPage,
      setPage: 1,
      myPageSize: this.pageSize,
    }
  },
  props: {
    currentPage: {
      type: Number,
      dafault: 1,
    },
    pageSize: {
      type: Number,
      dafault: 5,
    },
    pagerCount: {
      type: Number,
      default: 7,
      validator(val) {
        return val >= 5 && val <= 21 && val % 2 == 1
      },
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    // 设置当前页
    setCurrentPage(currentPage) {
      this.myCurrentPage = currentPage
    },
    // 设置每页数据条数
    setPageSize(pageSize) {
      this.myPageSize = pageSize
    },
  },
  computed: {
    // 计算页数
    totalPages() {
      return Math.ceil(this.total / this.pageSize)
    },
    // 计算开始、结束页数
    startEnd() {
      const { myCurrentPage, pagerCount, totalPages } = this
      // 计算中间页数
      const count = pagerCount - 2
      // 计算单边页数
      const halfCount = Math.floor(count / 2)
      let start, end
      // 如果当前页后面不足单边页，起始页如下
      // 1...5 6 [7] 8 9 10
      if (totalPages - myCurrentPage <= halfCount) {
        start = totalPages - count
      } else {
        // 正常情况
        start = myCurrentPage - halfCount
      }
      // 1 2 3 [4] 5 6...10
      // 如果当前页前面不足单边页
      if (start < 2) {
        start = 2
      }
      // 正常情况
      end = start + count - 1

      if (end > totalPages) {
        end = totalPages - 1
      }
      return { start, end }
    },

    // 计算遍历按钮
    mapBtnsNum() {
      const { start, end } = this.startEnd
      const num = end - start + 1
      return num > 0 ? num : 0
    },
  },
  watch: {
    // 当前页面改变时发送请求
    myCurrentPage(currentPage) {
      this.$emit('current-change', currentPage)
    },
    // 因为data中的myCurrentPage只有数据代理时触发一次，所以监测传过来的currentPage
    currentPage(currentPage) {
      this.myCurrentPage = currentPage
    },
    // 数据条数改变时发送请求
    myPageSize(pageSize) {
      // console.log(pageSize)
      this.$emit('size-change', pageSize)
    },
    pageSize(){
      
    }
  },
  mounted() {},
}
</script>

<style lang="less" scoped>
.pagination {
  width: 1200px;
  text-align: center;
  font-size: 16px;
  .pagination-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 700px;
    margin: 0 auto;
    .page {
      display: flex;
      button {
        margin: 0 5px;
        padding: 0 4px;
        font-size: 13px;
        min-width: 30px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border: none;
        outline: none;
        display: block;
        background-color: #f4f4f5;
        color: #606266;
        border-radius: 2px;
        &.active {
          background-color: #409eff;
          color: #fff;
        }
      }
    }
    .headTo {
      display: flex;
      align-items: center;
    }
    input {
      width: 30px;
    }

    select,
    input {
      outline: none;
    }
  }
}
</style>
