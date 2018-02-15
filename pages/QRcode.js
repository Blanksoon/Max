import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Flex, Box, Image, Provider } from 'rebass'
import Container from '../components/commons/Container'
import Main from '../layouts/Main'
import color from '../components/commons/vars'
import MaxTop from '../components/maxNews/MaxTop'
import MaxButtom from '../components/maxNews/MaxButtom'
import Purchase from '../components/getTicket/Purchase'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../redux/store'
import { fetchLives } from '../redux/modules/live'
import { fetchVods } from '../redux/modules/vod'
import NewModal from '../containers/NewModal'
import {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../redux/modules/modal'
import * as api from '../api'
import { recentLivesSelector } from '../redux/selectors/live'
import { I18nextProvider } from 'react-i18next'
import startI18n from '../tools/startI18n'
import { getTranslation } from '../tools/translationHelpers'
import { langUrl } from '../tools/langUrl'
import { langSelector } from '../redux/selectors/lang'
import { media, theme } from '../tools/responsive'

const Text1 = styled.div`
  padding-left: 1rem;
  padding-top: 1rem;
  color: #8a8a8a;
  font-weight: 700;
  font-size: 2rem;
  font-family: Helvetica, Arial, sans-serif;
  ${media.phone`font-size: 3rem`};
  ${media.iphone5`font-size: 3rem`};
`

const Text2 = styled.div`
  padding-left: 1rem;
  padding-top: 40px;
  color: #8a8a8a;
  font-size: 16px;
  font-family: Helvetica, Arial, sans-serif;
`

const Text3 = styled.div`
  padding-left: 1rem;
  padding-top: 1em;
  color: #8a8a8a;
  font-size: 16px;
  font-family: Helvetica, Arial, sans-serif;
`

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #8a8a8a;
  color: #656565;
  cursor: pointer;
  //padding: 12px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
  font-size: 16px;
  width: 240px;
  height: 40px;
`

const Wrapper = styled.div`
  background-color: #fff;
  // width: 100%;
  // height: 100%;
  // background-size: cover;
  // margin-top: 0%;
`
const Wrapperr = styled.div`
  background-image: url('/static/img_bg_errorpage.jpg');
  width: 100%;
  height: 100%;
  background-size: cover;
`
const ButtonLive = styled.button`
  background-color: ${color.white};
  border: 1px solid ${color.red};
  padding: 8px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
  font-size: 14px;
  margin-top: 1rem;
  font-family: Helvetica, Arial, sans-serif;
  color: ${color.red};
  // cursor: pointer;
  ${media.phone`padding: 8px 20px;
  font-size: 12px;`};
  ${media.iphone5`padding: 8px 10px;
  font-size: 12px;`};
`
class QRcode extends React.Component {
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
    console.log('ddddddd', this.props.url.query.QR)
    let des = {}
    return (
      <I18nextProvider i18n={this.i18n}>
        <Provider theme={theme}>
          <Main
            url={this.props.url}
            nav={this.state.translations.translation.common}
            www="error"
            switchLanguage={this.switchLang}
          >
            <NewModal
              common={this.state.translations.translation.common}
              lang={this.state.lang}
              url={this.props.url}
            />
            <Wrapperr>
              <Wrapper>
                <Container>
                  <Box pt="7rem">
                    <Wrapperr>
                      <Flex>
                        <Box pt="7em" pb="9em" w={1}>
                          <center>
                            <Image
                              width="30%"
                              src="/static/img_wechatpay.png" //btn_wechat
                            />
                            <Text1>
                              Open the phone wechat and scan qrcode to continue
                              payment
                            </Text1>
                            <ButtonLive>
                              {this.props.url.query.des}
                              {this.props.url.query.name}{' '}
                              {this.props.url.query.price}
                            </ButtonLive>
                            <Image
                              pt="1rem"
                              width="20%"
                              src={this.props.url.query.QR}
                            />
                          </center>
                        </Box>
                      </Flex>
                    </Wrapperr>
                  </Box>
                </Container>
              </Wrapper>
            </Wrapperr>
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
        </Provider>
      </I18nextProvider>
    )
  }
}
const mapStateToProps = state => {
  return {
    lives: recentLivesSelector(state),
    cookie: state.cookie,
    lang: langSelector(state),
  }
}
QRcode.getInitialProps = async ({ store, isServer, query, req }) => {
  let state = store.getState()
  const token = state.auth.token
  const response = await fetchLives(token)(store.dispatch)
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
})(QRcode)
