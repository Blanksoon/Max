import React, { Component, PropTypes } from 'react'
import ThumbnailBottom from '../thumbnail/ThumbnailBottom'
import Link from 'next/link'
import { Media, Subhead, Image, Flex, Box, Text } from 'rebass'
class LatestVideo extends Component {
  render() {
    console.log(this.props.vods)
    return (
      <div>
        <Box pb="5%">
          <Flex>
            <Box width={1}>
              <center>
                <Text
                  pt="2%"
                  pb="2%"
                  bold
                  color="#fff"
                  children={this.props.name}
                  fontSize="1.5em"
                />
              </center>
            </Box>
          </Flex>
          <Flex>
            <Box width={8 / 35}>
              <Link href={`/videoPlayer`}>
                <a href={`/videoPlayer`}>
                  <ThumbnailBottom
                    vod={this.props.vods[0]}
                    img="static/FT6A6133.jpg"
                    name={this.props.vods[0].programName}
                    date={this.props.vods[0].onAirDate}
                    time="16:24"
                    bg="#021e3d"
                    pl="1em"
                  />
                </a>
              </Link>
            </Box>
            <Box width={1 / 35} />
            <Box width={8 / 35}>
              <Link href={`/videoPlayer`}>
                <a href={`/videoPlayer`}>
                  <ThumbnailBottom
                    vod={this.props.vods[1]}
                    img="static/FT6A6483.jpg"
                    name={this.props.vods[1].programName}
                    date={this.props.vods[1].onAirDate}
                    time="16:24"
                    bg="#021e3d"
                    pl="1em"
                  />
                </a>
              </Link>
            </Box>
            <Box width={1 / 35} />
            <Box width={8 / 35}>
              <Link href={`/videoPlayer`}>
                <a href={`/videoPlayer`}>
                  <ThumbnailBottom
                    vod={this.props.vods[2]}
                    img="static/FT6A6495.jpg"
                    name={this.props.vods[2].programName}
                    date={this.props.vods[2].onAirDate}
                    time="16:24"
                    bg="#021e3d"
                    pl="1em"
                  />
                </a>
              </Link>
            </Box>
            <Box width={1 / 35} />
            <Box width={8 / 35}>
              <Link href={`/videoPlayer/` + `${this.props.vods[3]}`}>
                <a href={`/videoPlayer/` + `${this.props.vods[3]}`}>
                  <ThumbnailBottom
                    img="static/FT6A6676.jpg"
                    name={this.props.vods[3].programName}
                    date={this.props.vods[3].onAirDate}
                    time="16:24"
                    bg="#021e3d"
                    pl="1em"
                  />
                </a>
              </Link>
            </Box>
          </Flex>
        </Box>
        <style jsx>
          {`
            a:link {
            }
            a {
              color: #fff;
              text-decoration: none;
            }
            a:hover {
              color: #ff0000;
              text-decoration: none;
            }
          `}
        </style>
      </div>
    )
  }
}
export default LatestVideo
