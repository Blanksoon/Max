import { Component } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Image } from 'rebass'
import Slider from 'react-slick'
import { slick, slickTheme } from './slickStyle'
import Countdown from './Countdown'
import ActionBar from './ActionBar'
import vars from '../../commons/vars'

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
`
const Title = styled.div`
  color: ${vars.white};
  font-size: 1.5rem;
`
const LiveDate = styled.div`
  color: ${vars.yellow};
  margin-top: 1rem;
`

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
      if (e.keyCode === 27) this.closeModal()
    })
  }
  closeModal(event) {
    if (event.keyCode === 27) {
      this.setState({
        fightcardVisible: false,
        promovideoVisible: false,
      })
    }
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
    const liveDateStr = activeLive.liveDate
    const liveDate = new Date(liveDateStr)
    const formattedLiveDate = liveDate.toLocaleDateString('en-US', options)
    const settings = {
      afterChange: i => this.setActiveLive(i),
      autoplay: true,
      autoplaySpeed: 9000,
      arrows: false,
      customPaging: i => <Thumb src={lives[i].bannerUrl} />,
      dots: true,
      draggable: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div
        style={{ visibility: this.state.visibility, position: 'relative' }}
        onKeyDown={this.closeModal}
      >
        <LiveInfo>
          <Title>{activeLive.title}</Title>
          <LiveDate>{formattedLiveDate}</LiveDate>
          <ActionBar
            live={activeLive}
            fightcardVisible={this.state.fightcardVisible}
            promovideoVisible={this.state.promovideoVisible}
            showFightcard={this.showFightcard}
            showPromovideo={this.showPromovideo}
          />
        </LiveInfo>
        <Countdown liveDateStr={activeLive.liveDate} />
        <Slider {...settings}>
          {lives.map(live => (
            <Slide key={live.bannerUrl} src={live.bannerUrl} />
          ))}
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
