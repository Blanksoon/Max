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
import { Flex, Box, Image, Text, Provider } from 'rebass'
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
import { I18nextProvider } from 'react-i18next'
import startI18n from '../tools/startI18n'
import { getTranslation } from '../tools/translationHelpers'
import { langSelector } from '../redux/selectors/lang'
import { langUrl } from '../tools/langUrl'
import { media, theme } from '../tools/responsive'

const WrapperStadiumTicket = styled.div`
  color: #ffffff;
  background-color: #b71111;
`
const WrapperLivePlayer = styled.div`
  background-color: ${props => props.color.lightBlue};
`

const Hr = styled.hr`
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
  ${media.phone`
  margin-top: 0em;
  margin-bottom: 0em;
  `};
  ${media.iphone5`
  margin-top: -0.2em;
  margin-bottom: 0em;
  `};
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
      translations: this.props.translations,
      lang: this.props.lang,
    }
    this.state.renderUI = this.getRenderUI(this.state)
    this.i18n = startI18n(this.props.translations, this.props.cookie.lang)
    this.switchLang = this.switchLang.bind(this)
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

  async switchLang(lang) {
    this.setState({
      lang: lang,
      translations: await getTranslation(lang, ['common', 'navbar'], langUrl),
    })
  }

  render() {
    const { url, live, vods } = this.props
    const { countdown } = this.state
    const common = this.state.translations.translation.common
    const path = `lives/${this.props.live.id}`
    return (
      <I18nextProvider i18n={this.i18n}>
        <Provider theme={theme}>
          <Main
            url={url}
            nav={this.state.translations.translation.common}
            www={path}
            switchLanguage={this.switchLang}
          >
            <NewModal
              common={this.state.translations.translation.common}
              lang={this.state.lang}
              url={url}
            />
            <div>
              <WrapperLivePlayer color={color}>
                <Container>
                  <Flex pt={['0em', '0em', '0em', '2em', '2em']}>
                    <Box w={12 / 12}>
                      <BackVideoCenter name={common.BackToLive} url={url} />
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
                    common={common}
                    lang={this.state.lang}
                  />
                </Container>
              </WrapperLivePlayer>
            </div>
            <div>
              <WrapperLivePlayer color={color}>
                <Container>
                  <Flex>
                    <Box w={12 / 12} bg="white">
                      <LiveDescription
                        lang={this.state.lang}
                        common={common}
                        live={live}
                      />
                      <Box
                        width={12 / 12}
                        pt={['1rem', '1rem', '1rem', '1rem', '1rem']}
                        pl="1rem"
                        pr="1rem"
                      >
                        <Hr size="0.1" />
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
                        lang={this.state.lang}
                        name={common.THISSHOWRELATEDVIDEO}
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
                    <StadiumTicket common={common} />
                  </Box>
                </Flex>
              </Container>
            </WrapperStadiumTicket>
          </Main>
        </Provider>
      </I18nextProvider>
    )
  }
}
const mapStateToProps = state => {
  const live = currentLiveSelector(state)
  //console.log('live', live)
  const vods = relatedVodsSelector(live.programName)(state)
  const cookie = state.cookie
  const lang = langSelector(state)
  //console.log('vods', vods)
  return { live, vods, cookie, lang }
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
  const translations = await getTranslation(
    state.cookie.lang,
    ['common', 'navbar'],
    langUrl
  )
  const props = mapStateToProps(state)
  props.translations = translations
  return props
}

export default withRedux(initStore, mapStateToProps, {
  fetchLive,
  toggleModal,
  updateModalType,
  indexModalURL,
  closeModal,
})(LiveVdo)
