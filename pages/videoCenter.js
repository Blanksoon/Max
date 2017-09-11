import Head from 'next/head'
import Link from 'next/link'
import { LabelSearch } from '../components/videoCenter/LabelSearch'
import styled from 'styled-components'
import { NavbarHead } from '../components/home/NavbarHead'
import { Footer } from '../components/home/Footer'
import { VideoBox } from '../components/videoCenter/VideoBox'
import {
  Provider,
  Container,
  Flex,
  Box,
} from 'rebass'
const WrapperNavbar = styled.div`
  background-color: #009999;
  `;
const videoCenter = () => (
  <div className="wrapper-index">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Provider>
      <div className='wrapper-head'>
        <Container>
          <Box w={12 / 12} >
            <NavbarHead />
          </Box>
        </Container>
      </div>
      <div>
        <Container>
          <Box>
            <LabelSearch />
            <VideoBox />
          </Box>
        </Container>
      </div>
    </Provider>
    <style jsx global>
      {
        `
            body {
              padding: 0 !important;
              margin: 0 !important;
            }
            `
      }
    </style>
    <style jsx>
      {`
            .wrapper-head {
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
            .home{
              font-family: Helvetica, Arial, sans-serif;
            }
          `}
    </style>
  </div>
)

export default videoCenter