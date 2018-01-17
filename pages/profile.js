// This is the Link API
import Head from 'next/head'
import Link from 'next/link'
import { Flex, Box, Provider } from 'rebass'
import Cookies from 'universal-cookie'
import styled from 'styled-components'
import withRedux from 'next-redux-wrapper'
import NewModal from '../containers/NewModal'
import Container from '../components/commons/Container'
import Main from '../layouts/Main'
import vars from '../components/commons/vars'
import { initStore } from '../redux/store'
import { fetchVods } from '../redux/modules/vod'
import { fetchLives } from '../redux/modules/live'
import color from '../components/commons/vars'
import {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../redux/modules/modal'
import { I18nextProvider } from 'react-i18next'
import startI18n from '../tools/startI18n'
import { getTranslation } from '../tools/translationHelpers'
import { recentLivesSelector } from '../redux/selectors/live'
import { recentVodsSelector } from '../redux/selectors/vod'
import Router from 'next/router'

const WrapperTop = styled.div`
  color: #fff;
  background-color: #011020;
`
const WrapperProfile = styled.div`
  background-color: ${props => props.color.lightBlue};
`
const WrapperBoxProfile = styled.div`border: 1px solid #c1c1c1;`

const WrapperBoxProfileMargin = styled.div`
  margin-left: 1.2rem;
  margin-right: 1.2rem;
`

import Welcome from '../components/profile/Welcome'
import UserProfile from '../components/profile/UserProfile'
import InputProfile from '../components/profile/InputProfile'
import PurchaseHistory from '../components/profile/PurchaseHistory'
import { ListPurchase } from '../components/profile/ListPurchase'
import Subscribe from '../components/profile/Subscribe'
import NavbarProfile from '../components/profile/NavbarProfile'
import ListSubscribe from '../components/profile/ListSubscribe'
import { langSelector } from '../redux/selectors/lang'
import { langUrl } from '../tools/langUrl'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pathname: 'Profile',
      translations: this.props.translations,
      lang: this.props.lang,
    }
    this.changeComponent = this.changeComponent.bind(this)
    this.i18n = startI18n(this.props.translations, this.props.cookie.lang)
    this.switchLang = this.switchLang.bind(this)
    this.logout = this.logout.bind(this)
  }

  changeComponent(state) {
    this.setState({
      pathname: state,
    })
  }
  logout() {
    Router.push(`/`)
  }

  async switchLang(lang) {
    this.setState({
      lang: lang,
      translations: await getTranslation(lang, ['common', 'navbar'], langUrl),
    })
  }

  render() {
    //console.log('22222222', this.props.url.push)
    if (this.props.auth.token === undefined) {
      this.props.url.push('/')
    }
    let renderUI = <div />
    if (this.state.pathname == 'Profile') {
      renderUI = (
        <div>
          <UserProfile
            lang={this.state.lang}
            common={this.state.translations.translation.common}
          />
          <InputProfile
            url={this.props.url}
            lang={this.state.lang}
            common={this.state.translations.translation.common}
          />
        </div>
      )
    } else if (this.state.pathname == 'Purchase history') {
      renderUI = (
        <div>
          <PurchaseHistory
            lang={this.state.lang}
            common={this.state.translations.translation.common}
          />
        </div>
      )
    } else {
      renderUI = (
        <div>
          <Subscribe
            lang={this.state.lang}
            common={this.props.translations.translation.common}
          />
          <ListSubscribe
            lang={this.state.lang}
            common={this.props.translations.translation.common}
          />
          <Box w={12 / 12} p="6em" />
        </div>
      )
    }
    //console.log('dddddddddd', this.state)
    return (
      <I18nextProvider i18n={this.i18n}>
        <Main
          url={this.props.url}
          nav={this.state.translations.translation.common}
          www="profile"
          switchLanguage={this.switchLang}
        >
          <NewModal
            common={this.state.translations.translation.common}
            lang={this.state.lang}
          />
          <div className="profile">
            <WrapperProfile color={color}>
              <Container>
                <Box px="3rem" pt="9rem" bg="white" pb="2rem">
                  <Welcome
                    common={this.state.translations.translation.common}
                  />
                  <Box w={12 / 12} pb="1rem" pt="2rem">
                    <NavbarProfile
                      url={this.state}
                      changeComponent={this.changeComponent}
                      pathname={this.state.pathname}
                      lang={this.state.lang}
                      common={this.state.translations.translation.common}
                    />
                  </Box>
                  <WrapperBoxProfile>
                    <WrapperBoxProfileMargin>
                      {renderUI}
                    </WrapperBoxProfileMargin>
                  </WrapperBoxProfile>
                </Box>
              </Container>
            </WrapperProfile>
          </div>
          <style jsx global>
            {`
              body {
                padding: 0 !important;
                margin: 0 !important;
              }
               {
                /* * {
              box-sizing: border-box;
            } */
              }
            `}
          </style>
        </Main>
      </I18nextProvider>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    cookie: state.cookie,
    lang: langSelector(state),
  }
}
Profile.getInitialProps = async ({ store, isServer, query, req }) => {
  let state = store.getState()
  const token = state.auth.token
  const response = await fetchLives(token)(store.dispatch)
  // const responseVods = await fetchVods(token)(store.dispatch)
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

export default withRedux(initStore, null, {
  fetchVods,
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
  fetchLives,
})(Profile)

//export default Profile
