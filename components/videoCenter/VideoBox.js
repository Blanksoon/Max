import styled from 'styled-components'
import ThumbnailVideo from '../thumbnail/ThumbnailVideo'
import ThumbnailBottom from '../thumbnail/ThumbnailBottom'
import ThumbnailSky from '../thumbnail/ThumbnailSky'
import { LabelSearch } from './LabelSearch'
import { Flex, Box, Image, Button, Text } from 'rebass'
import { connect } from 'react-redux'
import Link from 'next/link'
import React, { Component } from 'react'

const BackgroundImage = styled.div`
  background: '../../static/3.png';
  background-repeat: no-repeat;
  background-position: center;
`
const WrapperHilight = styled.div`
  width: 100%;
  height: 114%;
  background-size: cover;
  font-family: Helvetica, Arial, sans-serif;
  // background-image: url('static/FT6A2278.jpg');
  position: relative;
`
const WrapperHilightText = styled.div`
  bottom: 12%;
  right: 0;
  width: 100%;
  position: absolute;
  background: -webkit-linear-gradient(
    top,
    rgba(30, 87, 153, 0) 0%,
    rgba(30, 87, 153, 1) 35%,
    rgba(30, 87, 153, 1) 99%,
    rgba(30, 87, 153, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
`
const WrapperImg = styled.div`
  // width: 100%;
  // height: 114%;
  // background-size: cover;
  font-family: Helvetica, Arial, sans-serif;
  // background-image: url('static/FT6A2278.jpg');
  position: relative;
`
const WrapperText = styled.div`
  color: #fff;
  top: 24%;
  left: 29%;
  font-weight: 700;
  font-size: 2.5em;
  position: absolute;
`
class VideoBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hilightProgram: {},
    }
    this.fetchVod = this.fetchVod.bind(this)
    this.renderVideo = this.renderVideo.bind(this)
  }
  // let hilightProgram = {}
  // let i = 1
  // console.log('number', Object.keys(props.vod).length)
  // console.log('action', props.vod[1].feature)
  // while (i <= Object.keys(props.vod).length) {
  //   if (props.vod[i].feature == 'active') {
  //     hilightProgram = props.vod[i]
  //   }
  //   i++
  // }

  fetchVod() {
    const data = Object.values(this.props.vod)
    let i = 1
    while (i <= data.length) {
      console.log(data[i].id)
      // if (this.props.vod[i].feature == 'active') {
      //   this.setState({
      //     hilightProgram: this.props.vod[i],
      //   })
      // }
      i++
    }
  }

  renderVideo() {
    const data = Object.values(this.props.vod)
    // return data.map(({ feature }) => <li>{feature}</li>)
    const hilightProgram = data.filter(vod => vod.feature == 'active')
    console.log('cccc', hilightProgram[0])
    console.log('data', data[0])
    //return console.log(data[1].id)
  }
  render() {
    // this.fetchVod()
    // const vod = this.props
    return (
      <div>
        <Flex mb={3} pt="7rem">
          <Box w={1} pl="1rem">
            <Text color="red" bold children="ON DEMAND" fontSize="2em" />
          </Box>
        </Flex>
        <Flex mb="1rem">
          <Box w={12 / 12} pl="1rem" mr="1em">
            <WrapperHilight>
              <FeatureProgram />
              <Box w={12 / 12} pl="20px">
                <WrapperHilightText>
                  <Text
                    pl="1rem"
                    color="#57b1fe"
                    bold
                    children="HILIGHT"
                    fontSize="1em"
                  />
                  <Text
                    pt="5px"
                    pl="1rem"
                    color="#fff"
                    bold
                    children="Max Ultimate Tournament : Epic fight"
                    fontSize="1.3em"
                  />
                  <Text
                    pl="1rem"
                    pl="1rem"
                    color="#fff"
                    bold
                    children="&quot;Double knockdow&quot;"
                    fontSize="1.3em"
                  />
                  <Flex>
                    <Box w={6 / 12}>
                      <Text
                        pl="1rem"
                        pt="15px"
                        pb="15px"
                        left
                        color="#f7f704"
                        bold
                        children="On air-Aug11,2017"
                        fontSize="0.9em"
                      />
                    </Box>
                    <Box w={6 / 12}>
                      <Text
                        pt="15px"
                        pb="15px"
                        pr="15px"
                        right
                        color="#f7f704"
                        bold
                        children="24.51"
                        fontSize="0.9em"
                      />
                    </Box>
                  </Flex>
                </WrapperHilightText>
              </Box>
            </WrapperHilight>
          </Box>
        </Flex>
        <Box pl="1rem" pr="1rem">
          <LabelSearch />
          <RowVideo />
          <RowVideo />
          <RowVideo />
        </Box>
        <Box w={12 / 12} pb="3rem" pt="2rem">
          <center>
            <button className="button-hunger">Hunger for more</button>
          </center>
        </Box>
        <style jsx>
          {`
            .backgroundx {
              color: #ffffff;
              background-image: url('static/FT6A2278.jpg');
            }
            .button {
              background-color: red;
              border: none;
              color: white;
              padding: 8px 25px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-weight: 700;
              font-family: Helvetica, Arial, sans-serif;
            }
            .button-hunger {
              background-color: white;
              border: 1px solid red;
              color: red;
              padding: 8px 25px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-weight: 700;
              font-family: Helvetica, Arial, sans-serif;
            }
            .text-left {
              float: left;
            }
            .text-right {
              float: right;
            }
            .gradient {
              width: 100%;
              height: 75vh;
              background: -webkit-linear-gradient(
                top,
                rgba(119, 133, 153, 1) 0%,
                rgba(2, 34, 70, 1) 100%
              ); /* Chrome10-25,Safari5.1-6 */
            }
          `}
        </style>
      </div>
    )
  }
}

const FeatureProgram = () => (
  <Box w={12 / 12} className="imagesss">
    <Link>
      <Image width="100%" pt={0} src="static/FT6A2278.jpg" />
    </Link>
  </Box>
)

const RowVideo = () => (
  <Flex mb={3}>
    <Box w={6 / 12} mr="1em">
      <Flex>
        <Box w={6 / 12} pr="7.5px">
          <ThumbnailVideo
            img="static/FT6A6133.jpg"
            name="The Battle Muay-Thai(4/4)"
            date="On air - Aug 11, 2017"
            time="16.24"
            pt="1em"
          />
        </Box>
        <Box w={6 / 12} pl="7.5px">
          <ThumbnailVideo
            img="static/FT6A6483.jpg"
            name="The Battle Muay-Thai(3/4)"
            date="On air - Aug 11, 2017"
            time="16.24"
            pt="1em"
          />
        </Box>
      </Flex>
    </Box>
    <Box w={6 / 12}>
      <Flex>
        <Box w={6 / 12} pr="7.5px">
          <ThumbnailVideo
            img="static/FT6A6495.jpg"
            name="The Battle Muay-Thai(2/4)"
            date="On air - Aug 11, 2017"
            time="16.24"
            pt="1em"
          />
        </Box>
        <Box w={6 / 12} pl="7.5px">
          <ThumbnailVideo
            img="static/FT6A6676.jpg"
            name="The Battle Muay-Thai(1/4)"
            date="On air - Aug 11, 2017"
            time="16.24"
            pt="1em"
          />
        </Box>
      </Flex>
    </Box>
  </Flex>
)

const mapStateToProps = ({ vod }) => ({ vod })

export default connect(mapStateToProps, null)(VideoBox)
//export { VideoBox }
