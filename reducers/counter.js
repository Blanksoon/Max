import { ADD_COUNTER } from '../actions/types'

const initialState = 90

const couterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER: {
      return state + 1
    }
    default: {
      return state
    }
  }
}

export default couterReducer
