// This is the Link API
import Head from 'next/head'
import Link from 'next/link'
import { Flex, Box, Provider } from 'rebass'
import Cookies from 'universal-cookie'
import styled from 'styled-components'
import withRedux from 'next-redux-wrapper'
import ComingLive from '../components/home/ComingLive'
import LatestVideo from '../components/home/LatestVideo'
import StadiumTicket from '../components/home/StadiumTicket'
import About from '../components/home/About'
import Hero from '../components/home/Hero'
import MobileHero from '../components/home/MobileHero'
import OurShow from '../components/ourShow/OurShow'
import MaxNewsSeach from '../components/maxNews/MaxNewsSeach'
import ListVideo from '../components/maxNews/ListVideo'
import Login from '../components/login/Login'
import NewModal from '../containers/NewModal'
import Container from '../components/commons/Container'
import Main from '../layouts/Main'
import vars from '../components/commons/vars'
import { initStore } from '../redux/store'
import { fetchVods } from '../redux/modules/vod'
import { fetchLives } from '../redux/modules/live'
import {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../redux/modules/modal'
import { recentLivesSelector, dataLivesSelector } from '../redux/selectors/live'
import { recentVodsSelector } from '../redux/selectors/vod'
import { I18nextProvider } from 'react-i18next'
import startI18n from '../tools/startI18n'
import { getTranslation } from '../tools/translationHelpers'
import { langSelector } from '../redux/selectors/lang'
import { langUrl } from '../tools/langUrl'
import { media } from '../tools/responsive'

const WrapperTop = styled.div`
  color: #fff;
  background-color: #011020;
`
const WrapperLive = styled.div`
  color: #fff;
  background-image: url('/static/bg-upcoming-home.jpg');
  background-size: cover;
  background-position-y: 0px;
`
const WrapperStadiumTicket = styled.div`
  color: #ffffff;
  background-color: #b71111;
`
const WrapperAbout = styled.div`
  color: #ffffff;
  background: -webkit-linear-gradient(
    left,
    rgba(7, 70, 141, 1) 0%,
    rgba(7, 70, 141, 1) 48%,
    rgba(139, 3, 3, 1) 52%,
    rgba(139, 3, 3, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  ${media.phone`background: -webkit-linear-gradient(
    left,
    rgba(139, 3, 3, 1) 0%,
    rgba(7, 70, 141, 1) 48%,
    rgba(139, 3, 3, 1) 52%,
    rgba(139, 3, 3, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */`};
`
const WrapperHero = styled.div`
  display: unset;
  .slick-dots li {
    position: relative;
    display: inline-block;
    width: 13%;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
  }
  ${media.ipad`display: none;`};
  ${media.phone`display: none;`};
  ${media.iphone5`display: none;`};
`
const WrapperMobileHero = styled.div`
  display: none;
  ${media.ipad`display: unset;`};
  ${media.phone`display: unset;`};
  ${media.iphone5`display: unset;`};
`
const GradientBg = styled.div`
  background: -webkit-linear-gradient(
    top,
    #020f1f 0%,
    #020f1f 12%,
    #020f1f 64%,
    #020f1f 75%,
    #08488f 92%,
    #08488f 100%
  ); /* Chrome10-25,Safari5.1-6 */
  ${media.phone`padding-top: 4rem;`};
  ${media.iphone5`padding-top: 4rem;`};
`
const Home = styled.div`font-family: Helvetica, Arial, sans-serif;`
let lang = 'th'
let navbar = ''
class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      translations: this.props.translations,
      lang: this.props.lang,
    }
    this.i18n = startI18n(this.props.translations, this.props.cookie.lang)
    this.switchLang = this.switchLang.bind(this)
  }

  async switchLang(lang) {
    this.setState({
      lang: lang,
      translations: await getTranslation(lang, ['common', 'navbar'], langUrl),
    })
  }

  render() {
    const theme = {
      breakpoints: [
        // min-width breakpoints in em
        23.5,
        23.5,
        64,
        70,
      ],
    }
    return (
      <I18nextProvider i18n={this.i18n}>
        <Provider theme={theme}>
          <Main
            url={this.props.url}
            nav={this.state.translations.translation.common}
            www=""
            switchLanguage={this.switchLang}
          >
            <NewModal
              common={this.state.translations.translation.common}
              lang={this.state.lang}
              url={this.props.url}
            />
            <GradientBg>
              <Container>
                <WrapperHero>
                  <Hero
                    lang={this.state.lang}
                    lives={this.props.lives.slice(0, 3)}
                    common={this.state.translations.translation.common}
                  />
                </WrapperHero>
                <WrapperMobileHero>
                  <MobileHero
                    lang={this.state.lang}
                    lives={this.props.lives.slice(0, 3)}
                    common={this.state.translations.translation.common}
                  />
                </WrapperMobileHero>
                <LatestVideo
                  lang={this.state.lang}
                  name={this.state.translations.translation.common.LatestVideo}
                  vods={this.props.vods.slice(0, 4)}
                />
              </Container>
            </GradientBg>
            <WrapperLive>
              <Container>
                <Flex>
                  <Box w={12 / 12} pb="4em" pt="2em">
                    <ComingLive
                      lang={this.state.lang}
                      common={this.state.translations.translation.common}
                      lives={this.props.lives}
                    />
                  </Box>
                </Flex>
              </Container>
            </WrapperLive>
            <WrapperStadiumTicket>
              <Container>
                <Flex>
                  <Box w={12 / 12}>
                    <StadiumTicket
                      common={this.state.translations.translation.common}
                    />
                  </Box>
                </Flex>
              </Container>
            </WrapperStadiumTicket>
            <WrapperAbout>
              <Container>
                <Box w={12 / 12}>
                  <About common={this.state.translations.translation.common} />
                </Box>
              </Container>
            </WrapperAbout>
          </Main>
        </Provider>
      </I18nextProvider>
    )
  }
}

const mapStateToProps = state => {
  //console.log('ddddddsss', state.cookie)
  return {
    cookie: state.cookie,
    lives: dataLivesSelector(state),
    vods: recentVodsSelector(state),
    lang: langSelector(state),
  }
}

Index.getInitialProps = async ({ store, isServer, query, req }) => {
  let state = store.getState()
  const token = state.auth.token
  const livePromise = fetchLives(token)(store.dispatch)
  const vodPromise = fetchVods(token)(store.dispatch, store.getState)
  await Promise.all([livePromise, vodPromise])
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
  fetchVods,
  dataLivesSelector,
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
  fetchLives,
})(Index)
