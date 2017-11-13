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

// CSS Modules, react-datepicker-cssmodules.css
//import { stylesheet } from './datepicker-cssmodules.css'
//import './datepicker-cssmodules.css'
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
    return (
      //<Head>
      //<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
      //</Head>
    )
  }
}

export default Example
