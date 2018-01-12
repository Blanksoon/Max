// This is the Link API
import Head from 'next/head'
import Link from 'next/link'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'
import withRedux from 'next-redux-wrapper'
import About from '../components/home/About'
import NewModal from '../containers/NewModal'
import Container from '../components/commons/Container'
import Main from '../layouts/Main'
import vars from '../components/commons/vars'
import { initStore } from '../redux/store'
import { I18nextProvider } from 'react-i18next'
import startI18n from '../tools/startI18n'
import { getTranslation } from '../tools/translationHelpers'
import { langSelector } from '../redux/selectors/lang'

class SuccessRegister extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      translations: this.props.translations,
      lang: this.props.lang,
    }
    this.i18n = startI18n(this.props.translations, this.props.lang)
    this.switchLang = this.switchLang.bind(this)
  }
  async switchLang(lang) {
    this.setState({
      lang: lang,
      translations: await getTranslation(
        lang,
        ['common', 'navbar'],
        //'http://localhost:8080/static/locales/'
        `https://beta.maxmuaythai.com/static/lacaes/`
      ),
    })
  }
  render() {
    return (
      <I18nextProvider i18n={this.i18n}>
        <Main
          url={this.props.url}
          nav={this.state.translations.translation.common}
          www="successRegister"
          switchLanguage={this.switchLang}
        >
          <NewModal
            common={this.state.translations.translation.common}
            lang={this.state.lang}
            url={this.props.url}
          />
          <Container pt="10rem" pb="3rem">
            <center>
              <h1 style={{ color: vars.lightBlue }}>
                {' '}
                {this.state.translations.translation.common.THANKYOU}
              </h1>
              <h3
                style={{
                  color: vars.lightBlue,
                  fontWeight: 'normal',
                  position: 'relative',
                  top: '-1rem',
                }}
              >
                {
                  this.state.translations.translation.common
                    .DESC1SUCCESSREGISTER
                }
              </h3>
              <h4 style={{ color: vars.black, fontWeight: 'normal' }}>
                {
                  this.state.translations.translation.common
                    .DESC2SUCCESSREGISTER
                }
              </h4>
              <h4
                style={{
                  color: vars.red,
                  fontWeight: 'normal',
                }}
              >
                {this.props.url.query.email}
              </h4>
            </center>
          </Container>
        </Main>
      </I18nextProvider>
    )
  }
}
const mapStateToProps = state => {
  return {
    lang: langSelector(state),
  }
}
SuccessRegister.getInitialProps = async ({ store, isServer, query, req }) => {
  let state = store.getState()
  state = store.getState()
  const translations = await getTranslation(
    state.cookie.lang,
    ['common', 'navbar'],
    //'http://localhost:8080/static/locales/'
    `https://beta.maxmuaythai.com/static/lacaes/`
  )
  const props = mapStateToProps(state)
  props.translations = translations
  return props
}
export default withRedux(initStore)(SuccessRegister)
