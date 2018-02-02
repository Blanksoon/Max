import { Component } from 'react'
import { connect } from 'react-redux'
import { Box, Image, Text, Flex, ButtonOutline } from 'rebass'
import moment from 'moment'
import styled from 'styled-components'
import color from '../commons/vars'
import * as api from '../../api'
import Spinner from '../commons/Spinner'
import Router from 'next/router'
import { media, theme } from '../../tools/responsive'

const Text3 = styled.div`
  color: ${color.red};
  font-weight: 700;
  font-size: 1em;
  padding-top: 0.32rem;
  font-family: Helvetica, Arial, sans-serif;
  margin-bottom: 0.2rem;
  ${media.iphone5`font-size: 0.8em`};
  ${media.phone`font-size: 0.8em`};
`
const Text1 = styled.div`
  color: ${color.black};
  font-weight: 100;
  font-size: 1em;
  padding-top: 0.3rem;
  font-family: Helvetica, Arial, sans-serif;
  margin-bottom: 0.2rem;
  ${media.iphone5`font-size: 0.8em`};
  ${media.phone`font-size: 0.8em`};
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
    Router.push(`/`)
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
    if (subscription.stripe != undefined) {
      const json = await api.get(
        `${api.SERVER}/stripe/cancel-subscribe?orderId=${subscription._id}`
      )
      this.setState({ loading: false })
    } else if (subscription.paypal != undefined) {
      const json = await api.post(
        `${api.SERVER}/ppcheckout/${subscription.orderId}/cancel/subscribe`,
        {}
      )
      this.setState({ loading: false })
    } else if (subscription.paymentIos != undefined) {
      const json = await api.post(
        `${api.SERVER}/cancel-sub-ios?token=${this.props.token}`,
        { orderId: subscription.orderId }
      )
      this.setState({ loading: false })
    } else {
      const json = await api.post(
        `${api.SERVER}/cancel-sub-android?token=${this.props.token}`,
        { orderId: subscription.orderId }
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
        <Flex
          className="purchase-date"
          pb={['0.8rem', '1rem', '1rem', '1rem', '1rem']}
        >
          <Box w={[0 / 12, 0 / 12, 0.95 / 12, 0.95 / 12, 0.95 / 12]} />
          <Box w={[10 / 12, 10 / 12, 10 / 12, 3 / 12, 3 / 12]}>
            <Flex>
              <Text3>{this.props.common.PURCAHSEDATE}</Text3>
              &nbsp;&nbsp;
              <Text1>
                {moment(subscription.purchaseDate).format('MMM DD, YYYY')}
              </Text1>
            </Flex>
          </Box>
          <Box w={[2 / 12, 2 / 12, 1.05 / 12, 7 / 12, 7 / 12]} />
        </Flex>
        <Flex
          className="List-Purchase"
          pb="0.2rem"
          wrap
          w={[12 / 12, 12 / 12, 12 / 12, 12 / 12, 12 / 12]}
        >
          <Box
            className="Left-Div"
            w={[2 / 12, 2 / 12, 1.2 / 12, 1.2 / 12, 1.2 / 12]}
          />
          <Box
            w={[12 / 12, 12 / 12, 4 / 12, 3.5 / 12, 4 / 12]}
            bg={color.blue}
            mr={['0em', '0em', '1em', '1em', '1em']}
          >
            <Flex>
              <Box w={[5 / 12, 5 / 12, 5 / 12, 5 / 12, 5 / 12]}>
                <Box pt={['0.7rem', '0.7rem', '2rem', '0.7rem', '0.7rem']} />
                <Image w="100%" src="static/img_vodondemand@3x.png" />
              </Box>
              <Box w={[7 / 12, 7 / 12, 7 / 12, 7 / 12, 7 / 12]} color="white">
                <Box
                  w={[12 / 12, 12 / 12, 12 / 12, 12 / 12, 12 / 12]}
                  pt={[3, 3, '3rem', 3, 3]}
                />
                <center>
                  <Text4>Subscription Package</Text4>
                </center>
              </Box>
            </Flex>
          </Box>
          <Box
            w={[12 / 12, 12 / 12, 6 / 12, 4.5 / 12, 4.5 / 12]}
            pt={['0.5em', '0em', '0em', '0em', '0em']}
            pb={['0.5em', '0em', '0em', '0em', '0em']}
          >
            <Text3>{this.description(subscription.productName)}</Text3>
            <Box
              w={[12 / 12, 12 / 12, 12 / 12, 12 / 12, 12 / 12]}
              pb={['1em', '1em', '1em', '1em', '2em']}
            >
              <Text2>{this.props.common.ONEMONTH}</Text2>
            </Box>
            <Flex>
              <Box w={[3.5 / 12, 4 / 12, 3.5 / 12, 3.5 / 12, 2.5 / 12]}>
                <Text3>{this.props.common.ORDERID}:&nbsp;&nbsp;</Text3>
              </Box>
              <Box
                w={[8.5 / 12, 8 / 12, 8.5 / 12, 8.5 / 12, 9.5 / 12]}
                pt={['0.4em', '0.4em', '0.4em', '0.4em', '0.4em']}
              >
                <Text2>{subscription.orderId}</Text2>
              </Box>
            </Flex>
            <Flex>
              <Box w={[2.8 / 12, 3.5 / 12, 3 / 12, 3 / 12, 2 / 12]}>
                <Text3>
                  {this.props.common.STATUSOFSUBSCRIBE}:&nbsp;&nbsp;
                </Text3>
              </Box>
              <Box
                w={[9.2 / 12, 8.5 / 12, 9 / 12, 9 / 12, 10 / 12]}
                pt="0.45em"
              >
                <Text2>
                  Valid thru{' '}
                  {moment(subscription.expiredDate).format('MMM DD,YYYY')}
                </Text2>
              </Box>
            </Flex>
          </Box>
          <Box
            w={[12 / 12, 12 / 12, 12 / 12, 2 / 12, 2 / 12]}
            pt={['0.5em', '1em', '1.5em', '6em', '6em']}
            pl={['0em', '0em', '12em', '0em', '0em']}
          >
            <CancelButton
              onClick={() => this.cancel(subscription)}
              disabled={this.state.loading}
            >
              {this.state.loading ? (
                <Spinner />
              ) : (
                `${this.props.common.CANCELBUTTON}`
              )}
            </CancelButton>
          </Box>
        </Flex>
        <hr size="0.1" />
      </Box>
    ) : (
      <div style={{ marginTop: '1em' }}>
        {this.props.common.NOTSUBSCRIBEDANYPACKAGES}
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
