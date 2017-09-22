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
  color: blue;
  width: 600px;
  height: 335px;
  background: #fff;
  z-index: 240;
`
const WrapperImg = styled.div`
  color: blue;
  width: 450px;
  height: 600px;
  background: #fff;
  z-index: 240;
`
export default class Modal extends Component {
  static propTypes = {
    active: PropTypes.bool,
    modalType: PropTypes.string,
    toogleModalAction: PropTypes.func,
    modalURL: PropTypes.string,
  }
  static defaultProps = {
    modalType: 2,
  }
  handleOnClick = e => {
    false ? this.props.toogleModalAction() : null
    // if (true) {
    // }
    e.stopPropagation()
  }
  render() {
    let renderUI = <div />
    if (this.props.modalType === 1) {
      renderUI = (
        <WrapperVod onClick={e => this.handleOnClick(e)} visibility="hidden">
          <Player />
        </WrapperVod>
      )
    } else if (this.props.modalType === 2) {
      renderUI = (
        <WrapperImg onClick={e => this.handleOnClick(e)}>
          <Image width="100%" src={this.props.modalURL} />
        </WrapperImg>
      )
    } else {
      renderUI = <h5 />
    }
    return (
      <Wrapper
        onClick={true ? this.props.toogleModalAction : ''}
        visibility={this.props.active}
        display={this.props.active}
      >
        {renderUI}
      </Wrapper>
    )
  }
}
