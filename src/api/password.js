import axios from 'axios'
import qs from 'qs'

let baseUrl = '/api/index/Password/'

export default {
  add (data, f) {
    axios({
      url: baseUrl + 'addPassword',
      data: qs.stringify(data),
      method: 'post'
    }).then(res => {
      f(res.data)
    })
  },
  list (page, f) {
    axios({
      url: baseUrl + 'passwordList?page='+page,
      method: 'get'
    }).then(res => {
      f(res.data)
    })
  }
}
