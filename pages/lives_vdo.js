import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import { NavbarHead } from '../components/home/NavbarHead'
import { Footer } from '../components/home/Footer'
import { BackVideoCenter } from '../components/videoPlayer/BackVideoCenter'
import Players from '../components/videoPlayer/Player'
import { LiveDescription } from '../components/livePlayer/LiveDescription'
import LiveTop from '../components/livePlayer/LiveTop'
import UpNext from '../components/videoPlayer/UpNext'
import StadiumTicket from '../components/home/StadiumTicket'
import { Provider as Rebass, Container, Flex, Box, Image, Text } from 'rebass'
import rootReducer from '../reducers'
import NewModal from '../containers/NewModal'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import Main from '../layouts/Main'
import color from '../components/commons/vars'
const WrapperStadiumTicket = styled.div`
  color: #ffffff;
  background-color: #b71111;
`
const WrapperLivePlayer = styled.div`
  background-color: ${props => props.color.lightBlue};
`
const LivePlayer = styled.div`height: 36rem;`
const store = createStore(rootReducer, composeWithDevTools())
const videoPlayer = ({ url }) => (
  <div>
    <Head>
      <link href="./static/css/video-react.css" rel="stylesheet" />
    </Head>
    <Provider store={store}>
      <Rebass>
        <Main url={url}>
          <NewModal />
          <div>
            <WrapperLivePlayer color={color}>
              <Container>
                <Flex>
                  <Box w={12 / 12}>
                    <BackVideoCenter name="Back to Live" />
                  </Box>
                </Flex>
              </Container>
            </WrapperLivePlayer>
          </div>
          <div>
            <WrapperLivePlayer color={color}>
              <Container>
                <LiveTop />
              </Container>
            </WrapperLivePlayer>
          </div>
          <div>
            <WrapperLivePlayer color={color}>
              <Container>
                <Flex>
                  <Box w={12 / 12} bg="white">
                    <LiveDescription />
                    <Box width={12 / 12} pt="1rem" pl="1rem" pr="1rem">
                      <hr size="0.1" />
                    </Box>
                  </Box>
                </Flex>
              </Container>
            </WrapperLivePlayer>
          </div>
          <div>
            <WrapperLivePlayer color={color}>
              <Container>
                <Flex>
                  <Box w={12 / 12} bg="white">
                    <UpNext name="THIS SHOW RELATED VIDEO" />
                  </Box>
                </Flex>
              </Container>
            </WrapperLivePlayer>
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