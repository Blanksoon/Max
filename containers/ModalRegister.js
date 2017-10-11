import { connect } from 'react-redux'
import ModalRegister from '../components/modal/ModalRegister'
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
console.log('regggggg sfs')
const mapDispatchToProps = dispatch => ({
  registerModal: modalType => dispatch(registerModal(modalType)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalRegister)
