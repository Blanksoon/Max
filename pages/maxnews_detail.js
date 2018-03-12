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
    fetchMock.restore()
    let json = ''
    let json2 = await fetchMock.post(`${api.SERVER}/news&id`, {
      body: {
        code: 200,
        data: [
          {
            id: `0`,
            programName_en: `Max Muay ThaiBig`,
            programName_th: `แม็กซ์มวยไทยBig`,
            heading_en: `Max Muay ThaiBig`,
            heading_th: `แม็กซ์มวยไทยBig`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt`,
            article_th: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt`,
          },
        ],
      },
    })
    json = json2.routes[0].response.body.data
    this.setState({
      NewsHilight: json,
    })
    json2 = await fetchMock.post(`${api.SERVER}/news&id&name`, {
      body: {
        code: 200,
        data: [
          {
            id: `01`,
            programName_en: `Max Muay Thai01`,
            programName_th: `แม็กซ์มวยไทย01`,
            heading_en: `Max Muay Thai01`,
            heading_th: `แม็กซ์มวยไทย01`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt`,
            article_th: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt`,
          },
          {
            id: `02`,
            programName_en: `Max Muay Thai02`,
            programName_th: `แม็กซ์มวยไทย02`,
            heading_en: `Max Muay Thai02`,
            heading_th: `แม็กซ์มวยไทย02`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt`,
            article_th: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt`,
          },
          {
            id: `03`,
            programName_en: `Max Muay Thai03`,
            programName_th: `แม็กซ์มวยไทย03`,
            heading_en: `Max Muay Thai03`,
            heading_th: `แม็กซ์มวยไทย03`,
            createDate_en: `Jan 11,2018`,
            createDate_th: `มค. 11,2018`,
            imageUrl: `/static/FT6A6495.jpg`,
            article_en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt`,
            article_th: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt`,
          },
        ],
      },
    })
    json = json2.routes[1].response.body.data
    this.setState({
      NewsSmaill: json,
    })
    // console.log('ddddddddJson', this.state.NewsHilight[0])
    // console.log('ddddddddJson2', this.state.NewsSmaill)
    fetchMock.restore()
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
