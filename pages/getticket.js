import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import { Container, Flex, Box, Image, Text } from 'rebass'
import NewModal from '../containers/NewModal'
import Main from '../layouts/Main'
import color from '../components/commons/vars'
import Promocode from '../components/getTicket/Promocode'
import Promotion from '../components/getTicket/Promotion'
import StadiumTicket from '../components/home/StadiumTicket'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../redux/store'
import { fetchVods } from '../redux/modules/vod'
import {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../redux/modules/modal'

const WrapperLivePlayer = styled.div`
  background-color: ${props => props.color.lightBlue};
`
const WrapperStadiumTicket = styled.div`
  color: #ffffff;
  background-color: #b71111;
`
const WrapperPromotion = styled.div`background-color: #3d5d84;`
const LivePlayer = styled.div`height: 36rem;`
const getticket = ({ url }) => (
  <div>
    <Head>
      <link href="./static/css/video-react.css" rel="stylesheet" />
    </Head>
    <Main url={url}>
      <WrapperPromotion>
        <Container>
          <Box>
            <Promocode id={1} />
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
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
})(getticket)
