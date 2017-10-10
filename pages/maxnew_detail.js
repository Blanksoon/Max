import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import { Flex, Box, Image, Text } from 'rebass'
import Container from '../components/commons/Container'
import Main from '../layouts/Main'
import color from '../components/commons/vars'
<<<<<<< HEAD
import MaxTop from '../components/maxNews/MaxTop'
=======
import DetailLeft from '../components/maxNews/DetailLeft'
import MaxButtom from '../components/maxNews/MaxButtom'
>>>>>>> ecda9b58bf35e8d9949a5f804ca732a69bfef501
import Purchase from '../components/getTicket/Purchase'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../redux/store'
import { fetchVods } from '../redux/modules/vod'
import NewModal from '../containers/NewModal'
import {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../redux/modules/modal'
import * as api from '../api'

const Wrapper = styled.div`background-color: #3c5c83;`
class maxnew_detail extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <link href="/static/css/video-react.css" rel="stylesheet" />
        </Head>
        {/* {status.message ?  : null } */}
        <Main url={this.props.url}>
          <NewModal />
          <Wrapper>
            <Container>
<<<<<<< HEAD
              <Box pt="7rem">{/* <MaxTop /> */}</Box>
=======
              <Flex>
                <Box w={8 / 12} pt="7rem">
                  <DetailLeft />
                </Box>
                <Box W={3 / 12} />
              </Flex>
>>>>>>> ecda9b58bf35e8d9949a5f804ca732a69bfef501
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
  }
}

export default withRedux(initStore, null, {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
})(maxnew_detail)
