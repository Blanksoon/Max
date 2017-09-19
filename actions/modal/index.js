import { TOOGLE_MODAL, MODAL_UPDATE_TYPE, MODAL_URL } from './types'
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

export { toogleModal, updateModalType, indexModalURL }
