import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Image } from 'rebass'
import NewModal from './NewModal'

class ModalForgotPass extends Component {
  static propTypes = {
    active: PropTypes.bool,
    toggleModalAction: PropTypes.func,
    modalType: PropTypes.number,
    modalURL: PropTypes.string,
  }
  handleOnClickModal = () => {
    this.props.fogotPassModal(this.props.modalType)
  }
  render() {
    return <div onClick={this.handleOnClickModal}>{this.props.text}</div>
  }
}

export default ModalForgotPass
