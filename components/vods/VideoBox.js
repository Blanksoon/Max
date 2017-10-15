import styled from 'styled-components'
import { Flex, Box, Image, Button, Text } from 'rebass'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import Link from 'next/link'
import ThumbnailVideo from '../thumbnail/ThumbnailVideo'
import ThumbnailBottom from '../thumbnail/ThumbnailBottom'
import ThumbnailSky from '../thumbnail/ThumbnailSky'
import Hilight from './Hilight'
import ProgramFilter from './ProgramFilter'
import { formattedDate } from '../../util'
import vars from '../commons/vars'

const WrapperHilight = styled.div`
  width: 100%;
  background-size: cover;
  font-family: Helvetica, Arial, sans-serif;
`

const WrapperImg = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  position: relative;
`
const WrapperText = styled.div`
  color: ${vars.white};
  top: 24%;
  left: 29%;
  font-weight: 700;
  font-size: 2.5em;
  position: absolute;
`
class VideoBox extends Component {
  renderVideos(vods) {
    const rowVideos = []
    const rowCount = vods.length / 4
    // Use splice on clone object, DONT MODIFY props
    const tmpVods = [...vods]
    for (let i = 0; i <= rowCount; i++) {
      rowVideos.push(<RowVideo key={i} vods={tmpVods.splice(0, 4)} />)
    }
    return rowVideos
  }

  render() {
    const { hilight, vods, filteredProgram } = this.props
    const filteredVods = vods.filter(vod => {
      if (filteredProgram === '') {
        return true
      }
      return vod.programName_en === filteredProgram
    })
    return (
      <div>
        <Flex mb={3} pt="7rem">
          <Box w={1} pl="1rem">
            <Text color="red" bold children="ON DEMAND" fontSize="2em" />
          </Box>
        </Flex>
        <WrapperHilight>
          <Hilight hilight={hilight} />
        </WrapperHilight>
        <Box pt="3rem" pl="1rem" pr="1rem">
          <ProgramFilter
            programEns={this.props.programEns}
            onFilteredProgramChange={this.props.onFilteredProgramChange}
            filteredProgram={this.props.filteredProgram}
          />
          {this.renderVideos(filteredVods)}
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

export default VideoBox
