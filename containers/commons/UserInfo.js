import { connect } from 'react-redux'
import UserInfo from '../../components/commons/UserInfo'
import { logout } from '../../redux/modules/auth'

export default connect(null, { logout })(UserInfo)
