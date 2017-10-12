import { connect } from 'react-redux'
import VideoBox from '../components/videoCenter/VideoBox'
import { filterVods } from '../redux/modules/vod'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  filterVods: progname => dispatch(filterVods(progname)),
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoBox)
