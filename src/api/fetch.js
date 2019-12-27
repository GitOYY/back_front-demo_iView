import {request} from '../utils/request'
import apiConfig from '../utils/apiConfig'

const userHost = request({baseUrl: apiConfig.userHost})

export default {
  userHost
}
