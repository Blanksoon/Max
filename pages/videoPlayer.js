import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import { BackVideoCenter } from '../components/videoPlayer/BackVideoCenter'
import Players from '../components/videoPlayer/Player'
import { Description } from '../components/videoPlayer/Description'
import UpNext from '../components/videoPlayer/UpNext'
import StadiumTicket from '../components/home/StadiumTicket'
import { Container, Flex, Box } from 'rebass'
import Main from '../layouts/Main'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../redux/store'
import { fetchVod, fetchVods, setFetchFilter } from '../redux/modules/vod'
import { currentVodSelector, relatedVodsSelector } from '../redux/selectors/vod'
import NewModal from '../containers/NewModal'
import Button from '../components/commons/Button'
import color from '../components/commons/vars'
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

const WrapperPlayer = styled.div`
  position: relative;
  width: 100%;
`

const WrapperButtonPlayer = styled.div`
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.65) 0%,
    rgba(0, 0, 0, 0.65) 1%,
    rgba(0, 0, 0, 0.65) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
class videoPlayer extends React.Component {
  constructor(props) {
    super(props)
    const curDate = new Date()
    this.state = {
      sec: 0,
    }
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  componentWillReceiveProps(nextProps) {
    const { vod } = this.props
    const { vod: nextVod } = nextProps
    if (
      vod.videoUrl !== nextVod.videoUrl ||
      vod.promoUrl !== nextVod.promoUrl
    ) {
      clearInterval(this.timerId)
      this.setState({
        sec: 0,
      })
    }
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      //console.log('sec', this.state.sec)
      const curDate = new Date()
      this.setState({
        sec: this.state.sec + 1,
      })
    }, 1000)
  }
  render() {
    const { url, vod, vods, token } = this.props
    let renderUI = <div />
    if (this.state.sec > 20 && (token == undefined || token == 'undefined')) {
      renderUI = (
        <WrapperPlayer>
          <Players Url={vod.promoUrl} />
          <WrapperButtonPlayer>
            <center>
              <Box pt="17rem">
                <Link href={`/getticket`}>
                  <a>
                    <Button>Buy Ticket</Button>
                  </a>
                </Link>
              </Box>
            </center>
          </WrapperButtonPlayer>
        </WrapperPlayer>
      )
    } else if (vod.videoUrl == 'null') {
      renderUI = <Players Url={vod.promoUrl} />
    } else {
      renderUI = <Players Url={vod.videoUrl} />
    }
    return (
      <div className="wrapper-index">
        <Main url={url}>
          <NewModal />
          <div className="wrapper-BackVideoCenter">
            <Container>
              <Flex>
                <Box w={12 / 12} pt="2rem">
                  <BackVideoCenter name="Back to On Demand" url={url} />
                </Box>
              </Flex>
            </Container>
          </div>
          <div>
            <Container>
              <Flex>
                <Box w={12 / 12}>{renderUI}</Box>
              </Flex>
            </Container>
          </div>
          <div className="wrapper-BackVideoCenter">
            <Container>
              <Flex>
                <Box w={12 / 12} bg="white">
                  <Description vod={vod} />
                </Box>
              </Flex>
            </Container>
          </div>
          <div className="wrapper-BackVideoCenter">
            <Container>
              <Flex>
                <Box w={12 / 12} bg="white">
                  <UpNext
                    name="Up next"
                    vods={vods}
                    progname={vod.programName_en}
                  />
                </Box>
              </Flex>
            </Container>
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
      </div>
    )
  }
}

const mapStateToProps = state => {
  const vod = currentVodSelector(state)
  const vods = relatedVodsSelector(vod.programName_en)(state)
  const token = state.auth.token
  return { vod, vods, token }
}
videoPlayer.getInitialProps = async ({ store, isServer, query, req }) => {
  let state = store.getState()
  const token = state.auth.token

  // Fetch current vod
  await fetchVod(token, query.id)(store.dispatch)
  const vod = currentVodSelector(store.getState())

  // Fetch other vod with same program name
  store.dispatch(
    setFetchFilter({
      progname: vod.programName_en,
    })
  )
  await fetchVods(token)(store.dispatch, store.getState)

  state = store.getState()
  const props = mapStateToProps(state)
  return props
}

export default withRedux(initStore, mapStateToProps, {
  toggleModal,
  updateModalType,
  indexModalURL,
  closeModal,
})(videoPlayer)
