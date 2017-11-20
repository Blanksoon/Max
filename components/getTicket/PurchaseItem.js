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
const WrapperDown = styled.div`
  background-color: ${color.lightBlue};
  height: 100%;
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
class PurchaseItem extends React.Component {
  render() {
    console.log('sxxxxx', this.props)
    return (
      <Wrapper>
        <WrapperTop>
          <Box pl="3em" pr="3em" pt="1em" pb="1em">
            <Text1>YOUR SELECT</Text1>
            <Text2>1 TIME LIVE STREAMING PACKGAE.</Text2>
          </Box>
        </WrapperTop>
        <WrapperDown>
          <Box pl="3em" pr="3em" pt="1em">
            <Text2>Your order ID : 251485039</Text2>
          </Box>
          <Flex pr="3em" pl="3em" pt="1em">
            <Box w={6 / 12} pr="0.5em">
              <Image width="100%" src="../../static/maxultimate-show.jpg" />
            </Box>
            <Box w={6 / 12} pl="0.5em">
              <Text3>
                MAX Ultimate Tournament & MAX World Champions 7 International
              </Text3>
              <Flex pt="0.5em">
                <Box w={6 / 12}>
                  <Date>Sep 10th, 2017</Date>
                </Box>
                <Box w={6 / 12}>
                  <Time>07.20-09.50 pm.</Time>
                </Box>
              </Flex>
              <WrapperPrice>
                <Text3>$0.99</Text3>
              </WrapperPrice>
            </Box>
          </Flex>
          <Box pl="3em" pr="3em" pt="1em">
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
          </Box>
          <Box pl="3em" pr="3em" pt="1em">
            <Text2>SELECT PAYMENT METHOD</Text2>
          </Box>
          <Flex pl="3em" pr="3em" pt="1em">
            <Box w={6 / 12} pr="0.5em">
              <Button>
                <Image width="100%" src="../../static/btn_paypal.png" />
              </Button>
            </Box>
            <Box w={6 / 12} pl="0.5em">
              <Button>
                <Image width="100%" src="../../static/btn_wechat.png" />
              </Button>
            </Box>
          </Flex>
        </WrapperDown>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

// Login.getInitialProps = async ({ store, isServer, query, req }) => {
//   let state = store.getState()
//   const token = state.auth.token
//   await Promise.all([livePromise, vodPromise])
//   state = store.getState()
//   const props = mapStateToProps(state)
//   return props
// }

export default connect(mapStateToProps, { forgotPassword, closeModal })(
  PurchaseItem
)
