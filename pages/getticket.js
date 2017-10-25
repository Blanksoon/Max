import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import { Flex, Box, Image, Text } from 'rebass'
import Container from '../components/commons/Container'
import Main from '../layouts/Main'
import color from '../components/commons/vars'
import Promocode from '../components/getTicket/Promocode'
import Promotion from '../components/getTicket/Promotion'
import StadiumTicket from '../components/home/StadiumTicket'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../redux/store'
import { fetchVods } from '../redux/modules/vod'
import Cookies from 'universal-cookie'
import FacebookLoginButton from '../components/login/FacebookLoginButton'
import NewModal from '../containers/NewModal'
import {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../redux/modules/modal'
import * as api from '../api'

const WrapperLivePlayer = styled.div`
  background-color: ${props => props.color.lightBlue};
`
const WrapperStadiumTicket = styled.div`
  color: #ffffff;
  background-color: #b71111;
`
const WrapperPromotion = styled.div`background-color: #3d5d84;`
const LivePlayer = styled.div`height: 36rem;`
const cookies = new Cookies()
let token = ''
let message = {}
let json = {}
class getticket extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
    }
    this.subScribe = this.subScribe.bind(this)
    this.backToInputCode = this.backToInputCode.bind(this)
  }
  //id:1 = can input code
  //id:2 = success
  //id:3 = invalid promocode
  //id:4 = you have purchase
  async componentDidMount() {
    token = cookies.get('token')
    //console.log(token)
    message = await this.checkSubscribe(token)
    if (message.status.message == 'you have purchase') {
      //console.log('jfjfj')
      this.setState({
        id: 4,
      })
    } else {
      this.setState({
        id: 1,
      })
    }
  }
  async subScribe(promocode) {
    const url = `${api.SERVER}/subscribe`
    try {
      const json = await api.post(url, { token, promocode })
      console.log('json', json)
      console.log('state', this.state.id)
      if (json.status.message == 'invalid promocode') {
        this.setState({
          id: 3,
        })
        return json
      } else if (json.status.message == 'success') {
        this.setState({
          id: 2,
        })
        return json
      }
      this.setState({
        id: 3,
      })
      return json
    } catch (error) {
      console.error(error)
    }
  }

  async checkSubscribe(token) {
    const url = `${api.SERVER}/checksubscribe`
    try {
      json = await api.post(url, { token })
      return json
    } catch (error) {
      console.error(error)
    }
  }

  backToInputCode() {
    this.setState({
      id: 1,
    })
  }

  render() {
    console.log('state', this.state.id)
    return (
      <Main url={this.props.url}>
        <NewModal />
        <WrapperPromotion>
          <Container>
            <Box>
              <Promocode
                id={this.state.id}
                cookie={token}
                subScribe={this.subScribe}
                push={this.props.url.push}
                backToPromo={this.backToInputCode}
                checkSubscribe={this.checkSubscribe}
                json={json}
              />
            </Box>
          </Container>
        </WrapperPromotion>
        <WrapperPromotion>
          <Container>
            <Box>
              {/* <FacebookLoginButton /> */}
              <Promotion />
            </Box>
          </Container>
        </WrapperPromotion>
        <WrapperStadiumTicket>
          <Container>
            <Flex>
              <Box w={12 / 12}>
                <StadiumTicket />
              </Box>
            </Flex>
          </Container>
        </WrapperStadiumTicket>
      </Main>
    )
  }
}

export default withRedux(initStore, null, {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
})(getticket)
