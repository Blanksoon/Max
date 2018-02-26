import { Component } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Image } from 'rebass'
import Slider from 'react-slick'
import { slick, slickTheme } from './mobileslick'
import Countdown from './Countdown'
import ActionBar from './ActionBar'
import Carousel from 'nuka-carousel'
import vars from '../../commons/vars'
import { media, theme } from '../../../tools/responsive'

const Text = styled.div`color: #fff;`
const Slide = styled(Image)`width: 100%;`
const Thumb = styled(Image)`
  cursor: pointer;
  width: 100%;
`
const LiveInfo = styled.div`
  background: ${vars.transDarkblue};
  bottom: 1rem;
  font-weight: bold;
  left: 2rem;
  padding: 1rem;
  position: absolute;
  width: 50%;
  z-index: 1;
  ${media.ipadpro`width: 50%;`};
  ${media.ipad`width: 58%;`};
  ${media.iphone7p`
  padding: 0rem;
  width: 77%;
  left: 10px;
  height: 121px;
  bottom: 0px;`};
  ${media.phone`
  padding: 0rem;
  width: 76%;
  left: 10px;
  height: 100px;
  bottom: 0px;`};
  ${media.iphone5`
  width: 73%;
  left: 10px;
  bottom: 0rem;
  height: 78px;`};
`
const Title = styled.div`
  color: ${vars.white};
  font-size: 1.5rem;
  ${media.ipadpro`font-size: 1.5rem`};
  ${media.ipad`font-size: 1.3rem`};
  ${media.iphone7p`font-size: 0.9rem`};
  ${media.phone`font-size: 0.8rem`};
  ${media.iphone5`font-size: 0.5rem`};
`
const LiveDate = styled.div`
  color: ${vars.yellow};
  margin-top: 1rem;
  ${media.phone`font-size: 0.8rem;margin-top: 0.3rem;`};
  ${media.iphone5`font-size: 0.5rem;margin-top: 0.2rem;`};
`
const WrapperSlider = styled.div`${media.phone`margin-bottom: 1rem;`};`
export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibility: 'hidden',
      activeLive: 0,
      fightcardVisible: false,
      promovideoVisible: false,
    }
    this.closeModal = this.closeModal.bind(this)
    this.setActiveLive = this.setActiveLive.bind(this)
    this.showFightcard = this.showFightcard.bind(this)
    this.showPromovideo = this.showPromovideo.bind(this)
  }
  componentDidMount() {
    // Show carousel only after initiate to avoid flicker
    this.setState({
      visibility: 'visible',
    })
    document.addEventListener('keydown', e => {
      if (e.keyCode === 27) {
        this.closeModal()
      }
    })
  }
  closeModal(event) {
    this.setState({
      fightcardVisible: false,
      promovideoVisible: false,
    })
  }

  setActiveLive(i) {
    this.setState({ activeLive: i })
  }
  showFightcard(status) {
    this.setState({
      fightcardVisible: status,
    })
  }
  showPromovideo(status) {
    this.setState({
      promovideoVisible: status,
    })
  }
  render() {
    const { lives } = this.props
    const activeLive = lives[this.state.activeLive]
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }
    const liveDateStr = activeLive.liveFromDate
    const liveDate = new Date(liveDateStr)
    const formattedLiveDateEn = liveDate.toLocaleDateString('en-US', options)
    const formattedLiveDateTh = liveDate.toLocaleDateString('th-US', options)
    const settings = {
      afterChange: i => this.setActiveLive(i),
      autoplay: true,
      autoplaySpeed: 9000,
      arrows: false,
      // customPaging: i => (
      //   //   <div>
      //   //     <Text>o</Text>
      //   //   </div>
      //   // ),
      //   <Thumb src={lives[i].bannerUrl} />
      // ),
      dots: true,
      draggable: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    // console.log('ddddddddddddddffff', this.lang)
    return (
      <div
        style={{
          visibility: this.state.visibility,
          position: 'relative',
          zIndex: '0',
        }}
        onKeyDown={this.closeModal}
      >
        <LiveInfo>
          <Title>
            {this.props.lang === 'en' ? (
              activeLive.title_en
            ) : (
              activeLive.title_th
            )}&nbsp;
            {this.props.lang === 'en' ? (
              activeLive.liveDateStr_en
            ) : (
              activeLive.liveDateStr_th
            )}
          </Title>
          <LiveDate>
            {this.props.lang === 'en' ? (
              formattedLiveDateEn
            ) : (
              formattedLiveDateTh
            )}
          </LiveDate>
          <ActionBar
            live={activeLive}
            fightcardVisible={this.state.fightcardVisible}
            promovideoVisible={this.state.promovideoVisible}
            showFightcard={this.showFightcard}
            showPromovideo={this.showPromovideo}
            common={this.props.common}
          />
        </LiveInfo>
        <Countdown
          common={this.props.common}
          liveDateStr={activeLive.liveFromDate}
        />
        <Slider {...settings}>
          {lives.map(live => <Slide key={live.id} src={live.bannerUrl} />)}
        </Slider>
        <style global jsx>
          {slick}
        </style>
        <style global jsx>
          {slickTheme}
        </style>
      </div>
    )
  }
}
