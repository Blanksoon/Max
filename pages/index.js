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
import OurShow from '../components/ourShow/OurShow'
import ContactUs from '../components/contactUs/ContactUs'
import MaxNewsSeach from '../components/maxNews/MaxNewsSeach'
import ListVideo from '../components/maxNews/ListVideo'
import Login from '../components/login/Login'
import Modal from '../components/modal/Modal'
import { Provider, Container, Flex, Box } from 'rebass'
import Main from '../layouts/Main'

const WrapperTop = styled.div`
  color: #fff;
  background-color: #011020;
`

const Index = ({ url }) => (
  <Main url={url}>
    <div className="wrapper-index">
      <Provider>
        <div className="home">
          <WrapperTop>
            <Container>
              <Flex>
                <Box w={12 / 12}>
                  <NavbarHead />
                  <HeroSection d="04" h="05" m="21" />
                  <LatestVideo name="Latest Video" />
                </Box>
              </Flex>
            </Container>
          </WrapperTop>
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
              background: -webkit-linear-gradient(
                left,
                rgba(8, 74, 148, 1) 0%,
                rgba(8, 74, 148, 1) 49%,
                rgba(139, 3, 3, 1) 52%,
                rgba(139, 3, 3, 1) 100%
              ); /* Chrome10-25,Safari5.1-6 */
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
  </Main>
)

export default Index
