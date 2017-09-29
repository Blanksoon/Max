import { connect } from 'react-redux'
import ModalButton from '../components/modal/ModalButton'
import {
  toggleModal,
  updateModalType,
  indexModalURL,
} from '../redux/modules/modal'

const mapStateToProps = state => {
  return {
    // active: state.modal.activeModal,
  }
}
//console.log('hi')
const mapDispatchToProps = dispatch => ({
  toogleModalAction: () => dispatch(toogleModal()),
  updateModalAction: modalType => dispatch(updateModalType(modalType)),
  indexModalURL: modalURL => dispatch(indexModalURL(modalURL)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalButton)
