import request from 'superagent'
import ServerAddress from '../../Server/ServerAddress'

const url = () => { return ServerAddress.getServerUrl() }
class Api {
  static get () {
    return request.get(url() + '/api/data')
      .then((res, err) => {
        if (res) {
          return res.body
        }
      })
    // }
  }
}

export default Api
