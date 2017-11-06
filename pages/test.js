import React from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Text, overlay } from 'rebass'
import Container from '../components/commons/Container'
import Modal from '../components/modal/Modal'
import Login from '../components/login/Login'
import color from '../components/commons/vars'
import Test from '../components/Test'
import DatePicker from 'react-datepicker'
import moment from 'moment'

// CSS Modules, react-datepicker-cssmodules.css
// import '../node_modules/react-datepicker/dist/datepicker-cssmodules.css'

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
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    )
  }
}

export default Example
