<template>
  <div>
    <Category />
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <li class="with-x" v-show="options.categoryName">
              类名：{{ options.categoryName
              }}<i @click="clearCategoryName">×</i>
            </li>
            <li class="with-x" v-show="options.keyword">
              关键字：{{ options.keyword }}<i @click="clearKeyword">×</i>
            </li>
            <li class="with-x" v-show="options.trademark">
              品牌：{{ options.trademark.split(':')[1]
              }}<i @click="clearTrademark">×</i>
            </li>
            <li
              class="with-x"
              v-for="(prop, index) in options.props"
              :key="prop"
            >
              {{ prop.split(':')[2] }}：{{ prop.split(':')[1]
              }}<i @click="clearProps(index)">×</i>
            </li>
          </ul>
        </div>

        <!--selector-->
        <SearchSelector :addTrademark="addTrademark" :addProps="addProps" />

        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li
                  :class="{ active: this.options.order.indexOf('1') > -1 }"
                  @click="setOrder('1')"
                >
                  <a>
                    综合<i
                      :class="{
                        iconfont: true,
                        'icon-arrow-up-bold': !onComposite,
                        'icon-arrow-down-bold': onComposite,
                      }"
                    ></i>
                  </a>
                </li>
                <li>
                  <a>销量</a>
                </li>
                <li>
                  <a>新品</a>
                </li>
                <li>
                  <a>评价</a>
                </li>
                <li
                  :class="{ active: this.options.order.indexOf('2') > -1 }"
                  @click="setOrder('2')"
                >
                  <a
                    >价格
                    <span
                      ><i
                        :class="{
                          iconfont: true,
                          'icon-arrow-up-filling': true,
                          active: options.order.indexOf('2') > -1 && !onPrice,
                        }"
                      ></i
                      ><i
                        :class="{
                          iconfont: true,
                          'icon-arrow-down-filling': true,
                          active: options.order.indexOf('2') > -1 && onPrice,
                        }"
                      ></i
                    ></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="goods in goodsList" :key="goods.id">
                <div class="list-wrap">
                  <div class="p-img">
                    <a href="item.html" target="_blank"
                      ><img :src="goods.defaultImg"
                    /></a>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>{{ goods.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a
                      target="_blank"
                      href="item.html"
                      title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                      >{{ goods.title }}</a
                    >
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 分页功能 -->
          <!-- <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="options.pageNo"
              :page-sizes="[5, 10, 15, 20]"
              :page-size="5"
              :pager-count="5"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
            >
            </el-pagination>
          </div> -->

          <div class="pagination">
            <div class="pagination-container">
              <span>共 {{ total }} 条</span>
              <select @change="setPageSize" v-model="options.pageSize">
                <option :value="5">5页/条</option>
                <option :value="10">10页/条</option>
                <option :value="15">15页/条</option>
                <option :value="20">20页/条</option>
              </select>
              <div class="page">
                <span @click="prePageNo">&lt;</span>
                <ul @click="setPageNo">
                  <li v-for="(item, index) in pageLength" :key="index">
                    <a
                      :data-pageNo="item"
                      :class="{ active: markPage === item }"
                      >{{ item }}</a
                    >
                  </li>
                </ul>
                <span @click="nextPageNo">&gt;</span>
              </div>
              <div class="headTo">
                <span>前往</span>
                <input
                  type="text"
                  @keydown.enter="inputPageNo"
                  v-model="textContent"
                />
                <span>页</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchSelector from './SearchSelector/SearchSelector'
import Category from '@comps/Category'

import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Search',
  data() {
    return {
      options: {
        category3Id: '',
        categoryName: '',
        keyword: '',
        order: '1:desc',
        pageNo: 1,
        pageSize: 5,
        props: [],
        trademark: '',
      },
      onComposite: true,
      onPrice: true,
      pageLength: [],
      isSelected: false,
      textContent: 1,
      markPage: 1,
    }
  },
  components: {
    SearchSelector,
    Category,
  },
  computed: {
    ...mapGetters(['goodsList', 'total', 'pageSize', 'pageNo']),
  },
  methods: {
    ...mapActions(['getProductList']),
    // 更新商品列表,加一个默认页码，当进行其他请求时例如点击商品分类，会跳转回第一页
    updateProductList(pageNo = 1, markPage = 1) {
      const { searchText: keyword } = this.$route.params
      const {
        categoryName,
        category3Id,
        category2Id,
        category1Id,
      } = this.$route.query
      const options = {
        ...this.options,
        keyword,
        categoryName,
        category3Id,
        category2Id,
        category1Id,
        pageNo,
      }
      this.markPage = markPage
      this.options = options
      this.getProductList(options)
    },
    // 删除标签
    clearCategoryName() {
      this.options.categoryName = ''
      this.$router.replace({
        name: 'search',
        params: this.$route.params,
      })
    },
    // 删除标签
    clearKeyword() {
      this.options.keyword = ''
      this.$bus.$emit('clearKeyword')
      this.$router.replace({
        name: 'search',
        query: this.$route.query,
      })
    },
    // 添加品牌
    addTrademark(trademark) {
      this.options.trademark = trademark
      this.updateProductList()
    },
    // 删除标签
    clearTrademark() {
      this.options.trademark = ''
      this.updateProductList()
    },
    // 添加品牌属性
    addProps(attrValue) {
      this.options.props.push(attrValue)
      this.updateProductList()
    },
    // 删除标签属性
    clearProps(index) {
      this.options.props.splice(index, 1)
      this.updateProductList()
    },
    // 按综合/价格重排商品
    setOrder(order) {
      let [orderNum, orderType] = this.options.order.split(':')
      // 点同一个键
      if (order === orderNum) {
        // 判断是综合还是价格
        if (order === '1') {
          this.onComposite = !this.onComposite
        } else {
          this.onPrice = !this.onPrice
        }
        orderType = orderType === 'desc' ? 'asc' : 'desc'
      }
      // 点其他键
      else {
        // 每次点综合排序都保留之前的顺序
        if (order === '1') {
          orderType = this.onComposite ? 'desc' : 'asc'
        }
        // 每次点价格排序都是升序
        else {
          this.onPrice = true
          orderType = 'asc'
        }
      }
      this.options.order = `${order}:${orderType}`
      this.updateProductList()
    },
    // 设置每页数据条数
    handleSizeChange(pageSize) {
      this.options.pageSize = pageSize
      this.updateProductList()
    },
    // 设置当前页
    handleCurrentChange(pageNo) {
      this.updateProductList(pageNo)
    },

    // 自定义分页
    //生成页码数
    setPageNum() {
      let arr = []
      const num = Math.ceil(this.total / this.pageSize)
      for (var i = 1; i <= num; i++) {
        arr.push(i)
      }
      this.pageLength = arr
    },
    //设置页码数
    setPageSize() {
      this.updateProductList()
    },
    // 设置当前页
    setPageNo(e) {
      const { pageno } = e.target.dataset
      // 如果不是点击a元素，退出
      if (!pageno) return

      // 设置当前页

      this.updateProductList(+pageno)
      this.markPage = +pageno
    },
    // 前进一页
    prePageNo() {
      const pageNo = this.options.pageNo - 1
      if (pageNo === 0) return
      this.markPage -= 1
      this.updateProductList(pageNo, this.markPage)
    },
    // 后退一页
    nextPageNo() {
      const pageNo = this.options.pageNo + 1
      const totalPage = Math.ceil(this.total / this.pageSize)
      if (pageNo > totalPage) return
      this.markPage += 1
      this.updateProductList(pageNo, this.markPage)
    },
    // 输入页面跳转
    inputPageNo() {
      const pageNo = +this.textContent
      const totalPage = Math.ceil(this.total / this.pageSize)
      if (pageNo < 0 || pageNo > totalPage) return
      this.markPage = pageNo
      this.updateProductList(pageNo, this.markPage)
    },
  },
  watch: {
    // 监视路径变化，请求列表数据
    $route: {
      handler() {
        this.updateProductList()
      },
      immediate: true,
    },

    //每页条数发生变化，页码重新生成
    pageSize() {
      this.setPageNum()
    },
    //数据总条数发生变化，页码重新生成
    total() {
      this.setPageNum()
    },
    //监测页面变化，添加颜色
    pageNo() {},
  },
  mounted() {
    this.setPageNum()
  },
}
</script>

<style lang="less" scoped>
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;

        li {
          display: inline-block;
          line-height: 18px;

          a {
            color: #666;
            text-decoration: none;

            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }

      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;

        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          cursor: pointer;

          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

          &:hover {
            color: #28a3ef;
          }
        }
      }
    }

    .details {
      margin-bottom: 5px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;

            li {
              float: left;
              line-height: 18px;

              a {
                height: 17px;
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
                display: flex;
                span {
                  height: 20px;
                  line-height: 10px;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-around;
                  i {
                    font-size: 12px;
                    &.active {
                      color: rgba(255, 255, 255, 0.5);
                    }
                  }
                }
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;

            .list-wrap {
              .p-img {
                padding-left: 15px;
                width: 215px;
                height: 255px;

                a {
                  color: #666;

                  img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                  }
                }
              }

              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;

                strong {
                  font-weight: 700;

                  i {
                    margin-left: -5px;
                  }
                }
              }

              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;

                a {
                  color: #333;
                  text-decoration: none;
                }
              }

              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;

                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }

                .btn-bordered {
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }

      .pagination {
        width: 1200px;
        text-align: center;
        font-size: 16px;
        .pagination-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 500px;
          margin: 0 auto;
          .page {
            display: flex;
            ul {
              display: flex;
            }
            li {
              padding: 0 3px;
              a {
                &.active {
                  color: red;
                }
              }
            }
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
    }
  }
}
</style>