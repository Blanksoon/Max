import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Image } from 'rebass'
import NewModal from './NewModal'
import styled from 'styled-components'
import vars from '../commons/vars'

const Login = styled.div`
  border: 1px solid ${vars.lightBlue};
  color: ${vars.lightBlue};
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  &:hover {
    color: ${vars.white};
    background: ${vars.lightBlue};
  }
  &:active {
    background: #336998;
  }
`
class ModalText extends Component {
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
  render() {
    return (
      <div onClick={this.handleOnClickModal}>
        <Login>{this.props.text}</Login>
      </div>
    )
  }
}

export default ModalText
