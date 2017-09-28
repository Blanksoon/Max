// types
const TOOGLE_MODAL = 'TOOGLE_MODAL'
const MODAL_UPDATE_TYPE = 'MODAL_UPDATE_TYPE'
const MODAL_URL = 'MODAL_URL'
const CLOSE_MODAL = 'CLOSE_MODAL'

// actions
const toogleModal = () => {
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
const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  }
}

const initialState = {
  activeModal: false,
  modalType: 2,
  modalURL: 'static/flightcard.jpg',
  video: false,
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
    case MODAL_URL: {
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
