import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import { Flex, Box, Image, Text } from 'rebass'
import Container from '../components/commons/Container'
import Main from '../layouts/Main'
import color from '../components/commons/vars'
import DetailLeft from '../components/maxNews/DetailLeft'
import DetailRight from '../components/maxNews/DetailRight'
import MaxButtom from '../components/maxNews/MaxButtom'
import Purchase from '../components/getTicket/Purchase'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../redux/store'
import { fetchVods } from '../redux/modules/vod'
import {
  fetchNews,
  fetchNEWS,
  fetchNewsBig,
  fetchNewsSmaill,
} from '../redux/modules/maxnews'
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
import fetchMock from 'fetch-mock'

const Wrapper = styled.div`background-color: #3c5c83;`
class maxnew_detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      translations: this.props.translations,
      lang: this.props.lang,
      NewsHilight: '',
      NewsSmaill: '',
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
  async componentDidMount() {
    // const url = `${api.SERVER}//maxnews/${this.props.url.query.id}`
    // try {
    //   const json = await api.get(url)
    //   // You should not return in Vods <-- change to something like data
    //   //console.log('jsonssss', json)
    //   dispatch(fetchVodsSuccess(json))
    // } catch (error) {
    //   console.log(error)
    // }
    // console.log('ddddddddJson', this.state.NewsHilight[0])
    // console.log('ddddddddJson2', this.state.NewsSmaill)
  }
  render() {
    // console.log('ddddddddWEF', this.props.url.query)
    return (
      <I18nextProvider i18n={this.i18n}>
        {/* {status.message ?  : null } */}
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
              <Flex
                pt={['5rem', '5rem', '5rem', '10rem', '10rem']}
                bg="#fff"
                wrap
              >
                <Box w={12 / 12}>
                  <DetailLeft
                    lang={this.state.lang}
                    newsbig={this.props.News[0]}
                    newssm={this.props.News}
                    id={this.props.url.query.id}
                  />
                </Box>
                <Box w={12 / 12} pt="1rem" pb="1rem">
                  <DetailRight
                    lang={this.state.lang}
                    news={this.props.News[0]}
                  />
                </Box>
              </Flex>
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
    News: state.news.news.data,
  }
}
maxnew_detail.getInitialProps = async ({ store, isServer, query, req }) => {
  let state = store.getState()
  const token = state.auth.token
  const newsPromise = await fetchNews(token)(store.dispatch)
  const NewsPromise = await fetchNEWS(token)(store.dispatch)
  // const NewsBigPromise = await fetchNewsBig(token)(store.dispatch)
  // const NewsSmaillPromise = await fetchNewsSmaill(token)(store.dispatch)
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
})(maxnew_detail)