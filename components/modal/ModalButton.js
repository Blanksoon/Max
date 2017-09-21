import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import NewModal from './NewModal'
import styled from 'styled-components'
import { toogleModal } from '../../actions/modal'
import { Flex, Provider, Box, Image, Text, Button, overlay } from 'rebass'
import BorderlessButton from '../commons/BorderlessButton'
import color from '../commons/vars'

const ButtonPromoClip = styled.button`
  background-color: white;
  border: 1px solid ${props => props.color.red};
  padding: 8px 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
  font-size: 14px;
  font-family: Helvetica, Arial, sans-serif;
  color: ${props => props.color.red};
  cursor: pointer;
`
class ModalButton extends Component {
  static propTypes = {
    active: PropTypes.bool,
    toogleModalAction: PropTypes.func,
    modalType: PropTypes.number,
    modalURL: PropTypes.string,
    buttonID: PropTypes.number,
  }
  handleOnClickModal = () => {
    this.props.toogleModalAction()
    this.props.updateModalAction(this.props.modalType)
    this.props.indexModalURL(this.props.modalURL)
  }
  render() {
    let renderUI = <div />
    if (this.props.buttonID === 1) {
      renderUI = (
        <BorderlessButton
          onClick={this.handleOnClickModal}
          visibility={this.props.active}
        >
          {this.props.text}
        </BorderlessButton>
      )
    } else if (this.props.buttonID === 2) {
      renderUI = (
        <ButtonPromoClip
          onClick={this.handleOnClickModal}
          visibility={this.props.active}
          color={color}
        >
          {this.props.text}
        </ButtonPromoClip>
      )
    } else {
      renderUI = (
        <BorderlessButton
          onClick={this.handleOnClickModal}
          visibility={this.props.active}
        >
          {this.props.text}
        </BorderlessButton>
      )
    }
    return <div>{renderUI}</div>
  }
}

export default ModalButton
