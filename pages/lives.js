import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Flex, Box, Image } from 'rebass'
import Main from '../layouts/Main'
import color from '../components/commons/vars'
import ThumbnailBigLive from '../components/thumbnail/ThumbnailBigLive'
import Container from '../components/commons/Container'
import { initStore } from '../redux/store'
import { fetchVods } from '../redux/modules/vod'
import withRedux from 'next-redux-wrapper'
import {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../redux/modules/modal'

const Text = styled.div`
  color: #b81111;
  font-weight: 700;
  font-size: 2em;
`
const Wrapper = styled.div`
  background-color: #3d7fb8;
  font-family: Helvetica, Arial, sans-serif;
`
const LivePlayer = styled.div`height: 36rem;`

const lives = ({ url }) => (
  <div>
    <Main url={url}>
      <Wrapper>
        <Container>
          <Box pl="1.5rem" bg="#fff" pt="8rem">
            <Text>LIVE</Text>
          </Box>
          <Flex bg="#fff" pt="2rem">
            <Box w={6 / 12} pl="1.5rem" pr="0.75rem">
              <ThumbnailBigLive
                img="/static/maxultimate-show.jpg"
                text1="Now! LIVE-on Sun.Aug 20th, 2017"
                text2="MAX Ultimate Tournament & MAX World Champions 7"
                text3="InternationalFights"
                text4="live telecast on Channel 8 HD 27"
                text5="every Sunday 7.20-9.50 pm."
              />
            </Box>
            <Box w={6 / 12} pl="0.75rem" pr="1.5rem">
              <ThumbnailBigLive
                img="/static/thairath-show.jpg"
                text1="NEXT-on Sat. Aug 19th, 2017"
                text2="Thairath Muay-Thai Figther"
                text3={<br />}
                text4="live telecast on ThairathTV HD 32"
                text5="every Saturday 2.00-4.00 pm."
              />
            </Box>
          </Flex>
          <Flex bg="#fff" pt="2rem" pb="3rem">
            <Box w={6 / 12} pl="1.5rem" pr="0.75rem">
              <ThumbnailBigLive
                img="/static/thechampion-show.jpg"
                text1="Now! LIVE-on Sun.Aug 20th, 2017"
                text2="The Champion Muay-Thai"
                text3={<br />}
                text4="live telecast on Channel 8 HD 27"
                text5="every Sunday 7.20-9.50 pm."
              />
            </Box>
            <Box w={6 / 12} pl="0.75rem" pr="1.5rem">
              <ThumbnailBigLive
                img="/static/thebattle-show.jpg"
                text1="Now! LIVE-on Sun.Aug 20th, 2017"
                text2="The Battle Muay-Thai"
                text3={<br />}
                text4="live telecast on Channel 8 HD 27"
                text5="every Sunday 7.20-9.50 pm."
              />
            </Box>
          </Flex>
        </Container>
      </Wrapper>
    </Main>
    <style jsx global>
      {`
        body {
          padding: 0 !important;
          margin: 0 !important;
        }
         {
          /* * {
              box-sizing: border-box;
            } */
        }
      `}
    </style>
  </div>
)

export default withRedux(initStore, null, {
  fetchVods,
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
})(lives)
