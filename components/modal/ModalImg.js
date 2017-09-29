import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import NewModal from './NewModal'
import { toggleModal } from '../../redux/modules/modal'
import { Image } from 'rebass'

class ModalImg extends Component {
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
        <Image
          onClick={this.handleOnClickModal}
          width={this.props.w}
          src={this.props.img}
        />
      </div>
    )
  }
}

export default ModalImg
