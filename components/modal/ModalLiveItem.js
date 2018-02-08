import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Image, Text, overlay, Link } from 'rebass'
import { connect } from 'react-redux'
import NewModal from './NewModal'
import { toggleModal } from '../../redux/modules/modal'
import BorderlessButton from '../commons/BorderlessButton'
import color from '../commons/vars'
import { media, theme } from '../../tools/responsive'

const Button = styled.button`
  background-color: ${color.white};
  border: 1px solid ${color.red};
  color: ${color.red};
  //padding: 0.9em 60%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
  width: 200%;
  height: 3em;
  ${media.phone`height: 2.5em;`};
  ${media.iphone5`height: 2em;`};
`
const ButtonWatch = styled.button`
  background-color: ${color.red};
  border: 1px solid ${color.red};
  color: ${color.white};
  padding: 12px 18%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
  // font-size: 1vw;
  ${media.phone`padding: 8px 25%;`};
  ${media.iphone5`font-size: 0.7em`};
`
const Text1 = styled.div`
  padding-left: 1rem;
  padding-top: 1rem;
  color: ${props => props.color};
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
  overflow: hidden;
  ${media.ipadpro`font-size: 1em`};
  ${media.ipad`font-size: 0.9em;
  height: 50px;`};
  ${media.phone`font-size: 0.8em; height: 38px;padding-top: 0.3rem;`};
  ${media.iphone5`font-size: 0.6em;height: 32px;`};
`
const Text2 = styled.div`
  color: #000;
  font-weight: 700;
  font-size: 1rem;
  font-family: Helvetica, Arial, sans-serif;
  overflow: hidden;
  ${media.ipadpro`font-size: 1em`};
  ${media.ipad`font-size: 1em`};
  ${media.phone`font-size: 0.8em`};
  ${media.iphone5`font-size: 0.8em;height: 31px;`};
`
const Text3 = styled.div`
  color: #000;
  font-weight: 700;
  font-size: 1.5rem;
  font-family: Helvetica, Arial, sans-serif;
  ${media.ipadpro`font-size: 1.5em`};
  ${media.ipad`font-size: 1.2em`};
  ${media.phone`font-size: 0.8em`};
  ${media.iphone5`font-size: 0.8em`};
`
const Text4 = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 1.5rem;
  font-family: Helvetica, Arial, sans-serif;
  ${media.ipad`font-size: 1.2em`};
  ${media.phone`font-size: 0.8em`};
  ${media.iphone5`font-size: 0.8em`};
`
const Textbutton = styled.div`
  color: ${color.red};
  font-weight: 700;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 0.9rem;
  ${media.ipadpro`font-size: 0.9rem`};
  ${media.ipad`font-size: 0.9rem`};
  ${media.phone`font-size: 0.7rem`};
  ${media.iphone5`font-size: 0.7rem`};
`
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
const WrapperButton = styled.div`
  // position: absolute;
  Bottom: 1.1em;
  right: 6%;
  width: 50%;
`
const WrapperHover = styled.div`
  border: 1px solid #484444;
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
    let zin = -1
    if (
      this.props.status === 'unenable' ||
      this.props.subAll === 'unenable' ||
      this.props.packAll === 'unenable'
    ) {
      zin = 1
    }
    return (
      <div>
        <Wrapper>
          <Flex
            pl="0.5em"
            pr="0.5em"
            pt="1em"
            pb="1em"
            style={{ cursor: 'pointer' }}
            onClick={this.handleOnClickModal}
            wrap
          >
            <Box w={[0.4 / 12, 0.4 / 12, 0 / 12, 0.4 / 12, 0.4 / 12]} />
            <Box w={[2 / 12, 2 / 12, 2 / 12, 2 / 12, 2 / 12]} mr="5px">
              <br />
              <center>
                <Image w="100%" src={this.props.live.logoUrl} />
                <Text3>{this.props.live.price}$</Text3>
              </center>
            </Box>
            <Box w={[4 / 12, 4 / 12, 4.8 / 12, 4 / 12, 4 / 12]}>
              <Text2>
                {this.props.lang === 'en' ? (
                  this.props.live.liveDateStr_en
                ) : (
                  this.props.live.liveDateStr_th
                )}
              </Text2>
              <Image w="100%" src={this.props.live.bannerUrl} />
            </Box>
            <Box w={[5 / 12, 5 / 12, 5 / 12, 5 / 12, 5 / 12]}>
              <Flex wrap>
                <Box
                  w={[12 / 12, 2 / 12, 2 / 12, 2 / 12, 2 / 12]}
                  pt={['0rem', '0.9rem', '1rem', '0.9rem', '1rem']}
                  ml="12px"
                >
                  <Image
                    w={['20%', '100%', '100%', '100%', '100%']}
                    src="static/ic_liveblack@2x.png"
                  />
                </Box>
                <Box w={[12 / 12, 8 / 12, 8 / 12, 8 / 12, 8 / 12]}>
                  <Text1>
                    {this.props.lang === 'en' ? (
                      this.props.live.title_en
                    ) : (
                      this.props.live.title_th
                    )}
                  </Text1>
                  {this.props.textrb}
                </Box>
              </Flex>
              <Flex
                pt={['0.4em', '1em', '2.2em', '2.5em', '2.5em']}
                pl={['0.5em', '1em', '2.2em', '3.2em', '3.2em']}
              >
                <WrapperButton>
                  <Button style={{ cursor: 'pointer' }}>
                    <Textbutton>
                      {this.props.live.startTime}-{this.props.live.endTime}
                    </Textbutton>
                  </Button>
                </WrapperButton>
              </Flex>
            </Box>
          </Flex>

          <WrapperHover zin={zin} onClick="">
            <Flex pl="2em" pt="1em">
              <Box
                w={2 / 12}
                pt={['1.5em', '2em', '2.5em', '2.5em', '2.5em']}
                ml={['1em', '1em', '1em', '5em', '5em']}
              >
                <Image w="100%" src="static/ic_you-bought.png" />
              </Box>
              <Box w={10 / 12}>
                <Box
                  pl={['1.8em', '3em', '2.5em', '2.5em', '2.5em']}
                  pt={['0.5em', '1em', '2em', '2em', '2em']}
                >
                  <Text4>{this.props.youBought}</Text4>
                </Box>
                <Box pl={['1em', '1.5em', '2.8em', '2em', '2em']} pt="0.5em">
                  <Link href={`/lives_vdo?id=${this.props.live._id}`}>
                    <ButtonWatch style={{ cursor: 'pointer' }}>
                      {this.props.watch}
                    </ButtonWatch>
                  </Link>
                </Box>
              </Box>
            </Flex>
          </WrapperHover>
        </Wrapper>
      </div>
    )
  }
}

export default ModalButton
