import React, { Component } from 'react'
import Login from '../login/Login'
import { Flex, Provider, Box, Image, Text, Button, overlay } from 'rebass'

export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      overlay: false,
    }
    this.addCounter = this.addCounter.bind(this)
  }
  update() {
    this.setState({
      counter: true,
    })
  }
  render() {
    return (
      <div>
        <Button onClick={e => update('overlay')} children="Toggle Overlay" />
        {overlay && (
          <div>
            <Fixed top right bottom left onClick={e => update('overlay')} />
            <Overlay w={256}>
              <Heading>Hello</Heading>
            </Overlay>
          </div>
        )}
      </div>
    )
  }
}
