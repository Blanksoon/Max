import React from 'react'
import styled from 'styled-components'
import withRedux from 'next-redux-wrapper'
import Router from 'next/router'
import { Flex, Provider, Box, Text, overlay, Head } from 'rebass'
import Container from '../components/commons/Container'
import Modal from '../components/modal/Modal'
import color from '../components/commons/vars'
//import Lang from './lang'

class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        a: 'a',
        b: 'b',
        c: 'c',
      },
      l: 'th',
      ok: '',
    }
    this.lang = this.lang.bind(this)
  }
  lang() {
    if (this.state.l === 'th') {
      this.setState({
        data: {
          a: 'กกก',
          b: 'ขขข',
          c: 'คคค',
        },
      })
    } else {
      this.setState({
        data: {
          a: 'aaa',
          b: 'bbb',
          c: 'ccc',
        },
      })
    }
    return this.state.data
  }
  componentDidMount() {
    let ui = this.lang()
    this.setState({
      ok: ui,
    })
  }
  render() {
    console.log('ddddddd', this.state.ok)
    return (
      <div>
        lol<br />
        {this.state.ok.a}
        <br />
        {this.state.ok.b}
        <br />
        {this.state.ok.c}
      </div>
    )
  }
}

export default Example
