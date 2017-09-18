import { connect } from 'react-redux'
import NewModal from '../components/modal/NewModal'
import { toogleModal } from '../actions/modal'

const mapStateToProps = state => ({
  active: state.modal.activeModal,
  modalType: state.modal.modalType,
  modalURL: state.modal.modalURL,
})

const mapDispatchToProps = dispatch => ({
  toogleModalAction: () => dispatch(toogleModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewModal)
