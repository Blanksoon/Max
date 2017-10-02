import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Flex, Provider, Box, Image, Text, overlay } from 'rebass'
import Button from '../commons/Button'
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
    <Box pl="2rem" pr="2rem">
      <Text2>
        {props.text2}
        <br />
        {props.text3}
      </Text2>
    </Box>
    <br />
    <Flex>
      <Box w={8 / 12} pl="2rem" pb="1.5rem">
        <Text3>
          {props.text4}
          <br />
          {props.text5}
        </Text3>
      </Box>
      <Box w={1 / 12} />
      <Box w={3 / 12} pl="0rem">
        <Link as={`/lives/${props.id}`} href={`/lives_vdo?id=${props.id}`}>
          <a>
            <Button color={color.red}>Watch</Button>
          </a>
        </Link>
      </Box>
    </Flex>
  </Wrapper>
)
export default ThumbnailBigLive
