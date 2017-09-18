import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import { LabelSearch } from '../components/videoCenter/LabelSearch'
import styled from 'styled-components'
import Detail from '../components/contact/Detail'
import { NavbarHead } from '../components/home/NavbarHead'
import { Footer } from '../components/home/Footer'
import { VideoBox } from '../components/videoCenter/VideoBox'
import { Provider as Rebass, Container, Flex, Box } from 'rebass'
import CounterComponent from '../containers/CounterContainers'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
const Wapper = styled.div`font-family: Helvetica, Arial, sans-serif;`
const Background = styled.div`background-color: ${props => props.color};`
const initialState = { counter: 100 }
const store = createStore(rootReducer, initialState, composeWithDevTools())
const Contact = props => (
  <Rebass>
    <Provider store={store}>
      <Wapper>
        <Background color="#8b0303">
          <Container>
            <Box w={12 / 12}>
              <NavbarHead />
            </Box>
          </Container>
          <Container>
            <Box>
              <Detail />
            </Box>
            <CounterComponent label="counter" />
          </Container>
        </Background>
      </Wapper>
    </Provider>
  </Rebass>
)

export default Contact
