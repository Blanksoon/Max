import React from 'react'
import { Flex, Box, Image, Text } from 'rebass'
import styled from 'styled-components'
import vars from '../commons/vars'
import { media } from '../../tools/responsive'

const Text1 = styled.div`
  color: ${vars.black};
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
  height: 38px;
  overflow: hidden;
  ${media.ipadpro`height: 21px;`};
  ${media.ipad`height: 18px;`};
  ${media.phone`height: 14px;font-size: 0.7em;`};
  ${media.iphone5`height: 14px;`};
`
const Text2 = styled.div`
  color: ${vars.black};
  //font-weight: 700;
  font-size: 0.8em;
  font-family: Helvetica, Arial, sans-serif;
  height: 47px;
  overflow: hidden;
  ${media.ipadpro`height: 47px;`};
  ${media.ipad`height: 47px;`};
  ${media.phone`height: 50px;font-size: 0.7em;`};
  ${media.iphone5`height: 38px;`};
`
const Text3 = styled.div`
  color: ${vars.lightBlue};
  //font-weight: 700;
  font-size: 0.8em;
  font-family: Helvetica, Arial, sans-serif;
  height: 22px;
  overflow: hidden;
  ${media.ipadpro`height: 22px;`};
  ${media.ipad`height: 25px;`};
  ${media.phone`height: 25px;font-size: 0.7em;`};
  ${media.iphone5`height: 38px;`};
`
const ThumbnailMaxnew = props => (
  <div>
    <Box>
      <Image
        width={['100%', '100%', '100%', '70%', '60%']}
        pt={0}
        src={props.news[0].imageUrl}
      />
    </Box>
    <Box pt="1rem">
      <Text1>{props.news[0].heading_en}</Text1>
    </Box>
    <Box pt="0.5rem">
      <Text2>{props.news[0].article_en}</Text2>
    </Box>
    <Box pt="0.5rem">
      <Text3> {props.news[0].createDate_en} </Text3>
    </Box>
  </div>
)

export default ThumbnailMaxnew
