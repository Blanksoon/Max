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
import { media, theme } from '../../tools/responsive'
import vars from '../commons/vars'

const Wrapper = styled.div`
  height: 675px;
  background-size: cover;
  font-family: Helvetica, Arial, sans-serif;
  background-image: ${props => `url('${props.bannerUrl}')`};
  position: relative;
  background-repeat: no-repeat ${media.phone`height: 600px;`};
  ${media.iphone7p`height: 560px;`};
  ${media.phone`height: 485px;`};
  ${media.iphone5`height: 440px;`};
`
const TextBig = styled.div`
  font-weight: bold;
  color: ${props => props.color};
  font-size: 1.5em;
  ${media.desktop`font-size: 1.5em;`};
  ${media.ipadpro`font-size: 1.5em;`};
  ${media.ipad`font-size: 1.5em;`};
  ${media.phone`font-size: 1em;`};
  ${media.iphone5`font-size: 1em;`};
`
const Date = styled.div`
  font-weight: bold;
  color: ${props => props.color};
  font-size: 1em;
  ${media.desktop`font-size: 1em;`};
  ${media.ipadpro`font-size: 1em;`};
  ${media.ipad`font-size: 1em;`};
  ${media.phone`font-size: 1em;`};
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
  width: 125px;
  padding: 5px 0px;
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
  ${media.phone`
  width: 125px`};
  ${media.iphone5`
  font-size: 0.7em;
  padding: 3px 0px;
  width: 80px`};
`
const WrapperSky = styled.div`
  z-index: 1;
  width: 100%;
  color: #ffffff;
  background: rgba(1, 15, 30, 0.6);
  position: absolute;
  top: 25%;
  ${media.iphone7p`top: 10%;`};
  ${media.phone`top: 10%;`};
  ${media.iphone5`top: 10%;`};
  left: 0;
`
const Text1 = styled.div`
  color: yellow;
  font-weight: 700;
  font-size: 1.6em;
  ${media.ipad`font-size: 1.6em;`};
  ${media.phone`font-size: 1.6em;`};
`
const Text2 = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 4.2em;
  ${media.ipad`font-size: 3.2em;`};
  ${media.phone`font-size: 2.0em;`};
`
const Text3 = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 1.6em;
  ${media.ipad`font-size: 1.4em;`};
  ${media.phone`font-size: 0.9em;`};
`
const Text4 = styled.div`
  color: #3d7fb8;
  font-weight: 700;
  font-size: 1em;
  padding: 0%;
  ${media.ipad`font-size: 0.9em;`};
  ${media.phone`font-size: 0.9em;`};
  ${media.iphone5`font-size: 0.8em;`};
`
const Image = styled.img`width: 100%;`

const ButtonBuyticket = styled(Button)`
  background: ${vars.red};
  color: ${vars.white};
  cursor: pointer;
  background-color: #b81111;
  border: 1px solid #b81111;
  padding: 12px 16%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 0px;
  font-size: 1rem;
  font-weight: 700;
  ${media.ipad`
  font-size: 1rem;
  width: 100%};`} &:active {
    background: ${vars.red};
  }
  ${media.phone`
  font-size: 0.9rem;
  width: 100%};
  height: 40px;
  padding: 10px 16%;`} &:active {
    background: ${vars.red};
  }
  ${media.iphone5`
  font-size: 0.8rem;
  padding: 10px 14%;
  width: 100%};`} &:active {
    background: ${vars.red};
  }
`

class LiveTop extends Component {
  render() {
    console.log(typeof this.props.ui)
    let renderUI = <div />
    if (this.props.ui === 'COUNTDOWN') {
      //promoclip
      renderUI = (
        <Wrapper bannerUrl={this.props.live.bannerUrl}>
          <WrapperText>
            <Flex wrap>
              <Box
                w={[12 / 12, 12 / 12, 12 / 12, 6 / 12, 6 / 12]}
                pl="1rem"
                bg={color.transDarkblue}
                p={2}
              >
                <TextBig color={color.white}>
                  {this.props.lang === 'en' ? (
                    this.props.live.title_en
                  ) : (
                    this.props.live.title_th
                  )}&nbsp;
                  {this.props.lang === 'en' ? (
                    this.props.live.liveDateStr_en
                  ) : (
                    this.props.live.liveDateStr_th
                  )}
                </TextBig>
                <br />
                <Date color={color.yellow}>
                  {formattedDate(this.props.live.liveFromDate)}
                </Date>
              </Box>
              <Box w={[4 / 12, 4 / 12, 4 / 12, 4 / 12, 4 / 12]} />
              <Box
                w={[4 / 12, 5 / 12, 4 / 12, 2 / 12, 2 / 12]}
                className="buy-ticket"
                pt={['1rem', '1rem', '1rem', '4rem', '4rem']}
                pl={['0rem', '0rem', '0rem', '2rem', '2rem']}
              >
                {this.props.live.videoUrl ? null : (
                  <Link href={`/getticket`}>
                    <a>
                      <ButtonBuyticket>
                        {this.props.common.BuyTicket}
                      </ButtonBuyticket>
                    </a>
                  </Link>
                )}
              </Box>
            </Flex>
          </WrapperText>
          <WrapperSky>
            <Box pt="1.5rem">
              <center>
                <Box>
                  <Text1>{this.props.common.Livein}</Text1>
                </Box>
                <Box>
                  <Text2>
                    {pad(this.props.countdown.day)} :{' '}
                    {pad(this.props.countdown.hrs)} :{' '}
                    {pad(this.props.countdown.min)} :{' '}
                    {pad(this.props.countdown.sec)}
                  </Text2>
                </Box>
                <Flex>
                  <Box w={3.35 / 12} />
                  <Box w={1.25 / 12}>
                    <Text3>{this.props.common.DAY}</Text3>
                  </Box>
                  <Box w={1.4 / 12}>
                    <Text3>{this.props.common.HRS}</Text3>
                  </Box>
                  <Box w={1.4 / 12}>
                    <Text3>{this.props.common.MIN}</Text3>
                  </Box>
                  <Box w={1.4 / 12}>
                    <Text3>{this.props.common.SEC}</Text3>
                  </Box>
                </Flex>
                <br />
                <br />
                {this.props.live.videoUrl ? (
                  <Flex pl={['1%', '31%', '31%', '31%']}>
                    <Box pt="0.2rem">
                      <Text4>{this.props.common.Hooray}</Text4>
                    </Box>
                  </Flex>
                ) : (
                  <Flex wrap w={12 / 12} wrap>
                    <Box
                      pt={'0.2rem'}
                      pl={['0%', '0%', '23%', '25%', '31%']}
                      pr={'0%'}
                      w={[12 / 12, 7 / 12, 7 / 12, 7 / 12, 7 / 12]}
                    >
                      <Text4>{this.props.common.Hurry}</Text4>
                    </Box>
                    <Box
                      w={[12 / 12, 12 / 12, 5 / 12, 5 / 12, 5 / 12]}
                      pt={['1em', '1em', '0em', '0em', '0em']}
                      pr={['0%', '0%', '13%', '28%', '32%']}
                    >
                      <Link href={`/getticket`}>
                        <a>
                          <ButtonBlue>{this.props.common.BuyTicket}</ButtonBlue>
                        </a>
                      </Link>
                    </Box>
                  </Flex>
                )}

                <Box pt="1rem" />
              </center>
            </Box>
          </WrapperSky>
        </Wrapper>
      )
    } else if (this.props.ui === 'VIDEO_PLAYER') {
      renderUI = <Player Url={this.props.live.videoUrl} />
    } else if (this.props.ui === 'NOW_SHOWING') {
      renderUI = (
        <Wrapper bannerUrl={this.props.live.bannerUrl}>
          <WrapperText>
            <Flex>
              <Box
                w={[6 / 12, 7 / 12, 6 / 12, 6 / 12, 6 / 12]}
                pl="1rem"
                bg={color.transDarkblue}
                p={2}
                wrap
              >
                <TextBig color={color.white}>
                  {this.props.lang === 'en' ? (
                    this.props.live.title_en
                  ) : (
                    this.props.live.title_th
                  )}&nbsp;
                  {this.props.lang === 'en' ? (
                    this.props.live.liveDateStr_en
                  ) : (
                    this.props.live.liveDateStr_th
                  )}
                </TextBig>
                <br />
                <Date color={color.yellow}>
                  {formattedDate(this.props.live.liveFromDate)}
                </Date>
              </Box>
              {/* <Box w={[0, 0, 3 / 12, 3 / 12, 4 / 12]} /> */}
              <Box w={[6 / 12, 5 / 12, 3 / 12, 3 / 12, 2 / 12]}>
                <Box
                  pt={['4rem', '4rem', '0rem', '4rem', '4rem']}
                  pl={['2rem', '2rem', '0rem', '6rem', '2rem']}
                >
                  <Link href={`/getticket`}>
                    <a>
                      <ButtonBuyticket color={color.red}>
                        {this.props.common.BuyTicket}
                      </ButtonBuyticket>
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
                  <Text1>{this.props.common.Nowshowing}</Text1>
                </Box>
                <br />
                <br />
                <Flex className="test" pl={['7%', '12%', '35%', '35%', '35%']}>
                  <Box pt="0.2rem">
                    <Text4>{this.props.common.Hurry}</Text4>
                  </Box>
                  <Box
                    pl={['0.5rem', '0.5rem', '1.5rem', '1.5rem', '1.5rem']}
                    pr={['1rem', '1rem', '1rem', '1rem', '1rem']}
                  >
                    <Link href={`/getticket`}>
                      <a>
                        <ButtonBlue>{this.props.common.BuyTicket}</ButtonBlue>
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
    }

    return <div>{renderUI}</div>
  }
}
export default LiveTop
