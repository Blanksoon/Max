import React from 'react'
import { Flex, Provider, Box, Image, Text } from 'rebass'
import styled from 'styled-components'
import color from '../commons/vars'
import { closeModal } from '../../redux/modules/modal'
import { connect } from 'react-redux'
import * as api from '../../api'
import Router from 'next/router'

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
  padding: 12px 70px;
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
  //border: 1px solid ${props => props.color};
  background-color: ${color.white};
  text-align: -webkit-auto;
  position: relative;
  height: 160px;
  width: 100%;
`
const WrapperButton = styled.div`
  position: absolute;
  Bottom: 25px;
  right: 30px;
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
  color: #000;
  font-weight: 700;
  font-size: 1.5rem;
  font-family: Helvetica, Arial, sans-serif;
`
const Text4 = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 1.5rem;
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
class ThumbnailShowTime extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.pushToVod = this.pushToVod.bind(this)
  }
  // pushToVod() {
  //   Router.push(`/vods/` + this.props.id)
  // }
  render() {
    //console.log('this.props', this.props.id)
    let zin = -1
    if (this.props.status === 'unenable') {
      zin = 1
    }
    return (
      <Provider>
        <Wrapper>
          <Flex pl="0.5em" pr="0.5em" pt="1em" pb="1em">
            <Box w={0.4 / 12} />
            <Box w={2 / 12} mr="5px">
              <br />
              <center>
                <Image w="100%" src={this.props.imglogo} />
                <Text3>{this.props.text3}</Text3>
              </center>
            </Box>
            <Box w={4 / 12}>
              <Text2>{this.props.text4}</Text2>
              <Image w="100%" src={this.props.img} />
            </Box>
            <Box w={5 / 12}>
              <Flex>
                <Box w={2 / 12} ml="12px">
                  <br />
                  <Image w="100%" src="static/ic_liveblack@2x.png" />
                </Box>
                <Box w={10 / 12}>
                  <Text1>{this.props.text1}</Text1>
                  {this.props.textrb}
                </Box>
              </Flex>
            </Box>
          </Flex>
          <WrapperButton>
            <Button>
              <Textbutton>
                {this.props.text5}-{this.props.text2}
              </Textbutton>
            </Button>
          </WrapperButton>
          <WrapperHover zin={zin} style={{ cursor: 'pointer' }} onClick="">
            <Flex>
              <Box w={2 / 12} pt="2.5em" ml="5em">
                <Image w="100%" src="static/ic_you-bought.png" />
              </Box>
              <Box w={10 / 12}>
                <Box pl="2.5em" pt="2em">
                  <Text4>YOU BOUGHT</Text4>
                </Box>
                <Box pl="2em" pt="0.5em">
                  <ButtonWatch>WATCH</ButtonWatch>
                </Box>
              </Box>
            </Flex>
          </WrapperHover>
        </Wrapper>
      </Provider>
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

export default connect(mapStateToProps, { closeModal })(ThumbnailShowTime)
