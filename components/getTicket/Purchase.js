import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Text, overlay, Image } from 'rebass'
import color from '../commons/vars'
import Link from 'next/link'
import ThumbnailShowTime from '../thumbnail/ThumbnailShowTime'
import ModalButton from '../../containers/ModalButton'
import { connect } from 'react-redux'
import YouSelect from './YouSelect'

const Button = styled.button`
  bottom: 2%;
  background-color: #b81111;
  border: 1px solid #b81111;
  color: white;
  padding: 12px 10%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
  font-size: 1.2em;
`
const Text1 = styled.div`
  color: ${color.red};
  font-weight: 700;
  font-size: 1.5em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text2 = styled.div`
  color: #000;
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text3 = styled.div`
  color: ${color.red};
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text4 = styled.div`
  color: #000;
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Input = styled.input`
  background-color: #fffbbe;
  width: 35%;
  padding: 5px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #000;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
`
const Input2 = styled.input`
  background-color: #fff;
  width: 35%;
  padding: 8px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #000;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
`
const Input3 = styled.input`
  background-color: #fff;
  width: 90px;
  padding: 8px 0px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #000;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
`
const WrapperClose = styled.div`
  position: absolute;
  color: #000;
  top: 0.4rem;
  right: 20.2rem;
  width: 40px;
  height: 40px;
  //border: 3px solid #73ad81;
`
const WrapperVod = styled.div`
  position: relative;
  color: blue;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 240;
`
let token = ''
const Wrapperright = styled.div`
  position: relative;
  background-position: center;
  background-position-y: 20%;
  //background: #022346;
  //background-image: url('/static/FT6A6495.jpg');
  background: -webkit-linear-gradient(
    top,
    rgba(10, 74, 148, 1) 0%,
    rgba(10, 74, 148, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
`
const Wrapperin = styled.div`
  position: absolute;
  background: -webkit-linear-gradient(
    top,
    rgba(10, 74, 148, 0.65) 0%,
    rgba(10, 74, 148, 0.65) 100%
  ); /* Chrome10-25,Safari5.1-6 */
`
const Wrapperleft = styled.div`
background: #fff:
`
const Wrapper = styled.div`background-color: #fff;`
class Purchase extends Component {
  render() {
    return (
      <Provider>
        <Wrapper>
          <Flex>
            <Box w={8 / 12} pl="1.5rem">
              <Flex pt="2rem" pb="1rem">
                <Box w={6 / 12} pt="1rem">
                  <Text1>GET TICKET</Text1>
                </Box>
                <Box w={6 / 12}>
                  <Image
                    pl="9rem"
                    width="60%"
                    src="/static/progress-bar_3.png"
                  />
                </Box>
              </Flex>
              <Box>
                <Text2>
                  Please check your contact email, this'll be use to send the
                  receipt
                </Text2>
              </Box>
              <Box>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="@email"
                  value="autofill@cenedit.com"
                />
              </Box>
              <br />
              <Text3>SELECT PAYMENT METHOD</Text3>
              <br />
              <Flex>
                <button>
                  Credit <br /> /Debit{' '}
                </button>
                <button>
                  <Image width="60px" src="/static/btn_paypal.png" />
                </button>
                <button>
                  <Image width="60px" src="/static/btn_alipay.png" />
                </button>
              </Flex>
              <Flex pt="1rem">
                <Box w={2 / 12} pt="1rem">
                  <Text4>Card number</Text4>
                </Box>
                <Input2
                  type="text"
                  id="card_number"
                  name="card_number"
                  placeholder=""
                  value=""
                />
              </Flex>
              <Flex pt="1rem">
                <Box w={2 / 12} pt="0.5rem">
                  <Text4>
                    Name of <br /> card holder
                  </Text4>
                </Box>
                <Input2
                  type="text"
                  id="card_Name"
                  name="card_Name"
                  placeholder=""
                  value=""
                />
              </Flex>
              <Flex pt="1rem">
                <Box w={2 / 12} pt="1rem">
                  <Text4>Expiration date</Text4>
                </Box>
                <Box>
                  <Input3
                    type="text"
                    id="CVV/CID"
                    name="CVV/CID"
                    placeholder=""
                    value=""
                  />
                </Box>
                <Box pl="1rem">
                  <Input3
                    type="text"
                    id="CVV/CID"
                    name="CVV/CID"
                    placeholder=""
                    value=""
                  />
                </Box>
              </Flex>
              <Flex pt="1rem">
                <Box w={2 / 12} pt="1rem">
                  <Text4>CVV/CID</Text4>
                </Box>
                <Input3
                  type="text"
                  id="CVV/CID"
                  name="CVV/CID"
                  placeholder=""
                  value=""
                />
              </Flex>
              <Box pt="1rem">
                <Button>Purchase $xx.xx</Button>
              </Box>
            </Box>
            <Box w={4 / 12}>
              <YouSelect />
            </Box>
          </Flex>
        </Wrapper>
      </Provider>
    )
  }
}

const mapStateToProps = state => {
  return {
    login: state.auth.token,
  }
}

export default connect(mapStateToProps, null)(Purchase)
