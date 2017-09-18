import { TOOGLE_MODAL, MODAL_UPDATE_TYPE } from './types'
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

export { toogleModal, updateModalType }
