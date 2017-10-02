import React, { Component, PropTypes } from 'react'
import ThumbnailBottom from '../thumbnail/ThumbnailBottom'
import Link from 'next/link'
import { Media, Subhead, Image, Flex, Box, Text } from 'rebass'
import { connect } from 'react-redux'

class LatestVideo extends Component {
  render() {
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
                //as={`/videoPlayer/${this.props.vod[1].id}`}
                href={`/videoPlayer`}
              >
                <a>
                  <ThumbnailBottom
                    img="static/FT6A6133.jpg" //{this.props.vod[1].thumbnail}
                    name="The Battle Muay-Thai(4/4)" //{this.props.vod[1].title}
                    date="On air - Aug 11, 2017" //{this.props.vod[1].onAirDate}
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
                //as={`/videoPlayer/${this.props.vod[2].id}`}
                href={`/videoPlayer`}
              >
                <a>
                  <ThumbnailBottom
                    img="static/FT6A6483.jpg"
                    name="The Battle Muay-Thai(3/4)"
                    date="On air - Aug 11, 2017"
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
                //as={`/videoPlayer/${this.props.vod[3].id}`}
                href={`/videoPlayer`}
              >
                <a>
                  <ThumbnailBottom
                    img="static/FT6A6495.jpg"
                    name="The Battle Muay-Thai(2/4)"
                    date="On air - Aug 11, 2017"
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
                //as={`/videoPlayer/${this.props.vod[4].id}`}
                href={`/videoPlayer`}
              >
                <a>
                  <ThumbnailBottom
                    img="static/FT6A6676.jpg"
                    name="The Battle Muay-Thai(1/4)"
                    date="On air - Aug 11, 2017"
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
