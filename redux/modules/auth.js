import * as api from '../../api'
import { setCookie, removeCookie } from './cookie'
import { closeModal } from './modal'
import { fetchVods } from './vod'
import { fetchLives } from './live'

// types
const LOGIN_REQ = 'LOGIN_REQ'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAIL = 'LOGIN_FAIL'
const LOGOUT = 'LOGOUT'

// actions
export const loginReq = () => ({
  type: LOGIN_REQ,
})
export const loginSuccess = ({ token, email }) => ({
  type: LOGIN_SUCCESS,
  payload: { token, email },
})
export const loginFail = ({ code, message }) => ({
  type: LOGIN_FAIL,
  payload: { code, message },
})
export const currentReq = () => ({
  type: CURRENT_REQ,
})
export const currentSucess = ({ password, token }) => ({
  type: CURRENT_SUCCESS,
  payload: { password, token },
})

export const fbLogin = providerData => async dispatch => {
  dispatch(loginReq())
  try {
    const { data, status } = await api.post(
      `${api.SERVER}/fb-login`,
      providerData
    )
    if (data.token == 'undefined' || data.token == undefined) {
      dispatch({
        type: LOGOUT,
      })
    } else {
      dispatch(setCookie('email', data.email))
      dispatch(setCookie('token', data.token))
      dispatch(loginSuccess(data))
    }
  } catch (error) {
    dispatch(
      loginFail({
        code: status.code,
        message: status.message,
      })
    )
  }
}

export const localLogin = providerData => async dispatch => {
  console.log('providerData', providerData)
  dispatch(loginReq())
  try {
    const { data, status } = await api.post(
      `${api.SERVER}/local-login`,
      providerData
    )
    if (data.token == 'undefined' || data.token == undefined) {
      dispatch({
        type: LOGOUT,
      })
      dispatch(
        loginFail({
          code: status.code,
          message: status.message,
        })
      )
    } else {
      dispatch(setCookie('email', data.email))
      dispatch(setCookie('token', data.token))
      dispatch(loginSuccess(data))
      dispatch(closeModal())
      dispatch(fetchLives(data.token))
      dispatch(fetchVods(data.token))
      dispatch(loginFail())
    }
  } catch (error) {
    dispatch(
      loginFail({
        code: status.code,
        message: status.message,
      })
    )
  }
}
export const logout = () => async dispatch => {
  dispatch(removeCookie('email'))
  dispatch(removeCookie('token'))
  dispatch(fetchLives())
  dispatch(fetchVods())
  dispatch({
    type: LOGOUT,
  })
}
export const currentpassword = providerData => async dispatch => {
  dispatch(loginReq())
  try {
    const { status, data } = await api.post(
      `${api.SERVER}/check-old-password?token=${providerData.token}`,
      providerData
    )
  } catch (error) {
    dispatch(
      loginFail({
        message: status.message,
      })
    )
  }
}

const initialState = {
  loading: false,
  error: {},
}
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQ:
      return {
        ...state,
        loading: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        email: action.payload.email,
        token: action.payload.token,
      }
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: {
          code: action.payload.code,
          message: action.payload.message,
        },
      }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}
export default authReducer
