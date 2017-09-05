import Head from 'next/head'
import Link from 'next/link'
import {LabelSearch} from '../components/videoCenter/LabelSearch'
import styled from 'styled-components'
import {Navbar} from '../components/home/Navbar'
import {Footer} from '../components/home/Footer'
import {
  Provider,
  Container
} from 'rebass'
const WrapperNavbar = styled.div`
background-color: #009999;
`;
const videoPlayer = () => (
  <div className="wrapper-index">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Provider>
    <Container>
    <WrapperNavbar className="wrapper-navbar">
        <div className="centerPage">
          <Navbar />
        </div>
    </WrapperNavbar>
      <div className="wrapper-navbar">
        <div className="centerPage">
          <LabelSearch />
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

export default videoPlayer