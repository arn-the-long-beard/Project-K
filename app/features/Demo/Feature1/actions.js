import * as types from './actionTypes'
import Api from './api'
import ServerAddress from '../../Server/ServerAddress'
export const getFailed = (json) => {
  return {
    type: types.GET_FAILED,
    err: json.error.message
  }
}
export const getRequest = () => {
  return {
    type: types.GET_REQUEST

  }
}
export const getSuccess = (json) => {
  return {
    type: types.GET_SUCCESS,
    data: json.data,
    message: json.message,
    receivedAt: Date.now()
  }
}

export const get = () => {
  return (dispatch, getState) => {
    const { host } = getState()
    ServerAddress.saveIp(host.server)
    dispatch(getRequest())
    return Api.get().then(response => {
      if (response.success) {
        dispatch(getSuccess(response))
      } else {
        dispatch(getFailed(response))
      }
    }).catch(error => {
      dispatch(getFailed(error.response))
    })
  }
}
function shouldGet (state) {
  const {feature1} = state.demo
  if (feature1.isRequesting) {
    return false
  } else {
    return feature1.didInvalidate
  }
}

export function getIfNeeded () {
  return (dispatch, getState) => {
    if (shouldGet(getState())) {
      return dispatch(get())
    }
  }
}
