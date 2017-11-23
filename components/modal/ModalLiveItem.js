import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Image, Text, Button, overlay } from 'rebass'
import { connect } from 'react-redux'
import NewModal from './NewModal'
import { toggleModal } from '../../redux/modules/modal'
import BorderlessButton from '../commons/BorderlessButton'
import color from '../commons/vars'
import ThumbnailShowTime from '../thumbnail/ThumbnailShowTime'

const Wrapper = styled.div`
  position: relative;
  height: 160px;
  width: 100%;
`
const WrapperHover = styled.div`
  top: 0;
  background-color: ${color.black};
  z-index: ${props => props.zin};
  height: 100%;
  width: 100%;
  position: absolute;
  font-family: Helvetica, Arial, sans-serif;
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.8) 100%
  ); /* Chrome10-25,Safari5.1-6 */
`
class ModalButton extends Component {
  static propTypes = {
    active: PropTypes.bool,
    toggleModalAction: PropTypes.func,
    modalType: PropTypes.number,
    modalURL: PropTypes.string,
    buttonID: PropTypes.number,
    live: PropTypes.object,
  }
  handleOnClickModal = () => {
    if (this.props.live.status === 'unenable') {
    } else {
      this.props.toggleModalAction()
      this.props.updateModalAction(this.props.modalType)
      this.props.buyProductAction(this.props.live)
      this.props.updateIDAction(this.props.id)
    }
  }
  render() {
    let renderUI = <div />
    // console.log('111111111111',this.props.)
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
          id={this.props.live.id}
          status={this.props.live.status}
          imglogo={this.props.live.logoUrl}
          img={this.props.live.bannerUrl}
          text1={this.props.live.title_en}
          text2={this.props.live.endTime}
          text3={this.props.live.price}
          text4={this.props.live.liveDateStr_en}
          text5={this.props.live.startTime}
          id={this.props.live.id}
          token={this.props.token}
        />
      )
    }
    //console.log('liveeeeeeeee', this.props.live)
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

    return <div onClick={this.handleOnClickModal}>{renderUI}</div>
  }
}

export default ModalButton
