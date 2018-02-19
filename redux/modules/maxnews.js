import * as api from '../../api'
import fetchMock from 'fetch-mock'

// types
const FETCH_NEWS_REQ = 'FETCH_NEWS_REQ'
const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'

// actions
export const fetchNewsReq = () => ({
  type: FETCH_NEWS_REQ,
})
export const fetchNewsSuccess = news => ({
  type: FETCH_NEWS_SUCCESS,
  payload: news,
})
export const fetchNews = token => async dispatch => {
  console.log('dddddd1')
  dispatch(fetchNewsReq())
  fetchMock.restore()
  const url = `${api.SERVER}/news?token=${token}`
  try {
    const json = await api.get(url)
    // You should not return in Vods <-- change to something like data
    dispatch(fetchNewsSuccess(json.data))
  } catch (error) {
    console.log(error)
  }
}

// reducer
const initialState = {
  recents: [],
  data: {},
  loading: false,
}
const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_REQ:
      return {
        ...state,
        loading: true,
      }
    case FETCH_NEWS_SUCCESS:
      const news = action.payload
      let i = 0
      const newState = Object.assign({}, state)
      news.forEach(news => {
        if (typeof newState.recents === 'undefined') {
          newState.recents = [news.id]
        } else {
          if (newState.recents[i] !== news.id) newState.recents.push(news.id)
        }
        i++

        if (typeof newState.data === 'undefined') {
          newState.data = {
            [news.id]: news,
          }
        } else {
          newState.data[news.id] = news
        }
      })
      return {
        ...newState,
        loading: false,
      }

    default: {
      return state
    }
  }
}

export default newsReducer
