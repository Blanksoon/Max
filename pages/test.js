import React, { Component } from 'react'
import FacebookProvider, { CommentsCount } from 'react-facebook'

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <CommentsCount href="http://www.facebook.com" /> Comments
      </FacebookProvider>
    )
  }
}
