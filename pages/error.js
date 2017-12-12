import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import { Flex, Box, Image, Text } from 'rebass'
import Container from '../components/commons/Container'
import Main from '../layouts/Main'
import color from '../components/commons/vars'
import MaxTop from '../components/maxNews/MaxTop'
import MaxButtom from '../components/maxNews/MaxButtom'
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

const Text1 = styled.div`
  padding-left: 1rem;
  padding-top: 1rem;
  color: #8a8a8a;
  font-weight: 700;
  font-size: 75px;
  font-family: Helvetica, Arial, sans-serif;
`

const Text2 = styled.div`
  padding-left: 1rem;
  padding-top: 40px;
  color: #8a8a8a;
  font-size: 16px;
  font-family: Helvetica, Arial, sans-serif;
`

const Text3 = styled.div`
  padding-left: 1rem;
  padding-top: 1em;
  color: #8a8a8a;
  font-size: 16px;
  font-family: Helvetica, Arial, sans-serif;
`

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #8a8a8a;
  color: #656565;
  cursor: pointer;
  //padding: 12px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
  font-size: 16px;
  width: 240px;
  height: 40px;
`

const Wrapper = styled.div`
  background-color: #fff;
  // width: 100%;
  // height: 100%;
  // background-size: cover;
  // margin-top: 0%;
`
const Wrapperr = styled.div`
  background-image: url('/static/img_bg_errorpage.jpg');
  width: 100%;
  height: 100%;
  background-size: cover;
`
class test extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <link href="/static/css/video-react.css" rel="stylesheet" />
        </Head>
        {/* {status.message ?  : null } */}
        <Main url={this.props.url}>
          <NewModal />
          <Wrapperr>
            <Wrapper>
              <Container>
                <Box pt="7rem">
                  <Wrapperr>
                    <Flex>
                      <Box w={6 / 12} />
                      <Box pt="7em" pb="9em" w={6 / 12}>
                        <Text1>Error :(</Text1>
                        <Text2>
                          Something went wrong and we're working hard to resolve
                          it.
                        </Text2>
                        <Text3>
                          sjsajfl jsdfakldjflj woiwoij sfjsl <br />sfsadfsafhj.
                        </Text3>
                        <Box pt="40px" pl="1em">
                          <Button>Back to Homepage</Button>
                        </Box>
                      </Box>
                    </Flex>
                  </Wrapperr>
                </Box>
              </Container>
            </Wrapper>
          </Wrapperr>
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
})(test)
