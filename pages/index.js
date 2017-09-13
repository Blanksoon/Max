// This is the Link API
import Head from 'next/head'
import Link from 'next/link'
import { NavbarHead } from '../components/home/NavbarHead'
import { Footer } from '../components/home/Footer'
import { ComingLive } from '../components/home/ComingLive'
import LatestVideo from '../components/home/LatestVideo'
import MaxNew from '../components/home/MaxNew'
import StadiumTicket from '../components/home/StadiumTicket'
import About from '../components/home/About'
import HeroSection from '../components/home/HeroSection'
import styled from 'styled-components'
import OurShow from '../components/our show/OurShow'
import ContactUs from '../components/contact us/ContactUs'
import MaxNewsSeach from '../components/max news/MaxNewsSeach'
import ListVideo from '../components/max news/ListVideo'
import Login from '../components/login/Login'
import Modal from '../components/modal/Modal'
import { Provider, Container, Flex, Box } from 'rebass'
const WrapperNavbar = styled.div`background-color: #011020;`
const BackgroundImage = props =>
  styled.div`
    background-image: url({prop.image});
  `
const Index = () => (
  <div className="wrapper-index">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Provider>
      <div className="home">
        <Modal />
      </div>

      <style jsx>
        {`
          .home {
            font-family: Helvetica, Arial, sans-serif;
            position: relative;
          }
        `}
      </style>
    </Provider>
  </div>
)

export default Index
