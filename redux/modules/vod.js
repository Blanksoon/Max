import * as api from '../../api'

// types
const FETCH_VODS_REQ = 'FETCH_VODS_REQ'
const FETCH_VODS_SUCCESS = 'FETCH_VODS_SUCCESS'

const FETCH_VOD_REQ = 'FETCH_VOD_REQ'
const FETCH_VOD_SUCCESS = 'FETCH_VOD_SUCCESS'
const FLITER_VOD = 'FLITER_VOD'

// actions
export const fetchVodsSuccess = vods => ({
  type: FETCH_VODS_SUCCESS,
  payload: vods,
})

export const fetchVods = (token, progname) => async dispatch => {
  //console.log('progname', progname)
  const url = `${api.SERVER}/vods?progname=${progname}&token=${token}`
  //url = `${api.SERVER}/vods?progname=&token=`
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
export const filterVods = progname => ({
  type: FETCH_VOD_SUCCESS,
  payload: { progname },
})

// reducer
const initialState = {
  recents: [],
  related: {},
  data: {},
  filters: {},
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
        console.log('vodddddd', typeof newState)
        let ok = 0
        // for(let i = 0 ; i< vods.length ;i++){
        //   if()
        // }
        if (typeof newState.recents === 'undefined') {
          newState.recents = [vod.id]
        } else if (newState.recents[i] == vod.id) {
          console.log('else')
        } else {
          //newState.recents = []
          newState.recents.push(vod.id)
        }
        i++
        // Related index
        if (typeof newState.related === 'undefined') {
          newState.related = {
            [vod.programName_en]: [vod.id],
          }
        } else if (
          typeof newState.related[vod.programName_en] === 'undefined'
        ) {
          newState.related[vod.programName_en] = [vod.id]
        } else {
          newState.related[vod.programName_en].push(vod.id)
        }

        // Cached data
        if (typeof newState.data === 'undefined') {
          newState.data = {
            [vod.id]: vod,
          }
          newState.filters = {
            [vod.id]: vod,
          }
        } else {
          newState.data[vod.id] = vod
          newState.filters[vod.id] = vod
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

    case FLITER_VOD:
      return {
        ...state,
        filters: state.filters.filter(
          vod => vod.programName_en == action.payload.current.progname
        ),
      }
    default: {
      return state
    }
  }
}

export default vodReducer
