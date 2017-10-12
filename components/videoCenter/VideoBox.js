import styled from 'styled-components'
import { Flex, Box, Image, Button, Text } from 'rebass'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import Link from 'next/link'
import ThumbnailVideo from '../thumbnail/ThumbnailVideo'
import ThumbnailBottom from '../thumbnail/ThumbnailBottom'
import ThumbnailSky from '../thumbnail/ThumbnailSky'
import { LabelSearch } from './LabelSearch'
import { formattedDate } from '../../util'

const BackgroundImage = styled.div`
  background: '/static/3.png';
  background-repeat: no-repeat;
  background-position: center;
`
const WrapperHilight = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-size: cover;
  font-family: Helvetica, Arial, sans-serif;
  position: relative;
`
const WrapperHilightText = styled.div`
  top: 0%;
  right: 0;
  width: 100%;
  position: absolute;
  background: -webkit-linear-gradient(
    top,
    rgba(1, 33, 71, 0.1) 0%,
    rgba(1, 33, 71, 0.6) 76%,
    rgba(1, 33, 71, 1) 85%,
    rgba(1, 33, 71, 1) 100%
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
  }
  renderVideos(vods) {
    const rowVideos = []
    const rowCount = vods.length / 4
    for (let i = 0; i <= rowCount; i++) {
      rowVideos.push(<RowVideo key={i} vods={vods.splice(0, 4)} />)
    }
    return rowVideos
  }

  filterProgram() {
    console.log('ssss')
  }

  render() {
    const { hilight, vods } = this.props
    console.log('vods', vods[0])
    //{hilight.thumbnailUrl}
    return (
      <div>
        <Flex mb={3} pt="7rem">
          <Box w={1} pl="1rem">
            <Text color="red" bold children="ON DEMAND" fontSize="2em" />
          </Box>
        </Flex>
        <Flex mb="3rem">
          <Box w={2.25 / 12} />
          <Box w={7.75 / 12} mr="1em">
            <Link
              as={`/vods/${hilight.id}`}
              href={`/videoPlayer?id=${hilight.id}`}
            >
              <a>
                <WrapperHilight>
                  <Box w={12 / 12} className="imagesss">
                    <center>
                      <Image width="100%" src={hilight.thumbnailUrl} />
                    </center>
                  </Box>
                  <Box w={12 / 12} pl="20px">
                    <WrapperHilightText>
                      <Text
                        pt="26rem"
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
                        children={hilight.title_en}
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
                            children={hilight.onAirDateStr_en}
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
                            children="4.19"
                            fontSize="0.9em"
                          />
                        </Box>
                      </Flex>
                    </WrapperHilightText>
                  </Box>
                </WrapperHilight>
              </a>
            </Link>
          </Box>
        </Flex>
        <Box pt="3rem" pl="1rem" pr="1rem">
          <LabelSearch
            program_en={this.props.program_en}
            filter={this.filterProgram}
          />
          {this.renderVideos(vods)}
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

const RowVideo = ({ vods }) => {
  return (
    <Flex mb={3}>
      <Box w={6 / 12} mr="1em">
        <Flex>
          <Box w={6 / 12} pr="7.5px">
            {vods[0] !== undefined && (
              <ThumbnailVideo
                id={vods[0].id}
                img={vods[0].thumbnailUrl}
                name={vods[0].title_en}
                date={vods[0].onAirDateStr_en}
                time={vods[0].duration}
                pt="1em"
              />
            )}
          </Box>
          <Box w={6 / 12} pl="7.5px">
            {vods[1] !== undefined && (
              <ThumbnailVideo
                id={vods[1].id}
                img={vods[1].thumbnailUrl}
                name={vods[1].title_en}
                date={vods[1].onAirDateStr_en}
                time={vods[1].duration}
                pt="1em"
              />
            )}
          </Box>
        </Flex>
      </Box>
      <Box w={6 / 12}>
        <Flex>
          <Box w={6 / 12} pr="7.5px">
            {vods[2] !== undefined && (
              <ThumbnailVideo
                id={vods[2].id}
                img={vods[2].thumbnailUrl}
                name={vods[2].title_en}
                date={vods[2].onAirDateStr_en}
                time={vods[2].duration}
                pt="1em"
              />
            )}
          </Box>
          <Box w={6 / 12} pl="7.5px">
            {vods[3] !== undefined && (
              <ThumbnailVideo
                id={vods[3].id}
                img={vods[3].thumbnailUrl}
                name={vods[3].title_en}
                date={vods[3].onAirDateStr_en}
                time={vods[3].duration}
                pt="1em"
              />
            )}
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

const mapStateToProps = ({ vod }) => ({ vod })

export default connect(mapStateToProps, null)(VideoBox)
//export { VideoBox }
