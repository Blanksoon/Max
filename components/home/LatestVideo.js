import React, { Component, PropTypes } from 'react'
import ThumbnailBottom from '../thumbnail/ThumbnailBottom'
import Link from 'next/link'
import { Media, Subhead, Image, Flex, Box, Text, Provider } from 'rebass'
import { connect } from 'react-redux'
import { media, theme } from '../../tools/responsive'

const renderThumbnail = (lang, vod) => (
  <Box
    width={[1, 2 / 4, 2 / 4, 2 / 4, 1 / 4]}
    key={vod.id}
    pt={[2, 2, 2, 2, 0]}
    px={2}
  >
    <Link as={`/vods/${vod.id}`} href={`/videoPlayer?id=${vod.id}`}>
      <a>
        <ThumbnailBottom
          vod={vod}
          img={vod.thumbnailUrl}
          name={lang === 'en' ? vod.programName_en : vod.programName_th}
          date={lang === 'en' ? vod.onAirDateStr_en : vod.onAirDateStr_en}
          time={vod.duration}
          bg="#021e3d"
          pl="1em"
        />
      </a>
    </Link>
  </Box>
)

class LatestVideo extends Component {
  render() {
    //console.log(this.props.vods)
    // const relateVods = this.props.vods.filter(
    //   vod => vod.programName_en == progname
    // )

    return (
      <Provider theme={theme}>
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
          <Flex pt="2rem" wrap>
            {this.props.vods.map(vod => renderThumbnail(this.props.lang, vod))}
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
      </Provider>
    )
  }
}

const mapStateToProps = ({ vod }) => ({ vod })

export default connect(mapStateToProps, null)(LatestVideo)
