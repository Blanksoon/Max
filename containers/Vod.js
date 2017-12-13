import { connect } from 'react-redux'
import VideoBox from '../components/vods/VideoBox'
import { pagination } from '../redux/modules/vod'

const mapStateToProps = state => ({
  index: state.vod.index,
  limit: state.vod.limit,
})

const mapDispatchToProps = dispatch => ({
  paginationAction: () => dispatch(pagination()),
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoBox)
