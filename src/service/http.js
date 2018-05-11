import axios from 'axios'
axios.defaults.baseURL = ''
axios.defaults.withCredentials = true

axios.interceptors.request.use(config => {
  config.setHeaders({})
})

export default axios
