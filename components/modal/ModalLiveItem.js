import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Image, Text, Button, overlay } from 'rebass'
import { connect } from 'react-redux'
import NewModal from './NewModal'
import { toggleModal } from '../../redux/modules/modal'
import BorderlessButton from '../commons/BorderlessButton'
import color from '../commons/vars'
import ThumbnailShowTime from '../thumbnail/ThumbnailShowTime'

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
    if (this.props.live == undefined) {
      renderUI = (
        <ThumbnailShowTime
          imglogo={this.props.logo}
          img={this.props.img}
          text1={this.props.text1}
          text2={this.props.text2}
          text3={this.props.text3}
          text4={this.props.text4}
          text5={this.props.text5}
        />
      )
    } else {
      renderUI = (
        <ThumbnailShowTime
          imglogo={this.props.live.logoUrl}
          img={this.props.live.bannerUrl}
          text1={this.props.live.title_en}
          text2={this.props.live.endTime}
          text3={this.props.live.price}
          text4={this.props.live.liveDateStr_en}
          text5={this.props.live.startTime}
        />
      )
    }
    //  console.log('liveeeeeeeee', this.props.live)
    // renderUI = (
    //   <ThumbnailShowTime
    //     imglogo={this.props.logo}
    //     img={this.props.img}
    //     text1={this.props.text1}
    //     text2={this.props.text2}
    //     text3={this.props.text3}
    //     text4={this.props.text4}
    //   />
    //)

    return (
      <div style={{ cursor: 'pointer' }} onClick={this.handleOnClickModal}>
        {renderUI}
      </div>
    )
  }
}

export default ModalButton
