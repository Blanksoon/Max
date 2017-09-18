import { ADD_COUNTER } from '../actions/types'

const initialState = 90

console.log('hi')
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
