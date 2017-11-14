// This is the Link API
import Head from 'next/head'
import Link from 'next/link'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'
import withRedux from 'next-redux-wrapper'
import About from '../components/home/About'
import NewModal from '../containers/NewModal'
import Container from '../components/commons/Container'
import Main from '../layouts/Main'
import vars from '../components/commons/vars'
import { initStore } from '../redux/store'

class SuccessChangePass extends React.Component {
  render() {
    return (
      <Main url={this.props.url}>
        <NewModal />
        <Container pt="10rem" pb="3rem">
          <center>
            <h1 style={{ color: vars.lightBlue }}> Success </h1>
            <h3
              style={{
                color: vars.lightBlue,
                fontWeight: 'normal',
                position: 'relative',
                top: '-1rem',
              }}
            >
              for change password
            </h3>
            <h4 style={{ color: vars.black, fontWeight: 'normal' }}>
              You can login with new password
            </h4>
            <h4
              style={{
                color: vars.red,
                fontWeight: 'normal',
              }}
            >
              {this.props.url.query.email}
            </h4>
          </center>
        </Container>
      </Main>
    )
  }
}

export default withRedux(initStore)(SuccessChangePass)
