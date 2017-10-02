import * as api from '../../api'

// types
const FETCH_LIVES_REQ = 'FETCH_LIVES_REQ'
const FETCH_LIVES_SUCCESS = 'FETCH_LIVES_SUCCESS'

const FETCH_LIVE_REQ = 'FETCH_LIVE_REQ'
const FETCH_LIVE_SUCCESS = 'FETCH_LIVE_SUCCESS'

// actions
export const fetchLivesReq = () => ({
  type: FETCH_LIVES_REQ,
})
export const fetchLivesSuccess = lives => ({
  type: FETCH_LIVES_SUCCESS,
  payload: lives,
})
export const fetchLives = token => async dispatch => {
  dispatch(fetchLivesReq())
  const url = `${api.SERVER}/lives`
  try {
    const json = await api.post(url, { token })
    // You should not return in Vods <-- change to something like data
    dispatch(fetchLivesSuccess(json.data))
  } catch (error) {
    console.log(error)
  }
}

export const fetchLiveReq = () => ({
  type: FETCH_LIVE_REQ,
})
export const fetchLiveSuccess = lives => ({
  type: FETCH_LIVE_SUCCESS,
  payload: lives,
})
export const fetchLive = (token, id) => async dispatch => {
  dispatch(fetchLiveReq())
  const url = `${api.SERVER}/lives/${id}`
  try {
    const json = await api.post(url, { token })
    // You should not return in Vods <-- change to something like data
    dispatch(fetchLiveSuccess(json.data))
  } catch (error) {
    console.log(error)
  }
}

// reducer
const initialState = {
  recents: [],
  data: {},
  loaded: false,
}
const livesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIVE_REQ:
    case FETCH_LIVES_REQ:
      return {
        ...state,
        loaded: true,
      }
    case FETCH_LIVES_SUCCESS:
      const lives = action.payload
      const newState = Object.assign({}, state)
      lives.forEach(live => {
        if (typeof newState.recents === 'undefined') {
          newState.recents = [live.id]
        } else {
          newState.recents.push(live.id)
        }

        if (typeof newState.data === 'undefined') {
          newState.data = {
            [live.id]: live,
          }
        } else {
          newState.data[live.id] = live
        }
      })
      return {
        ...newState,
        loaded: false,
      }
    case FETCH_LIVE_SUCCESS:
      return {
        ...state,
        current: action.payload[0].id,
        data: {
          ...state.data,
          [action.payload[0].id]: action.payload[0],
        },
        loaded: false,
      }
    default: {
      return state
    }
  }
}

export default livesReducer
