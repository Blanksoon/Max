import React, { Component, PropTypes } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Image } from 'rebass'
import Login from '../login/Login'
import Register from '../login/Register'
import ForgotPassword from '../login/ForgotPassword'
import ChangePassStep1 from '../login/ChangePassStep1'
import ChangePassStep2 from '../login/ChangePassStep2'
import Player from '../videoPlayer/Player'
import PurchaseItem from '../getTicket/PurchaseItem'

const Text1 = styled.div`
  padding-left: 1rem;
  padding-top: 1rem;
  color: #8a8a8a;
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Wrapper = styled.div`
  color: blue;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  position: fixed;
  justify-content: center;
  align-items: center;
  display: flex;
  visibility: ${props => (props.visibility === true ? 'initial' : 'hidden')};
  display: ${props => (props.display === true ? '' : 'none')};
`
const WrapperVod = styled.div`
  position: relative;
  color: blue;
  width: 600px;
  height: 335px;
  background: #fff;
  z-index: 240;
`
const WrapperImg = styled.div`
  position: relative;
  color: blue;
  width: 440px;
  height: 500px;
  background: #fff;
  z-index: 240;
`
const WrapperLogin = styled.div`
  position: relative;
  width: 840px;
  height: 615px;
  background: #fff;
  z-index: 240;
`
const WrapperRegister = styled.div`
  position: relative;
  width: 840px;
  height: 615px;
  background: #fff;
  z-index: 240;
`
const WrapperPurchaseItem = styled.div`
  position: relative;
  width: 750px;
  height: 550px;
  background: #fff;
  z-index: 240;
`
const WrapperChangePass = styled.div`
  position: relative;
  width: 650px;
  height: 250px;
  background: #fff;
  z-index: 240;
`
const WrapperSuccessPurchase = styled.div`
  position: relative;
  width: 650px;
  height: 250px;
  background: #fff;
  z-index: 240;
`
const WrapperClose = styled.div`
  position: absolute;
  color: #fff;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  //border: 3px solid #73ad81;
`
const WrapperCancle = styled.div`
  position: absolute;
  color: #fff;
  bottom: 0;
  right: 80px;
  //border: 3px solid #73ad81;
  cursor: pointer;
`
export default class Modal extends Component {
  static propTypes = {
    active: PropTypes.bool,
    modalType: PropTypes.number,
    toggleModalAction: PropTypes.func,
    modalURL: PropTypes.string,
    closeModal: PropTypes.func,
  }
  static defaultProps = {
    modalType: 2,
  }
  handleOnClick = e => {
    console.log('click', e)
    false ? this.props.toggleModalAction() : null
    // if (false) {
    //   this.props.toogleModalAction()
    // }
    e.stopPropagation()
  }
  componentDidMount() {
    this.setState({
      visibility: 'visible',
    })
    // Show carousel only after initiate to avoid flicker
    document.addEventListener('keydown', e => {
      console.log('eventcode', e.keyCode)
      if (e.keyCode === 27) this.closeModal()
    })
  }

  closeModal = () => {
    console.log('props', this.props)
    this.props.closeModal()
  }
  render() {
    ;<div onKeyDown={this.closeModal} />
    let renderUI = <div />
    if (this.props.modalType === 1) {
      //promoclip
      renderUI = (
        <WrapperVod onClick={e => this.handleOnClick(e)} visibility="hidden">
          <Player Url={this.props.modalURL} />
          <WrapperClose onClick={true ? this.props.closeModal : ''}>
            <Image width="100%" src="../../static/close.png" />
          </WrapperClose>
        </WrapperVod>
      )
    } else if (this.props.modalType === 2) {
      //fightcard
      renderUI = (
        <WrapperImg onClick={e => this.handleOnClick(e)}>
          <Image width="100%" src={this.props.modalURL} />
          <WrapperClose onClick={true ? this.props.closeModal : ''}>
            <Image width="100%" src="../../static/close.png" />
          </WrapperClose>
        </WrapperImg>
      )
    } else if (this.props.modalType === 3) {
      //login
      renderUI = (
        <WrapperLogin onClick={e => this.handleOnClick(e)}>
          <Login />
          <WrapperClose onClick={true ? this.props.closeModal : ''}>
            <Image width="100%" src="../../static/close.png" />
          </WrapperClose>
        </WrapperLogin>
      )
    } else if (this.props.modalType === 4) {
      //register
      renderUI = (
        <WrapperRegister onClick={e => this.handleOnClick(e)}>
          <Register closeModal={this.props.closeModal} />
          <WrapperClose onClick={true ? this.props.closeModal : ''}>
            <Image width="100%" src="../../static/close.png" />
          </WrapperClose>
        </WrapperRegister>
      )
    } else if (this.props.modalType === 5) {
      //changePassword_step1
      renderUI = (
        <WrapperChangePass onClick={e => this.handleOnClick(e)}>
          <ChangePassStep1 />
          <WrapperClose onClick={true ? this.props.closeModal : ''}>
            <Image width="100%" src="../../static/close.png" />
          </WrapperClose>
        </WrapperChangePass>
      )
    } else if (this.props.modalType === 6) {
      //changePassword_step2
      renderUI = (
        <WrapperChangePass onClick={e => this.handleOnClick(e)}>
          <ChangePassStep2 />
          <WrapperClose onClick={true ? this.props.closeModal : ''}>
            <Image width="100%" src="../../static/close.png" />
          </WrapperClose>
        </WrapperChangePass>
      )
    } else if (this.props.modalType === 7) {
      //Forgot password
      renderUI = (
        <WrapperRegister onClick={e => this.handleOnClick(e)}>
          <ForgotPassword closeModal={this.props.closeModal} />
          <WrapperClose onClick={true ? this.props.closeModal : ''}>
            <Image width="100%" src="../../static/close.png" />
          </WrapperClose>
        </WrapperRegister>
      )
    } else if (this.props.modalType === 8) {
      //Forgot password
      renderUI = (
        <WrapperPurchaseItem onClick={e => this.handleOnClick(e)}>
          <PurchaseItem closeModal={this.props.closeModal} />
          <WrapperCancle onClick={true ? this.props.closeModal : ''}>
            <Text1>Cancle</Text1>
          </WrapperCancle>
        </WrapperPurchaseItem>
      )
    } else if (this.props.modalType === 9) {
      //Forgot password
      renderUI = (
        <WrapperSuccessPurchase onClick={e => this.handleOnClick(e)}>
          <SuccessPurchase closeModal={this.props.closeModal} />
          <WrapperClose onClick={true ? this.props.closeModal : ''}>
            <Image width="100%" src="../../static/close.png" />
          </WrapperClose>
        </WrapperSuccessPurchase>
      )
    } else {
      //null
      renderUI = renderUI
    }
    return (
      <Wrapper
        onClick={e => this.handleOnClick(e)}
        visibility={this.props.active}
        display={this.props.active}
      >
        {renderUI}
      </Wrapper>
    )
  }
}
