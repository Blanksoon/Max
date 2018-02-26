import * as api from '../../api'
import fetchMock from 'fetch-mock'

// types
const FETCH_NEWS_REQ = 'FETCH_NEWS_REQ'
const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'

// actions
export const fetchNewsReq = () => ({
  type: FETCH_NEWS_REQ,
})
export const fetchNewsSuccess = news => {
  console.log('66666666666', news)
  return {
    type: FETCH_NEWS_SUCCESS,
    payload: news,
  }
}
export const fetchNews = token => async dispatch => {
  console.log('dddddd1')
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
            id: `1`,
            programName_en: `Max Muay Thai`,
            programName_th: `แม็กซ์มวยไทย`,
            heading_en: `Max Muay Thai`,
            heading_th: `แม็กซ์มวยไทย`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
            article_th: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
          },
          {
            id: `2`,
            programName_en: `Max Muay Thai`,
            programName_th: `แม็กซ์มวยไทย`,
            heading_en: `Max Muay Thai`,
            heading_th: `แม็กซ์มวยไทย`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
            article_th: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
          },
          {
            id: `3`,
            programName_en: `Max Muay Thai`,
            programName_th: `แม็กซ์มวยไทย`,
            heading_en: `Max Muay Thai`,
            heading_th: `แม็กซ์มวยไทย`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
            article_th: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
          },
          {
            id: `4`,
            programName_en: `Max Muay Thai`,
            programName_th: `แม็กซ์มวยไทย`,
            heading_en: `Max Muay Thai`,
            heading_th: `แม็กซ์มวยไทย`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
            article_th: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
          },
          {
            id: `5`,
            programName_en: `Max Muay Thai`,
            programName_th: `แม็กซ์มวยไทย`,
            heading_en: `Max Muay Thai`,
            heading_th: `แม็กซ์มวยไทย`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
            article_th: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
          },
          {
            id: `6`,
            programName_en: `Max Muay Thai`,
            programName_th: `แม็กซ์มวยไทย`,
            heading_en: `Max Muay Thai`,
            heading_th: `แม็กซ์มวยไทย`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
            article_th: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
          },
          {
            id: `7`,
            programName_en: `Max Muay Thai`,
            programName_th: `แม็กซ์มวยไทย`,
            heading_en: `Max Muay Thai`,
            heading_th: `แม็กซ์มวยไทย`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
            article_th: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
          },
          {
            id: `8`,
            programName_en: `Max Muay Thai`,
            programName_th: `แม็กซ์มวยไทย`,
            heading_en: `Max Muay Thai`,
            heading_th: `แม็กซ์มวยไทย`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
            article_th: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
          },
          {
            id: `9`,
            programName_en: `Max Muay Thai`,
            programName_th: `แม็กซ์มวยไทย`,
            heading_en: `Max Muay Thai`,
            heading_th: `แม็กซ์มวยไทย`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
            article_th: `In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.`,
          },
          {
            id: `10`,
            programName_en: `Max Muay Thai`,
            programName_th: `แม็กซ์มวยไทย`,
            heading_en: `Max Muay Thai`,
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
    console.log('dddddddddd2', json2.routes[0].response.body)
    fetchMock.restore()
    // You should not return in Vods <-- change to something like data
    dispatch(fetchNewsSuccess(json))
    // dispatch(fetchNewsSuccess(json.data))
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
