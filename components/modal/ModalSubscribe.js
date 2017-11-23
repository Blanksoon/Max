import React, { Component, PropTypes } from 'react'
import { Flex, Provider, Box, Image, Text, Link } from 'rebass'
import styled from 'styled-components'
import color from '../commons/vars'
import { closeModal } from '../../redux/modules/modal'
import { connect } from 'react-redux'
import * as api from '../../api'

const Button = styled.button`
  background-color: ${color.white};
  border: 1px solid ${color.red};
  color: ${color.red};
  padding: 12px 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
`
const ButtonWatch = styled.button`
  background-color: ${color.red};
  border: 1px solid ${color.red};
  color: ${color.white};
  padding: 12px 18%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
`
const ImageHlight = styled.img`
  width: ${props => props.w};
  src: ${props => props.src};
`
const Wrapper = styled.div`
  background-color: ${props => props.color};
  text-align: -webkit-auto;
  position: relative;
  height: 180px;
  width: 100%;
`
const WrapperButton = styled.div`
  position: absolute;
  Bottom: 25px;
  right: 6%;
`
const WrapperHover = styled.div`
  top: 0;
  background-color: ${color.black};
  z-index: ${props => props.zin};
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
const Wrapperin = styled.div`
  top: 0;
  background-color: ${color.black};
  z-index: ${props => props.zin};
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
const Text1 = styled.div`
  padding-left: 1rem;
  padding-top: 1rem;
  color: ${props => props.color};
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text2 = styled.div`
  color: #000;
  font-weight: 700;
  font-size: 1rem;
  font-family: Helvetica, Arial, sans-serif;
`
const Text3 = styled.div`
  color: ${color.white};
  font-weight: 700;
  font-size: 2em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text4 = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 1.5rem;
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
const Textbutton = styled.div`
  color: ${color.red};
  font-weight: 700;
  font-size: 0.9rem;
  font-family: Helvetica, Arial, sans-serif;
`
const Setposition1 = styled.div`position: relative;`
const Setposition2 = styled.div`
  position: absolute;
  bottom: 0px;
`
const Input = styled.input`
  width: 20px;
  height: 20px;
`
class ModalSubscribe extends React.Component {
  static propTypes = {
    active: PropTypes.bool,
    toggleModalAction: PropTypes.func,
    modalType: PropTypes.number,
    modalURL: PropTypes.string,
    buttonID: PropTypes.number,
    subscribe: PropTypes.object,
  }
  handleOnClickModal = () => {
    console.log('ifmodalSubscribe', this.props.subscribe)
    this.props.toggleModalAction()
    this.props.updateModalAction(this.props.modalType)
    this.props.buyProductAction(this.props.subscribe)
    this.props.updateIDAction(this.props.id)
  }
  render() {
    // console.log('ifmodalSubscribe', this.props)
    let zin = -1
    if (this.props.subscribe.status === 'unenable') {
      zin = 1
    }
    return (
      <Provider>
        <div onClick={this.handleOnClickModal}>
          <Wrapper color={this.props.color} style={{ cursor: 'pointer' }}>
            <Flex pb="1em">
              {/* <Box w={1 / 12} pt="4em" pl="1em">
                      <Input type="radio" id="f-option" name="selector" />
                    </Box> */}
              <Box w={5 / 12} pt="0.7em" pl="2em" pb="0px">
                {/* <label htmlFor="f-option"> */}
                <Image w="100%" src={this.props.img} />
                {/* </label> */}
              </Box>
              <Box w={7 / 12} pt="1em" pr="1em">
                {/* <label htmlFor="f-option"> */}
                <center>
                  <Box>
                    <Text5>{this.props.text1}</Text5>
                  </Box>
                  <Box w={8 / 12} pt="0.5em">
                    <Text6>{this.props.text2}</Text6>
                  </Box>
                </center>
                <Wrapperprice>
                  <Box pt="0.5em">
                    <Text3>{this.props.price}</Text3>
                  </Box>
                  {/* </label> */}
                </Wrapperprice>
                <WrapperMonth>
                  <Text4>{this.props.month}</Text4>
                </WrapperMonth>
              </Box>
            </Flex>
            <Wrapperin zin={zin} onClick="">
              <center>
                <Box pt="1em">
                  <Text5>SUBSCRIBE VOD</Text5>
                  <Text5>AND LIVE STREAMING</Text5>
                </Box>
                <Box pt="1em">
                  <ButtonWatch>WATCH NOW</ButtonWatch>
                </Box>
                <Box pt="1em">
                  <Text10>VALID THRU</Text10>
                </Box>
                <Box pt="0.5em">
                  <Text9>Aug 30th, 2017</Text9>
                </Box>
              </center>
            </Wrapperin>
          </Wrapper>
        </div>
      </Provider>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, { closeModal })(ModalSubscribe)
