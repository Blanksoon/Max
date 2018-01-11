import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import { Flex, Box, Image, Text } from 'rebass'
import Container from '../components/commons/Container'
import Main from '../layouts/Main'
import color from '../components/commons/vars'
import ShowTime from '../components/getTicket/ShowTime'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../redux/store'
import { fetchVods } from '../redux/modules/vod'
import { fetchProducts } from '../redux/modules/product'
import NewModal from '../containers/NewModal'
import {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../redux/modules/modal'
import * as api from '../api'
import { I18nextProvider } from 'react-i18next'
import startI18n from '../tools/startI18n'
import { getTranslation } from '../tools/translationHelpers'
import { langSelector } from '../redux/selectors/lang'

const WrapperShowTime = styled.div`
  position: relative;
  wight: 100%;
`
const Wrapper = styled.div`background-color: #3c5c83;`
class selectShowtime extends React.Component {
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
      translations: await getTranslation(
        lang,
        ['common', 'navbar'],
        'http://localhost:8080/static/locales/'
      ),
    })
  }

  render() {
    //console.log('render', this.props.url)
    return (
      <I18nextProvider i18n={this.i18n}>
        {/* <Head>
          <link href="/static/css/video-react.css" rel="stylesheet" />
        </Head> */}
        <Main
          url={this.props.url}
          nav={this.state.translations.translation.common}
          www="getticket"
          switchLanguage={this.switchLang}
        >
          <NewModal
            common={this.state.translations.translation.common}
            lang={this.state.lang}
          />
          <Wrapper>
            <Container>
              <Box pt="7rem">
                <ShowTime
                  common={this.state.translations.translation.common}
                  lang={this.state.lang}
                />
              </Box>
            </Container>
          </Wrapper>
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
    cookie: state.cookie,
    auth: state.auth,
    product: state.product,
    lang: langSelector(state),
  }
}

selectShowtime.getInitialProps = async ({ store, isServer, query, req }) => {
  let state = store.getState()
  const token = state.auth.token
  const productPromise = fetchProducts(token)(store.dispatch)
  await Promise.all([productPromise])
  state = store.getState()
  const translations = await getTranslation(
    state.cookie.lang,
    ['common', 'navbar'],
    'http://localhost:8080/static/locales/'
  )
  const props = mapStateToProps(state)
  props.translations = translations
  return props
}

export default withRedux(initStore, null, {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
})(selectShowtime)
