import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Text, overlay, Image } from 'rebass'
import color from '../commons/vars'
import Link from 'next/link'
import ThumbnailShowTime from '../thumbnail/ThumbnailShowTime'
import ModalButton from '../../containers/ModalButton'
import { connect } from 'react-redux'
import YouSelect from './YouSelect'
import ModalLiveItem from '../../containers/ModalLiveItem'
import * as api from '../../api'
import { fetchProducts } from '../../redux/modules/product'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../../redux/store'
const Button = styled.button`
  bottom: 2%;
  background-color: #b81111;
  border: 1px solid #b81111;
  color: white;
  padding: 12px 36.5%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
`
const ButtonWatch = styled.button`
  background-color: ${color.red};
  border: 1px solid ${color.red};
  color: ${color.white};
  padding: 12px 70px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
`
const Text1 = styled.div`
  color: ${color.red};
  font-weight: 700;
  font-size: 1.5em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text2 = styled.div`
  color: ${color.red};
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text3 = styled.div`
  color: ${color.white};
  font-weight: 700;
  font-size: 2em;
  font-family: Helvetica, Arial, sans-serif;
`

const Text4 = styled.div`
  color: ${color.white};
  font-weight: 700;
  font-size: 1em;
  text-align: right;
  font-family: Helvetica, Arial, sans-serif;
`
const Text5 = styled.div`
  color: ${color.white};
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text6 = styled.div`
  color: ${color.white};
  font-weight: 500;
  font-size: 0.8em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text7 = styled.div`
  color: ${color.black};
  font-weight: 700;
  font-size: 2em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text8 = styled.div`
  color: #8a8a8a;
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text9 = styled.div`
  color: ${color.yellow};
  font-weight: 700;
  font-size: 0.8em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text10 = styled.div`
  color: ${color.white};
  font-weight: 700;
  font-size: 0.8em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text11 = styled.div`
  color: #8a8a8a;
  font-weight: 700;
  font-size: 0.8em;
  font-family: Helvetica, Arial, sans-serif;
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
  top: 0;
  background-color: ${color.black};
  z-index: -1;
  height: 100%;
  width: 100%;
  position: absolute;
  font-family: Helvetica, Arial, sans-serif;
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.8) 100%
  ); /* Chrome10-25,Safari5.1-6 */
`
const Wrapperprice = styled.div`
  background: #fff:
`
const WrapperPackage = styled.div`
  background-color: ${props => props.color};
  text-align: -webkit-auto;
  position: relative;
  height: 180px;
  width: 100%;
`
const Input = styled.input`
  width: 20px;
  height: 20px;
`
const Wrapper = styled.div`background: #fff;`
class ShowTime extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      live: [],
    }
    this.fetchProduct = this.fetchProduct.bind(this)
  }
  async componentDidMount() {
    {
      await this.fetchProduct()
    }
  }
  async fetchProduct() {
    const { status, data } = await api.get(
      `${api.SERVER}/product?token=${this.props.auth.token}`
    )
    console.log('data', data)
    this.setState({ live: data.lives.data })
  }
  render() {
    // if(this.state.live != undefined){

    // }else{

    // }
    //console.log('0', this.props.product.products.lives[0])
    return (
      <Wrapper>
        <Flex pl="1em" pr="1em" pb="3em">
          <Box w={12 / 12} pl="0rem">
            <Flex pt="2rem" pb="1rem">
              <Box w={6 / 12} pt="1rem">
                <Text1>GET TICKET</Text1>
                <Text2>Please select your package.</Text2>
                <br />
                <br />
                <Text8>PACKAGE.</Text8>
              </Box>
            </Flex>
            <Flex pb="1em">
              <Box w={6 / 12} pr="0.5em">
                <WrapperPackage color={color.red}>
                  <Flex pb="1em">
                    {/* <Box w={1 / 12} pt="4em" pl="1em">
                      <Input type="radio" id="f-option" name="selector" />
                    </Box> */}
                    <Box w={4.17 / 12} pt="2em" pl="2em" pb="0px">
                      {/* <label htmlFor="f-option"> */}
                      <Image w="100%" src="static/img_VDO+LIVE.png" />
                      {/* </label> */}
                    </Box>
                    <Box w={7 / 12} pt="1em" pr="1em">
                      {/* <label htmlFor="f-option"> */}
                      <center>
                        <Text5>SUBSCRIBE VDO AND LIVE STREAMING</Text5>
                        <Text6>
                          Enjoy all video and live streamingthru all
                        </Text6>
                        <Text6>
                          the month, so you never missany extreme shot
                        </Text6>
                        <Text3>$29.99</Text3>
                      </center>
                      {/* </label> */}
                      <Text4>1MONTH</Text4>
                    </Box>
                  </Flex>
                  <Wrapperin>
                    <center>
                      <Box pt="2em">
                        <Text5>SUBSCRIBE VOD</Text5>
                        <Text5>AND LIVE STREAMING</Text5>
                      </Box>
                      <Box pt="1em">
                        <ButtonWatch>WATCH NOW</ButtonWatch>
                      </Box>
                      <Box pt="1em">
                        <Text10>VALID THRU</Text10>
                        <Text9>Aug 30th, 2017</Text9>
                      </Box>
                    </center>
                  </Wrapperin>
                </WrapperPackage>
              </Box>
              <Box w={6 / 12} pl="0.5em">
                <WrapperPackage color={color.blue}>
                  <Flex pb="1em">
                    {/* <Box w={1 / 12} pt="4em" pl="1em">
                      <Input type="radio" id="g-option" name="selector" />
                    </Box> */}
                    <Box w={4 / 12} pt="2em" pl="2em">
                      {/* <label htmlFor="g-option"> */}
                      <Image w="100%" src="static/img_vodondemand@3x.png" />
                      {/* </label> */}
                    </Box>
                    <Box w={7 / 12} pt="1em" pr="1em">
                      {/* <label htmlFor="g-option"> */}
                      <center>
                        <Text5>SUBSCRIBE VDO AND LIVE STREAMING</Text5>
                        <Text6>
                          Enjoy all video and live streamingthru all
                        </Text6>
                        <Text6>
                          the month, so you never missany extreme shot
                        </Text6>
                        <Text3>$29.99</Text3>
                      </center>
                      {/* </label> */}
                      <Text4>1MONTH</Text4>
                    </Box>
                  </Flex>
                  <Wrapperin>
                    <Box pt="1em" pl="1em">
                      <Text11>YOUR PACKAGE.</Text11>
                    </Box>
                    <center>
                      <Box>
                        <Text5>SUBSCRIBE VOD</Text5>
                        <Text5>ON DEMAND</Text5>
                      </Box>
                      <Box pt="1em">
                        <ButtonWatch>WATCH NOW</ButtonWatch>
                      </Box>
                      <Box pt="1em">
                        <Text10>VALID THRU</Text10>
                        <Text9>Aug 30th, 2017</Text9>
                      </Box>
                    </center>
                  </Wrapperin>
                </WrapperPackage>
              </Box>
            </Flex>
            <Box bg={color.blue} pb="1em">
              <Flex>
                <Box w={3 / 12} />
                <Box w={2 / 12} pt="1em">
                  <Image w="100%" src="static/img_livestream@2x.png" />
                </Box>
                <Box w={5 / 12} pt="5em">
                  <center>
                    <Text5>GET 1 TIME LIVE STREAMING</Text5>
                    <Text6>
                      What 1 time of specilic show live streaming on any
                      platfrom
                    </Text6>
                  </center>
                </Box>
              </Flex>
              <Flex pl="0.5em" pt="1em">
                <Text5>PLEASE SELECT THE LIVE</Text5>
              </Flex>
              <Flex pl="0.5em" pr="0.5em">
                <Box w={6 / 12} pr="0.5em" pt="1em">
                  <ModalLiveItem
                    modalType={8}
                    live={this.props.product.products.lives[0]}
                    logo="/static/logo_max.png"
                    img="/static/maxultimate-show.jpg"
                    text1="MAX Ultimate Tournament & MAX World Champions 7"
                    text2="07.20-10.00 pm."
                    text3="$0.99"
                    text4="SUN 10 SEP"
                  />
                </Box>
                <Box w={6 / 12} pl="0.5em" pt="1rem">
                  <ModalLiveItem
                    modalType={8}
                    live={this.props.product.products.lives[1]}
                    logo="/static/logo_battle.png"
                    img="/static/thebattle-show.jpg"
                    text1="The Battle Muay Thai"
                    text2="06.10-08.00 pm."
                    text3="$0.99"
                    text4="FRI 15 SEP"
                  />
                </Box>
              </Flex>
              <Flex pl="0.5em" pr="0.5em">
                <Box w={6 / 12} pr="0.5em" pt="1rem">
                  <ModalLiveItem
                    modalType={8}
                    live={this.props.product.products.lives[2]}
                    logo="/static/logo_fighter.png"
                    img="/static/thairath-show.jpg"
                    text1="Thairath Muay Thai Fighter"
                    text2="02.00-04.00 pm."
                    text3="$0.99"
                    text4="SAT 16 SEP"
                  />
                </Box>
                <Box w={6 / 12} pl="0.5em" pt="1rem">
                  <ModalLiveItem
                    modalType={8}
                    live={this.props.product.products.lives[3]}
                    logo="/static/logo_champion.png"
                    img="/static/thechampion-show.jpg"
                    text1="The Champion Muay Thai"
                    text2="07.20-10.00 pm."
                    text3="$0.99"
                    text4="SAT 16 SEP"
                  />
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    product: state.product,
  }
}

// ShowTime.getInitialProps = async ({ store, isServer, query, req }) => {
//   let state = store.getState()
//   const token = state.auth.token
//   const productPromise = fetchProducts(token)(store.dispatch)
//   await Promise.all([productPromise])
//   state = store.getState()
//   const props = mapStateToProps(state)
//   return props
// }
export default connect(mapStateToProps, null)(ShowTime)
// export default withRedux(initStore, mapStateToProps, {
//   fetchProducts,
// })(ShowTime)
