import Head from 'next/head'
import Link from 'next/link'
import { NavbarHead } from '../components/home/NavbarHead'
import { Footer } from '../components/home/Footer'
import { BackVideoCenter } from '../components/videoplayer/BackVideoCenter'
import { Player } from '../components/videoplayer/Player'
import { Description } from '../components/videoplayer/Description'
import UpNext from '../components/videoplayer/UpNext'
import StadiumTicket from '../components/home/StadiumTicket'
import { Provider, Container, Flex, Box } from 'rebass'
const videoPlayer = () => (
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
                <Player />
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

  //   <Provider>
  //     <Container>
  //       <div className="wrapper-navbar">
  //         <div className="centerPage">
  //           <NavbarHead />
  //         </div>
  //       </div>
  //       <div className="wrapper-videoCenter">
  //         <div className="centerPage">
  //           <BackVideoCenter />
  //         </div>
  //       </div>
  //       <div className="wrapper-Player">
  //         <div className="centerPage">
  //           <Player />
  //         </div>
  //       </div>
  //       <div className="wrapper-Description">
  //         <div className="centerPage">
  //           <Description />
  //         </div>
  //       </div>
  //       <div className="wrapper-centerPage">
  //         <div className="centerPage">
  //           <LatestVideo name="Up next" />
  //         </div>
  //       </div>
  //       <div className="wrapper-centerPage">
  //         <div className="centerPage">
  //           <Footer />
  //         </div>
  //       </div>
  //       <style jsx global>
  //         {
  //           `
  //           body {
  //             padding: 0 !important;
  //             margin: 0 !important;
  //             backgroud-color: #000;
  //           }
  //           `
  //         }
  //       </style>
  //       <style jsx>
  //         {`
  //           .wrapper-navbar {
  //             background-color: #009999;
  //           }
  //           .wrapper-centerPage {
  //             background-color: gray;
  //           }
  //           .wrapper-cominglive {
  //             background-color: yellow;
  //           }
  //           .wrapper-videoCenter {
  //             background-color: green;
  //           }
  //           .wrapper-Player {
  //             background-color: darkblue;
  //           }
  //           .wrapper-Description {
  //             background-color: white;
  //           }
  //         `}
  //       </style>
  //     </Container>
  //   </Provider>
  // </div>
)

export default videoPlayer
