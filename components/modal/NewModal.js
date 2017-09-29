import React, { Component, PropTypes } from 'react'
import Player from '../videoPlayer/Player'
import Login from '../login/Login'
import Link from 'next/link'
import styled from 'styled-components'
import { Image } from 'rebass'

const Wrapper = styled.div`
  color: blue;
  width: 100%;
  height: 100vh;
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
  height: 550px;
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
export default class Modal extends Component {
  static propTypes = {
    active: PropTypes.bool,
    modalType: PropTypes.string,
    toogleModalAction: PropTypes.func,
    modalURL: PropTypes.string,
    closeModal: PropTypes.func,
  }
  static defaultProps = {
    modalType: 2,
  }
  handleOnClick = e => {
    console.log('click', e)
    false ? this.props.toogleModalAction() : null
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
      renderUI = (
        <WrapperVod onClick={e => this.handleOnClick(e)} visibility="hidden">
          <Player />
          <WrapperClose onClick={true ? this.props.closeModal : ''}>
            <Image width="100%" src="static/close.png" />
          </WrapperClose>
        </WrapperVod>
      )
    } else if (this.props.modalType === 2) {
      renderUI = (
        <WrapperImg onClick={e => this.handleOnClick(e)}>
          <Image width="100%" src={this.props.modalURL} />
          <WrapperClose onClick={true ? this.props.closeModal : ''}>
            <Image width="100%" src="static/close.png" />
          </WrapperClose>
        </WrapperImg>
      )
    } else if (this.props.modalType === 3) {
      renderUI = (
        <WrapperLogin onClick={e => this.handleOnClick(e)}>
          <Login />
          <WrapperClose onClick={true ? this.props.closeModal : ''}>
            <Image width="100%" src="static/close.png" />
          </WrapperClose>
        </WrapperLogin>
      )
    } else {
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
