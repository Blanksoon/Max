import { connect } from 'react-redux'
import ModalForgotPass from '../components/modal/ModalFogotPass'
import {
  updateModalType,
  indexModalURL,
  registerModal,
} from '../redux/modules/modal'

const mapStateToProps = state => {
  return {
    // active: state.modal.activeModal,
  }
}
const mapDispatchToProps = dispatch => ({
  fogotPassModal: modalType => dispatch(forgotPassModal(modalType)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalForgotPass)
