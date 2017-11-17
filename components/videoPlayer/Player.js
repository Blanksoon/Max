import React from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Text, overlay, Head } from 'rebass'
import Container from '../commons/Container'
import Modal from '../modal/Modal'
import Login from '../login/Login'
import color from '../commons/vars'
import Test from '../Test'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import ReactJWPlayer from '../ReactJWPlayerContainer'

// CSS Modules, react-datepicker-cssmodules.css
//import { stylesheet } from './datepicker-cssmodules.css'
//import './datepicker-cssmodules.css'
//import './datepicker.css'
import { datepickerStyled } from '../profile/datepickerStyle'
class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment(),
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    })
  }

  render() {
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26))
    var uniqid = randLetter + Date.now()
    return (
      //<Head>
      //<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <div>
        <ReactJWPlayer
          playerId={uniqid}
          playerScript="https://content.jwplatform.com/libraries/uOQEiWJS.js"
          playlist="https://link-to-my-playlist.json"
          file={this.props.Url}
        />
      </div>
      //</Head>
    )
  }
}

export default Player
