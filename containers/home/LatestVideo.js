import { connect } from 'react-redux'
import LatestVideo from '../../components/home/LatestVideo'
import { fetchVods, toogleModal } from '../../actions/vod'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => ({
  vods: state.vods,
})

const mapDispatchToProps = dispatch => ({
  fetchVods: token => dispatch(fetchVods(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LatestVideo)
