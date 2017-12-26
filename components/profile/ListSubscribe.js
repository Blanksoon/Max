import { Component } from 'react'
import { connect } from 'react-redux'
import { Box, Image, Text, Flex, ButtonOutline } from 'rebass'
import moment from 'moment'
import styled from 'styled-components'
import color from '../commons/vars'
import * as api from '../../api'
import Spinner from '../commons/Spinner'
import Router from 'next/router'

const Text3 = styled.div`
  color: ${color.red};
  font-weight: 700;
  font-size: 1em;
  padding-top: 0.3rem;
  font-family: Helvetica, Arial, sans-serif;
  margin-bottom: 0.2rem;
`
const Text1 = styled.div`
  color: ${color.black};
  font-weight: 100;
  font-size: 1em;
  padding-top: 0.3rem;
  font-family: Helvetica, Arial, sans-serif;
  margin-bottom: 0.2rem;
`

const Text2 = styled.div`
  color: ${color.black};
  font-weight: 200;
  font-size: 0.8em;
  font-family: Helvetica, Arial, sans-serif;
  margin-bottom: 0.2rem;
`

const Text4 = styled.div`
  color: ${color.white};
  font-weight: 200;
  font-size: 0.8em;
  font-family: Helvetica, Arial, sans-serif;
  margin-bottom: 0.2rem;
`

const Button = styled.button`
  background-color: white;
  border: 1px solid red;
  color: red;
  padding: 5px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
  font-family: Helvetica, Arial, sans-serif;
  cursor: pointer;
`

const CancelButton = styled(ButtonOutline)`
  background-color: ${color.white};
  border: 1px solid ${color.red};
  padding: 8px 62px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
  font-size: 14px;
  font-family: Helvetica, Arial, sans-serif;
  color: ${color.red};
  cursor: pointer;

  &:hover {
    background-color: ${color.red};
    color: ${color.white};
  }
`
class ListSubscribe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
    }
    this.logout = this.logout.bind(this)
  }
  async componentDidMount() {
    const json = await api.get(
      `${api.SERVER}/subscribe-history?token=${this.props.token}`
    )
    if (json.data.length > 0) {
      this.setState({
        subscription: json.data[0],
      })
    }
  }
  logout() {
    Router.push(`http://localhost:8080/index`)
  }
  description(productName) {
    if (productName === 'subscribe vods') {
      return 'Subscribe Video on Demands'
    }
    return 'Subscribe Lives and Video on Demands'
  }
  async cancel(subscription) {
    //console.log('jjjjjjjjjjjjjjjjj', subscription)
    this.setState({ loading: true })
    if (subscription.stripe.paymentId != undefined) {
      const json = await api.get(
        `${api.SERVER}/stripe/cancel-subscribe?orderId=${subscription._id}`
      )
      this.setState({ loading: false })
    } else {
      const json = await api.post(
        `${api.SERVER}/ppcheckout/${subscription.orderId}/cancel/subscribe`,
        {}
      )
      this.setState({ loading: false })
    }
    //console.log('json', json)
    this.setState({
      subscription: undefined,
    })
  }
  render() {
    if (this.props.token === undefined) {
      // console.log('tokennnnnmmm', this.props.token)
      {
        this.logout()
      }
    }
    const { subscription } = this.state
    //console.log('subscript', subscription)
    //console.log('subbbbbbbbb', this.state.subscription)
    return this.state.subscription !== undefined ? (
      <Box w={12 / 12}>
        <Flex className="List-Purchase" pb="1rem">
          <Box w={0.95 / 12} />
          <Box w={3 / 12}>
            <Flex>
              <Text3>Purchase date</Text3>
              &nbsp;&nbsp;
              <Text1>
                {moment(subscription.purchaseDate).format('MMM DD, YYYY')}
              </Text1>
            </Flex>
          </Box>
          <Box w={7 / 12} />
        </Flex>
        <Flex className="List-Purchase" pb="0.2rem">
          <Box w={1.5 / 12} />
          <Box w={4 / 12} bg={color.blue} mr="1em">
            <Flex>
              <Box w={5 / 12}>
                <Box pt="0.7rem" />
                <Image w="100%" src="static/img_vodondemand@3x.png" />
              </Box>
              <Box w={7 / 12} color="white">
                <Box w={12 / 12} pt={3} />
                <center>
                  <Text4>Subscription Package</Text4>
                </center>
              </Box>
            </Flex>
          </Box>
          <Box w={4.5 / 12}>
            <Text3>{this.description(subscription.productName)}</Text3>
            <Text2>1 Month</Text2>
            <br />
            <br />
            <Flex>
              <Text3>Order ID:&nbsp;&nbsp;</Text3>
              <Box w={6 / 12} pt="0.4em">
                <Text2>{subscription.orderId}</Text2>
              </Box>
            </Flex>
            <Flex>
              <Text3>Status&nbsp;&nbsp;</Text3>
              <Box w={6 / 12} pt="0.45em">
                <Text2>
                  Valid thru{' '}
                  {moment(subscription.expiredDate).format('MMM DD,YYYY')}
                </Text2>
              </Box>
            </Flex>
          </Box>
          <Box w={2 / 12} pt="6em">
            <CancelButton
              onClick={() => this.cancel(subscription)}
              disabled={this.state.loading}
            >
              {this.state.loading ? <Spinner /> : 'Cancel'}
            </CancelButton>
          </Box>
        </Flex>
        <hr size="0.1" />
      </Box>
    ) : (
      <div style={{ marginTop: '1em' }}>
        You have not subscribed any packages
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    token: state.auth.token,
  }
}
export default connect(mapStateToProps)(ListSubscribe)
