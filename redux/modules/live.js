import * as api from '../../api'

// types
const FETCH_LIVE = 'FETCH_LIVE'
const FETCH_LIVE_SUCCESS = 'FETCH_LIVE_SUCCESS'

// actions
export const fetchLivesSuccess = live => ({
  type: FETCH_LIVE_SUCCESS,
  payload: live,
})

export const fetchLives = token => async dispatch => {
  //console.log('token', token)
  const url = `${api.SERVER}/lives`
  try {
    const json = await api.post(url, { token })
    console.log('jsonData', json)
    // You should not return in Vods <-- change to something like data
    dispatch(fetchLivesSuccess(json.data))
  } catch (error) {
    console.log(error)
  }
}

// reducer
const initialState = {
  current: {},
  live: {},
}
const livesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIVE_SUCCESS:
      const liveById = {}
      if (Array.isArray(action.payload)) {
        action.payload.forEach(live => {
          liveById[live.id] = live
        })
      }
      return {
        ...current,
        ...state.live,
        ...liveById,
      }
    default: {
      return state
    }
  }
}

export default livesReducer
