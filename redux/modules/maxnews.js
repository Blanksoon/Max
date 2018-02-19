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
  //const url = `${api.SERVER}/news?token=${token}`
  try {
    fetchMock.restore()
    //const json = await api.get(url)
    let json2 = await fetchMock.post(`${api.SERVER}/news`, {
      body: {
        code: 200,
        data: [
          {
            id: `1`,
            heading: `Max Muay Thai`,
            create_date: `Jan 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article: `Lorem`,
          },
          {
            id: `2`,
            heading: `Max Muay Thai`,
            create_date: `Jan 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article: `Lorem`,
          },
        ],
      },
    })
    console.log('ddddddddd2', json2.routes[0].response.body.data)
    fetchMock.restore()
    // You should not return in Vods <-- change to something like data
    //dispatch(fetchNewsSuccess(json.data))
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
