import { connect } from 'react-redux'
import NewModal from '../components/modal/NewModal'
import { toogleModal, closeModal } from '../actions/modal'

const mapStateToProps = state => ({
  active: state.modal.activeModal,
  modalType: state.modal.modalType,
  modalURL: state.modal.modalURL,
})

const mapDispatchToProps = dispatch => ({
  toogleModalAction: () => dispatch(toogleModal()),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewModal)
