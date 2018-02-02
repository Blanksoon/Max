import { connect } from 'react-redux'
import MobileLang from '../../components/commons/MobileLang'
import { setCookie } from '../../redux/modules/cookie'

const mapStateToProps = state => ({
  email: state.auth.email,
  lang: state.cookie.lang,
})
export default connect(mapStateToProps, { setCookie })(MobileLang)
