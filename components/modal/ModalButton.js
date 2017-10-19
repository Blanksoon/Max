import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Image, Text, Button, overlay } from 'rebass'
import { connect } from 'react-redux'
import NewModal from './NewModal'
import { toggleModal } from '../../redux/modules/modal'
import BorderlessButton from '../commons/BorderlessButton'
import color from '../commons/vars'
import ButtonRed from '../commons/ButtonSmall'

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

  &:hover {
    background: ${props => props.color.red};
    color: #ffffff;
  }
`
const ButtonTickket = styled.button`
  bottom: 2%;
  background-color: #b81111;
  border: 1px solid #b81111;
  color: white;
  cursor: pointer;
  padding: 12px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
`
// const Text1 = styled.div`
//   font-weight: 700;
//   font-size: 1rem;
//   color: #fff;
// `

class ModalButton extends Component {
  static propTypes = {
    active: PropTypes.bool,
    toggleModalAction: PropTypes.func,
    modalType: PropTypes.number,
    modalURL: PropTypes.string,
    buttonID: PropTypes.number,
  }
  handleOnClickModal = () => {
    this.props.toggleModalAction()
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
    } else if (this.props.buttonID === 3) {
      renderUI = (
        // <ButtonTickket
        //   onClick={this.handleOnClickModal}
        //   visibility={this.props.active}
        // >
        //   {this.props.text}
        // </ButtonTickket>
        <ButtonRed
          onClick={this.handleOnClickModal}
          visibility={this.props.active}
        >
          {this.props.text}
        </ButtonRed>
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
