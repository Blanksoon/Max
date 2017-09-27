import * as api from '../../api'

// types
const FETCH_VODS = 'FETCH_VODS'
const FETCH_VODS_SUCCESS = 'FETCH_VODS_SUCCESS'

// actions
export const fetchVodsSuccess = vods => ({
  type: FETCH_VODS_SUCCESS,
  payload: vods,
})

export const fetchVods = token => async dispatch => {
  const url = `${api.SERVER}/vod`
  try {
    const json = await api.post(url, { token })
    // You should not return in Vods <-- change to something like data
    dispatch(fetchVodsSuccess(json.Vods))
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
    case FETCH_VODS_SUCCESS:
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
