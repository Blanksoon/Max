import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import withRedux from 'next-redux-wrapper'
import rootReducer from '../reducers'
import { NavbarHead } from '../components/home/NavbarHead'
import { Footer } from '../components/home/Footer'
import { VideoBox } from '../components/videoCenter/VideoBox'
import { Provider as Rebass, Container, Flex, Box } from 'rebass'
import color from '../components/commons/vars'
import { initStore } from '../store'
import { fetchVods } from '../actions/vod'

const WrapperNavbar = styled.div`background-color: #009999;`
const WrapperVod = styled.div`
  background-color: ${props => props.color.lightBlue};
`
import Main from '../layouts/Main'
//console.log('hiii', req)
let token = ''
class Vods extends React.Component {
  static getInitialProps({ store, isServer, query, req }) {
    // console.log('isServer', isServer)
    // store.dispatch(serverRenderClock(isServer))
    // store.dispatch(addCount())
    if (isServer) {
      token = req.cookies
      //console.log('this is token ', token)
    }
    store.dispatch(fetchVods(token))
    return { isServer }
  }

  componentDidMount() {
    this.props.fetchVods(token)
  }

  render() {
    return (
      <Rebass>
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

export default withRedux(initStore, null, { fetchVods })(Vods)
