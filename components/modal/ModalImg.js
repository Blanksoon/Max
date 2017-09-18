import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import NewModal from './NewModal'
import { toogleModal } from '../../actions/modal'
import { Flex, Provider, Box, Image, Text, Button, overlay } from 'rebass'

class componentName extends Component {
  static propTypes = {
    active: PropTypes.bool,
    toogleModalAction: PropTypes.func,
    modalType: PropTypes.number,
    url: PropTypes.string,
  }
  handleOnClickModal = () => {
    this.props.toogleModalAction()
    this.props.updateModalAction(this.props.modalType)
  }
  render() {
    return (
      <div>
        <Image
          onClick={this.handleOnClickModal}
          width={this.props.w}
          src={this.props.img}
        />
      </div>
    )
  }
}

export default componentName
