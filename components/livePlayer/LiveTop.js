import React from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Text, overlay } from 'rebass'
import Modal from '../modal/Modal'
import color from '../commons/vars'

const Wrapper = styled.div`
  width: 100%;
  height: 74vh;
  background-size: cover;
  font-family: Helvetica, Arial, sans-serif;
  background-image: url('static/img_live_banner.jpg');
  position: relative;
`
const TextBig = styled.div`
  font-weight: bold;
  color: ${props => props.color};
  font-size: 1.5em;
`
const Date = styled.div`
  font-weight: bold;
  color: ${props => props.color};
  font-size: 1em;
`
const WrapperText = styled.div`
  bottom: 5%;
  right: 0;
  width: 100%;
  position: absolute;
`
const Button = styled.button`
  bottom: 2%;
  background-color: ${props => props.color};
  border: 1px solid ${props => props.color};
  color: white;
  padding: 8px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
`
const ButtonBlue = styled.button`
  background-color: initial;
  border: 1px solid #3d7fb8;
  color: #3d7fb8;
  padding: 3px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
  font-family: Helvetica, Arial, sans-serif;
`
const WrapperSky = styled.div`
  z-index: 1;
  width: 100%;
  color: #ffffff;
  background: rgba(1, 15, 30, 0.6);
  position: absolute;
  top: 25%;
  left: 0;
`
const Text1 = styled.div`
  color: yellow;
  font-weight: 700;
  font-size: 1.6em;
`
const Text2 = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 4.2em;
`
const Text3 = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 1.6em;
`
const Text4 = styled.div`
  color: #3d7fb8;
  font-weight: 700;
  font-size: 1em;
`
const Image = styled.img`width: 100%;`
const LiveTop = props => (
  <Wrapper>
    <WrapperText>
      <Flex>
        <Box w={10 / 12} pl="1rem">
          <TextBig color={color.white}>
            MAX Ultimate Tournament & MAX World<br />Champions 7 International
            Fights
          </TextBig>
          <br />
          <Date color={color.yellow}>Sun.Aug 27th, 2017</Date>
        </Box>
        <Box w={2 / 12}>
          <Box pt="4rem" pl="2rem">
            <Button color={color.red}>Buy Ticket</Button>
          </Box>
        </Box>
      </Flex>
    </WrapperText>
    <WrapperSky>
      <Box pt="1.5rem">
        <center>
          <Box>
            <Text1>LIVE in</Text1>
          </Box>
          <Box>
            <Text2>00 : 00 : 00 : 12</Text2>
          </Box>
          <Box>
            <Text3>
              DAY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              HRS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              MIN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              SEC
            </Text3>
          </Box>
          <br />
          <br />
          <Flex pl="30%">
            <Box pt="0.2rem">
              <Text4>Hurry up! Buy ticket before live start</Text4>
            </Box>
            <Box pl="1.5rem">
              <ButtonBlue>BUY</ButtonBlue>
            </Box>
          </Flex>
          <Box pt="1rem" />
        </center>
      </Box>
    </WrapperSky>
  </Wrapper>
)
export default LiveTop
