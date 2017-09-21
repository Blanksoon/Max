import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import { Provider as Rebass, Container, Flex, Box, Image, Text } from 'rebass'
import rootReducer from '../reducers'
import NewModal from '../containers/NewModal'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import Main from '../layouts/Main'
import color from '../components/commons/vars'
import Promocode from '../components/getTicket/Promocode'
import Promotion from '../components/getTicket/Promotion'
import StadiumTicket from '../components/home/StadiumTicket'

const WrapperLivePlayer = styled.div`
  background-color: ${props => props.color.lightBlue};
`
const WrapperStadiumTicket = styled.div`
  color: #ffffff;
  background-color: #b71111;
`
const WrapperPromotion = styled.div`background-color: #3d5d84;`
const LivePlayer = styled.div`height: 36rem;`
const store = createStore(rootReducer, composeWithDevTools())
const getticket = ({ url }) => (
  <div>
    <Head>
      <link href="./static/css/video-react.css" rel="stylesheet" />
    </Head>
    <Provider store={store}>
      <Rebass>
        <Main url={url}>
          <WrapperPromotion>
            <Container>
              <Box>
                <Promocode />
              </Box>
            </Container>
          </WrapperPromotion>
          <WrapperPromotion>
            <Container>
              <Box>
                <Promotion />
              </Box>
            </Container>
          </WrapperPromotion>
          <WrapperStadiumTicket>
            <Container>
              <Flex>
                <Box w={12 / 12}>
                  <StadiumTicket />
                </Box>
              </Flex>
            </Container>
          </WrapperStadiumTicket>
        </Main>
      </Rebass>
    </Provider>
  </div>
)

export default getticket
