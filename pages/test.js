// import React from 'react'
// import styled from 'styled-components'
// import withRedux from 'next-redux-wrapper'
// import Router from 'next/router'
// import { Flex, Provider, Box, Text, overlay, Head } from 'rebass'
// import { initStore } from '../redux/store'
// import { fetchVods } from '../redux/modules/vod'
// import { fetchLives } from '../redux/modules/live'
// import Container from '../components/commons/Container'
// import Modal from '../components/modal/Modal'
// import Login from '../components/login/Login'
// import color from '../components/commons/vars'
// import Test from '../components/Test'
// import DatePicker from 'react-datepicker'
// import moment from 'moment'
// import ReactJWPlayer from '../components/ReactJWPlayerContainer'
// import Paypal from '../components/payment/Paypal'
// import SuccessPurchase from '../components/getTicket/SuccessPurchase'

// // CSS Modules, react-datepicker-cssmodules.css
// //import { stylesheet } from './datepicker-cssmodules.css'
// //import './datepicker-cssmodules.css'
// //import './datepicker.css'
// const WrapperSuccessPurchase = styled.div`
//   position: relative;
//   width: 650px;
//   height: 450px;
//   background: #fff;
//   z-index: 240;
// `
// const Wechat = styled.button`
//   bottom: 2%;
//   background-color: green;
//   border: 1px solid green;
//   color: white;
//   cursor: pointer;
//   padding: 12px 25px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-weight: 700;
// `

// import { datepickerStyled } from '../components/profile/datepickerStyle'
// class Example extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       id: 'login_container',
//       appid: 'wx21719d032238ebdc',
//       redirect_uri: 'https%3A%2F%2Fbeta-api.maxmuaythai.com%2Fwechat',
//       response_type: 'code',
//       scope: 'snsapi_login',
//       state: '1#wechat_redirect',
//       style: '',
//       href: '',
//     }
//     this.Gowechat = this.Gowechat.bind(this)
//   }
//   Gowechat() {
//     Router.push(
//       `https://open.weixin.qq.com/connect/qrconnect?appid=${this.state
//         .appid}&redirect_uri=${this.state.redirect_uri}&response_type=${this
//         .state.response_type}&scope=${this.state.scope}&state=${this.state
//         .state}`
//     )
//   }
//   render() {
//     return <Wechat onClick={this.Gowechat}>Login with WeChat</Wechat>
//   }
// }

// export default withRedux(initStore, null, {
//   fetchVods,
// })(Example)

import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

export default class TakeMoney extends React.Component {
  onToken = token => {
    console.log('111111111111111111111', token)
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`)
      })
    })
  }

  // ...

  render() {
    const onToken = 'pii_1BahYHD4qrfRtagsYMQdbwyU'
    return (
      <StripeCheckout
        token={this.onToken}
        name="test store"
        stripeKey="pk_test_qghYMOBiEuWIDjedt7DNPA0w"
        email="xza_nakub@hotmail.com"
        amount="499"
      />
    )
  }
}
