import React, { PropTypes } from 'react'
import Login from '../login/Login'
import styled from 'styled-components'
import {
  overlay,
  Panel,
  PanelHeader,
  PanelFooter,
  Button,
  Box,
  Text,
  Provider,
  //Close,
  Space,
} from 'rebass'

const Wapp = styled.div`
  z-index: 0;
  transition: ease-in-out 0.4s all;
  opacity: 0.8;
  height: 50%;
  width: 50%;
  // color: red;
  background: #000;
  position: fix;
  top: 50%;
  left: 50%;
  display: active;
`
const Modal = props => (
  <Wapp>
    <Login />
  </Wapp>
)

export default Modal
