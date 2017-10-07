import { Media, Subhead, Image, Flex, Box, Text } from 'rebass'
import React, { PropTypes } from 'react'
import { Player } from 'video-react'
import videoReactStyle from './videoReactStyle'
import HLSSource from './HLSSource'
//import rootReducer from '../../reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
//const store = createStore(rootReducer, composeWithDevTools())
const sources = {
  promoClip:
    'https://wittestvod-vh.akamaihd-staging.net/i/wittestvod/SampleVideo/luke_,3,6,11,000k.mp4.csmil/master.m3u8',
}
class Players extends React.Component {
  static propTypes = {
    videoPause: PropTypes.bool,
  }
  static defaultProps = {
    videoPause: true,
  }
  constructor(props, context) {
    super(props, context)
    this.state = {
      source: sources['bunnyMovie'],
    }
  }

  onClickVideo = () => {
    this.refs.player.pause()
  }

  render() {
    //console.log(this.props.Url)
    return (
      <div className="Player">
        <Box width={1} bg="pink">
          <Player ref="player" autoPlay={false}>
            <HLSSource isVideoChild src={this.props.Url} />
          </Player>
          <style global jsx>
            {videoReactStyle}
          </style>
        </Box>
      </div>
    )
  }
}

export default Players
