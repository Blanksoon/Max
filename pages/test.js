import React from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Text, overlay, Head } from 'rebass'
import Container from '../components/commons/Container'
import Modal from '../components/modal/Modal'
import Login from '../components/login/Login'
import color from '../components/commons/vars'
import Test from '../components/Test'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import ReactJWPlayer from '../components/ReactJWPlayerContainer'

// CSS Modules, react-datepicker-cssmodules.css
//import { stylesheet } from './datepicker-cssmodules.css'
//import './datepicker-cssmodules.css'
//import './datepicker.css'
import { datepickerStyled } from '../components/profile/datepickerStyle'
class Example extends React.Component {
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
          playerScript="https://link-to-my-jw-player/script.js"
          playlist="https://link-to-my-playlist.json"
        />
      </div>
      //</Head>
    )
  }
}

export default Example
