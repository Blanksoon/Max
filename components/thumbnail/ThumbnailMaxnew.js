import React from 'react'
import { Flex, Box, Image, Text } from 'rebass'
import styled from 'styled-components'
import vars from '../commons/vars'

const Text1 = styled.div`
  color: ${vars.black};
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text2 = styled.div`
  color: ${vars.black};
  //font-weight: 700;
  font-size: 0.8em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text3 = styled.div`
  color: ${vars.lightBlue};
  //font-weight: 700;
  font-size: 0.8em;
  font-family: Helvetica, Arial, sans-serif;
`
const ThumbnailMaxnew = props => (
  <div>
    <Box>
      <Image width="60%" pt={0} src={props.img} />
    </Box>
    <Box pt="1rem">
      <Text1>{props.name}</Text1>
    </Box>
    <Box pt="0.5rem">
      <Text2>{props.text}</Text2>
    </Box>
    <Box pt="0.5rem">
      <Text3> {props.date} </Text3>
    </Box>
  </div>
)

export default ThumbnailMaxnew
