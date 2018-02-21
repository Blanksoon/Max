import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import NewModal from './NewModal'
import { toggleModal } from '../../redux/modules/modal'
import { Image } from 'rebass'

class ModalNews extends Component {
  static propTypes = {
    active: PropTypes.bool,
    toggleModalAction: PropTypes.func,
    modalType: PropTypes.number,
    modalURL: PropTypes.string,
  }
  handleOnClickModal = () => {
    this.props.toggleModalAction()
    this.props.updateModalAction(this.props.modalType)
    this.props.indexModalURL(this.props.modalURL)
  }
  componentDidMount() {
    this.props.toggleModalAction()
    this.props.updateModalAction(this.props.modalType)
    this.props.indexModalURL(this.props.modalURL)
  }
  render() {
    return (
      <div>
        {/* <Image
          style={{ cursor: 'pointer' }}
          onClick={this.handleOnClickModal}
          width={this.props.w}
          src={this.props.img}
        /> */}
      </div>
    )
  }
}

export default ModalNews
