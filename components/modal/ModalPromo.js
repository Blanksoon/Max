import React, { Component } from 'react'
import Login from '../login/Login'
import Link from 'next/link'
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
import styled from 'styled-components'

const Wrapper = styled.div`
  color: blue;
  z-index: 50;
  position: fixed;
`
export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      overlay: false,
    }
    //this.addCounter = this.addCounter.bind(this)
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
      <div>
        <Wrapper>
          <Link href={`#`}>
            <a>
              <Image onClick={this.update} width="100%" src={this.props.img} />
            </a>
          </Link>
          {this.state.overlay && (
            <div>
              <Fixed top right bottom left onClick={this.update} />
              <Overlay w="50%">
                asdflksajdflk
                <br />
                asdgasgsad
                <br />
                rgergesrgdrrhs
              </Overlay>
            </div>
          )}
        </Wrapper>
      </div>
    )
  }
}
