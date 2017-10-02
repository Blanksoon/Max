import * as api from '../../api'

// types
const FETCH_LIVES_REQ = 'FETCH_LIVES_REQ'
const FETCH_LIVES = 'FETCH_LIVES'
const FETCH_LIVES_SUCCESS = 'FETCH_LIVES_SUCCESS'

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

// reducer
const initialState = {
  recents: [],
  data: {},
  loaded: false,
}
const livesReducer = (state = initialState, action) => {
  switch (action.type) {
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
          newState.recents = []
        } else {
          newState.recents.push(live.id)
        }

        if (typeof newState.data === 'undefined') {
          newState.data = {}
        } else {
          newState.data[live.id] = live
        }
      })
      return {
        ...newState,
        loaded: false,
      }
    default: {
      return state
    }
  }
}

export default livesReducer
