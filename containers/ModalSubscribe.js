import { connect } from 'react-redux'
import ModalSubscribe from '../components/modal/ModalSubscribe'
import {
  toggleModal,
  updateModalType,
  indexModalURL,
  liveProduct,
} from '../redux/modules/modal'

const mapStateToProps = state => {
  return {
    // active: state.modal.activeModal,
  }
}
const mapDispatchToProps = dispatch => ({
  toggleModalAction: () => dispatch(toggleModal()),
  updateModalAction: modalType => dispatch(updateModalType(modalType)),
  liveProductAction: modalURL => dispatch(liveProduct(modalURL)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalSubscribe)
