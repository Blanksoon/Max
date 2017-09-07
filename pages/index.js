// This is the Link API
import Head from 'next/head'
import Link from 'next/link'
import {NavbarHead} from '../components/home/NavbarHead'
import {Footer} from '../components/home/Footer'
import {ComingLive} from '../components/home/ComingLive'
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
import ThumbnailRight from '../components/thumbnail/ThumbnailRight'
import ThumbnailBottom from '../components/thumbnail/ThumbnailBottom'
import ThumbnailLive from '../components/thumbnail/ThumbnailLive'
import {
  Provider,
  Container,
} from 'rebass'
const WrapperNavbar = styled.div`
  background-color: #009999;
`;
const Index = () => (
  <div className="wrapper-index">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Provider>
    <Container>
      <WrapperNavbar className="wrapper-navbar">
        <div className="centerPage">
          <NavbarHead />
        </div>
      </WrapperNavbar>
      <div className="wrapper-centerPage">
        <div className="centerPage">
          <HeroSection d = '04' h = '05' m = '21'/>
          <LatestVideo name = 'Latest Video'/>
        </div>
      </div>
      <div className="wrapper-cominglive">
        <div className="centerPage">
          <ComingLive />
        </div>
      </div>
      <div className="wrapper-centerPage">
        <div className="centerPage">
          <MaxNew />
        </div>
      </div>
      <div className="wrapper-centerPage">
        <div className="centerPage">
          <StadiumTicket />
        </div>
      </div>
      <div className="wrapper-centerPage">
        <div className="centerPage">
          <About />
        </div>
      </div>
      <div className="wrapper-centerPage">
        <div className="centerPage">
          <Footer />
        </div>
      </div>
    </Container>
      <style jsx global>
          {
            `
            body {
              padding: 0 !important;
              margin: 0 !important;
            }
            {/* * {
              box-sizing: border-box;
            } */}
            `
          }
      </style>
      <style jsx>
          {`
            .wrapper-centerPage {
              background-color: gray;
            }
            .wrapper-cominglive {
              background-color: yellow;
            }
          `}
      </style>
    </Provider>
  </div>
)

export default Index