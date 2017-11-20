import React from 'react'
import { Flex, Provider, Box, Image, Text } from 'rebass'
import styled from 'styled-components'
import color from '../commons/vars'

const Button = styled.button`
  background-color: ${color.white};
  border: 1px solid ${color.red};
  color: ${color.red};
  padding: 12px 40px;
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
  background-color: ${color.white};
  text-align: -webkit-auto;
  position: relative;
  height: 160px;
  width: 100%;
`
const WrapperButton = styled.div`
  position: absolute;
  Bottom: 25px;
  right: 30px;
`
const Text1 = styled.div`
  padding-left: 1rem;
  padding-top: 1rem;
  color: ${props => props.color};
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text2 = styled.div`
  color: #000;
  font-weight: 700;
  font-size: 1rem;
  font-family: Helvetica, Arial, sans-serif;
`
const Text3 = styled.div`
  color: #000;
  font-weight: 700;
  font-size: 1.5rem;
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
const Input = styled.input`
  width: 20px;
  height: 20px;
`
const ThumbnailShowTime = props => (
  <Provider>
    <Wrapper>
      <Flex pl="0.5em" pr="0.5em" pt="1em" pb="1em">
        <Box w={2 / 12} mr="5px">
          <br />
          <center>
            <Image w="100%" src={props.imglogo} />
            <Text3>{props.text3}</Text3>
          </center>
        </Box>
        <Box w={4 / 12}>
          <Text2>{props.text4}</Text2>
          <Image w="100%" src={props.img} />
        </Box>
        <Box w={5 / 12}>
          <Flex>
            <Box w={2 / 12} ml="12px">
              <br />
              <Image w="100%" src="static/ic_liveblack@2x.png" />
            </Box>
            <Box w={10 / 12}>
              <Text1>{props.text1}</Text1>
              {props.textrb}
            </Box>
          </Flex>
        </Box>
      </Flex>
      <WrapperButton>
        <Button>
          <Textbutton>{props.text2}</Textbutton>
        </Button>
      </WrapperButton>
    </Wrapper>
  </Provider>
)

export default ThumbnailShowTime
