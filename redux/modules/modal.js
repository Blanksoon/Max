// types
const TOGGLE_MODAL = 'TOOGLE_MODAL'
const MODAL_UPDATE_TYPE = 'MODAL_UPDATE_TYPE'
const MODAL_URL = 'MODAL_URL'

// actions
const toggleModal = () => {
  return {
    type: TOOGLE_MODAL,
  }
}
const updateModalType = modalType => {
  return {
    type: MODAL_UPDATE_TYPE,
    payload: { modalType },
  }
}
const indexModalURL = modalURL => {
  return {
    type: MODAL_URL,
    URL: { modalURL },
  }
}

const initialState = {
  activeModal: false,
  modalType: 2,
  modalURL: 'static/DailyFightcard 12092017 .jpg',
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL: {
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
