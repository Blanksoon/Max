import { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import { BackVideoCenter } from '../components/videoPlayer/BackVideoCenter'
import Players from '../components/videoPlayer/Player'
import { LiveDescription } from '../components/livePlayer/LiveDescription'
import LiveTop from '../components/livePlayer/LiveTop'
import UpNext from '../components/videoPlayer/UpNext'
import StadiumTicket from '../components/home/StadiumTicket'
import { Flex, Box, Image, Text } from 'rebass'
import Container from '../components/commons/Container'
import Main from '../layouts/Main'
import color from '../components/commons/vars'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../redux/store'
import { fetchLive } from '../redux/modules/live'
import { currentLiveSelector } from '../redux/selectors/live'
import { recentVodsSelector } from '../redux/selectors/vod'
import { fetchVods } from '../redux/modules/vod'
import NewModal from '../containers/NewModal'
import { dateDiff } from '../util'
import {
  toggleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../redux/modules/modal'
const WrapperStadiumTicket = styled.div`
  color: #ffffff;
  background-color: #b71111;
`
const WrapperLivePlayer = styled.div`
  background-color: ${props => props.color.lightBlue};
`
const LivePlayer = styled.div`height: 36rem;`
class LiveVdo extends Component {
  constructor(props) {
    super(props)
    const curDate = new Date()
    const liveDate = new Date(props.live.OnAirTime)
    this.state = {
      canWatch: props.live.videoUrl !== '',
      countdown: dateDiff(curDate, liveDate),
      liveNow: false,
    }
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      const curDate = new Date()
      const liveDate = new Date(this.props.live.OnAirTime)
      this.setState({
        liveNow: liveDate.getTime() - curDate.getTime() < 0,
        countdown: dateDiff(curDate, liveDate),
      })
    }, 1000)
  }
  render() {
    const { url, live, vods } = this.props
    const { countdown } = this.state
    return (
      <Main url={url}>
        <NewModal />
        <div style={{ paddingTop: '2rem' }}>
          <WrapperLivePlayer color={color}>
            <Container>
              <Flex>
                <Box w={12 / 12}>
                  <BackVideoCenter name="Back to Live" url={url} />
                </Box>
              </Flex>
            </Container>
          </WrapperLivePlayer>
        </div>
        <div>
          <WrapperLivePlayer color={color}>
            <Container>
              <LiveTop live={live} countdown={countdown} />
            </Container>
          </WrapperLivePlayer>
        </div>
        <div>
          <WrapperLivePlayer color={color}>
            <Container>
              <Flex>
                <Box w={12 / 12} bg="white">
                  <LiveDescription live={live} />
                  <Box width={12 / 12} pt="1rem" pl="1rem" pr="1rem">
                    <hr size="0.1" />
                  </Box>
                </Box>
              </Flex>
            </Container>
          </WrapperLivePlayer>
        </div>
        <div>
          <WrapperLivePlayer color={color}>
            <Container>
              <Flex>
                <Box w={12 / 12} bg="white">
                  <UpNext name="THIS SHOW RELATED VIDEO" vods={vods} />
                </Box>
              </Flex>
            </Container>
          </WrapperLivePlayer>
        </div>
        <WrapperStadiumTicket>
          <Container>
            <Flex>
              <Box w={12 / 12}>
                <StadiumTicket />
              </Box>
            </Flex>
          </Container>
        </WrapperStadiumTicket>
      </Main>
    )
  }
}
const mapStateToProps = state => {
  const live = currentLiveSelector(state)
  const vods = recentVodsSelector(state)
  return { live, vods }
}
LiveVdo.getInitialProps = async ({ store, isServer, query, req }) => {
  let state = store.getState()
  const token = state.auth.token
  const response = await fetchLive(token, query.id)(store.dispatch)
  const responesVods = await fetchVods(token)(store.dispatch)
  state = store.getState()
  const props = mapStateToProps(state)
  return props
}

export default withRedux(initStore, mapStateToProps, {
  fetchLive,
  toggleModal,
  updateModalType,
  indexModalURL,
  closeModal,
})(LiveVdo)
