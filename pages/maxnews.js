import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import { Flex, Box, Image, Text } from 'rebass'
import Container from '../components/commons/Container'
import Main from '../layouts/Main'
import color from '../components/commons/vars'
import MaxTop from '../components/maxNews/MaxTop'
import MaxButtom from '../components/maxNews/MaxButtom'
import Purchase from '../components/getTicket/Purchase'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../redux/store'
import { fetchVods } from '../redux/modules/vod'
import { fetchNews } from '../redux/modules/maxnews'
import {
  recentNewsSelector,
  dataNewsSelector,
} from '../redux/selectors/maxnews'
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
import { langUrl } from '../tools/langUrl'
import { media } from '../tools/responsive'

const Wrapper = styled.div`background-color: #3c5c83;`
class maxnew extends React.Component {
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
    // console.log('dddddddd', this.props.news[0])
    return (
      <I18nextProvider i18n={this.i18n}>
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
          <Wrapper>
            <Container>
              <Box pt={['3rem', '3rem', '4rem', '7rem', '7rem']}>
                <MaxTop news={this.props.news} />
                <MaxButtom news={this.props.news} />
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
  //console.log('ddddddsss', state.cookie)
  return {
    cookie: state.cookie,
    lang: langSelector(state),
    news: recentNewsSelector(state),
  }
}
maxnew.getInitialProps = async ({ store, isServer, query, req }) => {
  let state = store.getState()
  const token = state.auth.token
  const newsPromise = await fetchNews(token)(store.dispatch)
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
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
})(maxnew)
