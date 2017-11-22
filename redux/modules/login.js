// types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

// actions
export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  }
}

export const initialState = {
  loginSucessful: false,
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      //console.log('LOGIN_SUCCESS')
      return {
        loginSucessful: true,
      }
    }
    default: {
      return state
    }
  }
}

export default loginReducer
