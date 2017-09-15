import React, { Component } from 'react'
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
  color: red;
  position: relative;
`
const WrapperIn = styled.div`
  color: blue;
  z-index: 20;
  position: relative;
`
export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      overlay: false,
    }
    this.update = this.update.bind(this)
  }
  update() {
    console.log('hello')
    if (this.state.overlay == true) {
      this.setState({
        overlay: false,
      })
    } else
      this.setState({
        overlay: true,
      })
  }
  render() {
    return (
      <Wrapper>
        <Image onClick={this.update} width="100%" src={this.props.img} />
        {this.state.overlay && (
          <div>
            <Fixed top right bottom left onClick={this.update} />
            <Overlay w="60%">Video</Overlay>
          </div>
        )}
      </Wrapper>
    )
  }
}
