// This is the Link API
import Head from 'next/head'
import Link from 'next/link'
import { Flex, Box } from 'rebass'
import Cookies from 'universal-cookie'
import styled from 'styled-components'
import withRedux from 'next-redux-wrapper'
import ComingLive from '../components/home/ComingLive'
import LatestVideo from '../components/home/LatestVideo'
import StadiumTicket from '../components/home/StadiumTicket'
import About from '../components/home/About'
import Hero from '../components/home/Hero'
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
`
const Home = styled.div`font-family: Helvetica, Arial, sans-serif;`
const lang = 'th'
let navbar = ''
class Index extends React.Component {
  constructor(props) {
    super(props)

    this.i18n = startI18n(this.props.translations, this.props.cookie.lang)
  }

  render() {
    console.log('this.props', this.props.url)
    // console.log('ddddddddddprops', this.props)
    return (
      <I18nextProvider i18n={this.i18n}>
        <Main
          url={this.props.url}
          nav={
            this.props.cookie.lang === 'th' ? (
              this.props.translations.th.navbar
            ) : (
              this.props.translations.en.navbar
            )
          }
        >
          <NewModal />
          <GradientBg>
            <Container>
              <Hero lives={this.props.lives.slice(0, 3)} />
              <LatestVideo
                name="Latest Video"
                vods={this.props.vods.slice(0, 4)}
              />
            </Container>
          </GradientBg>
          <WrapperLive>
            <Container>
              <Flex>
                <Box w={12 / 12} pb="4em" pt="2em">
                  <ComingLive lives={this.props.lives} />
                </Box>
              </Flex>
            </Container>
          </WrapperLive>
          <WrapperStadiumTicket>
            <Container>
              <Flex>
                <Box w={12 / 12}>
                  <StadiumTicket />
                </Box>
              </Flex>
            </Container>
          </WrapperStadiumTicket>
          <WrapperAbout>
            <Container>
              <Box w={12 / 12}>
                <About />
              </Box>
            </Container>
          </WrapperAbout>
        </Main>
      </I18nextProvider>
    )
  }
}

const mapStateToProps = async state => {
  // console.log('ddddddsss', state.cookie)
  return {
    cookie: state.cookie,
    lives: dataLivesSelector(state),
    vods: recentVodsSelector(state),
    translations: await getTranslation(
      state.cookie.lang,
      ['navbar'],
      'http://localhost:8080/static/locales/'
    ),
  }
}
Index.getInitialProps = async ({ store, isServer, query, req }) => {
  let state = store.getState()
  const token = state.auth.token
  const livePromise = fetchLives(token)(store.dispatch)
  const vodPromise = fetchVods(token)(store.dispatch, store.getState)
  await Promise.all([livePromise, vodPromise])
  state = store.getState()
  const props = mapStateToProps(state)
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
