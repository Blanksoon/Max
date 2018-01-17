import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Flex, Box, Image } from 'rebass'
import Main from '../layouts/Main'
import color from '../components/commons/vars'
import ThumbnailBigLive from '../components/thumbnail/ThumbnailBigLive'
import Container from '../components/commons/Container'
import { initStore } from '../redux/store'
import { fetchVods } from '../redux/modules/vod'
import { fetchLives } from '../redux/modules/live'
import withRedux from 'next-redux-wrapper'
import NewModal from '../containers/NewModal'
import {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../redux/modules/modal'
import { recentLivesSelector } from '../redux/selectors/live'
import { I18nextProvider } from 'react-i18next'
import startI18n from '../tools/startI18n'
import { getTranslation } from '../tools/translationHelpers'
import { langSelector } from '../redux/selectors/lang'
import { langUrl } from '../tools/langUrl'

const Text = styled.div`
  color: #b81111;
  font-weight: 700;
  font-size: 2em;
`
const WrapperThumbnail = styled.div`
  cursor: pointer;
  position: relative;
`
const WrapperBlack = styled.div`
  // background-color: #000;
  z-index: 1;
  transition: ease-in-out 0.4s all;
  opacity: 0.5;
  height: 100%;
  width: 100%;
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.65) 0%,
    rgba(0, 0, 0, 0.65) 1%,
    rgba(0, 0, 0, 0.65) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  position: absolute;
  top: 0;
  left: 0;
  :hover {
    opacity: 0;
  }
`
const Wrapper = styled.div`
  background-color: #3d7fb8;
  font-family: Helvetica, Arial, sans-serif;
`
const LivePlayer = styled.div`height: 36rem;`

class lives extends React.Component {
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

  renderUI() {
    const rowLive = []
    const rowCount = this.props.lives.length
    let n = 0
    let br = [<br />, '', <br />, <br />, <br />, <br />]
    // Use splice on clone object, DONT MODIFY props
    if (rowCount % 2 == 0) {
      for (let i = 0; i < rowCount; i += 2) {
        rowLive.push(
          <Flex bg="#fff" pb="2rem">
            <Box w={6 / 12} pl="1.5rem" pr="0.75rem">
              <WrapperThumbnail>
                <ThumbnailBigLive
                  id={this.props.lives[i].id}
                  img={this.props.lives[i].bannerUrl}
                  text1={
                    this.state.lang === 'en' ? (
                      this.props.lives[i].title_en
                    ) : (
                      this.props.lives[i].title_th
                    )
                  }
                  text2={
                    this.state.lang === 'en' ? (
                      this.props.lives[i].shortDesc1_en
                    ) : (
                      this.props.lives[i].shortDesc1_th
                    )
                  }
                  text3={br[i]}
                  text4={
                    this.state.lang === 'en' ? (
                      this.props.lives[i].title_en
                    ) : (
                      this.props.lives[i].title_th
                    )
                  }
                  live={this.props.lives[i]}
                  Watch={this.state.translations.translation.common.Watch}
                />
              </WrapperThumbnail>
            </Box>
            <Box w={6 / 12} pl="0.75rem" pr="1.5rem">
              <WrapperThumbnail>
                <ThumbnailBigLive
                  id={this.props.lives[i + 1].id}
                  img={this.props.lives[i + 1].bannerUrl}
                  text1={
                    this.state.lang === 'en' ? (
                      this.props.lives[i + 1].title_en
                    ) : (
                      this.props.lives[i + 1].title_th
                    )
                  }
                  text2={
                    this.state.lang === 'en' ? (
                      this.props.lives[i + 1].shortDesc1_en
                    ) : (
                      this.props.lives[i + 1].shortDesc1_th
                    )
                  }
                  text3={br[i + 1]}
                  text4={
                    this.state.lang === 'en' ? (
                      this.props.lives[i + 1].title_en
                    ) : (
                      this.props.lives[i + 1].title_th
                    )
                  }
                  live={this.props.lives[i + 1]}
                  Watch={this.state.translations.translation.common.Watch}
                />
              </WrapperThumbnail>
            </Box>
          </Flex>
        )
      }
    } else {
      for (let i = 0; i < rowCount - 1; i += 2) {
        rowLive.push(
          <Flex bg="#fff" pb="2rem">
            <Box w={6 / 12} pl="1.5rem" pr="0.75rem">
              <WrapperThumbnail>
                <ThumbnailBigLive
                  id={this.props.lives[i].id}
                  img={this.props.lives[i].bannerUrl}
                  text1={
                    this.state.lang === 'en' ? (
                      this.props.lives[i].title_en
                    ) : (
                      this.props.lives[i].title_th
                    )
                  }
                  text2={
                    this.state.lang === 'en' ? (
                      this.props.lives[i].shortDesc1_en
                    ) : (
                      this.props.lives[i].shortDesc1_en
                    )
                  }
                  text3={br[i]}
                  text4={
                    this.state.lang === 'en' ? (
                      this.props.lives[i].title_en
                    ) : (
                      this.props.lives[i].title_th
                    )
                  }
                  live={this.props.lives[i]}
                  Watch={this.state.translations.translation.common.Watch}
                />
              </WrapperThumbnail>
            </Box>
            <Box w={6 / 12} pl="0.75rem" pr="1.5rem">
              <WrapperThumbnail>
                <ThumbnailBigLive
                  id={this.props.lives[i + 1].id}
                  img={this.props.lives[i + 1].bannerUrl}
                  text1={
                    this.state.lang === 'en' ? (
                      this.props.lives[i + 1].title_en
                    ) : (
                      this.props.lives[i + 1].title_th
                    )
                  }
                  text2={
                    this.state.lang === 'en' ? (
                      this.props.lives[i + 1].shortDesc1_en
                    ) : (
                      this.props.lives[i + 1].shortDesc1_en
                    )
                  }
                  text3={br[i + 1]}
                  text4={
                    this.state.lang === 'en' ? (
                      this.props.lives[i + 1].title_en
                    ) : (
                      this.props.lives[i + 1].title_th
                    )
                  }
                  live={this.props.lives[i + 1]}
                  Watch={this.state.translations.translation.common.Watch}
                />
              </WrapperThumbnail>
            </Box>
          </Flex>
        )
        n = i + 2
      }
      rowLive.push(
        <Flex bg="#fff" pb="2rem">
          <Box w={6 / 12} pl="1.5rem" pr="0.75rem">
            <WrapperThumbnail>
              <ThumbnailBigLive
                id={this.props.lives[n].id}
                img={this.props.lives[n].bannerUrl}
                text1={
                  this.state.lang === 'en' ? (
                    this.props.lives[n].title_en
                  ) : (
                    this.props.lives[n].title_th
                  )
                }
                text2={
                  this.state.lang === 'en' ? (
                    this.props.lives[n].shortDesc1_en
                  ) : (
                    this.props.lives[n].shortDesc1_en
                  )
                }
                text3={br[n]}
                text4={
                  this.state.lang === 'en' ? (
                    this.props.lives[n].title_en
                  ) : (
                    this.props.lives[n].title_th
                  )
                }
                live={this.props.lives[n]}
                Watch={this.state.translations.translation.common.Watch}
              />
            </WrapperThumbnail>
          </Box>
          <Box w={6 / 12} pl="0.75rem" pr="1.5rem" />
        </Flex>
      )
    }
    return rowLive
  }

  render() {
    // console.log('dddddddddd', this.props.translations.translation.common)
    return (
      <I18nextProvider i18n={this.i18n}>
        <Main
          url={this.props.url}
          nav={this.state.translations.translation.common}
          www="lives"
          switchLanguage={this.switchLang}
        >
          <NewModal
            common={this.state.translations.translation.common}
            lang={this.state.lang}
            url={this.props.url}
          />
          <Wrapper>
            <Container>
              <Box pl="1.5rem" bg="#fff" pt="8rem" pb="2rem">
                <Text>{this.state.translations.translation.common.LIVE}</Text>
              </Box>
              {this.renderUI()}
            </Container>
          </Wrapper>
        </Main>
      </I18nextProvider>
    )
  }
}

const mapStateToProps = state => {
  //console.log('ddddddddddddddsss', state)
  return {
    lives: recentLivesSelector(state),
    cookie: state.cookie,
    lang: langSelector(state),
  }
}
lives.getInitialProps = async ({ store, isServer, query, req }) => {
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
  fetchVods,
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
  fetchLives,
})(lives)
