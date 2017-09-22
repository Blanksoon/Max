import React from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Image, Text, overlay } from 'rebass'
import color from '../commons/vars'

const Wrapper = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  background-color: #022346;
`
const Text1 = styled.div`
  color: #fcfc00;
  font-weight: 700;
  font-size: 1em;
`
const Text2 = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 1em;
`
const Text3 = styled.div`
  color: #fff;
  font-size: 1em;
`
const ThumbnailBigLive = props => (
  <Wrapper>
    <Box>
      <Image width="100%" pt={0} src={props.img} />
    </Box>
    <Box>
      <center>
        <br />
        <Text1>{props.text1}</Text1>
      </center>
    </Box>
    <br />
    <br />
    <Box pl="2rem">
      <Text2>
        {props.text2}
        <br />
        {props.text3}
      </Text2>
    </Box>
    <br />
    <Box pl="2rem" pb="1.5rem">
      <Text3>
        {props.text4}
        <br />
        {props.text5}
      </Text3>
    </Box>
  </Wrapper>
)
export default ThumbnailBigLive