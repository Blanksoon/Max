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
import { relatedVodsSelector } from '../redux/selectors/vod'
import { fetchVods, setFetchFilter } from '../redux/modules/vod'
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
    const liveDate = new Date(props.live.liveFromDate)
    this.state = {
      canWatch: props.live.videoUrl !== '',
      countdown: dateDiff(curDate, liveDate),
      liveNow: liveDate.getTime() - curDate.getTime() < 0,
      i: 0,
    }
    this.state.renderUI = this.getRenderUI(this.state)
  }
  getRenderUI(state) {
    if (!state.liveNow) {
      return 'COUNTDOWN'
    } else {
      if (state.canWatch) {
        return 'VIDEO_PLAYER'
      } else {
        return 'NOW_SHOWING'
      }
    }
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.state.i++
      const curDate = new Date()
      const liveDate = new Date(this.props.live.liveFromDate)

      this.setState({
        renderUI: this.getRenderUI(this.state),
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
              <LiveTop
                ui={this.state.renderUI}
                live={live}
                countdown={countdown}
              />
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
                  <UpNext
                    name="THIS SHOW RELATED VIDEO"
                    vods={vods}
                    progname={live.programName}
                  />
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
  const vods = relatedVodsSelector(live.programName)(state)
  return { live, vods }
}
LiveVdo.getInitialProps = async ({ store, isServer, query, req }) => {
  let state = store.getState()
  const token = state.auth.token

  // Fetch current live
  await fetchLive(token, query.id)(store.dispatch)
  const live = currentLiveSelector(store.getState())

  // Fetch vods with same program name
  store.dispatch(
    setFetchFilter({
      progname: live.programName,
    })
  )
  await fetchVods(token)(store.dispatch, store.getState)

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
