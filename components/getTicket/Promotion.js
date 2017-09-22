import React from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, overlay } from 'rebass'
import color from '../commons/vars'
import ThumbnailGetTicket from '../thumbnail/ThumbnailGetTicket'

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
const Wrapper = styled.div`background-color: #fff;`
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
      <Flex>
        <Box w={4 / 12} pl="1rem" pr="0.5rem">
          <ThumbnailGetTicket
            bg="#022346"
            text1="GET 1 TIME"
            text2="LIVE STREAMING"
            text3="Watch 1 time of specific show"
            text4="live streaming on any platfrom"
            text5="coming vary soon"
            text6={<br />}
          />
        </Box>
        <Box w={4 / 12} pl="0.5rem" pr="0.5rem">
          <ThumbnailGetTicket
            bg="#084a94"
            text1="1 MONTH SUBSCRIBE"
            text2="VIDEO ON DEMAND"
            text3="A Ton of videos are waiting for you"
            text4="to spend time with"
            text5="coming vary soon"
            text6={<br />}
          />
        </Box>
        <Box w={4 / 12} pl="0.5rem" pr="1rem">
          <ThumbnailGetTicket
            bg="#890404"
            text1="1 MONTH SUBSCRIBE"
            text2="VDO AND LIVE STREAMING"
            text3="Enjoy all video and live streaming"
            text4="thru all the month, so you never miss"
            text6="any extrems shot"
            text5="coming vary soon"
          />
        </Box>
      </Flex>
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
