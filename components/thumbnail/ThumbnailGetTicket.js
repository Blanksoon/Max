import React from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Text, overlay } from 'rebass'
import Modal from '../modal/Modal'
import color from '../commons/vars'

const Wrapper = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  background-color: ${props => props.bg};
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
const ThumbnailGetTicket = props => (
  <Wrapper bg={props.bg}>
    <center>
      <Box pt="15rem" />
      <Text1>{props.text1}</Text1>
      <Text1>{props.text2}</Text1>
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
      <Text2>{props.text3}</Text2>
      <Text2>{props.text4}</Text2>
      <Text2>{props.text6}</Text2>
      <br />
      <br />
      <br />
      <br />
      <Text2>{props.text5}</Text2>
      <Box pb="1.5rem" />
    </center>
  </Wrapper>
)
export default ThumbnailGetTicket
