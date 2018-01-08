import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Text, overlay, Image } from 'rebass'
import color from '../commons/vars'
import Link from 'next/link'
import ModalButton from '../../containers/ModalButton'
import { connect } from 'react-redux'
import YouSelect from './YouSelect'
import ModalLiveItem from '../../containers/ModalLiveItem'
import ModalSubscribe from '../../containers/ModalSubscribe'
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
  position: absolute;
  bottom: 40px;
  right: 125px;
  background: #fff:
`
const WrapperMonth = styled.div`
position: absolute;
bottom: 10px;
right: 50px;
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
      modalNumber: 8,
      token: 1,
    }
  }
  componentDidMount() {
    if (this.props.auth.token == undefined) {
      this.setState({
        modalNumber: 3,
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.auth.token !== nextProps.auth.token) {
      nextProps.fetchProducts(nextProps.auth.token)
    }
  }

  renderLive() {
    let type = 8
    if (this.props.auth.token == undefined) {
      type = 3
    } else {
      type = 8
    }
    // console.log('llllllllllll', this.props.product.products.lives.length)
    const rowLive = []
    const rowCount = this.props.product.products.lives.length
    let n = 0
    // Use splice on clone object, DONT MODIFY props
    if (rowCount % 2 == 0) {
      for (let i = 0; i < rowCount; i += 2) {
        rowLive.push(
          <Flex pl="0.5em" pr="0.5em">
            <Box w={6 / 12} pr="0.5em" pt="1em">
              <ModalLiveItem
                id="live"
                modalType={type}
                auth={this.props.auth}
                live={this.props.product.products.lives[i]}
                status={this.props.product.products.lives[i].status}
                subAll={this.props.product.products.subscribe[1].status}
                lang={this.props.lang}
              />
            </Box>
            <Box w={6 / 12} pl="0.5em" pt="1rem">
              <ModalLiveItem
                id="live"
                modalType={type}
                auth={this.props.auth}
                live={this.props.product.products.lives[i + 1]}
                status={this.props.product.products.lives[i + 1].status}
                subAll={this.props.product.products.subscribe[1].status}
                lang={this.props.lang}
              />
            </Box>
          </Flex>
        )
      }
    } else {
      for (let i = 0; i < rowCount - 1; i += 2) {
        rowLive.push(
          <Flex pl="0.5em" pr="0.5em">
            <Box w={6 / 12} pr="0.5em" pt="1em">
              <ModalLiveItem
                id="live"
                modalType={type}
                auth={this.props.auth}
                live={this.props.product.products.lives[i]}
                status={this.props.product.products.lives[i].status}
                subAll={this.props.product.products.subscribe[1].status}
                lang={this.props.lang}
              />
            </Box>
            <Box w={6 / 12} pl="0.5em" pt="1rem">
              <ModalLiveItem
                id="live"
                modalType={type}
                auth={this.props.auth}
                live={this.props.product.products.lives[i + 1]}
                status={this.props.product.products.lives[i + 1].status}
                subAll={this.props.product.products.subscribe[1].status}
                lang={this.props.lang}
              />
            </Box>
          </Flex>
        )
        n = i + 2
      }
      rowLive.push(
        <Flex pl="0.5em" pr="0.5em">
          <Box w={6 / 12} pr="0.5em" pt="1em">
            <ModalLiveItem
              id="live"
              modalType={type}
              auth={this.props.auth}
              live={this.props.product.products.lives[n]}
              status={this.props.product.products.lives[n].status}
              subAll={this.props.product.products.subscribe[1].status}
              lang={this.props.lang}
            />
          </Box>
          <Box w={6 / 12} pl="0.5em" pt="1rem" />
        </Flex>
      )
    }
    return rowLive
  }

  render() {
    let type = 8
    if (this.props.auth.token == undefined) {
      type = 3
    } else {
      type = 8
    }
    //console.log('0', this.props.product.products.lives[0])
    let renderSubscribe = ''
    if (this.props.product.products.subscribe !== undefined) {
      renderSubscribe = (
        <Flex pb="1em">
          <Box w={6 / 12} pr="0.5em">
            <ModalSubscribe
              id="sub"
              modalType={type}
              live={undefined}
              subscribe={this.props.product.products.subscribe[1]}
              subAll={this.props.product.products.subscribe[1].status}
              color={color.red}
              w="100%"
              img="static/img_VDO+LIVE.png"
              text1={this.props.common.SUBSCRIBEVDO}
              text2={this.props.common.Enjoyall}
              month={this.props.common.MONTH}
            />
          </Box>
          <Box w={6 / 12} pl="0.5em">
            <ModalSubscribe
              id="sub"
              modalType={type}
              live={undefined}
              subscribe={this.props.product.products.subscribe[0]}
              subAll={this.props.product.products.subscribe[1].status}
              color={color.blue}
              w="95%"
              img="static/img_vodondemand@3x.png"
              text1={this.props.common.SUBSCRIBEVDO}
              text2={this.props.common.Allvideo}
              month={this.props.common.MONTH}
            />
          </Box>
        </Flex>
      )
    }
    return (
      <Wrapper>
        <Flex pl="1em" pr="1em" pb="3em">
          <Box w={12 / 12} pl="0rem">
            <Flex pt="2rem" pb="1rem">
              <Box w={6 / 12} pt="1rem">
                <Text1>{this.props.common.GETTICKET}</Text1>
                <Text2>{this.props.common.Pleaseselect}</Text2>
                <br />
                <br />
                <Text8>{this.props.common.PACKAGE}</Text8>
              </Box>
            </Flex>
            {renderSubscribe}
            <Box bg={color.blue} pb="1em">
              <Flex>
                <Box w={3 / 12} />
                <Box w={2 / 12} pt="1em">
                  <Image w="100%" src="static/img_livestream@2x.png" />
                </Box>
                <Box w={5 / 12} pt="5em">
                  <center>
                    <Text5>{this.props.common.GETTIME}</Text5>
                    <Text6>{this.props.common.Whattime}</Text6>
                  </center>
                </Box>
              </Flex>
              <Flex pl="0.5em" pt="1em">
                <Text5>{this.props.common.PLEASESELECT}</Text5>
              </Flex>
              {this.renderLive()}
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

ShowTime.getInitialProps = async ({ store, isServer, query, req }) => {
  let state = store.getState()
  const token = state.auth.token
  const productPromise = fetchProducts(token)(store.dispatch)
  await Promise.all([productPromise])
  state = store.getState()
  const props = mapStateToProps(state)
  return props
}
export default connect(mapStateToProps, { fetchProducts })(ShowTime)
