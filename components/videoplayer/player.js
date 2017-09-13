import { Media, Subhead, Image, Link, Flex, Box, Text } from 'rebass'
//import video from 'videojs-contrib-hls'
//var videojs = require('video.js')
//require('!style-loader!css-loader!video.js/dist/video-js.css')
//import 'videojs-contrib-ads/src/videojs.ads'
//import videojs from '../../node_modules/video.js/dist/video'
// import * as HLS from 'videojs-contrib-hls'
//import videojs from 'video.js'
import React from 'react'
//import '/Users/farmoz/Desktop/MaxMuayThai/front-end/MaxFront/static/css/video-react.css'
import { Player } from 'video-react'
import HLSSource from './HLSSource'
//let videojs = require('video.js')
const Players = props => {
  // console.log(videojs)
  // let player = videojs('example-video')
  // player.play()
  return (
    <div className="Player">
      <Box width={1} bg="pink">
        <Player>
          <HLSSource
            isVideoChild
            src="https://wittestvod-vh.akamaihd-staging.net/i/wittestvod/SampleVideo/luke_,3,6,11,000k.mp4.csmil/master.m3u8"
          />
        </Player>
        {/* <Image src="../../static/maxPromo.jpg" /> */}
        {/* <video
          id="example-video"
          width="600"
          height="300"
          className="video-js vjs-default-skin"
          controls
        >
          <source
            src="https://example.com/index.m3u8"
            type="application/x-mpegURL"
          />
        </video> */}
        {/* <video width="320" height="240" controls>
          <source
            src="https://wittestvod-vh.akamaihd-staging.net/i/wittestvod/SampleVideo/luke_,3,6,11,000k.mp4.csmil/master.m3u8"
            type="video/mp4"
          />
          <source
            src="https://wittestvod-vh.akamaihd-staging.net/i/wittestvod/SampleVideo/luke_,3,6,11,000k.mp4.csmil/master.m3u8"
            type="video/ogg"
          />
        </video> */}
      </Box>
    </div>
  )
}
export default Players
