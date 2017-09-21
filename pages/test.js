import React from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Text, overlay } from 'rebass'
import Modal from '../components/modal/Modal'
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
  <Wrapper>
    <Box w={3 / 12}>
      <center>
        <Box pt="15rem" />
        <Text1>
          GET 1 TIME<br />LIVE STREAMING
        </Text1>
        <br />
        <Flex mr="18px">
          <Box w={2.75 / 12} />
          <Box>
            <Hr />
          </Box>
          <Box width={6.5 / 12} pb={3}>
            <hr size="0.1" />
          </Box>
          <Box>
            <Hr />
          </Box>
        </Flex>
        <Text2>
          Watch 1 time of specific show<br />live streaming on any platfrom
        </Text2>
        <br />
        <br />
        <br />
        <br />
        <Text2>coming vary soon</Text2>
        <Box pb="1.5rem" />
      </center>
    </Box>
  </Wrapper>
)
export default test
