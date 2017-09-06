import Head from 'next/head'
import Link from 'next/link'
import { LabelSearch } from '../components/videoCenter/LabelSearch'
import styled from 'styled-components'
import { NavbarHead } from '../components/home/NavbarHead'
import { Footer } from '../components/home/Footer'
import { VideoBox } from '../components/videoCenter/VideoBox'
import {
  Provider,
  Container
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
      <Container>
        <WrapperNavbar>
          <div className="centerPage">
            <NavbarHead />
          </div>
        </WrapperNavbar>
        <div className="wrapper-navbar">
          <div className="centerPage">
            <LabelSearch />
          </div>
        </div>
        <div className="wrapper-VideoBox">
          <div className="centerPage">
            <VideoBox />
          </div>
        </div>
        <div className="wrapper-centerPage">
          <div className="centerPage">
            <Footer />
          </div>
        </div>
      </Container>
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
  </div>
)

export default videoCenter