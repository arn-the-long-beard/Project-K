import {combineReducers} from 'redux'

import demo from './features/Demo/reducer'
import host from './features/Server/reducer'
const rootReducer = combineReducers({
  // short hand property names
//  utilData
  demo,
  host
})
export default rootReducer
