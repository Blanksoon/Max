import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import NewModal from './NewModal'
import { toogleModal } from '../../actions/modal'
import { Flex, Provider, Box, Image, Text, Button, overlay } from 'rebass'
import BorderlessButton from '../commons/BorderlessButton'

class ModalButton extends Component {
  static propTypes = {
    active: PropTypes.bool,
    toogleModalAction: PropTypes.func,
    modalType: PropTypes.number,
    modalURL: PropTypes.string,
  }
  handleOnClickModal = () => {
    this.props.toogleModalAction()
    this.props.updateModalAction(this.props.modalType)
    this.props.indexModalURL(this.props.modalURL)
  }
  render() {
    return (
      <div>
        <BorderlessButton
          onClick={this.handleOnClickModal}
          visibility={this.props.active}
        >
          {this.props.text}
        </BorderlessButton>
      </div>
    )
  }
}

export default ModalButton
