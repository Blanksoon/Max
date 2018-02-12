import { connect } from 'react-redux'
import ModalWechat from '../components/modal/ModalWechat'
import {
  toggleModal,
  updateModalType,
  indexModalURL,
  buyProduct,
  updateID,
} from '../redux/modules/modal'

const mapStateToProps = state => {
  return {
    // active: state.modal.activeModal,
  }
}
const mapDispatchToProps = dispatch => ({
  toggleModalAction: () => dispatch(toggleModal()),
  updateModalAction: modalType => dispatch(updateModalType(modalType)),
  buyProductAction: product => dispatch(buyProduct(product)),
  updateIDAction: id => dispatch(updateID(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalWechat)
