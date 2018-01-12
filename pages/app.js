import React from 'react'
import Router from 'next/router'

export default class extends React.Component {
  static async getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location: 'https://share.weiyun.com/955b8fe3bd9bb720dc45e453d5df4bd1',
      })
      res.end()
      res.finished = true
    } else {
      Router.replace(
        'https://share.weiyun.com/955b8fe3bd9bb720dc45e453d5df4bd1'
      )
    }
    return {}
  }
}
