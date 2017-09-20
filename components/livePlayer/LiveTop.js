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
const WrapperSky = styled.div`
  z-index: 1;
  height: 41.5%;
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
      <Flex pt="2.4rem">
        <Box w={4.9 / 12} />
        <Box w={2.5 / 12}>
          <center>
            <Box>
              <Text1>LIVE in</Text1>
            </Box>
            <Flex pt="1.5rem">
              <Box w={5 / 12}>
                <Box>
                  <Text2>00</Text2>
                </Box>
                <Box>
                  <Text3>MIN</Text3>
                </Box>
              </Box>
              <Box w={2 / 12}>
                <Text2>:</Text2>
              </Box>
              <Box w={5 / 12}>
                <Box>
                  <Text2>12</Text2>
                </Box>
                <Box>
                  <Text3>SEC</Text3>
                </Box>
              </Box>
            </Flex>
          </center>
        </Box>
        <Box w={4.5 / 12} />
      </Flex>
    </WrapperSky>
  </Wrapper>
)
export default LiveTop
