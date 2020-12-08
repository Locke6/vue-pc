<template>
  <div class="header">
    <div class="header-top">
      <div class="header-container">
        <div class="header-loginlist">
          <p>尚品汇欢迎您！</p>
          <p v-if="token">
            <span>{{ name }} </span>
            <a href="#" @click="delToken">退出</a>
          </p>
          <p v-else>
            <span>请</span><router-link to="/login">登录</router-link>
            <router-link to="/register">免费注册</router-link>
          </p>
        </div>
        <div class="header-typelist">
          <a href="#">我的订单</a>
          <router-link to="/shopcart">我的购物车</router-link>
          <a href="#">我的尚品汇</a>
          <a href="#">尚品汇会员</a>
          <a href="#">企业采购</a>
          <a href="#">关注尚品汇</a>
          <a href="#">合作招商</a>
          <a href="#">商家后台</a>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <h1>
        <router-link to="/"
          ><img src="./images/logo.png" alt="主页logo" />
        </router-link>
      </h1>
      <div class="header-search">
        <input type="text" v-model="searchText" />
        <button @click="search">搜索</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    ...mapState({
      token: (state) => state.user.token,
      name: (state) => state.user.name,
    }),
  },
  methods: {
    search() {
      //发送请求
      const { searchText } = this
      // 方式一
      /* const locationPath =
        '/search' + (searchText ? `/${searchText}` : '')
      this.$router.push(locationPath) */

      // 方式二，可选参数传参,params
      const location = {
        name: 'search',
        /* query: {
          name: 'jack',
        }, */
      }
      if (searchText) {
        location.params = { searchText }
      }
      const { categoryName } = this.$route.query
      if (categoryName) {
        location.query = this.$route.query
      }
      if (this.$route.name === 'search') {
        this.$router.replace(location)
      } else {
        this.$router.push(location)
      }

      // 方式三，可选参数query
      /* const location = {
        path: '/search',
        query: {
          name: 'jack',
        },
      }
      this.$router.push(location) */
    },
    delToken() {
      localStorage.removeItem('token')
      localStorage.removeItem('name')
      this.$router.replace('/')
      this.$store.commit('LOGIN_OUT')
    },
  },
  watch: {
    $route() {
      if (this.$route.path === '/') {
        this.searchText = ''
      }
    },
  },
  mounted() {
    this.$bus.$on('clearKeyword', () => {
      this.searchText = ''
    })
  },
}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
}

.header-top {
  width: 100%;
  min-width: 1200px;
  background-color: #eaeaea;
}
.header-container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
}
.header-loginlist {
  display: flex;
  justify-content: space-between;
}
.header-loginlist p {
  margin: 0 10px;
}

.header-loginlist p:nth-child(2) a:nth-of-type(2) {
  padding: 0 5px;
  margin-left: 5px;
  border-left: 1px solid #b3aeae;
}
.header-typelist a {
  padding: 0 10px;
}
.header-typelist a:not(:last-child) {
  border-right: 1px solid #b3aeae;
}
.header-bottom {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.header-bottom input {
  width: 490px;
  height: 32px;
  padding: 0 4px;
  border: 2px solid #ea4a36;
  box-sizing: border-box;
  outline: none;
}
.header-bottom button {
  width: 68px;
  height: 32px;
  color: #fff;
  background-color: #ea4a36;
  border: none;
  cursor: pointer;
  outline: none;
}
</style>

