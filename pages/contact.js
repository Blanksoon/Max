import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import { Provider as Rebass, Container, Flex, Box } from 'rebass'
import styled from 'styled-components'
import rootReducer from '../reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import About from '../components/home/About'
import { LabelSearch } from '../components/videoCenter/LabelSearch'
import Detail from '../components/contact/Detail'
import { NavbarHead } from '../components/home/NavbarHead'
import { Footer } from '../components/home/Footer'
import { VideoBox } from '../components/videoCenter/VideoBox'
import CounterComponent from '../containers/CounterContainers'
import Main from '../layouts/Main'
const Wapper = styled.div`font-family: Helvetica, Arial, sans-serif;`
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
const store = createStore(rootReducer, composeWithDevTools())
const Contact = ({ url }) => (
  <Provider store={store}>
    <Rebass>
      <Main url={url}>
        <Wapper>
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
        </Wapper>
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
    </Rebass>
  </Provider>
)

export default Contact
