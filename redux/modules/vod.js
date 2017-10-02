import * as api from '../../api'

// types
const FETCH_VODS_REQ = 'FETCH_VODS_REQ'
const FETCH_VODS_SUCCESS = 'FETCH_VODS_SUCCESS'

// actions
export const fetchVodsSuccess = vods => ({
  type: FETCH_VODS_SUCCESS,
  payload: vods,
})

export const fetchVods = token => async dispatch => {
  const url = `${api.SERVER}/vods`
  try {
    const json = await api.post(url, { token })
    // You should not return in Vods <-- change to something like data
    dispatch(fetchVodsSuccess(json.data))
  } catch (error) {
    console.log(error)
  }
}

// reducer
const initialState = {
  recents: [],
  related: {},
  data: {},
  loaded: false,
}
const vodReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VODS_REQ:
      return {
        ...state,
        loaded: true,
      }
    case FETCH_VODS_SUCCESS:
      const vods = action.payload
      const newState = Object.assign({}, state)
      vods.forEach(vod => {
        // Recent index
        if (typeof newState.recents === 'undefined') {
          newState.recents = [vod.id]
        } else {
          newState.recents.push(vod.id)
        }

        // Related index
        if (typeof newState.related === 'undefined') {
          newState.related = {
            [vod.programName]: [vod.id],
          }
        } else if (typeof newState.related[vod.programName] === 'undefined') {
          newState.related[vod.programName] = [vod.id]
        } else {
          newState.related[vod.programName].push(vod.id)
        }

        // Cached data
        if (typeof newState.data === 'undefined') {
          newState.data = {
            [vod.id]: vod,
          }
        } else {
          newState.data[vod.id] = vod
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

export default vodReducer
