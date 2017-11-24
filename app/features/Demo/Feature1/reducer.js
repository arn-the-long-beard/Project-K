import * as types from './actionTypes'

export default function smell (state = {errors: '', message: '', didInvalidate: true, isRequesting: false, data: {}}, action) {
  switch (action.type) {
    case types.INVALIDATE:
      return {...state,
        didInvalidate: true}
    case types.GET_FAILED:
      return {...state,
        isRequesting: false,
        didInvalidate: false,
        errors: action.err,
        message: action.message
      }
    case types.GET_REQUEST:
      return {...state,
        isRequesting: true,
        didInvalidate: false
      }
    case types.GET_SUCCESS:
      return {...state,

        isRequesting: false,
        didInvalidate: false,
        data: action.data,
        errors: '',
        lastUpdated: action.receivedAt,
        message: action.message
      }
    default:
      return state
  }
}
