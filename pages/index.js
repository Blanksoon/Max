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
import {
  Provider,
  Container,
  Flex,
  Box,
} from 'rebass'
const WrapperNavbar = styled.div`
  background-color: #011020;
`;
const Index = () => (
  <div className="wrapper-index">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Provider>
      <div className="wrapper-centerPage">
        <Flex>
          <Box w={2/12} ></Box>
          <Box w={8/12} >
            <NavbarHead />
            <HeroSection d='04' h='05' m='21' />
            <LatestVideo name='Latest Video' />
          </Box>
          <Box w={2/12} ></Box>
        </Flex>
      </div>
      <div>
        <Flex>
          <Box w={2/12} ></Box>
          <Box w={8/12} >
            <ComingLive />
            <MaxNew />
          </Box>
          <Box w={2/12} ></Box>
        </Flex>
      </div>
      <div className="wrapper-mid">
        <Flex>
          <Box w={2/12} ></Box>
          <Box w={8/12} >
            <StadiumTicket />
          </Box>
          <Box w={2/12} ></Box>
        </Flex>
      </div>
      <div className="wrapper-about" >
        <Flex>
          <Box w={2/12} ></Box>
          <Box w={8/12} >
            <About />
          </Box>
          <Box w={2/12} ></Box>
        </Flex>
      </div>
      <div className="wrapper-contact" >
        <Flex>
          <Box w={2/12} ></Box>
          <Box w={8/12} >
            <Footer />
          </Box>
          <Box w={2/12} ></Box>
        </Flex>
      </div>
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
              color: #fff;
              background-color: #011020;
            }
            .wrapper-cominglive {
              background-color: ;
            }
            .wrapper-mid{
              color: #ffffff;
              background-image: url("static/img_stadiumticket_banner.png");
            }
            .wrapper-about{
              color: #ffffff;
              background-image: url("static/img_home_about.png");
            }
            .wrapper-contact{
              background-color: #001F3D;
            }
          `}
      </style>
    </Provider>
  </div>
)

export default Index