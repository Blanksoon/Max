import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Image, Text, overlay, Link } from 'rebass'
import { connect } from 'react-redux'
import NewModal from './NewModal'
import { toggleModal } from '../../redux/modules/modal'
import BorderlessButton from '../commons/BorderlessButton'
import color from '../commons/vars'
import { media, theme } from '../../tools/responsive'

const Wrapper = styled.div`
  //border: 1px solid ${props => props.color};
  background-color: ${color.white};
  text-align: -webkit-auto;
  position: relative;
  height: 170px;
  width: 100%;
  ${media.ipad`height: 160px;`};
  ${media.phone`height: 130px;`};
  ${media.iphone5`height: 110px;`};
`
const Img = styled.img`
  width: 318px;
  height: 60px;
  ${media.phone`width: 264px;
  height: 50px;
  margin-left: -1px;`};
  ${media.iphone5`width: 202px;
  height: 50px;`};
`
class ModalWechat extends Component {
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
    return (
        <Wrapper>
          <Flex
            style={{ cursor: 'pointer' }}
            onClick={this.handleOnClickModal}
          >
            <Image width="100%" src="../../static/btn_wechat.png" />
          </Flex>
        </Wrapper>
    )
  }
}

export default ModalWechat
