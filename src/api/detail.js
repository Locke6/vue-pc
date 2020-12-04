import request from '@utils/request'

export const reqGetProductInfos = function (id) {
  return request({
    method: "GET",
    url: `/item/${id}`,
  })
}