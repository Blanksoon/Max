import React, { Component, PropTypes } from 'react'
import ThumbnailBottom from '../thumbnail/ThumbnailBottom'
import Link from 'next/link'
import { Media, Subhead, Image, Flex, Box, Text } from 'rebass'
class latest_video extends Component {
  componentDidMount() {
    console.log(this.props)
    //this.props.fetchVods(this.props.token)
  }
  render() {
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
                    img="static/FT6A6133.jpg"
                    name="The Battle Muay-Thai(4/4)"
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
              <Link href={`/videoPlayer`}>
                <a href={`/videoPlayer`}>
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
              <Link href={`/videoPlayer`}>
                <a href={`/videoPlayer`}>
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
              <Link href={`/videoPlayer`}>
                <a href={`/videoPlayer`}>
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
              TEXT-DECORATION: none;
            }
            a:hover {
              COLOR: #ff0000;
              TEXT-DECORATION: none;
            }
          `}
        </style>
      </div>
    )
  }
}
export default latest_video
