<template>
  <div class="footer">
    <div class="footerList">
      <dl>
        <dt>购物指南</dt>
        <dd>购物流程</dd>
        <dd>会员介绍</dd>
        <dd>生活旅行/团购</dd>
        <dd>常见问题</dd>
        <dd>购物指南</dd>
      </dl>
      <dl>
        <dt>配送方式</dt>
        <dd>211限时达</dd>
        <dd>上门自提</dd>
        <dd>配送服务查询</dd>
        <dd>配送费收取标准</dd>
        <dd>海外配送</dd>
      </dl>
      <dl>
        <dt>支付方式</dt>
        <dd>购物流程</dd>
        <dd>会员介绍</dd>
        <dd>生活旅行/团购</dd>
        <dd>常见问题</dd>
        <dd>购物指南</dd>
      </dl>
      <dl>
        <dt>售后服务</dt>
        <dd>购物流程</dd>
        <dd>会员介绍</dd>
        <dd>生活旅行/团购</dd>
        <dd>常见问题</dd>
        <dd>购物指南</dd>
      </dl>
      <dl>
        <dt>特色服务</dt>
        <dd>购物流程</dd>
        <dd>会员介绍</dd>
        <dd>生活旅行/团购</dd>
        <dd>常见问题</dd>
        <dd>购物指南</dd>
      </dl>
      <div>
        <dt>帮助中心</dt>
        <dd><img src="./images/wx_cz.28d584e6.jpg" alt="" /></dd>
      </div>
    </div>
    <div class="copyright">
      <ul class="copyright-list">
        <li>关于我们</li>
        <li>联系我们</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>友情链接</li>
        <li>关于我们</li>
        <li>营销中心</li>
        <li>关于我们</li>
        <li>友情链接</li>
        <li>关于我们</li>
      </ul>
      <p>地址：北京市昌平区宏福科技园综合楼6层</p>
      <p>京ICP备19006430号</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="less" scoped>
.footer {
  min-width: 1200px;
  background-color: #eaeaea;
}
.footerList {
  width: 1200px;
  padding: 20px 20px 20px 40px;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.footerList dt {
  font-weight: bold;
  font-size: 14px;
}
.footerList dd {
  line-height: 18px;
}
.copyright {
  display: flex;

  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 20px;
  flex-direction: column;
  align-items: center;
}
.copyright-list {
  display: flex;
}
.copyright-list li {
  padding: 0 5px;
}
.copyright-list li:nth-child(n + 2) {
  border-left: 1px solid #333;
}
.copyright p {
  margin: 10px 0;
}
</style>
