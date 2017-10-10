import * as api from '../../api'

//types
const FETCH_PROGRAM_NAME = 'FETCH_PROGRAM_NAME'

export const fetchProgramName = program => ({
  type: FETCH_PROGRAM_NAME,
  payload: program,
})

export const fetchPrograms = () => async dispatch => {
  console.log('hi')
  const url = `${api.SERVER}/program-name`
  try {
    const json = await api.get(url)
    // You should not return in Vods <-- change to something like data
    console.log(json.data)
    dispatch(fetchProgramName(json.data))
  } catch (error) {
    console.log(error)
  }
}

const initialState = {
  programname_en: [],
  programname_th: [],
}

const programReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROGRAM_NAME: {
      return {
        ...state,
        programname_en: [
          'Max Muay Thai',
          'Muay Thai Battle',
          'Muaythai Fighter',
          'The Champion Muay Thai',
        ],
        programname_th: [
          'แม็กซ์มวยไทย',
          'มวยไทย แบทเทิล',
          'มวยไทย ไฟต์เตอ',
          'เดอะแชมป์เปี้ยน มวยไทย ตัดเชือก',
        ],
      }
    }
    default: {
      return state
    }
  }
}

export default programReducer
