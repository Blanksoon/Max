import * as api from '../../api'

// types
const FETCH_LIVES = 'FETCH_LIVES'
const FETCH_LIVES_SUCCESS = 'FETCH_LIVES_SUCCESS'

// actions
export const fetchLivesSuccess = lives => ({
  type: FETCH_LIVES_SUCCESS,
  payload: lives,
})

export const fetchLives = token => async dispatch => {
  const url = `${api.SERVER}/vod`
  try {
    const json = await api.post(url, { token })
    if (json.data.lives != undefined) {
      dispatch(fetchLivesSuccess(json.data.lives))
    }
  } catch (error) {
    console.log(error)
  }
}

// reducer
const initialState = {
  vod: {},
}
const vodReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIVES_SUCCESS:
      const vodById = {}
      if (Array.isArray(action.payload)) {
        action.payload.forEach(vod => {
          vodById[vod.id] = vod
        })
      }
      return {
        ...state.vod,
        ...vodById,
      }
    default: {
      return state
    }
  }
}

export default vodReducer
