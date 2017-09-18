import { ADD_COUNTER } from './types'

const addCounter = () => {
  console.log('hellos')
  return {
    type: ADD_COUNTER,
  }
}

export { addCounter }
