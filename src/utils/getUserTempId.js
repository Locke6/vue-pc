import { v4 as uuidv4 } from 'uuid'

export default function getUserTempId () {
  let userTempId = localStorage.getItem('userTempId')
  if (userTempId) {
    return userTempId
  }
  userTempId = uuidv4()
  localStorage.setItem('userTempId', userTempId)
  return userTempId
}