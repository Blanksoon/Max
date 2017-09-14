import Link from 'next/link'
import Head from 'next/head'
import { NavbarHead } from '../components/home/NavbarHead'
import { Footer } from '../components/home/Footer'
import { BackVideoCenter } from '../components/videoplayer/BackVideoCenter'
import Players from '../components/videoplayer/Player'
import { Description } from '../components/videoplayer/Description'
import UpNext from '../components/videoplayer/UpNext'
import StadiumTicket from '../components/home/StadiumTicket'
import { Provider, Container, Flex, Box } from 'rebass'
const videoPlayer = () => (
  <div className="wrapper-index">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="./static/css/video-react.css" rel="stylesheet" />
    </Head>
    <Provider>
      <div className="home">
        <div className="wrapper-centerPage">
          <Container>
            <Flex>
              <Box w={12 / 12}>
                <NavbarHead />
              </Box>
            </Flex>
          </Container>
        </div>
        <div className="wrapper-BackVideoCenter">
          <Container>
            <Flex>
              <Box w={12 / 12}>
                <BackVideoCenter />
              </Box>
            </Flex>
          </Container>
        </div>
        <div className="wrapper-BackVideoCenter">
          <Container>
            <Flex>
              <Box w={12 / 12}>
                <Players />
              </Box>
            </Flex>
          </Container>
        </div>
        <div className="wrapper-BackVideoCenter">
          <Container>
            <Flex>
              <Box w={12 / 12} bg="white">
                <Description />
              </Box>
            </Flex>
          </Container>
        </div>
        <div className="wrapper-BackVideoCenter">
          <Container>
            <Flex>
              <Box w={12 / 12} bg="white">
                <UpNext name="Up next" />
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
          .wrapper-cominglive {
            background-color: ;
          }
          .wrapper-BackVideoCenter {
            background-color: #ebebeb;
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
          .wrapper-mid {
            color: #ffffff;
            background-image: url('static/img_stadiumticket_banner.png');
          }
        `}
      </style>
    </Provider>
  </div>
)

export default videoPlayer
