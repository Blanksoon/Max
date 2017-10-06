import React from 'react'
import { Flex, Provider, Box, Image, Text } from 'rebass'
import styled from 'styled-components'
import color from '../commons/vars'

const Button = styled.button`
  background-color: ${color.white};
  border: 1px solid ${color.red};
  color: ${color.red};
  padding: 12px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
`
const ImageHlight = styled.img`
  width: ${props => props.w};
  src: ${props => props.src};
`
const Wrapper = styled.div`
  //border: 1px solid ${props => props.color};
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
  color: #000;
  font-weight: 700;
  font-size: 1rem;
  font-family: Helvetica, Arial, sans-serif;
`
const Textbutton = styled.div`
  color: ${color.red};
  font-weight: 700;
  font-size: 0.9rem;
  font-family: Helvetica, Arial, sans-serif;
`
const Setposition1 = styled.div`position: relative;`
const Setposition2 = styled.div`
  position: absolute;
  bottom: 0px;
`
const ThumbnailShowTime = props => (
  <Provider>
    <Wrapper>
      <Flex>
        <Box w={2 / 12}>
          <center>
            <Image w="80%" src={props.imglogo} />
            <Text2>{props.text3}</Text2>
            <Text2>{props.text4}</Text2>
          </center>
        </Box>
        <Box w={4 / 12}>
          <Image w="100%" src={props.img} />
        </Box>
        <Box w={6 / 12}>
          <Text1>{props.text1}</Text1>
          {props.textrb}
          <Box pt="2.4rem" pl="1rem">
            <Button>
              <Textbutton>{props.text2}</Textbutton>
            </Button>
          </Box>
        </Box>
      </Flex>
    </Wrapper>
  </Provider>
)

export default ThumbnailShowTime
