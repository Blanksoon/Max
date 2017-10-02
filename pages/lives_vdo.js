import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import { BackVideoCenter } from '../components/videoPlayer/BackVideoCenter'
import Players from '../components/videoPlayer/Player'
import { LiveDescription } from '../components/livePlayer/LiveDescription'
import LiveTop from '../components/livePlayer/LiveTop'
import UpNext from '../components/videoPlayer/UpNext'
import StadiumTicket from '../components/home/StadiumTicket'
import { Flex, Box, Image, Text } from 'rebass'
import Container from '../components/commons/Container'
import Main from '../layouts/Main'
import color from '../components/commons/vars'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../redux/store'
import { fetchLive } from '../redux/modules/live'
import { currentLiveSelector } from '../redux/selectors/live'
import NewModal from '../containers/NewModal'
import {
  toggleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../redux/modules/modal'
const WrapperStadiumTicket = styled.div`
  color: #ffffff;
  background-color: #b71111;
`
const WrapperLivePlayer = styled.div`
  background-color: ${props => props.color.lightBlue};
`
const LivePlayer = styled.div`height: 36rem;`
const LiveVdo = ({ url, live }) => {
  return (
    <div>
      <Head>
        <link href="/static/css/video-react.css" rel="stylesheet" />
      </Head>
      <Main url={url}>
        <NewModal />
        <div style={{ paddingTop: '2rem' }}>
          <WrapperLivePlayer color={color}>
            <Container>
              <Flex>
                <Box w={12 / 12}>
                  <BackVideoCenter name="Back to Live" url={url} />
                </Box>
              </Flex>
            </Container>
          </WrapperLivePlayer>
        </div>
        <div>
          <WrapperLivePlayer color={color}>
            <Container>
              <LiveTop live={live} />
            </Container>
          </WrapperLivePlayer>
        </div>
        <div>
          <WrapperLivePlayer color={color}>
            <Container>
              <Flex>
                <Box w={12 / 12} bg="white">
                  <LiveDescription live={live} />
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
    </div>
  )
}
const mapStateToProps = state => {
  const live = currentLiveSelector(state)
  return { live }
}
LiveVdo.getInitialProps = async ({ store, isServer, query, req }) => {
  let state = store.getState()
  const token = state.auth.token
  const response = await fetchLive(token, query.id)(store.dispatch)
  state = store.getState()
  const props = mapStateToProps(state)
  return props
}

export default withRedux(initStore, mapStateToProps, {
  fetchLive,
  toggleModal,
  updateModalType,
  indexModalURL,
  closeModal,
})(LiveVdo)
