import { TOOGLE_MODAL, MODAL_UPDATE_TYPE } from '../actions/modal/types'
const initialState = {
  activeModal: false,
  modalType: 2,
  modalURL: 'static/DailyFightcard 12092017 .jpg',
}

const modalReducer = (state = initialState, action) => {
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
    default: {
      return state
    }
  }
}

export default modalReducer
