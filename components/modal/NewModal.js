import React, { Component, PropTypes } from 'react'
import Player from '../videoPlayer/Player'
import Login from '../login/Login'
import Link from 'next/link'
import styled from 'styled-components'
import {
  Flex,
  Provider,
  Box,
  Image,
  Text,
  Button,
  Overlay,
  Fixed,
  Heading,
} from 'rebass'

const Wrapper = styled.div`
  color: blue;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  position: fixed;
  justify-content: center;
  align-items: center;
  display: flex;
  visibility: ${props => (props.visibility === true ? 'initial' : 'hidden')};
`
const WrapperVod = styled.div`
  color: blue;
  width: 200px;
  height: 200px;
  background: #fff;
  z-index: 240;
`
const WrapperImg = styled.div`
  color: blue;
  width: 450px;
  height: 600px;
  background: #fff;
  z-index: 240;
`
export default class Modal extends Component {
  static propTypes = {
    active: PropTypes.bool,
    modalType: PropTypes.string,
    toogleModalAction: PropTypes.func,
    modalURL: PropTypes.string,
  }
  static defaultProps = {
    modalType: 2,
  }
  render() {
    let renderUI = <div />
    if (this.props.modalType === 1) {
      renderUI = <Player />
    } else if (this.props.modalType === 2) {
      renderUI = (
        <WrapperImg>
          <Image width="100%" src={this.props.modalURL} />
        </WrapperImg>
      )
    } else {
      renderUI = <h5>lollol</h5>
    }
    console.log('ULR', this.props)
    return (
      <Wrapper
        onClick={true ? this.props.toogleModalAction : ''}
        visibility={this.props.active}
      >
        {renderUI}
      </Wrapper>
    )
  }
}
