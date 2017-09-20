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
import { Provider as Rebass, Container, Flex, Box } from 'rebass'
import rootReducer from '../reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import Main from '../layouts/Main'
const WrapperStadiumTicket = styled.div`
  color: #ffffff;
  background-color: #b71111;
`
const store = createStore(rootReducer, composeWithDevTools())
const videoPlayer = ({ url }) => (
  <div className="wrapper-index">
    <Head>
      <link href="./static/css/video-react.css" rel="stylesheet" />
    </Head>
    <Provider store={store}>
      <Rebass>
        <Main url={url}>
          <div className="wrapper-BackVideoCenter">
            <Container>
              <Flex>
                <Box w={12 / 12}>
                  <BackVideoCenter name="Back to On Demand" />
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
      </Rebass>
    </Provider>
  </div>
)

export default videoPlayer
