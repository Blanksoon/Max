import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import { Flex, Box } from 'rebass'
import Container from '../components/commons/Container'
import styled from 'styled-components'
import About from '../components/home/About'
import { LabelSearch } from '../components/videoCenter/LabelSearch'
import Detail from '../components/contact/Detail'
import { VideoBox } from '../components/videoCenter/VideoBox'
import Main from '../layouts/Main'
import NewModal from '../containers/NewModal'
import { initStore } from '../redux/store'
import { fetchVods } from '../redux/modules/vod'
import withRedux from 'next-redux-wrapper'
import {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../redux/modules/modal'

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
const Contact = ({ url }) => (
  <Main url={url}>
    <NewModal />
    <Wrapper>
      <WrapperAbout>
        <Container>
          <Box w={12 / 12}>
            <About paddingTop="80px" />
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
)
export default withRedux(initStore, null, {
  fetchVods,
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
})(Contact)
