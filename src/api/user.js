import request from '@utils/request'
function reqLogin (phone, password) {
  return request({
    method: "POST",
    url: "/user/passport/login",
    data: {
      phone,
      password
    }
  })
}
export default reqLogin