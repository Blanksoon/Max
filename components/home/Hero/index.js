import { Component } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Image } from 'rebass'
import Slider from 'react-slick'
import { slick, slickTheme } from './slickStyle'
import Countdown from './Countdown'

const Slide = styled(Image)`width: 100%;`
const Thumb = styled(Image)`
  cursor: pointer;
  width: 100%;
`

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibility: 'hidden',
      activeLive: 0,
    }
  }
  componentDidMount() {
    // Show carousel only after initiate to avoid flicker
    this.setState({
      visibility: 'visible',
    })
  }
  setActiveLive(i) {
    this.setState({ activeLive: i })
  }
  render() {
    const { lives } = this.props
    const settings = {
      afterChange: i => this.setActiveLive(i),
      autoplay: true,
      autoplaySpeed: 9000,
      customPaging: i => <Thumb src={lives[i].bannerUrl} />,
      dots: true,
      draggable: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div style={{ visibility: this.state.visibility, position: 'relative' }}>
        <Countdown liveDateStr={lives[this.state.activeLive].liveDate} />
        <Slider {...settings}>
          {lives.map(live => <Slide src={live.bannerUrl} />)}
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
