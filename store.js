import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { fetchVods, fetchVodsSuccess } from './actions/vod'
import rootReducer from './reducers'
import vodReducer from './reducers/vods'

const InitialState = {
  vod: {},
}

export const initStore = (initialState = InitialState) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
