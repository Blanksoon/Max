// This is the Link API
import Head from 'next/head'
import Link from 'next/link'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'
import Login from '../components/login/Login'
import NewModal from '../containers/NewModal'
import Container from '../components/commons/Container'
import Main from '../layouts/Main'
import vars from '../components/commons/vars'
import Cookies from 'universal-cookie'
import { initStore } from '../redux/store'
import { fetchVods } from '../redux/modules/vod'
import withRedux from 'next-redux-wrapper'
import {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../redux/modules/modal'
const cookies = new Cookies()

const WrapperTop = styled.div`
  color: #fff;
  background-color: #011020;
`
const WrapperLive = styled.div`
  color: #fff;
  background-image: url('static/bg-upcoming-home.jpg');
  background-size: cover;
  background-position-y: 0px;
`
const WrapperStadiumTicket = styled.div`
  color: #ffffff;
  background-color: #b71111;
`
const WrapperAbout = styled.div`
  color: #ffffff;
  background: -webkit-linear-gradient(
    left,
    rgba(7, 70, 141, 1) 0%,
    rgba(7, 70, 141, 1) 48%,
    rgba(139, 3, 3, 1) 52%,
    rgba(139, 3, 3, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
`
const GradientBg = styled.div`
  background: linear-gradient(${vars.darkblue}, ${vars.blue});
`
const Home = styled.div`font-family: Helvetica, Arial, sans-serif;`
let cookie = ''

class login extends React.Component {
  componentDidMount() {
    cookie = cookies.get('token')
    //console.log('get cookie', cookie)
    return this.props.fetchVods(cookie)
  }
  render() {
    return (
      <div>
        <Head>
          <link href="/static/css/video-react.css" rel="stylesheet" />
        </Head>
        <Main url={this.props.url}>
          <NewModal />
          <Container>
            <Flex>
              <Box w={2 / 12} />
              <Box w={8 / 12} pt="7rem" pb="2rem">
                <Login />
              </Box>
            </Flex>
          </Container>

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
}
export default withRedux(initStore, null, {
  fetchVods,
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
})(login)
