import { FETCH_VODS, FETCH_VODS_SUCCESS } from '../actions/vod/types'

const InitialState = {
  vod: {},
}
const vodReducer = (state = InitialState, action) => {
  //console.log('mini', state)
  switch (action.type) {
    case FETCH_VODS_SUCCESS:
      //console.log('jdflsdjfl', action.payload.data)
      return Object.assign({}, state, {
        vod: action.payload.data,
      })
    default: {
      return state
    }
  }
}

export default vodReducer
