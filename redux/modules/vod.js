import querystring from 'querystring'
import * as api from '../../api'

// types
const FETCH_VODS_REQ = '@VOD/FETCH_VODS_REQ'
const FETCH_VODS_SUCCESS = '@VOD/FETCH_VODS_SUCCESS'

const FETCH_VOD_REQ = '@VOD/FETCH_VOD_REQ'
const FETCH_VOD_SUCCESS = '@VOD/FETCH_VOD_SUCCESS'

const SET_FETCH_FILTER = '@VOD/SET_FETCH_FILTER'
const RESET_FETCH_DATA = '@VOD/RESET_FETCH_DATA'

const FETCH_FEATURED_VOD_REQ = '@VOD/FETCH_FEATURED_VOD_REQ'
const FETCH_FEATURED_VOD_SUCCESS = '@VOD/FETCH_FEATURED_VOD_SUCCESS'

const PAGINATION = 'PAGINATION'
const STARTINDEX = 'STARTINDEX'

// actions
export const fetchVodsReq = () => ({
  type: FETCH_VODS_REQ,
})
export const fetchVodsSuccess = vods => ({
  type: FETCH_VODS_SUCCESS,
  payload: vods,
})
export const fetchVods = token => async (dispatch, getState) => {
  dispatch(fetchVodsReq())
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
  //console.log('queryStr', queryStr)
  const url = `${api.SERVER}/vods?${queryStr}`
  try {
    const json = await api.get(url)
    // You should not return in Vods <-- change to something like data
    //console.log('jsonssss', json)
    dispatch(fetchVodsSuccess(json))
  } catch (error) {
    console.log(error)
  }
}

export const fetchVodOnDemand = token => async (dispatch, getState) => {
  dispatch(resetFetchData())
  dispatch(fetchVodsReq())
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
  console.log('queryStr', queryStr)
  const url = `${api.SERVER}/vods-ondemand?${queryStr}`
  try {
    const json = await api.get(url)
    // You should not return in Vods <-- change to something like data
    //console.log('jsonssss', json)
    dispatch(fetchVodsSuccess(json))
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

export const fetchFeaturedVodReq = () => ({
  type: FETCH_FEATURED_VOD_REQ,
})
export const fetchFeaturedVodSuccess = featuredVod => ({
  type: FETCH_FEATURED_VOD_SUCCESS,
  payload: featuredVod,
})
export const fetchFeaturedVod = token => async dispatch => {
  dispatch(fetchFeaturedVodReq())
  const url = `${api.SERVER}/vods-feature?token=${token}`
  try {
    const json = await api.get(url)
    dispatch(fetchFeaturedVodSuccess(json.data))
  } catch (error) {
    console.log(error)
  }
}
export const pagination = () => ({
  type: PAGINATION,
})
export const startindex = num => ({
  type: STARTINDEX,
  payload: num,
})

const merge = (recents = [], newVods = [], data) => {
  let i = 0
  let j = 0
  let k = 0
  const merged = []
  const n = recents.length + newVods.length
  while (k < n) {
    k++

    // Recents array already contain newVods just skip
    if (j < newVods.length) {
      if (recents.indexOf(newVods[j].id) !== -1) {
        j++
        continue
      }
    }

    // Another array is empty array
    if (i >= recents.length) {
      merged.push(newVods[j].id)
      j++
      continue
    } else if (j >= newVods.length) {
      merged.push(recents[i])
      i++
      continue
    }

    const recentDate = new Date(data[recents[i]].onAirDate).getTime()
    const newVodDate = new Date(newVods[j].onAirDate).getTime()
    // Pick recents[i] if it's newer than newVods[j]
    if (recentDate > newVodDate) {
      merged.push(recents[i])
      i++
    } else {
      merged.push(newVods[j].id)
      j++
    }
  }
  return merged
}

// reducer
const initialState = {
  recents: [],
  related: {},
  data: {},
  filter: {},
  loading: false,
  index: 0,
  limit: 4,
}
const vodReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VOD_REQ:
    case FETCH_VODS_REQ:
    case FETCH_FEATURED_VOD_REQ: {
      return {
        ...state,
        loading: true,
      }
    }

    case FETCH_VODS_SUCCESS: {
      const vods = action.payload.data
      const newData = {}
      let i = 0
      vods.forEach(vod => {
        newData[vod.id] = vod
      })
      const merged = merge(state.recents, vods, state.data)
      return {
        ...state,
        data: {
          ...state.data,
          ...newData,
        },
        recents: merged,
        numberOfVods: action.payload.numberOfVods,
        loading: false,
      }
    }

    case FETCH_VOD_SUCCESS: {
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
        loading: false,
      }
    }

    case FETCH_FEATURED_VOD_SUCCESS: {
      const featureds = action.payload

      // No featured vod fetched, just return
      if (featureds.length === 0) {
        return state
      }

      const merged = merge(state.recents, featureds, state.data)
      return {
        ...state,
        recents: merged,
        data: {
          ...state.data,
          [featureds[0].id]: featureds[0],
        },
        loading: false,
      }
    }

    case SET_FETCH_FILTER: {
      return {
        ...state,
        filter: action.payload,
      }
    }
    case RESET_FETCH_DATA: {
      return {
        ...state,
        recents: [],
        related: [],
        data: {},
      }
    }
    case PAGINATION: {
      return {
        ...state,
        index: state.index + 4,
        //index: state.index+1,
      }
    }
    case STARTINDEX: {
      return {
        ...state,
        index: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default vodReducer
