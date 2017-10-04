import React from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, overlay , Image , Text } from 'rebass'
import color from '../commons/vars'
import ThumbnailGetTicket from '../thumbnail/ThumbnailGetTicket'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 0;
`
const WrapperImg1 = styled.div`
  position: absolute;
  top: 5rem;
  left: 9.8rem;
  width: 200px;
  height: 200px;
`
const WrapperImg2 = styled.div`
position: absolute;
top: 5rem;
left: 34rem;
width: 200px;
height: 200px;
`
const WrapperImg3 = styled.div`
position: absolute;
top: 6.5rem;
right: 3rem;
width: 200px;
height: 200px;
`
const TextImg1 = styled.div`
  position: absolute;
  color: #fff;
  bottom: 0rem;
  left: 0.94rem;
  width: 377px;
  height: 92px;
  background-image: url('/static/img_black@3x.png');
  background-size: auto;
`
const TextImg2 = styled.div`
position: absolute;
color: #fff;
bottom: 0rem;
left: 25.45rem;
width: 385px;
height: 92px;
background-image: url('/static/img_blue@3x.png');
background-size: auto;
`
const TextImg3 = styled.div`
position: absolute;
color: #fff;
bottom: 0rem;
right: 1rem;
width: 377px;
height: 92px;
background-image: url('/static/img_red@3x.png');
background-size: auto;
`
const Text1 = styled.div`
  color: #b81111;
  font-weight: 700;
  font-size: 1em;
`
const Text2 = styled.div`
  color: #000;
  font-weight: 700;
  font-size: 1em;
`
const Text3 = styled.div`
  color: #000;
  font-weight: none;
  font-size: 1em;
`
const Promotion = props => (
  <Provider>
    <Wrapper>
      <Box pl="1rem" pt="5rem">
        <Text1>
          **After this promotion period, 3 packages of EXTREAM MUAY THAI will be
          ready to save.
        </Text1>
      </Box>
      <br />
      <Wrapper>
        <Flex>
          <Box w={4 / 12} pl="1rem" pr="0.5rem">
            <WrapperImg1>
              <Image width="50%" src="static/ic_live.png" />
            </WrapperImg1>
            <ThumbnailGetTicket
              bg="#022346"
              text1="GET 1 TIME"
              text2="LIVE STREAMING"
              text3="Watch 1 time of specific show"
              text4="live streaming on any platfrom"
              //text5="coming vary soon"
              text6={<br />}
            />
            <TextImg1>
              <Text
                pt="3rem"
                pl="8rem"
                color="#fff"
                children="coming vary soon"
                fontSize="0.95em"
              />
            </TextImg1>
          </Box>
          <Box w={4 / 12} pl="0.5rem" pr="0.5rem">
            <WrapperImg2>
              <Image width="50%" src="static/ic_vod.png" />
            </WrapperImg2>
            <ThumbnailGetTicket
              bg="#084a94"
              text1="1 MONTH SUBSCRIBE"
              text2="VIDEO ON DEMAND"
              text3="A Ton of videos are waiting for you"
              text4="to spend time with"
              //text5="coming vary soon"
              text6={<br />}
            />
            <TextImg2>
              <Text
                pt="3rem"
                pl="8rem"
                color="#fff"
                children="coming vary soon"
                fontSize="0.95em"
              />
            </TextImg2>
          </Box>
          <Box w={4 / 12} pl="0.5rem" pr="1rem">
            <WrapperImg3>
              <Image width="50%" src="static/ic_device_copy.png" />
            </WrapperImg3>
            <ThumbnailGetTicket
              bg="#890404"
              text1="1 MONTH SUBSCRIBE"
              text2="VDO AND LIVE STREAMING"
              text3="Enjoy all video and live streaming"
              text4="thru all the month, so you never miss"
              //text6="any extrems shot"
              //text5="coming vary soon"
            />
            <TextImg3>
              <Text
                pt="3rem"
                pl="8rem"
                color="#fff"
                children="coming vary soon"
                fontSize="0.95em"
              />
            </TextImg3>
          </Box>
        </Flex>
      </Wrapper>
      <Box pt="1.5rem" pl="1rem" pb="5rem">
        <Text2>Terms and Conditions</Text2>
        <Text3>
          -Irure dolor in reprehenderit in voluptate sunt in culpa quii officia
          deserunt mollit.
        </Text3>
        <Text3>
          -Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident,
        </Text3>
        <Text3>
          -Sunt in culpa qui officia deserunt mollit anim id est lavorum. Sed ut
          perspiciatis unde omnis iste natus
        </Text3>
      </Box>
    </Wrapper>
  </Provider>
)

export default Promotion
