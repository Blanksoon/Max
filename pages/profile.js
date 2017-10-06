// This is the Link API
import Head from 'next/head'
import Link from 'next/link'
import { Flex, Box } from 'rebass'
import Cookies from 'universal-cookie'
import styled from 'styled-components'
import withRedux from 'next-redux-wrapper'
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
import { fetchLives } from '../redux/modules/live'
import color from '../components/commons/vars'
import {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../redux/modules/modal'
import { recentLivesSelector } from '../redux/selectors/live'
import { recentVodsSelector } from '../redux/selectors/vod'

const WrapperTop = styled.div`
  color: #fff;
  background-color: #011020;
`
const WrapperLive = styled.div`
  color: #fff;
  background-image: url('/static/bg-upcoming-home.jpg');
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
  background: -webkit-linear-gradient(
    top,
    #020f1f 0%,
    #020f1f 12%,
    #020f1f 64%,
    #020f1f 75%,
    #08488f 92%,
    #08488f 100%
  ); /* Chrome10-25,Safari5.1-6 */
`
const Home = styled.div`font-family: Helvetica, Arial, sans-serif;`

const WrapperProfile = styled.div`
  background-color: ${props => props.color.lightBlue};
`
const WrapperBoxProfile = styled.div`
  border-style: solid;
  border-width: 1px;
`

const WrapperBoxProfileMargin = styled.div`
  margin-left: 1.2rem;
  margin-right: 1.2rem;
`

import { Welcome } from '../components/profile/Welcome'
import { UserProfile } from '../components/profile/UserProfile'
import { InputProfile } from '../components/profile/InputProfile'
import { PurchaseHistory } from '../components/profile/PurchaseHistory'
import { ListPurchase } from '../components/profile/ListPurchase'
class Profile extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <link href="/static/css/video-react.css" rel="stylesheet" />
        </Head>
        <Main url={this.props.url}>
          <NewModal />
          <div className="profile">
            <WrapperProfile color={color}>
              <Container>
                <Box px="3rem" pt="9rem" bg="white" pb="2rem">
                  <Welcome />
                  <WrapperBoxProfile>
                    <WrapperBoxProfileMargin>
                      <UserProfile />
                      <InputProfile />

                      {/* <PurchaseHistory />
                      <ListPurchase />
                      <ListPurchase />
                      <ListPurchase />
                      <ListPurchase /> */}
                    </WrapperBoxProfileMargin>
                  </WrapperBoxProfile>
                </Box>
              </Container>
            </WrapperProfile>
          </div>
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

const mapStateToProps = state => {
  return {
    lives: recentLivesSelector(state),
    vods: recentVodsSelector(state),
  }
}
Profile.getInitialProps = async ({ store, isServer, query, req }) => {
  let state = store.getState()
  const token = state.auth.token
  const response = await fetchLives(token)(store.dispatch)
  const responseVods = await fetchVods(token)(store.dispatch)
  state = store.getState()
  const props = mapStateToProps(state)
  return props
}

export default withRedux(initStore, mapStateToProps, {
  fetchVods,
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
  fetchLives,
})(Profile)
