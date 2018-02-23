import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import { BackVideoCenter } from '../components/videoPlayer/BackVideoCenter'
import Players from '../components/videoPlayer/Player'
import { Description } from '../components/videoPlayer/Description'
import UpNext from '../components/videoPlayer/UpNext'
import StadiumTicket from '../components/home/StadiumTicket'
import { Container, Flex, Box, Provider } from 'rebass'
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
import { I18nextProvider } from 'react-i18next'
import startI18n from '../tools/startI18n'
import { getTranslation } from '../tools/translationHelpers'
import { langSelector, switchLangSelector } from '../redux/selectors/lang'
import { langUrl } from '../tools/langUrl'
import { media, theme } from '../tools/responsive'

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
const WrapButton = styled.div`
  padding: 17rem;
  ${media.ipadpro`padding: 17rem;`};
  ${media.ipad`padding: 11.5rem;`};
  ${media.phone`padding: 5.2rem;`};
  ${media.iphone5`padding: 3.5rem;`};
`
class videoPlayer extends React.Component {
  constructor(props) {
    super(props)
    const curDate = new Date()
    this.state = {
      translations: this.props.translations,
      common: this.props.translations.translation.common,
      lang: this.props.lang,
      sec: 0,
    }
    this.i18n = startI18n(this.props.translations, this.props.cookie.lang)
    this.switchLang = this.switchLang.bind(this)
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  componentWillReceiveProps(nextProps) {
    let Vod = vod
    const { vod } = this.props
    const { vod: nextVod } = nextProps
    if (Vod !== undefined) {
      if (
        vod.videoUrl !== nextVod.videoUrl ||
        vod.promoUrl !== nextVod.promoUrl
      ) {
        this.setState({
          sec: 0,
        })
      }
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
  async switchLang(lang) {
    this.setState({
      lang: lang,
      translations: await getTranslation(lang, ['common', 'navbar'], langUrl),
    })
  }
  render() {
    const { url, vod, vods, token } = this.props
    let renderUI = <div />
    let renderUpnext = ''
    let renderDescription = ''
    if (vod !== undefined) {
      if (this.state.sec > 20 && vod.videoUrl == 'null') {
        renderUI = (
          <WrapperPlayer>
            <Players Url={vod.promoUrl} />
            <WrapperButtonPlayer>
              <center>
                <Box>
                  <WrapButton>
                    <Link href={`/getticket`}>
                      {/* <a> */}
                      <Button>{this.state.common.BuyTicket}</Button>
                      {/* </a> */}
                    </Link>
                  </WrapButton>
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
      renderUpnext = (
        <UpNext
          name={this.state.common.UPNEXT}
          vods={vods}
          progname={
            this.state.lang === 'en' ? vod.programName_en : vod.programName_en
          }
          lang={this.state.lang}
        />
      )
      renderDescription = (
        <Description
          lang={this.state.lang}
          common={this.state.common}
          vod={vod}
        />
      )
    }
    // console.log(
    //   'ddddddddddfsadfasdf',
    //   this.state.translations.translation.common
    // )
    return (
      <I18nextProvider i18n={this.i18n}>
        <Provider theme={theme}>
          <Main
            url={url}
            nav={this.state.translations.translation.common}
            switchLanguage={this.switchLang}
          >
            <NewModal
              common={this.state.translations.translation.common}
              lang={this.state.lang}
              url={this.props.url}
            />
            <div className="wrapper-BackVideoCenter">
              <Container>
                <Flex>
                  <Box
                    w={12 / 12}
                    pt={['0rem', '0rem', '0rem', '2rem', '2rem']}
                  >
                    <BackVideoCenter
                      name={this.state.common.BACKTOONDEMAND}
                      url={url}
                    />
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
                    {renderDescription}
                  </Box>
                </Flex>
              </Container>
            </div>
            <div className="wrapper-BackVideoCenter">
              <Container>
                <Flex>
                  <Box w={12 / 12} bg="white">
                    {renderUpnext}
                  </Box>
                </Flex>
              </Container>
            </div>
            <WrapperStadiumTicket>
              <Container>
                <Flex>
                  <Box w={12 / 12}>
                    <StadiumTicket common={this.state.common} />
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
  const vod = currentVodSelector(state)
  let vods = ''
  if (vod !== undefined) {
    vods = relatedVodsSelector(vod.programName_en)(state)
  }
  const token = state.auth.token
  const cookie = state.cookie
  const lang = langSelector(state)
  return { vod, vods, token, cookie, lang }
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
  toggleModal,
  updateModalType,
  indexModalURL,
  closeModal,
})(videoPlayer)
