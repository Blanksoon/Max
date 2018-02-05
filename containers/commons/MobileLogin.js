import { connect } from 'react-redux'
import MobileLogin from '../../components/commons/MobileLogin'
import { setCookie } from '../../redux/modules/cookie'

const mapStateToProps = state => ({
  email: state.auth.email,
  lang: state.cookie.lang,
})
export default connect(mapStateToProps, { setCookie })(MobileLogin)
