import request from '@utils/request'

// 获取订单交易信息
export const reqGetTrade = function () {
  return request({
    method: "GET",
    url: "/order/auth/trade"
  })
}


// 提交订单
export const reqSubmitOrder = function ({
  tradeNo,
  consignee,
  consigneeTel,
  deliveryAddress,
  paymentWay,
  orderComment,
  orderDetailList, }) {
  return request({
    method: "POST",
    url: "/order/auth/submitOrder",
    params: {
      tradeNo
    },
    data: {
      consignee,
      consigneeTel,
      deliveryAddress,
      paymentWay,
      orderComment,
      orderDetailList,
    }
  })
}