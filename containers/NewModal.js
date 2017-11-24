import { connect } from 'react-redux'
import NewModal from '../components/modal/NewModal'
import { toggleModal, closeModal } from '../redux/modules/modal'

const mapStateToProps = state => ({
  active: state.modal.activeModal,
  modalType: state.modal.modalType,
  modalURL: state.modal.modalURL,
  product: state.modal.product,
  id: state.modal.id,
})

const mapDispatchToProps = dispatch => ({
  toggleModalAction: () => dispatch(toggleModal()),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewModal)
