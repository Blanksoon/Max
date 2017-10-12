import React, { Component, PropTypes } from 'react'
import ThumbnailBottom from '../thumbnail/ThumbnailBottom'
import Link from 'next/link'
import { Media, Subhead, Image, Flex, Box, Text } from 'rebass'
import { connect } from 'react-redux'

class LatestVideo extends Component {
  render() {
    //console.log(this.props.vods)
    return (
      <div>
        <Box pb="5%">
          <Flex>
            <Box width={1}>
              <Text
                pt="2%"
                bold
                color="#fff"
                children={this.props.name}
                fontSize="1.5em"
              />
            </Box>
          </Flex>
          <hr size="0.1" />
          <Flex pt="2rem">
            <Box width={8 / 35}>
              <Link
                as={`/vods/${this.props.vods[0].id}`}
                href={`/videoPlayer?id=${this.props.vods[0].id}`}
              >
                <a>
                  <ThumbnailBottom
                    vod={this.props.vods[0]}
                    img="static/FT6A6133.jpg"
                    name={this.props.vods[0].programName_en}
                    date={this.props.vods[0].onAirDateStr_en}
                    time="16:24"
                    bg="#021e3d"
                    pl="1em"
                  />
                </a>
              </Link>
            </Box>
            <Box width={1 / 35} />
            <Box width={8 / 35}>
              <Link
                as={`/vods/${this.props.vods[1].id}`}
                href={`/videoPlayer?id=${this.props.vods[1].id}`}
              >
                <a>
                  <ThumbnailBottom
                    vod={this.props.vods[1]}
                    img="static/FT6A6483.jpg"
                    name={this.props.vods[1].programName_en}
                    date={this.props.vods[1].onAirDateStr_en}
                    time="16:24"
                    bg="#021e3d"
                    pl="1em"
                  />
                </a>
              </Link>
            </Box>
            <Box width={1 / 35} />
            <Box width={8 / 35}>
              <Link
                as={`/vods/${this.props.vods[2].id}`}
                href={`/videoPlayer?id=${this.props.vods[2].id}`}
              >
                <a>
                  <ThumbnailBottom
                    vod={this.props.vods[2]}
                    img="static/FT6A6495.jpg"
                    name={this.props.vods[2].programName_en}
                    date={this.props.vods[2].onAirDateStr_en}
                    time="16:24"
                    bg="#021e3d"
                    pl="1em"
                  />
                </a>
              </Link>
            </Box>
            <Box width={1 / 35} />
            <Box width={8 / 35}>
              <Link
                as={`/vods/${this.props.vods[3].id}`}
                href={`/videoPlayer?id=${this.props.vods[3].id}`}
              >
                <a>
                  <ThumbnailBottom
                    img="static/FT6A6676.jpg"
                    name={this.props.vods[3].programName_en}
                    date={this.props.vods[3].onAirDateStr_en}
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

const mapStateToProps = ({ vod }) => ({ vod })

export default connect(mapStateToProps, null)(LatestVideo)
