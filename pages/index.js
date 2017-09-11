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
import { Provider, Container, Flex, Box } from 'rebass'
const WrapperNavbar = styled.div`background-color: #011020;`
const Index = () => (
  <div className="wrapper-index">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Provider>
      <div className="home">
        <div className="wrapper-centerPage">
          <Container>
            <Flex>
              <Box w={12 / 12}>
                <NavbarHead />
                <HeroSection d="04" h="05" m="21" />
                <LatestVideo name="Latest Video" />
              </Box>
            </Flex>
          </Container>
        </div>
        <div>
          <Container>
            <Flex>
              <Box w={12 / 12}>
                <ComingLive />
                <MaxNew />
              </Box>
            </Flex>
          </Container>
        </div>
        <div className="wrapper-mid">
          <Container>
            <Flex>
              <Box w={12 / 12}>
                <StadiumTicket />
              </Box>
            </Flex>
          </Container>
        </div>
        <div className="wrapper-about">
          <Container>
            <Flex>
              <Box w={12 / 12}>
                <About />
              </Box>
            </Flex>
          </Container>
        </div>
        <div className="wrapper-contact">
          <Container>
            <Flex>
              <Box w={12 / 12}>
                <Footer />
              </Box>
            </Flex>
          </Container>
        </div>
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
      <style jsx>
        {`
          .wrapper-centerPage {
            color: #fff;
            background-color: #011020;
          }
          .wrapper-head {
            color: #fff;
            background-color: #011020;
          }
          .wrapper-cominglive {
            background-color: ;
          }
          .wrapper-mid {
            color: #ffffff;
            background-image: url('static/img_stadiumticket_banner.png');
          }
          .wrapper-about {
            color: #ffffff;
            background-image: url('static/img_home_about.png');
          }
          .wrapper-contact {
            background-color: #001f3d;
          }
          .home {
            font-family: Helvetica, Arial, sans-serif;
          }
        `}
      </style>
    </Provider>
  </div>
)

export default Index
