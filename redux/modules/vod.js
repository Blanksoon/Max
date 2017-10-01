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
  //console.log('token', token)
  const url = `${api.SERVER}/vod`
  try {
    const json = await api.post(url, { token })
    if (json.data.vods != undefined) {
      dispatch(fetchVodsSuccess(json.data.vods))
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
