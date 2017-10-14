import querystring from 'querystring'
import * as api from '../../api'

// types
const FETCH_VODS_REQ = '@VOD/FETCH_VODS_REQ'
const FETCH_VODS_SUCCESS = '@VOD/FETCH_VODS_SUCCESS'

const FETCH_VOD_REQ = '@VOD/FETCH_VOD_REQ'
const FETCH_VOD_SUCCESS = '@VOD/FETCH_VOD_SUCCESS'

const SET_FETCH_FILTER = '@VOD/SET_FETCH_FILTER'
const RESET_FETCH_DATA = '@VOD/RESET_FETCH_DATA'

// actions
export const fetchVodsSuccess = vods => ({
  type: FETCH_VODS_SUCCESS,
  payload: vods,
})

export const fetchVods = token => async (dispatch, getState) => {
  const state = getState()
  let filter
  if (typeof state.vod.filter === 'undefined') {
    filter = {}
  } else {
    filter = Object.assign({}, state.vod.filter)
  }

  if (typeof filter.progname == 'undefined') {
    filter.progname = ''
  }
  const query = {
    ...filter,
    token,
  }
  const queryStr = querystring.stringify(query)
  const url = `${api.SERVER}/vods?${queryStr}`
  try {
    const json = await api.get(url)
    // You should not return in Vods <-- change to something like data
    dispatch(fetchVodsSuccess(json.data))
  } catch (error) {
    console.log(error)
  }
}

export const fetchVodReq = () => ({
  type: FETCH_VOD_REQ,
})
export const fetchVodSuccess = (id, vods) => ({
  type: FETCH_VOD_SUCCESS,
  payload: { current: id, vods },
})
export const fetchVod = (token, id, progname) => async dispatch => {
  dispatch(fetchVodReq())
  const url = `${api.SERVER}/vods?progname=${progname}&token=${token}`
  try {
    const json = await api.get(url)
    // You should not return in Vods <-- change to something like data
    dispatch(fetchVodSuccess(id, json.data))
  } catch (error) {
    console.log(error)
  }
}

export const setFetchFilter = filter => {
  return {
    type: SET_FETCH_FILTER,
    payload: filter,
  }
}
export const resetFetchData = () => ({
  type: RESET_FETCH_DATA,
})

// reducer
const initialState = {
  recents: [],
  related: {},
  data: {},
  filter: {},
  loaded: false,
}
const vodReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VOD_REQ:
    case FETCH_VODS_REQ:
      return {
        ...state,
        loaded: true,
      }
    case FETCH_VODS_SUCCESS:
      const vods = action.payload
      const newState = Object.assign({}, state)
      let i = 0
      vods.forEach(vod => {
        // Recent index
        let ok = 0
        if (typeof newState.recents === 'undefined') {
          newState.recents = [vod.id]
        } else if (newState.recents[i] == vod.id) {
          // Do no thing
        } else {
          //newState.recents = []
          newState.recents.push(vod.id)
        }
        i++

        // Cached data
        if (typeof newState.data === 'undefined') {
          newState.data = {
            [vod.id]: vod,
          }
        } else {
          newState.data[vod.id] = vod
        }
      })
      //console.log('newState', newState)
      return {
        ...newState,
        loaded: false,
      }

    case FETCH_VOD_SUCCESS:
      const newData = {}
      action.payload.vods.forEach(vod => {
        newData[vod.id] = vod
      })
      return {
        ...state,
        current: action.payload.current,
        data: {
          // ...state.data,
          ...newData,
        },
        loaded: false,
      }

    case SET_FETCH_FILTER:
      return {
        ...state,
        filter: action.payload,
      }
    case RESET_FETCH_DATA:
      return {
        ...state,
        recents: [],
        related: [],
        data: {},
      }

    default: {
      return state
    }
  }
}

export default vodReducer
