import * as api from '../../api'
import fetchMock from 'fetch-mock'

// types
const FETCH_NEWS_REQ = 'FETCH_NEWS_REQ'
const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'
const NEWS_SUCCESS = 'NEWS_SUCCESS'

const PAGINATION = 'PAGINATION'
const STARTINDEX = 'STARTINDEX'

// actions
export const fetchNewsReq = () => ({
  type: FETCH_NEWS_REQ,
})
export const fetchNewsSuccess = news => {
  // console.log('66666666666', news)
  return {
    type: FETCH_NEWS_SUCCESS,
    payload: news,
  }
}
export const NewsSuccess = news => {
  // console.log('66666666666', news)
  return {
    type: NEWS_SUCCESS,
    payload: news,
  }
}
export const fetchNews = token => async dispatch => {
  // console.log('dddddd1')
  dispatch(fetchNewsReq())
  // const url = `${api.SERVER}/news?token=${token}`
  // const url = `${api.SERVER}/lives/${id}?token=${token}`
  try {
    fetchMock.restore()
    // const json = await api.get(url)
    let json = ''
    let json2 = await fetchMock.post(`${api.SERVER}/news`, {
      body: {
        code: 200,
        data: [
          {
            id: `0`,
            programName_en: `Max Muay Thai1`,
            programName_th: `แม็กซ์มวยไทย`,
            heading_en: `Max Muay Thai1`,
            heading_th: `แม็กซ์มวยไทย`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
            article_th: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
          },
          {
            id: `1`,
            programName_en: `Max Muay Thai2`,
            programName_th: `แม็กซ์มวยไทย`,
            heading_en: `Max Muay Thai2`,
            heading_th: `แม็กซ์มวยไทย`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
            article_th: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
          },
          {
            id: `2`,
            programName_en: `Max Muay Thai3`,
            programName_th: `แม็กซ์มวยไทย`,
            heading_en: `Max Muay Thai3`,
            heading_th: `แม็กซ์มวยไทย`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
            article_th: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
          },
          {
            id: `3`,
            programName_en: `Max Muay Thai4`,
            programName_th: `แม็กซ์มวยไทย`,
            heading_en: `Max Muay Thai4`,
            heading_th: `แม็กซ์มวยไทย`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
            article_th: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
          },
          {
            id: `4`,
            programName_en: `Max Muay Thai5`,
            programName_th: `แม็กซ์มวยไทย`,
            heading_en: `Max Muay Thai5`,
            heading_th: `แม็กซ์มวยไทย`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
            article_th: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
          },
          {
            id: `5`,
            programName_en: `Max Muay Thai6`,
            programName_th: `แม็กซ์มวยไทย`,
            heading_en: `Max Muay Thai6`,
            heading_th: `แม็กซ์มวยไทย`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
            article_th: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
          },
          {
            id: `6`,
            programName_en: `Max Muay Thai7`,
            programName_th: `แม็กซ์มวยไทย`,
            heading_en: `Max Muay Thai7`,
            heading_th: `แม็กซ์มวยไทย`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
            article_th: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
          },
          {
            id: `7`,
            programName_en: `Max Muay Thai8`,
            programName_th: `แม็กซ์มวยไทย`,
            heading_en: `Max Muay Thai8`,
            heading_th: `แม็กซ์มวยไทย`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
            article_th: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
          },
          {
            id: `8`,
            programName_en: `Max Muay Thai9`,
            programName_th: `แม็กซ์มวยไทย`,
            heading_en: `Max Muay Thai9`,
            heading_th: `แม็กซ์มวยไทย`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
            article_th: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
          },
          {
            id: `9`,
            programName_en: `Max Muay Thai10`,
            programName_th: `แม็กซ์มวยไทย`,
            heading_en: `Max Muay Thai10`,
            heading_th: `แม็กซ์มวยไทย`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
            article_th: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
          },
        ],
      },
    })
    // console.log('dddddddddd22',json.data)
    // console.log('ddddddddd3')
    json = json2.routes[0].response.body.data
    // console.log('dddddddddd2', json2.routes[0].response.body)
    fetchMock.restore()
    // You should not return in Vods <-- change to something like data
    dispatch(fetchNewsSuccess(json))
    // dispatch(fetchNewsSuccess(json.data))
  } catch (error) {
    console.log(error)
  }
}
export const fetchNEWS = token => async dispatch => {
  // console.log('ddddddddddFetchNews')
  dispatch(fetchNewsReq())
  const url = `${api.SERVER}/maxnews`
  try {
    const json = await api.get(url)
    // console.log('dddddddddd2', json2.routes[0].response.body)
    // You should not return in Vods <-- change to something like data
    dispatch(NewsSuccess(json))
    // dispatch(fetchNewsSuccess(json.data))
  } catch (error) {
    console.log(error)
  }
}
export const fetchNewsBig = token => async dispatch => {
  // console.log('ddddddddddFetchNews')
  dispatch(fetchNewsReq())
  const url = `${api.SERVER}/maxnews`
  try {
    fetchMock.restore()
    // const json = await api.get(url)
    let json = ''
    let json2 = await fetchMock.post(`${api.SERVER}/news`, {
      body: {
        code: 200,
        data: [
          {
            id: `0`,
            programName_en: `Max Muay ThaiBig`,
            programName_th: `แม็กซ์มวยไทยBig`,
            heading_en: `Max Muay ThaiBig`,
            heading_th: `แม็กซ์มวยไทยBig`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt`,
            article_th: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt`,
          },
        ],
      },
    })
    // console.log('dddddddddd22',json.data)
    json = json2.routes[0].response.body.data
    // console.log('dddddddddd2', json2.routes[0].response.body)
    fetchMock.restore()
    // You should not return in Vods <-- change to something like data
    dispatch(NewsSuccess(json))
  } catch (error) {
    console.log(error)
  }
}
export const fetchNewsSmaill = token => async dispatch => {
  // console.log('ddddddddddFetchNews')
  dispatch(fetchNewsReq())
  const url = `${api.SERVER}/maxnews`
  try {
    fetchMock.restore()
    // const json = await api.get(url)
    let json = ''
    let json2 = await fetchMock.post(`${api.SERVER}/news`, {
      body: {
        code: 200,
        data: [
          {
            id: `01`,
            programName_en: `Max Muay Thai01`,
            programName_th: `แม็กซ์มวยไทย01`,
            heading_en: `Max Muay Thai01`,
            heading_th: `แม็กซ์มวยไทย01`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt`,
            article_th: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt`,
          },
          {
            id: `02`,
            programName_en: `Max Muay Thai02`,
            programName_th: `แม็กซ์มวยไทย02`,
            heading_en: `Max Muay Thai02`,
            heading_th: `แม็กซ์มวยไทย02`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt`,
            article_th: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt`,
          },
          {
            id: `03`,
            programName_en: `Max Muay Thai03`,
            programName_th: `แม็กซ์มวยไทย03`,
            heading_en: `Max Muay Thai03`,
            heading_th: `แม็กซ์มวยไทย03`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt`,
            article_th: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt`,
          },
        ],
      },
    })
    // console.log('dddddddddd22',json.data)
    json = json2.routes[0].response.body.data
    // console.log('dddddddddd2', json2.routes[0].response.body)
    fetchMock.restore()
    // You should not return in Vods <-- change to something like data
    dispatch(NewsSuccess(json))
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
    case FETCH_NEWS_SUCCESS: {
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
    }
    case NEWS_SUCCESS: {
      console.log('ddddddddddNEWS', action)
      return {
        ...state,
        loading: false,
        news: action.payload,
      }
    }
    case PAGINATION: {
      return {
        ...state,
        index: state.index + 2,
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

export default newsReducer
