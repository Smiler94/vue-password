import axios from 'axios'
import qs from 'qs'
export default {
  add (data) {
    axios({
      url: 'http://tms241.com/Home/Testlz/testApi',
      data: qs.stringify(data),
      method: 'post'
    }).then(res => {
      console.log(res)
    })
  }
}
