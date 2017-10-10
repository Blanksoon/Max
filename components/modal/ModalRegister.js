import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Image } from 'rebass'
import NewModal from './NewModal'

class ModalRegister extends Component {
  static propTypes = {
    active: PropTypes.bool,
    toggleModalAction: PropTypes.func,
    modalType: PropTypes.number,
    modalURL: PropTypes.string,
  }
  handleOnClickModal = () => {
    console.log('reggggg')
    this.props.registerModal()
  }
  render() {
    return <div onClick={this.handleOnClickModal}>{this.props.text}</div>
  }
}

export default ModalRegister
