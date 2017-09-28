import React from 'react'
import { Flex, Provider, Box, Image, Text } from 'rebass'
import styled from 'styled-components'

const ImageHlight = styled.img`
  width: ${props => props.w};
  src: ${props => props.src};
`
const Wrapper = styled.div`
  border: 1px solid ${props => props.color};
  text-align: -webkit-auto;
`
const Text1 = styled.div`
  padding-left: 1rem;
  padding-top: 1rem;
  color: ${props => props.color};
  font-weight: 700;
  font-size: 1.3em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text2 = styled.div`
  padding-left: 1rem;
  padding-top: 0.5rem;
  color: #000;
  font-weight: 700;
  font-size: 0.8em;
  font-family: Helvetica, Arial, sans-serif;
`
const ThumbnailTicket = props => (
  <Provider>
    <Wrapper color={props.color}>
      <Flex>
        <Box w={2 / 12}>
          <Image w="100%" src={props.img} />
        </Box>
        <Box w={10 / 12}>
          <Text1 color={props.color}>{props.text1}</Text1>
          <Text2> {props.text2} </Text2>
        </Box>
      </Flex>
    </Wrapper>
  </Provider>
)

export default ThumbnailTicket
