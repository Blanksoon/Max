import { connect } from 'react-redux'
import ModalLiveItem from '../components/modal/ModalLiveItem'
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
  toggleModalAction: () => dispatch(toggleModal()),
  updateModalAction: modalType => dispatch(updateModalType(modalType)),
  liveProductAction: live => dispatch(liveProduct(live)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalLiveItem)
