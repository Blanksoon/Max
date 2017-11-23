// types
const TOGGLE_MODAL = 'TOGGLE_MODAL'
const MODAL_UPDATE_TYPE = 'MODAL_UPDATE_TYPE'
const MODAL_URL = 'MODAL_URL'
const CLOSE_MODAL = 'CLOSE_MODAL'
const MODAL_REGISTER = 'MODAL_REGISTER'
const MODAL_FORGOTPASS = 'MODAL_FORGOTPASS'
const MODAL_PURCHASEITEM = 'MODAL_PURCHASEITEM'
const MODAL_CHANGEPASS = 'MODAL_CHANGEPASS'
const NEW_PASSWORD = 'NEW_PASSWORD'
const BUY_PRODUCT = 'BUY_PRODUCT'
const UPDATE_ID = 'UPDATE_ID'

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
export const newPassword = modalType => {
  console.log('newPassword')
  return {
    type: NEW_PASSWORD,
    payload: { modalType },
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
export const changepassModal = modalType => {
  return {
    type: MODAL_CHANGEPASS,
    payload: { modalType },
  }
}
export const purchaseItemModal = modalType => {
  return {
    type: MODAL_PURCHASEITEM,
    payload: { modalType },
  }
}
export const buyProduct = product => {
  return {
    type: BUY_PRODUCT,
    payload: { product },
  }
}
export const updateID = id => {
  return {
    type: UPDATE_ID,
    payload: { id },
  }
}

const initialState = {
  activeModal: false,
  modalType: 2,
  modalURL: 'static/flightcard.jpg',
  id: 0,
  video: false,
  product: '',
}

const modalReducer = (state = initialState, action) => {
  console.log('ifliveProduct', action.type)
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
    case NEW_PASSWORD: {
      return {
        ...state,
        modalType: 6,
      }
    }
    case MODAL_FORGOTPASS: {
      return {
        ...state,
        modalType: 7,
      }
    }
    case MODAL_PURCHASEITEM: {
      return {
        ...state,
        modalType: 8,
      }
    }
    case MODAL_CHANGEPASS: {
      return {
        ...state,
        modalType: action.payload.modalType,
      }
    }
    case BUY_PRODUCT: {
      // console.log('iff111111111111', action.URL)
      return {
        ...state,
        product: action.payload.product,
      }
    }
    case UPDATE_ID: {
      return {
        ...state,
        id: action.payload.id,
      }
    }
    default: {
      return state
    }
  }
}

export default modalReducer
