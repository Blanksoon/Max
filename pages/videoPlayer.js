import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import { NavbarHead } from '../components/home/NavbarHead'
import { Footer } from '../components/home/Footer'
import { BackVideoCenter } from '../components/videoPlayer/BackVideoCenter'
import Players from '../components/videoPlayer/Player'
import { Description } from '../components/videoPlayer/Description'
import UpNext from '../components/videoPlayer/UpNext'
import StadiumTicket from '../components/home/StadiumTicket'
import { Container, Flex, Box } from 'rebass'
import Main from '../layouts/Main'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../redux/store'
import { fetchVods } from '../redux/modules/vod'
import {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../redux/modules/modal'

const WrapperStadiumTicket = styled.div`
  color: #ffffff;
  background-color: #b71111;
`
const videoPlayer = ({ url }) => {
  let i = 20
  const countdown = setInterval(function() {
    i--
    if (i < 0) {
      clearInterval(countdown)
    }
  }, 1000)
  return (
    <div className="wrapper-index">
      <Head>
        <link href="../static/css/video-react.css" rel="stylesheet" />
      </Head>
      <Main url={url}>
        <div className="wrapper-BackVideoCenter">
          <Container>
            <Flex>
              <Box w={12 / 12} pt="2rem">
                <BackVideoCenter name="Back to On Demand" url={url} />
              </Box>
            </Flex>
          </Container>
        </div>
        <div>
          <Container>
            <Flex>
              <Box w={12 / 12}>
                <Players />
              </Box>
            </Flex>
          </Container>
        </div>
        <div className="wrapper-BackVideoCenter">
          <Container>
            <Flex>
              <Box w={12 / 12} bg="white">
                <Description />
              </Box>
            </Flex>
          </Container>
        </div>
        <div className="wrapper-BackVideoCenter">
          <Container>
            <Flex>
              <Box w={12 / 12} bg="white">
                <UpNext name="Up next" />
              </Box>
            </Flex>
          </Container>
        </div>
        <WrapperStadiumTicket>
          <Container>
            <Flex>
              <Box w={12 / 12}>
                <StadiumTicket />
              </Box>
            </Flex>
          </Container>
        </WrapperStadiumTicket>
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
      </Main>
    </div>
  )
}
export default withRedux(initStore, null, {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
})(videoPlayer)
