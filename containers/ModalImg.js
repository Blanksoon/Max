import { connect } from 'react-redux'
import ModalImg from '../components/modal/ModalImg'
import { toogleModal, updateModalType } from '../actions/modal'

const mapStateToProps = state => {
  return {
    // active: state.modal.activeModal,
  }
}

const mapDispatchToProps = dispatch => ({
  toogleModalAction: () => dispatch(toogleModal()),
  updateModalAction: modalType => dispatch(updateModalType(modalType)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalImg)
