import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import withRedux from 'next-redux-wrapper'
//import { Footer } from '../components/home/Footer'
import VideoBox from '../components/videoCenter/VideoBox'
import { Flex, Box } from 'rebass'
import Container from '../components/commons/Container'
import color from '../components/commons/vars'
import { initStore } from '../redux/store'
import { fetchVods } from '../redux/modules/vod'
import Cookies from 'universal-cookie'
import NewModal from '../containers/NewModal'
import {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../redux/modules/modal'

const cookies = new Cookies()

const WrapperNavbar = styled.div`background-color: #009999;`
const WrapperVod = styled.div`
  background-color: ${props => props.color.lightBlue};
`
import Main from '../layouts/Main'

let cookie = ''
class Vods extends React.Component {
  static getInitialProps({ store, isServer, query, req }) {
    // console.log('isServer', isServer)
    if (isServer) {
      //token = req.cookies
      //console.log('this is token ', token)
    }
    //console.log('req.cookies', req.cookies)
    //store.dispatch(fetchVods(req.cookies))
    return { isServer }
  }

  componentDidMount() {
    cookie = cookies.get('token')
    console.log('get cookie', cookie)
    return this.props.fetchVods(cookie)
  }

  render() {
    //console.log(cookie)
    return (
      <Main url={this.props.url}>
        <NewModal />
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
    )
  }
}

export default withRedux(initStore, null, { 
  fetchVods,
  updateModalType,
  indexModalURL,
  closeModal, 
})(Vods)
