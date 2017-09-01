// This is the Link API
import Head from 'next/head'
import Link from 'next/link'
import {Navbar} from '../components/home/Navbar'
import {Footer} from '../components/home/Footer'
import {ComingLive} from '../components/home/ComingLive'

import LatestVideo from '../components/home/LatestVideo'
import MaxNew from '../components/home/MaxNew'
import StadiumTicket from '../components/home/StadiumTicket'
import About from '../components/home/About'
import HeroSection from '../components/home/HeroSection'
import {
  Provider
} from 'rebass'
const Index = () => (
  <div className="wrapper-index">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Provider>
      <div className="warrper-navbar">
        <div className="centerPage">
          <Navbar />
        </div>
      </div>
      <HeroSection />
      <div className="warrper-centerPage">
        <div className="centerPage">
          <LatestVideo />
        </div>
      </div>
      <div className="warrper-cominglive">
        <div className="centerPage">
          <ComingLive />
        </div>
      </div>
      <div className="warrper-centerPage">
        <div className="centerPage">
          <MaxNew />
        </div>
      </div>
      <div className="warrper-centerPage">
        <div className="centerPage">
          <StadiumTicket />
        </div>
      </div>
      <div className="warrper-centerPage">
        <div className="centerPage">
          <About />
        </div>
      </div>
      <div className="warrper-centerPage">
        <div className="centerPage">
          <Footer />
        </div>
      </div>
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
            .centerPage {
              width: 1200px;
              margin: auto;
              border: 3px solid red;
            }
            .warrper-navbar {
              background-color: #009999;
            }
            .warrper-centerPage {
              background-color: gray;
            }
            .warrper-cominglive {
              background-color: yellow;
            }
          `}
      </style>
    </Provider>
  </div>
)

export default Index