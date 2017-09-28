import { FETCH_VODS, FETCH_VODS_SUCCESS } from './types'
import { TOOGLE_MODAL } from '../modal/types'
import fetch from 'isomorphic-fetch'

const fetchVodsSuccess = vods => ({
  type: FETCH_VODS_SUCCESS,
  payload: vods,
})

const fetchVods = token => dispatch => {
  const data = JSON.stringify({ token })
  console.log('hiii', data)
  //'http://139.59.127.206:3001/vod'
  const uri = 'http://localhost:3001/vod'
  fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: data,
  })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
    .then(vods => {
      console.log(vods.data)
      // console.log(dispatch)
      return dispatch(fetchVodsSuccess(vods))
    })
    .catch(err => console.error(err))
}
const toogleModal = () => {
  return {
    type: TOOGLE_MODAL,
  }
}

export { fetchVods, fetchVodsSuccess, toogleModal }
