import React from 'react'
import { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Flex, Provider, Box, Text, overlay } from 'rebass'
import Button from '../commons/Button'
import Modal from '../modal/Modal'
import color from '../commons/vars'
import { formattedDate, pad } from '../../util'
import Player from '../videoPlayer/Player'

const Wrapper = styled.div`
  width: 100%;
  height: 74vh;
  background-size: cover;
  font-family: Helvetica, Arial, sans-serif;
  background-image: url('/static/img_live_banner.jpg');
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

  &:hover {
    color: #ffffff;
    cursor: pointer;
    background: ${color.lightBlue};
  }
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
class LiveTop extends Component {
  render() {
    let renderUI = <div />
    if (this.props.id === 1) {
      //promoclip
      renderUI = (
        <Wrapper>
          <WrapperText>
            <Flex>
              <Box w={6 / 12} pl="1rem" bg={color.transDarkblue} p={2}>
                <TextBig color={color.white}>
                  {this.props.live.title_en}
                </TextBig>
                <br />
                <Date color={color.yellow}>
                  {formattedDate(this.props.live.OnAirTime)}
                </Date>
              </Box>
              <Box w={4 / 12} />
              <Box w={2 / 12}>
                <Box pt="4rem" pl="2rem">
                  <Link href={`/getticket`}>
                    <a>
                      <Button color={color.red}>Buy Ticket</Button>
                    </a>
                  </Link>
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
                  <Text2>
                    {pad(this.props.countdown.day)} :{' '}
                    {pad(this.props.countdown.hrs)} :{' '}
                    {pad(this.props.countdown.min)} :{' '}
                    {pad(this.props.countdown.sec)}
                  </Text2>
                </Box>
                <Box>
                  <Text3>
                    DAY
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    HRS
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    MIN
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                    <Link href={`/getticket`}>
                      <a>
                        <ButtonBlue>BUY</ButtonBlue>
                      </a>
                    </Link>
                  </Box>
                </Flex>
                <Box pt="1rem" />
              </center>
            </Box>
          </WrapperSky>
        </Wrapper>
      )
    } else if (this.props.id === 2) {
      renderUI = <Player Url={this.props.URL} />
    } else if (this.props.id === 3) {
      renderUI = (
        <Wrapper>
          <WrapperText>
            <Flex>
              <Box w={6 / 12} pl="1rem" bg={color.transDarkblue} p={2}>
                <TextBig color={color.white}>
                  {this.props.live.title_en}
                </TextBig>
                <br />
                <Date color={color.yellow}>
                  {formattedDate(this.props.live.OnAirTime)}
                </Date>
              </Box>
              <Box w={4 / 12} />
              <Box w={2 / 12}>
                <Box pt="4rem" pl="2rem">
                  <Link href={`/getticket`}>
                    <a>
                      <Button color={color.red}>Buy Ticket</Button>
                    </a>
                  </Link>
                </Box>
              </Box>
            </Flex>
          </WrapperText>
          <WrapperSky>
            <Box pt="2.5rem">
              <center>
                <Flex pl="35%">
                  <Box>
                    <Text1>Living Now</Text1>
                  </Box>
                  <Box pl="1.5rem">
                    <Link href={`/getticket`}>
                      <a>
                        <Button color={color.red}>Buy</Button>
                      </a>
                    </Link>
                  </Box>
                  <Box pl="1.5rem">
                    <Text1>your ticket</Text1>
                  </Box>
                </Flex>
                <Box pt="2.5rem" />
              </center>
            </Box>
          </WrapperSky>
        </Wrapper>
      )
    }

    return <div>{renderUI}</div>
  }
}
export default LiveTop
