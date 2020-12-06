import request from '@utils/request'

// 添加到购物车成功
export const reqUpdateCartCount = function (skuId, skuNum) {
  return request({
    method: "POST",
    url: `/cart/addToCart/${skuId}/${skuNum}`,
  })
}

// 获取购物车列表
export const reqShopCartList = function () {
  return request({
    method: "GET",
    url: "/cart/cartList",
  })
}