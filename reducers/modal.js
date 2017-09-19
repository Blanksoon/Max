import {
  TOOGLE_MODAL,
  MODAL_UPDATE_TYPE,
  MODAL_URL,
} from '../actions/modal/types'
const initialState = {
  activeModal: false,
  modalType: 2,
  modalURL: 'static/DailyFightcard 12092017 .jpg',
}

const modalReducer = (state = initialState, action) => {
  console.log('hello 1124', action)
  switch (action.type) {
    case TOOGLE_MODAL: {
      return {
        ...state,
        activeModal: !state.activeModal,
      }
    }
    case MODAL_UPDATE_TYPE: {
      return {
        ...state,
        modalType: action.payload.modalType,
      }
    }
    case MODAL_URL: {
      console.log('state', state)
      return {
        ...state,
        modalURL: action.URL.modalURL,
      }
    }
    default: {
      return state
    }
  }
}

export default modalReducer
