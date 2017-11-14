import React from 'react'
//import PropTypes from 'prop-types'

import ReactJWPlayer from 'react-jw-player'

const displayName = 'ReactJWPlayerContainer'

// const propTypes = {
//   playlist: PropTypes.string.isRequired,
//   playerScript: PropTypes.string.isRequired,
// }

class ReactJWPlayerContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videoTitle: 'test jwplayer',
    }

    this.onAdPlay = this.onAdPlay.bind(this)
    this.onReady = this.onReady.bind(this)
    this.onVideoLoad = this.onVideoLoad.bind(this)

    // each instance of <ReactJWPlayer> needs a unique id.
    // we randomly generate it here and assign to the container instance.
    //this.playerId = someFunctionToRandomlyGenerateId()
  }
  onReady(event) {
    // interact with JW Player API here
    const player = window.jwplayer(this.props.playerId)
  }
  onAdPlay(event) {
    // track the ad play here
  }
  onVideoLoad(event) {
    this.setState({
      videoTitle: event.item.description, // this only works with json feeds!
    })
  }

  render() {
    const playlist = [
      {
        file: 'http://techslides.com/demos/sample-videos/small.mp4',
        image: 'https://link-to-my-poster.jpg',
        tracks: [
          {
            file: 'https://link-to-subtitles.vtt',
            label: 'English',
            kind: 'captions',
            default: true,
          },
        ],
      },
      {
        file:
          'https://maxmuaythaivod-vh.akamaihd-staging.net/i/MaxMuayThai/MAXMuayThai011017_,48,72,108,0p.mp4.csmil/master.m3u8',
        image: 'https://link-to-my-other-poster.jpg',
      },
    ]
    console.log('props', this.props)
    //"http://p.jwpcdn.com/player/v/7.1.4/jwplayer.js"
    return (
      <div className="react-jw-player-container">
        <h1>{this.state.videoTitle}</h1>
        <ReactJWPlayer
          //playlist={this.playlist}
          //licenseKey="your-license-key"
          //onAdPlay={this.onAdPlay}
          //onReady={this.onReady}
          //onVideoLoad={this.onVideoLoad}
          playerId="my-jw-player-instance" // bring in the randomly generated playerId
          playerScript="https://content.jwplatform.com/players/52DYyhwS-N3wYEi72.js"
          //file="http://techslides.com/demos/sample-videos/small.mp4"
        />
      </div>
    )
  }
}

//ReactJWPlayerContainer.propTypes = propTypes
//ReactJWPlayerContainer.defaultProps = defaultProps
ReactJWPlayerContainer.displayName = displayName
export default ReactJWPlayerContainer
