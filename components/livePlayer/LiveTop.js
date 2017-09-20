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
  // background-image: url('static/img_live_banner.jpg');
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
  transition: ease-in-out 0.4s all;
  opacity: 1;
  height: 40%;
  width: 100%;
  color: #ffffff;
  background: rgba(1, 15, 30, 0.6);
  position: absolute;
  top: 25%;
  left: 0;
`
const Image = styled.img`width: 100%;`
const LiveTop = props => (
  <Wrapper>
    {/* <img src="static/img_live_banner.jpg" alt="Paris" /> */}
    <Image src="static/img_live_banner.jpg" alt="Paris" />
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
          <Box pt="54px">
            <Button color={color.red}>Buy Ticket</Button>
          </Box>
        </Box>
      </Flex>
    </WrapperText>
    <WrapperSky>
      <center>
        <Box>
          <Text
            pt="40px"
            color={color.yellow}
            bold
            children="LIVE in"
            fontSize="1.5em"
          />
        </Box>
        <Flex>
          <Box w={4 / 9} />
          <Box>
            <Box>
              <Text
                pt="20px"
                color={color.white}
                bold
                children="00"
                fontSize="3em"
              />
            </Box>
            <Box>
              <Text
                pt="20px"
                color={color.white}
                bold
                children="MIN"
                fontSize="1.5em"
              />
            </Box>
          </Box>
          <Box w={1 / 24}>
            <Text
              pt="30px"
              color={color.white}
              bold
              children=":"
              fontSize="2em"
            />
          </Box>
          <Box>
            <Box>
              <Text
                pt="20px"
                color={color.white}
                bold
                children="12"
                fontSize="3em"
              />
            </Box>
            <Box>
              <Text
                pt="20px"
                color={color.white}
                bold
                children="SEC"
                fontSize="1.5em"
              />
            </Box>
          </Box>
        </Flex>
      </center>
    </WrapperSky>
  </Wrapper>
)
export default LiveTop
