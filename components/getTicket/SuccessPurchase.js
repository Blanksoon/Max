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
  width: 100px;
  background-color: ${color.red};
  color: ${color.white};
  cursor: pointer;
  padding: 13px 10px;
  border: 1px solid ${color.red};
  display: inline-block;
  font-family: Helvetica, Arial, sans-serif;
  // &:disabled {
  //   background-color: ${color.lightRed};
  //   border: 1px solid ${color.lightRed};
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
  background-color: #094992;
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
    return (
      <Wrapper>
        <WrapperTop>
          <Flex pl="3em" pr="3em" pt="1em" pb="1em">
            <Box w={2/12} >
              <Image width="100%" src="../../static/ic_sucessful.png" />
            </Box>
            <Box w={10/12} pt='1.5em' pl='2em' >
              <Text1>Thank you for yout purchase</Text1>
              <Text2>You will receive an email confirmation shortly.</Text2>
            </Box>
          </Flex>
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
            </Box>
          </Flex>
          <Flex pt='1em' >
            <Box w={7/12} />
            <Box w={5/12} >
              <Flex>
                <Box w={4/12} pt='0.7em' >
                  <Text2>
                    Later
                  </Text2>
                </Box>
                <Box w={8/12} >
                  <Button>
                    Watch new!
                  </Button>
                </Box>
              </Flex>
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
