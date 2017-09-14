import React from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Image, Text, Button, overlay } from 'rebass'
import Modal from '../components/modal/Modal'
const Wrapper = styled.div`font-family: Helvetica, Arial, sans-serif;`
const test = props => (
  <Wrapper>
    <Modal />
  </Wrapper>
)
export default test
