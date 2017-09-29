import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Image } from 'rebass'
import NewModal from './NewModal'
import { toogleModal } from '../../redux/modules/modal'

class ModalText extends Component {
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
    return <div onClick={this.handleOnClickModal}>{this.props.text}</div>
  }
}

export default ModalText
