import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Flex, Provider, Box, Image, Text, overlay } from 'rebass'
import Button from '../commons/Button'
import color from '../commons/vars'
import { media, theme } from '../../tools/responsive'

const Wrapper = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  background-color: #022346;
`
const WrapperName = styled.div`
  height: 20px;
  overflow: hidden;
`
const WrapperTitle = styled.div`
  height: 56px;
  overflow: hidden;
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
  ${media.ipadpro`font-size: 1em`};
  ${media.ipad`font-size: 0.9em`};
  ${media.phone`font-size: 0.8em`};
  ${media.iphone5`font-size: 0.8em`};
`
const Text3 = styled.div`
  color: #fff;
  font-size: 1em;
  ${media.ipadpro`font-size: 1em`};
  ${media.ipad`font-size: 0.9em`};
  ${media.phone`font-size: 0.8em`};
  ${media.iphone5`font-size: 0.8em`};
`
const ThumbnailBigLive = props => (
  <Provider theme={theme}>
    <Wrapper>
      <Box>
        <Image width="100%" pt={0} src={props.img} />
      </Box>
      <Box>
        <center>
          <br />
          <WrapperName>
            <Text1>{props.text1}</Text1>
          </WrapperName>
        </center>
      </Box>
      <br />
      <br />
      <WrapperTitle>
        <Box pl="2rem" pr="2rem">
          <Text2>
            {props.text2}
            <br />
          </Text2>
        </Box>
      </WrapperTitle>
      <br />
      <Flex wrap>
        <Box
          w={[11 / 12, 9 / 12, 9 / 12, 8 / 12, 8 / 12]}
          pl="2rem"
          pb={['0rem', '1.5rem', '1.5rem', '1.5rem', '1.5rem']}
        >
          <WrapperTitle>
            <Text3>
              {props.text4} / {props.live.liveDateStr_en}
              <br />
            </Text3>
          </WrapperTitle>
        </Box>
        <Box w={[4.5 / 12, 0, 0 / 12, 1 / 12, 1 / 12]} />
        <Box w={[4 / 12, 3 / 12, 3 / 12, 3 / 12, 3 / 12]} pl="0rem" pb="1rem">
          <Link as={`/lives/${props.id}`} href={`/lives_vdo?id=${props.id}`}>
            <a>
              <Button color={color.red}>{props.Watch}</Button>
            </a>
          </Link>
        </Box>
      </Flex>
    </Wrapper>
  </Provider>
)
export default ThumbnailBigLive
