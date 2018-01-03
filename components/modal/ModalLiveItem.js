import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Image, Text,  overlay , Link} from 'rebass'
import { connect } from 'react-redux'
import NewModal from './NewModal'
import { toggleModal } from '../../redux/modules/modal'
import BorderlessButton from '../commons/BorderlessButton'
import color from '../commons/vars'
import ThumbnailShowTime from '../thumbnail/ThumbnailShowTime'

const Button = styled.button`
background-color: ${color.white};
border: 1px solid ${color.red};
color: ${color.red};
padding: 12px 50px;
text-align: center;
text-decoration: none;
display: inline-block;
font-weight: 700;
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
`
const Text1 = styled.div`
padding-left: 1rem;
padding-top: 1rem;
color: ${props => props.color};
font-weight: 700;
font-size: 1em;
font-family: Helvetica, Arial, sans-serif;
`
const Text2 = styled.div`
color: #000;
font-weight: 700;
font-size: 1rem;
font-family: Helvetica, Arial, sans-serif;
`
const Text3 = styled.div`
color: #000;
font-weight: 700;
font-size: 1.5rem;
font-family: Helvetica, Arial, sans-serif;
`
const Text4 = styled.div`
color: #fff;
font-weight: 700;
font-size: 1.5rem;
font-family: Helvetica, Arial, sans-serif;
`
const Textbutton = styled.div`
color: ${color.red};
font-weight: 700;
font-size: 0.9rem;
font-family: Helvetica, Arial, sans-serif;
`
const Wrapper = styled.div`
//border: 1px solid ${props => props.color};
background-color: ${color.white};
text-align: -webkit-auto;
position: relative;
height: 170px;
width: 100%;
`
const WrapperButton = styled.div`
position: absolute;
Bottom: 25px;
right: 6%;
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
    // let renderUI = <div />
    // // console.log('111111111111',this.props.)
    // if (this.props.live == undefined) {
    //   renderUI = (
    //     <ThumbnailShowTime
    //       imglogo={this.props.logo}
    //       img={this.props.img}
    //       text1={this.props.text1}
    //       text2={this.props.text2}
    //       text3={this.props.text3}
    //       text4={this.props.text4}
    //       text5={this.props.text5}
    //     />
    //   )
    // } else {
    //   renderUI = (
    //     <ThumbnailShowTime
    //       live={this.props.live}
    //       id={this.props.live.id}
    //       modalType={this.props.modalType}
    //       status={this.props.live.status}
    //       imglogo={this.props.live.logoUrl}
    //       img={this.props.live.bannerUrl}
    //       text1={this.props.live.title_en}
    //       text2={this.props.live.endTime}
    //       text3={this.props.live.price}
    //       text4={this.props.live.liveDateStr_en}
    //       text5={this.props.live.startTime}
    //       id={this.props.live._id}
    //       token={this.props.token}
    //       subAll={this.props.subAll}
    //     />
    //   )
    // }
    // return <div>{renderUI}</div>
    let zin = -1
    if (this.props.status === 'unenable' || this.props.subAll === 'unenable') {
      zin = 1
    }
    return (
      <Provider>
        <Wrapper>
          <Flex
            pl="0.5em"
            pr="0.5em"
            pt="1em"
            pb="1em"
            style={{ cursor: 'pointer' }}
            onClick={this.handleOnClickModal}
          >
            <Box w={0.4 / 12} />
            <Box w={2 / 12} mr="5px">
              <br />
              <center>
                <Image w="100%" src={this.props.live.logoUrl} />
                <Text3>{this.props.live.price}$</Text3>
              </center>
            </Box>
            <Box w={4 / 12}>
              <Text2>{this.props.live.liveDateStr_en}</Text2>
              <Image w="100%" src={this.props.live.bannerUrl} />
            </Box>
            <Box w={5 / 12}>
              <Flex>
                <Box w={2 / 12} ml="12px">
                  <br />
                  <Image w="100%" src="static/ic_liveblack@2x.png" />
                </Box>
                <Box w={10 / 12}>
                  <Text1>{this.props.live.title_en}</Text1>
                  {this.props.textrb}
                </Box>
              </Flex>
            </Box>
          </Flex>
          <WrapperButton>
            <Button style={{ cursor: 'pointer' }}>
              <Textbutton>
                {this.props.live.startTime}-{this.props.live.endTime}
              </Textbutton>
            </Button>
          </WrapperButton>
          <WrapperHover zin={zin} onClick="">
            <Flex pl="2em" pt="1em">
              <Box w={2 / 12} pt="2.5em" ml="5em">
                <Image w="100%" src="static/ic_you-bought.png" />
              </Box>
              <Box w={10 / 12}>
                <Box pl="2.5em" pt="2em">
                  <Text4>YOU BOUGHT</Text4>
                </Box>
                <Box pl="2em" pt="0.5em">
                  <Link href={`/lives_vdo?id=${this.props.live._id}`}>
                    <ButtonWatch style={{ cursor: 'pointer' }}>
                      WATCH
                    </ButtonWatch>
                  </Link>
                </Box>
              </Box>
            </Flex>
          </WrapperHover>
        </Wrapper>
      </Provider>
    )
  }
}

export default ModalButton
