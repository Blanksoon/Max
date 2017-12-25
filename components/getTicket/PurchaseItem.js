import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { Flex, Provider, Box, Image, Text, Border } from 'rebass'
import styled from 'styled-components'
import color from '../commons/vars'
import ModalRegister from '../../containers/ModalRegister'
import { forgotPassword } from '../../redux/modules/auth'
import { fbLogin } from '../../redux/modules/auth'
import { closeModal } from '../../redux/modules/modal'
import { connect } from 'react-redux'
import vars from '../commons/vars'
import Spinner from '../commons/Spinner'
import * as api from '../../api'
import fetch from 'isomorphic-fetch'
import StripeCheckout from 'react-stripe-checkout'

const A = styled.a`TEXT-DECORATION: none;`
const WrapperLogin = styled.div`
  padding-right: 30px;
  border-right: 1px solid #a9a9a9;
`
const Text1 = styled.div`
  color: ${color.lightBlue};
  font-weight: 700;
  font-size: 1.5em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text2 = styled.div`
  color: ${color.white};
  font-weight: 100;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
  padding: 0;
`
const Text3 = styled.div`
  color: ${color.white};
  font-weight: 700;
  font-size: 1.5em;
  font-family: Helvetica, Arial, sans-serif;
`
const Date = styled.div`
  color: ${color.yellow};
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
  text-align: left;
`
const Time = styled.div`
  color: ${color.yellow};
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
  text-align: right;
`
const ButtonAlipay = styled.button`
  width: 318px;
  height: 60px;
  background-color: ${vars.white};
  cursor: pointer;
  padding: 13px 100px;
  border: 1px solid ${vars.white};
  display: inline-block;
`
const ButtonCredit = styled.button`
  width: 318px;
  height: 60px;
  background-color: ${vars.white};
  color: ${vars.white};
  font-weight: 700;
  font-size: 1.8em;
  font-family: Helvetica, Arial, sans-serif;
  cursor: pointer;
  padding: 0px 0px;
  border: 1px solid ${vars.blue};
  display: inline-block;
`
const Buttonpaypal = styled.button`
  width: 318px;
  height: 60px;
  background-color: ${vars.white};
  cursor: pointer;
  padding: 13px 101px;
  border: 1px solid ${vars.white};
  display: inline-block;
  // &:disabled {
  //   background-color: ${vars.lightRed};
  //   border: 1px solid ${vars.lightRed};
  // }
`
const Input = styled.input`
  background-color: #fffbbe;
  width: 100%;
  padding: 5px 20px;
  margin: 8px 0;
  display: inline-block;
  //border: 1px solid #000;
  //border-radius: 4px;
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
`
const WrapperTop = styled.div`
  background: -webkit-linear-gradient(
    top,
    rgba(2, 35, 70, 0.9) 0%,
    rgba(2, 35, 70, 0.9) 99%,
    rgba(2, 35, 70, 0.9) 100%
  ); /* Chrome10-25,Safari5.1-6 */
`
const WrapperDown = styled.div`
  background: -webkit-linear-gradient(
    top,
    rgba(9, 73, 146, 0.9) 0%,
    rgba(9, 73, 146, 0.9) 100%
  ); /* Chrome10-25,Safari5.1-6 */
`
const Wrapper = styled.div`
  position: relative;
  height: 100%;
  background-size: cover;
  background-image: url('/static/FT6A6483.jpg');
`
const WrapperPrice = styled.div`
  position: absolute;
  top: 51%;
`
const Img = styled.img`
  width: 318px;
  height: 60px;
`
class PurchaseItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingPayPal: false,
      loadingCard: false,
      loadingAlipay: false,
      link: 'ppcheckout',
    }
    this.purchasePayPal = this.purchasePayPal.bind(this)
    this.purchaseCard = this.purchaseCard.bind(this)
    this.purchaseAlipay = this.purchaseAlipay.bind(this)
  }

  componentWillMount() {
    console.log('ddddddd1111')

    const script = document.createElement('script')

    script.src = '//checkout.stripe.com/v2/checkout.js'
    script.class = 'stripe-button'
    script.async = true

    document.body.appendChild(script)

    console.log('ddddddd2222', script)
  }

  async purchasePayPal() {
    this.setState({ loadingPayPal: true })
    const response = await api.post(
      `${api.SERVER}/${this.state.link}/${this.props.product._id}?token=${this
        .props.auth.token}`
    )
    //console.log('responseee', response)
    if (response.approvalUrl) {
      Router.push(`${response.approvalUrl}`)
    } else {
      this.props.closeModal()
      Router.push(`http://localhost:8080/error`)
    }
  }

  async purchaseCard() {
    // this.setState({ loadingCard: true })
    // const response = await api.post(
    //   `${api.SERVER}/${this.state.link}/${this.props.product._id}?token=${this
    //     .props.auth.token}`
    // )
    // this.setState({ loadingCard: false })
    // //console.log('responseee', response)
    // if (response.approvalUrl) {
    //   Router.push(`${response.approvalUrl}`)
    // } else {
    //   this.props.closeModal()
    //   Router.push(`http://localhost:8080/error`)
    // }
  }

  async purchaseAlipay() {
    this.setState({ loadingAlipay: true })
    // console.log('dddddd333333', this.props.product._id)
    const response = await api.get(
      `${api.SERVER}/stripe/alipay?token=${this.props.auth.token}&liveId=${this
        .props.product._id}`
    )
    if (response) {
      //this.props.closeModal()
      Router.push(`${response.url}`)
    }
    //console.log('dddddd333333', response)
    this.setState({ loadingAlipay: false })
    //console.log('responseee', response)
    // if (response.approvalUrl) {
    //   Router.push(`${response.approvalUrl}`)
    // } else {
    //   this.props.closeModal()
    //   Router.push(`http://localhost:8080/error`)
    // }
  }

  onToken = async token => {
    if (this.props.id == 'live') {
      this.setState({ loadingCard: true })
      console.log('ddddd111111111live', token)
      const response = await api.get(
        `${api.SERVER}/stripe/creditcard?token=${this.props.auth
          .token}&sourceId=${token.id}&liveId=${this.props.product._id}`
      )
      if (response) {
        this.props.closeModal()
        Router.push(`${response.url}`)
      }
      //console.log('dddddd333333', response)
      this.setState({ loadingCard: false })
    } else {
      this.setState({ loadingCard: true })
      console.log('ddddd111111111sub', token)
      const response = await api.get(
        `${api.SERVER}/stripe/subscribe/creditcard?token=${this.props.auth
          .token}&sourceId=${token.id}&subscribeId=${this.props.product._id}`
      )
      if (response) {
        this.props.closeModal()
        Router.push(`${response.url}`)
      }
      //console.log('dddddd333333', response)
      this.setState({ loadingCard: false })
    }
  }

  render() {
    // console.log('response', this.props.auth.token)
    //console.log('sxxxxx', this.props)
    let renderUI = <div />
    let packagee = 'SUBSCRIBE VDO ON DEMAND'
    let img = 'static/ondemand.jpg'
    let amo = this.props.product.price * 100
    // console.log('iffffffffff', this.props)
    if (this.props.id == 'live') {
      // console.log('if11111111111')
      renderUI = (
        <Wrapper>
          <WrapperTop>
            <Box pl="3em" pr="3em" pt="1em" pb="1em">
              <Text1>YOUR SELECT</Text1>
              <Text2>1 TIME LIVE STREAMING PACKGAE.</Text2>
            </Box>
          </WrapperTop>
          <WrapperDown>
            {/* <Box pl="3em" pr="3em" pt="1em">
            <Text2>Your order ID : 251485039</Text2>
            </Box> */}
            <Flex pr="3em" pl="3em" pt="2em">
              <Box w={6 / 12} pr="0.5em">
                <Image width="100%" src={this.props.product.bannerUrl} />
              </Box>
              <Box w={6 / 12} pl="0.5em">
                <Text3>{this.props.product.programName}</Text3>
                <Flex pt="0.5em">
                  <Box w={12 / 12}>
                    <Date>{this.props.product.liveDateStr_en}</Date>
                  </Box>
                  {/* <Box w={6 / 12}>
                  <Time>07.20-09.50 pm.</Time>
                </Box> */}
                </Flex>
                <WrapperPrice>
                  <Text3>${this.props.product.price}</Text3>
                </WrapperPrice>
              </Box>
            </Flex>
            {/* <Box pl="3em" pr="3em" pt="1em">
            <Text2>
              Please check your contact email, This' ll be use to send the
              receipt.
            </Text2>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="@email"
              value="autofill@cenedit.com"
            />
          </Box> */}
            <Box pl="3em" pr="3em" pt="1em">
              <Text2>SELECT PAYMENT METHOD</Text2>
            </Box>
            <Flex pl="3em" pr="3em" pt="1em">
              <Box w={6 / 12} pr="0.5em">
                <center>
                  <Buttonpaypal
                    onClick={this.purchasePayPal}
                    disabled={this.state.loading}
                  >
                    {this.state.loadingPayPal ? (
                      <Box pt="0.37em" pb="0.37em">
                        <Spinner />
                      </Box>
                    ) : (
                      <Image width="100%" src="../../static/PayPal.png" />
                    )}
                  </Buttonpaypal>
                </center>
              </Box>
              <Box w={6 / 12} pl="0.5em">
                <center>
                  <ButtonCredit
                    onClick={this.purchaseCard}
                    disabled={this.state.loading}
                  >
                    {this.state.loadingCard ? (
                      <Box pt="0.23em" pb="0.23em">
                        <Spinner />
                      </Box>
                    ) : (
                      <StripeCheckout
                        token={this.onToken}
                        name={packagee}
                        //stripeKey="pk_test_qghYMOBiEuWIDjedt7DNPA0w" //dev
                        stripeKey="pk_live_trWuol5XDXULmz0mK9eWwihA" //live
                        email={this.props.auth.email}
                        amount={amo}
                        //allowRememberMe={false}
                      >
                        <center>
                          <Img src="../../static/109-credit-cards-accepted-logo.png" />
                        </center>
                      </StripeCheckout>
                    )}
                  </ButtonCredit>
                </center>
              </Box>
            </Flex>
            <Flex pl="3em" pr="3em" pt="1em" pb="3.1em">
              <Box w={12 / 12} pr="0.5em">
                <center>
                  <ButtonAlipay
                    onClick={this.purchaseAlipay}
                    disabled={this.state.loading}
                  >
                    {this.state.loadingAlipay ? (
                      <Box pt="0.38em" pb="0.38em">
                        <Spinner />
                      </Box>
                    ) : (
                      <Image width="100%" src="../../static/btn_alipay.png" />
                    )}
                  </ButtonAlipay>
                </center>
              </Box>
            </Flex>
          </WrapperDown>
        </Wrapper>
      )
    } else {
      this.state.link = 'subscribe'
      // console.log('if22222222222222222', this.props)
      if (this.props.product.productId === '2002') {
        packagee = 'SUBSCRIBE VDO AND LIVE STREAMING'
        img = 'static/subandvod.jpg'
      }
      renderUI = (
        <Wrapper>
          <WrapperTop>
            <Box pl="3em" pr="3em" pt="1em" pb="1em">
              <Text1>YOUR SELECT</Text1>
              <Text2>1 TIME LIVE STREAMING PACKGAE.</Text2>
            </Box>
          </WrapperTop>
          <WrapperDown>
            {/* <Box pl="3em" pr="3em" pt="1em">
          <Text2>Your order ID : 251485039</Text2>
        </Box> */}
            <Flex pr="3em" pl="3em" pt="2em">
              <Box w={6 / 12} pr="0.5em">
                <Image width="100%" src={img} />
              </Box>
              <Box w={6 / 12} pl="0.5em">
                <Text3>{packagee}</Text3>
                <WrapperPrice>
                  <Text3>${this.props.product.price}</Text3>
                </WrapperPrice>
              </Box>
            </Flex>
            {/* <Box pl="3em" pr="3em" pt="1em">
          <Text2>
            Please check your contact email, This' ll be use to send the
            receipt.
          </Text2>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="@email"
            value="autofill@cenedit.com"
          />
        </Box> */}
            <Box pl="3em" pr="3em" pt="2.2em">
              <Text2>SELECT PAYMENT METHOD</Text2>
            </Box>
            <Flex pl="3em" pr="3em" pt="2em" pb="3em">
              <Box w={6 / 12} pr="0.5em">
                <center>
                  <Buttonpaypal
                    onClick={this.purchasePayPal}
                    disabled={this.state.loading}
                  >
                    {this.state.loadingPayPal ? (
                      <Box pt="0.37em" pb="0.37em">
                        <Spinner />
                      </Box>
                    ) : (
                      <Image width="100%" src="../../static/PayPal.png" />
                    )}
                  </Buttonpaypal>
                </center>
              </Box>
              <Box w={6 / 12} pl="0.5em">
                <center>
                  <ButtonCredit
                    onClick={this.purchaseCard}
                    disabled={this.state.loading}
                    //token={this.onToken}
                  >
                    {this.state.loadingCard ? (
                      <Box pt="0.23em" pb="0.23em">
                        <Spinner />
                      </Box>
                    ) : (
                      <StripeCheckout
                        token={this.onToken}
                        name={packagee}
                        stripeKey="pk_test_qghYMOBiEuWIDjedt7DNPA0w"
                        email={this.props.auth.email}
                        amount={amo}
                        allowRememberMe="false"
                      >
                        <center>
                          <Img src="../../static/109-credit-cards-accepted-logo.png" />
                        </center>
                      </StripeCheckout>
                    )}
                  </ButtonCredit>
                </center>
              </Box>
            </Flex>
            {/* <Flex pl="3em" pr="3em" pt="1em" pb="3.1em">
              <Box w={12 / 12} pr="0.5em">
                <center>
                  <ButtonAlipay
                    onClick={this.purchaseAlipay}
                    disabled={this.state.loading}
                  >
                    {this.state.loadingAlipay ? (
                      <Spinner />
                    ) : (
                      <Image width="100%" src="../../static/btn_alipay.png" />
                    )}
                  </ButtonAlipay>
                </center>
              </Box>
            </Flex> */}
          </WrapperDown>
        </Wrapper>
      )
    }
    return <div>{renderUI}</div>
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, { forgotPassword, closeModal })(
  PurchaseItem
)
