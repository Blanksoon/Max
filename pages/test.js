import React from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Text, overlay } from 'rebass'
import Container from '../components/commons/Container'
import Modal from '../components/modal/Modal'
import Login from '../components/login/Login'
import color from '../components/commons/vars'

const Wrapper = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  background-color: #022346;
`
const Image = styled.image`width: 100%;`
const Text1 = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 1em;
`
const Text2 = styled.div`
  color: #fff;
  font-size: 1em;
`
const Hr = styled.div`
  &::before {
    content: '●';
    color: #fff;
    font-weight: bold;
  }
`
const test = props => (
  <div>
    <Login />
  </div>
)
export default test
