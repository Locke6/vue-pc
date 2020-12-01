import request from '@utils/request'

export const reqGetProductList = function (data) {
  return request({
    method: "POST",
    url: "/list",
    data
  })
}