import * as api from '../../api'

// types
const FETCH_LIVES_REQ = 'FETCH_LIVES_REQ'
const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'

const FETCH_LIVE_REQ = 'FETCH_LIVE_REQ'
const FETCH_LIVE_SUCCESS = 'FETCH_LIVE_SUCCESS'

// actions
export const fetchLivesReq = () => ({
  type: FETCH_LIVES_REQ,
})
export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
})
export const fetchProducts = token => async dispatch => {
  dispatch(fetchLivesReq())
  console.log('hhhh')
  const url = `${api.SERVER}/product?token=${token}`
  try {
    const json = await api.get(url)
    console.log('json', json)
    // You should not return in Vods <-- change to something like data
    dispatch(fetchProductsSuccess(json.data))
  } catch (error) {
    console.log(error)
  }
}

export const fetchLiveReq = () => ({
  type: FETCH_LIVE_REQ,
})
export const fetchLiveSuccess = lives => ({
  type: FETCH_LIVE_SUCCESS,
  payload: lives,
})
export const fetchLive = (token, id) => async dispatch => {
  dispatch(fetchLiveReq())
  const url = `${api.SERVER}/lives/${id}?token=${token}`
  try {
    const json = await api.get(url, { token })
    console.log('json', json)
    // You should not return in Vods <-- change to something like data
    dispatch(fetchLiveSuccess(json.data))
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
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIVE_REQ:
    case FETCH_LIVES_REQ:
      return {
        ...state,
        loading: true,
      }
    case FETCH_PRODUCTS_SUCCESS:
      const products = action.payload
      const newState = Object.assign({}, state)
      return {
        products,
        loading: false,
      }
    case FETCH_LIVE_SUCCESS:
      return {
        ...state,
        current: action.payload[0].id,
        data: {
          ...state.data,
          [action.payload[0].id]: action.payload[0],
        },
        loading: false,
      }
    default: {
      return state
    }
  }
}

export default productsReducer
