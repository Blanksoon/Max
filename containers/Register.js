import { connect } from 'react-redux'
import Register from '../components/login/Register'
import { toggleModal, closeModal } from '../redux/modules/modal'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  toggleModalAction: () => dispatch(toggleModal()),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
