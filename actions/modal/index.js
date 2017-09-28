import {
  TOOGLE_MODAL,
  MODAL_UPDATE_TYPE,
  MODAL_URL,
  CLOSE_MODAL,
} from './types'
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

export { toogleModal, updateModalType, indexModalURL, closeModal }
