import React, { Component } from 'react'
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
import Login from '../login/Login'

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
        <Button onClick={this.update} children={this.props.name} />
        {this.state.overlay && (
          <div>
            <Fixed top right bottom left onClick={this.update} />
            <Overlay w="50%">
              <Login />
            </Overlay>
          </div>
        )}
      </div>
    )
  }
}
