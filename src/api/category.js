import request from '@utils/request'
export const category = function () {
  return request({
    method: "GET",
    url: "/product/getBaseCategoryList"
  })
}
