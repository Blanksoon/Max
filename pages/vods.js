import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import { NavbarHead } from '../components/home/NavbarHead'
import { Footer } from '../components/home/Footer'
import { VideoBox } from '../components/videoCenter/VideoBox'
import { Provider as Rebass, Container, Flex, Box } from 'rebass'
import rootReducer from '../reducers'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import color from '../components/commons/vars'
import { initStore } from '../store'
import { fetchVods } from '../actions/vod'
//import Cookies from 'universal-cookie'
import Cookies from 'js-cookie'
//const cookies = new Cookies()
const WrapperNavbar = styled.div`background-color: #009999;`
const WrapperVod = styled.div`
  background-color: ${props => props.color.lightBlue};
`
import Main from '../layouts/Main'
//console.log('hiii', req)
let token = ''
class videoCenter extends React.Component {
  constructor(props) {
    super(props)
    this.fetchVideo = this.fetchVideo.bind(this)
  }
  static getInitialProps({ store, isServer, query, req }) {
    // console.log('isServer', isServer)
    // store.dispatch(serverRenderClock(isServer))
    // store.dispatch(addCount())
    if (isServer) {
      token = req.cookies
      //console.log('this is token ', token)
    }
    //store.dispatch(fetchVods(token))
    return { isServer }
  }

  fetchVideo(token) {
    //console.log('fdssdfdfsfs', token)
    this.props.fetchVod(token)
  }

  render() {
    return (
      <Rebass>
        {this.fetchVideo(token)}
        <Main url={this.props.url}>
          <div className="videocenter">
            <WrapperVod color={color}>
              <Container>
                <Box pt="20px" bg="white">
                  <VideoBox />
                </Box>
              </Container>
            </WrapperVod>
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
        </Main>
      </Rebass>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchVod: bindActionCreators(fetchVods, dispatch),
  }
}

// const mapDispatchToProps = dispatch => ({
//   fetchVods: token => dispatch(fetchVods(token)),
// })

export default withRedux(initStore, null, mapDispatchToProps)(videoCenter)
