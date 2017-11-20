import React from 'react'
import styled from 'styled-components'
import withRedux from 'next-redux-wrapper'
import { Flex, Provider, Box, Text, overlay, Head } from 'rebass'
import { initStore } from '../redux/store'
import { fetchVods } from '../redux/modules/vod'
import { fetchLives } from '../redux/modules/live'
import Container from '../components/commons/Container'
import Modal from '../components/modal/Modal'
import Login from '../components/login/Login'
import color from '../components/commons/vars'
import Test from '../components/Test'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import ReactJWPlayer from '../components/ReactJWPlayerContainer'
import FacebookProvider, { Comments } from 'react-facebook'
import Paypal from '../components/payment/Paypal'
import SuccessPurchase from '../components/getTicket/SuccessPurchase'


// CSS Modules, react-datepicker-cssmodules.css
//import { stylesheet } from './datepicker-cssmodules.css'
//import './datepicker-cssmodules.css'
//import './datepicker.css'
import { datepickerStyled } from '../components/profile/datepickerStyle'
class Example extends React.Component {
  render() {
    return (
      <div>
        <SuccessPurchase />
      </div>
    )
  }
}

export default withRedux(initStore, null, {
  fetchVods,
})(Example)
