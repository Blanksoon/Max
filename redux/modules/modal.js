// types
const TOGGLE_MODAL = 'TOGGLE_MODAL'
const MODAL_UPDATE_TYPE = 'MODAL_UPDATE_TYPE'
const MODAL_URL = 'MODAL_URL'
const CLOSE_MODAL = 'CLOSE_MODAL'
const MODAL_REGISTER = 'MODAL_REGISTER'
const MODAL_FORGOTPASS = 'MODAL_FORGOTPASS'
// actions
export const toggleModal = () => {
  return {
    type: TOGGLE_MODAL,
  }
}
export const updateModalType = modalType => {
  return {
    type: MODAL_UPDATE_TYPE,
    payload: { modalType },
  }
}
export const indexModalURL = modalURL => {
  return {
    type: MODAL_URL,
    URL: { modalURL },
  }
}
export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  }
}
export const registerModal = modalType => {
  return {
    type: MODAL_REGISTER,
    payload: { modalType },
  }
}
export const forgotPassModal = modalType => {
  return {
    type: MODAL_FORGOTPASS,
    payload: { modalType },
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
    case CLOSE_MODAL: {
      return {
        ...state,
        activeModal: false,
        modalType: 0,
      }
    }
    case MODAL_REGISTER: {
      return {
        ...state,
        modalType: action.payload.modalType,
      }
    }
    case MODAL_FORGOTPASS: {
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
