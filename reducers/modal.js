import {
  TOOGLE_MODAL,
  MODAL_UPDATE_TYPE,
  MODAL_URL,
  CLOSE_MODAL,
} from '../actions/modal/types'
const initialState = {
  activeModal: false,
  modalType: 2,
  modalURL: 'static/flightcard.jpg',
  video: false,
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
    case CLOSE_MODAL: {
      return {
        ...state,
        activeModal: false,
        modalType: 0,
      }
    }
    default: {
      return state
    }
  }
}

export default modalReducer
