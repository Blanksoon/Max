// This is the Link API
import Head from 'next/head'
import Link from 'next/link'
import { Flex, Box } from 'rebass'
import Cookies from 'universal-cookie'
import styled from 'styled-components'
import withRedux from 'next-redux-wrapper'
import { ComingLive } from '../components/home/ComingLive'
import LatestVideo from '../components/home/LatestVideo'
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
import {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../redux/modules/modal'
import { recentLivesSelector } from '../redux/selectors/live'
import { recentVodsSelector } from '../redux/selectors/vod'
import * as api from '../api'

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

class Verify extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
    }
    this.verify = this.verify.bind(this)
  }
  async verify(token) {
    const url = `${api.SERVER}/activate-user?token=` + token
    try {
      let json = await api.get(url)
    } catch (error) {
      return console.log(error)
    }
  }
  render() {
    this.verify(this.props.url.query.token)
    return (
      <Main url={this.props.url}>
        <NewModal />
        <Container pt="10rem" pb="5rem">
          <center>
            <h1> Thank you for register</h1>
          </center>
        </Container>
      </Main>
    )
  }
}

export default withRedux(initStore, null, {
  fetchVods,
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
  fetchLives,
})(Verify)
