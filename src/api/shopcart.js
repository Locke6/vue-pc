import request from '@utils/request'

// 添加到购物车成功
export const reqUpdateCartCount = function (skuId, skuNum) {
  return request({
    method: "POST",
    url: `/cart/addToCart/${skuId}/${skuNum}`,
  })
}

// 获取购物车列表
export const reqGetShopCartList = function () {
  return request({
    method: "GET",
    url: "/cart/cartList",
  })
}

// 删除购物车商品
export const reqDelShopCart = function (skuId) {
  return request({
    method: "DELETE",
    url: `/cart/deleteCart/${skuId}`,
  })
}