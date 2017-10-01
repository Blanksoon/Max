import { connect } from 'react-redux'
import LoginLang from '../../components/commons/LoginLang'
import { setCookie } from '../../redux/modules/cookie'

const mapStateToProps = state => ({
  email: state.auth.email,
  lang: state.cookie.lang,
})
export default connect(mapStateToProps, { setCookie })(LoginLang)
