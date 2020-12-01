import request from '@utils/request'
import mockRequest from '@utils/mockRequest'
//获取分类列表请求
export const reqGetCategories = function () {
  return request({
    method: "GET",
    url: "/product/getBaseCategoryList"
  })
}

//获取轮播图列表
export const reqGetBanners = function () {
  return mockRequest({
    method: "GET",
    url: "/banners"
  })
}

//获取楼层图片
export const reqGetFloors = function () {
  return mockRequest({
    method: "GET",
    url: "/floors"
  })
}

//获取每日推荐图片
export const reqGetRecommends = function () {
  return mockRequest({
    method: "GET",
    url: "/recommends"
  })
}
