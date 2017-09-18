import { Media, Subhead, Image, Flex, Box, Text } from 'rebass'
import React from 'react'
import { Player } from 'video-react'
import HLSSource from './HLSSource'
const Players = props => {
  return (
    <div className="Player">
      <Box width={1} bg="pink">
        <Player>
          <HLSSource
            isVideoChild
            src="https://wittestvod-vh.akamaihd-staging.net/i/wittestvod/SampleVideo/luke_,3,6,11,000k.mp4.csmil/master.m3u8"
          />
        </Player>
      </Box>
    </div>
  )
}
export default Players
