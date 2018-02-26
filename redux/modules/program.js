import * as api from '../../api'

//types
const FETCH_PROGRAM_NAME = 'FETCH_PROGRAM_NAME'

export const fetchProgramName = program => ({
  type: FETCH_PROGRAM_NAME,
  payload: program,
})

export const fetchPrograms = () => async dispatch => {
  //console.log('hi')
  const url = `${api.SERVER}/program-name`
  try {
    const json = await api.get(url)
    // You should not return in Vods <-- change to something like data
    console.log('ddddddddddJson', json.data)
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
      console.log('ddddddddReduc', action.payload[0].title_en)
      return {
        ...state,
        programname_en: [
          action.payload[0].title_en,
          action.payload[1].title_en,
          action.payload[2].title_en,
          action.payload[3].title_en,
          action.payload[4].title_en,
          action.payload[5].title_en,
          action.payload[6].title_en,
          action.payload[7].title_en,
        ],
        programname_th: [
          action.payload[0].title_th,
          action.payload[1].title_th,
          action.payload[2].title_th,
          action.payload[3].title_th,
          action.payload[4].title_th,
          action.payload[5].title_th,
          action.payload[6].title_th,
          action.payload[7].title_th,
        ],
      }
    }
    default: {
      return state
    }
  }
}

export default programReducer
