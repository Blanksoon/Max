import Head from 'next/head'
import Link from 'next/link'
import {Navbar} from '../components/home/Navbar'
import {Footer} from '../components/home/Footer'
import {VideoCenter} from '../components/videoplayer/VideoCenter'
import {Player} from '../components/videoplayer/Player'
import {Description} from '../components/videoplayer/Description'
import LatestVideo from '../components/home/LatestVideo'
import {
  Provider
} from 'rebass'
const videoPlayer = () => (
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
      <div className="wrapper-videoCenter">
        <div className="centerPage">
          <VideoCenter />
        </div>
      </div>
      <div className="wrapper-Player">
        <div className="centerPage">
          <Player />
        </div>
      </div>
      <div className="wrapper-Description">
        <div className="centerPage">
          <Description />
        </div>
      </div>
      <div className="wrapper-centerPage">
        <div className="centerPage">
          <LatestVideo name="Up next"/>
        </div>
      </div>
      <div className="wrapper-centerPage">
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
              backgroud-color: #000;
            }
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
            .wrapper-videoCenter {
              background-color: green;
            }
            .wrapper-Player {
              background-color: darkblue;
            }
            .wrapper-Description {
              background-color: white;
            }
          `}
      </style>
    </Provider>
  </div>
)

export default videoPlayer