import axios from 'axios'
import qs from 'qs'
export default {
  add (data) {
    axios({
      url: '/api/Home/Testlz/testApi',
      data: qs.stringify(data),
      method: 'post'
    }).then(res => {
      console.log(res)
    })
  },
  list (f) {
    axios({
      url: '/api/Home/Pass/passList',
      method: 'get'
    }).then(res => {
      f(res.data)
    })
  }
}
