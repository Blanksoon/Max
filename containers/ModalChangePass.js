import { connect } from 'react-redux'
import ModalChangePass from '../components/modal/ModalChangePass'
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
  registerModal: modalType => dispatch(registerModal(modalType)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalChangePass)
