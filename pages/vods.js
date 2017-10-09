import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import withRedux from 'next-redux-wrapper'
import VideoBox from '../components/videoCenter/VideoBox'
import { Flex, Box } from 'rebass'
import Container from '../components/commons/Container'
import color from '../components/commons/vars'
import { initStore } from '../redux/store'
import { fetchVods } from '../redux/modules/vod'
import NewModal from '../containers/NewModal'
import { recentVodsSelector, hilightVodSelector } from '../redux/selectors/vod'
import {
  toggleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../redux/modules/modal'

const WrapperNavbar = styled.div`background-color: #009999;`
const WrapperVod = styled.div`
  background-color: ${props => props.color.lightBlue};
`
import Main from '../layouts/Main'

class Vods extends React.Component {
  render() {
    const { hilight, vods } = this.props
    return (
      <Main url={this.props.url}>
        <NewModal />
        <div className="videocenter">
          <WrapperVod color={color}>
            <Container>
              <Box pt="20px" bg="white">
                <VideoBox hilight={hilight} vods={vods} />
              </Box>
            </Container>
          </WrapperVod>
        </div>
      </Main>
    )
  }
}
const mapStateToProps = state => {
  return {
    hilight: hilightVodSelector(state),
    vods: recentVodsSelector(state),
  }
}
Vods.getInitialProps = async ({ store, isServer, query, req }) => {
  let state = store.getState()
  const token = state.auth.token
  const response = await fetchVods(token)(store.dispatch)
  state = store.getState()
  const props = mapStateToProps(state)
  return props
}

export default withRedux(initStore, mapStateToProps, {
  fetchVods,
  updateModalType,
  indexModalURL,
  closeModal,
})(Vods)
