import Head from 'next/head'
import React, { Component } from 'react'
import Link from 'next/link'
import { Flex, Box } from 'rebass'
import Container from '../components/commons/Container'
import styled from 'styled-components'
import About from '../components/home/About'
import Detail from '../components/contact/Detail'
import Main from '../layouts/Main'
import NewModal from '../containers/NewModal'
import { initStore } from '../redux/store'
import withRedux from 'next-redux-wrapper'
import {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../redux/modules/modal'
import { fetchLives } from '../redux/modules/live'
import { recentLivesSelector } from '../redux/selectors/live'
import { I18nextProvider } from 'react-i18next'
import startI18n from '../tools/startI18n'
import { getTranslation } from '../tools/translationHelpers'

const Wrapper = styled.div`font-family: Helvetica, Arial, sans-serif;`
const Background = styled.div`background-color: ${props => props.color};`
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
class Contact extends Component {
  constructor(props) {
    super(props)

    this.i18n = startI18n(this.props.translations, this.props.cookie.lang)
  }
  render() {
    return (
      <I18nextProvider i18n={this.i18n}>
        <Main
          url={this.props.url}
          nav={this.props.translations.translation.common}
          www="contact"
        >
          <NewModal />
          <Wrapper>
            <WrapperAbout>
              <Container>
                <Box w={12 / 12}>
                  <About
                    paddingTop="80px"
                    common={this.props.translations.translation.common}
                  />
                </Box>
              </Container>
            </WrapperAbout>
            <Background>
              <Container>
                <Box>
                  <Detail />
                </Box>
                {/* <CounterComponent label="counter" /> */}
              </Container>
            </Background>
          </Wrapper>
        </Main>
      </I18nextProvider>
    )
  }
}

const mapStateToProps = async state => {
  return {
    lives: recentLivesSelector(state),
    cookie: state.cookie,
    translations: await getTranslation(
      state.cookie.lang,
      ['common', 'navbar'],
      'http://localhost:8080/static/locales/'
    ),
  }
}
Contact.getInitialProps = async ({ store, isServer, query, req }) => {
  let state = store.getState()
  const token = state.auth.token
  const response = await fetchLives(token)(store.dispatch)
  state = store.getState()
  const props = mapStateToProps(state)
  return props
}
export default withRedux(initStore, null, {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
})(Contact)
