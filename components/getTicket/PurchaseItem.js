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
const Button = styled.button`
  width: 318px;
  background-color: ${vars.white};
  cursor: pointer;
  padding: 13px 100px;
  border: 1px solid ${vars.white};
  display: inline-block;
  // &:disabled {
  //   background-color: ${vars.lightRed};
  //   border: 1px solid ${vars.lightRed};
  // }
`
const Buttonpaypal = styled.button`
  width: 318px;
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
const WrapperTop = styled.div`background-color: ${color.blue};`
const WrapperDown = styled.div`background-color: #094992;`
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
class PurchaseItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.purchaselive = this.purchaselive.bind(this)
    this.purchasesub = this.purchasesub.bind(this)
  }

  async purchaselive() {
    const response = await api.post(
      `${api.SERVER}/ppcheckout/${this.props.product._id}?token=${this.props
        .auth.token}`
    )
    console.log('responseee', response)
    if (response) {
      Router.push(`${response.approvalUrl}`)
    }
  }

  async purchasesub() {
    const response = await api.post(
      `${api.SERVER}/subscribe/${this.props.product._id}?token=${this.props.auth
        .token}`
    )
    console.log('responseee', response)
    if (response) {
      Router.push(`${response.approvalUrl}`)
    }
  }

  render() {
    // console.log('response', this.props.auth.token)
    //console.log('sxxxxx', this.props)
    let renderUI = <div />
    let packagee = 'SUBSCRIBE VDO AND LIVE STREAMING'
    let img = 'static/subandvod.jpg'
    let price = '$29.99'
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
                  <Text3>$0.99</Text3>
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
            <Flex pl="3em" pr="3em" pt="1em" pb="2.1em">
              <Box w={12 / 12} pr="0.5em">
                <center>
                  <Buttonpaypal onClick={this.purchaselive}>
                    <Image width="100%" src="../../static/PayPal.png" />
                  </Buttonpaypal>
                </center>
              </Box>
              {/* <Box w={6 / 12} pl="0.5em">
                <Button>
                  <Image width="100%" src="../../static/btn_wechat.png" />
                </Button>
              </Box> */}
            </Flex>
          </WrapperDown>
        </Wrapper>
      )
    } else {
      // console.log('if22222222222222222', this.props)
      if (this.props.product.productId === '2002') {
        packagee = 'SUBSCRIBE VDO ON DEMAND'
        img = 'static/ondemand.jpg'
        price = '$19.99'
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
                  <Text3>{price}</Text3>
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
            <Flex pl="3em" pr="3em" pt="2em" pb="2.1em">
              <Box w={12 / 12} pr="0.5em">
                <center>
                  <Buttonpaypal on onClick={this.purchasesub}>
                    <Image width="100%" src="../../static/PayPal.png" />
                  </Buttonpaypal>
                </center>
              </Box>
              {/* <Box w={6 / 12} pl="0.5em">
                <Button>
                  <Image width="100%" src="../../static/btn_wechat.png" />
                </Button>
              </Box> */}
            </Flex>
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
