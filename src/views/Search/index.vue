<template>
  <div>
    <div>Search...</div>
    <button @click="search">发送</button>
  </div>
</template>

<script>
import reqLogin from '@api/user'
import {Message} from 'element-ui'
export default {
  name: 'Search',
  methods: {
    search() {
      // reqLogin("13700000000","111111"),
      reqLogin('13700000000', '111111')
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          Message.error(err)
        })
    },
  },
}
</script>

<style lang="less" scoped>
</style>
