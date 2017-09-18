import { combineReducers } from 'redux'
import counterReducer from './counter'
import modalReducer from './modal'

const rootReducer = combineReducers({
  counter: counterReducer,
  modal: modalReducer,
})

export default rootReducer
