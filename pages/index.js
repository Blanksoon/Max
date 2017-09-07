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
const Index = () => (
  <div className="wrapper-index">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Provider>
      <div className="wrapper-navbar">
        <div className="centerPage">
          <Navbar />
        </div>
      </div>
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
      {/* <div className="wrapper-centerPage">
        <div className="centerPage">
          <ThumbnailRight img= 'static/maxPromo.jpg'
            text1='Headline Headline consect'
            text2='adipicing elit sedid'
            date='Aug 11, 2017'
          />
          <ThumbnailBottom img= 'static/maxPromo.jpg'
            name= 'The Battle Muay-Thai(4/4)'
            date='On air - Aug 11, 2017'
          />
          <ThumbnailLive />
        </div>
      </div> */}
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
            .centerPage {
              width: 80%;
              margin: auto;
              border: 3px solid red;
            }
            .wrapper-navbar {
              background-color: #009999;
            }
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