import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import { Flex, Box, Image, Text } from 'rebass'
import Container from '../components/commons/Container'
import Main from '../layouts/Main'
import color from '../components/commons/vars'
import ShowTime from '../components/getTicket/ShowTime'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../redux/store'
import { fetchVods } from '../redux/modules/vod'
import { fetchProducts } from '../redux/modules/product'
import NewModal from '../containers/NewModal'
import {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../redux/modules/modal'
import * as api from '../api'

const Wrapper = styled.div`background-color: #3c5c83;`
class selectShowtime extends React.Component {
  constructor(props) {
    super(props)
    //this.purchase = this.purchase.bind(this)
  }

  render() {
    //console.log('render', this.props.url)
    return (
      <div>
        <Head>
          <link href="/static/css/video-react.css" rel="stylesheet" />
        </Head>
        {/* {status.message ?  : null } */}
        <Main url={this.props.url}>
          <NewModal />
          <Wrapper>
            <Container>
              <Box pt="7rem">
                <ShowTime />
              </Box>
            </Container>
          </Wrapper>
        </Main>
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
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    product: state.product,
  }
}

selectShowtime.getInitialProps = async ({ store, isServer, query, req }) => {
  let state = store.getState()
  const token = state.auth.token
  const productPromise = fetchProducts(token)(store.dispatch)
  await Promise.all([productPromise])
  state = store.getState()
  const props = mapStateToProps(state)
  return props
}

export default withRedux(initStore, null, {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
})(selectShowtime)
