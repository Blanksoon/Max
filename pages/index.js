// This is the Link API
import Head from 'next/head'
import Link from 'next/link'
import { Flex, Box } from 'rebass'
import Cookies from 'universal-cookie'
import styled from 'styled-components'
import { Footer } from '../components/home/Footer'
import { ComingLive } from '../components/home/ComingLive'
import LatestVideo from '../components/home/LatestVideo'
import MaxNew from '../components/home/MaxNew'
import StadiumTicket from '../components/home/StadiumTicket'
import About from '../components/home/About'
import Hero from '../components/home/Hero'
import OurShow from '../components/ourShow/OurShow'
import MaxNewsSeach from '../components/maxNews/MaxNewsSeach'
import ListVideo from '../components/maxNews/ListVideo'
import Login from '../components/login/Login'
import NewModal from '../containers/NewModal'
import Container from '../components/commons/Container'
import Main from '../layouts/Main'
import vars from '../components/commons/vars'
import { initStore } from '../redux/store'
import { fetchVods } from '../redux/modules/vod'
import withRedux from 'next-redux-wrapper'
import {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../redux/modules/modal'

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

class Index extends React.Component {
  componentDidMount() {
    const cookies = new Cookies()
    const cookie = cookies.get('token')
    return this.props.fetchVods(cookie)
  }
  render() {
    return (
      <div>
        <Head>
          <link href="../static/css/video-react.css" rel="stylesheet" />
        </Head>
        <Main url={this.props.url}>
          <NewModal />
          <GradientBg>
            <Container>
              <Hero lives={this.props.lives} />
              <LatestVideo name="Latest Video" />
            </Container>
          </GradientBg>
          <WrapperLive>
            <Container>
              <Flex>
                <Box w={12 / 12} pb="4em" pt="2em">
                  <ComingLive />
                </Box>
              </Flex>
            </Container>
          </WrapperLive>
          <WrapperStadiumTicket>
            <Container>
              <Flex>
                <Box w={12 / 12}>
                  <StadiumTicket />
                </Box>
              </Flex>
            </Container>
          </WrapperStadiumTicket>
          <WrapperAbout>
            <Container>
              <Box w={12 / 12}>
                <About />
              </Box>
            </Container>
          </WrapperAbout>
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

Index.getInitialProps = props => {
  return {
    lives: [
      {
        bannerUrl: '/static/img_live_banner.jpg',
        liveDate: '2017-09-30',
        title:
          'MAX Ultimate Tournament & MAX World Champions 7 International Fights',
      },
      {
        bannerUrl: '/static/slide2.jpg',
        liveDate: '2017-10-5',
        title: 'The Battle Muay Thai',
      },
      {
        bannerUrl: '/static/slide3.jpg',
        liveDate: '2017-10-10',
        title: 'Max World Champion 2013: DVD bookset',
      },
    ],
  }
}
export default withRedux(initStore, null, {
  fetchVods,
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
})(Index)
