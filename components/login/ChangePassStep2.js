import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { Flex, Box, Image, Text, Border } from 'rebass'
import styled from 'styled-components'
import FacebookLoginButton from './FacebookLoginButton'
import color from '../commons/vars'
import ModalRegister from '../../containers/ModalRegister'
import ModalChangePass from '../../containers/ModalChangePass'
import { currentpassword } from '../../redux/modules/auth'
import { closeModal } from '../../redux/modules/modal'
import { newPassword } from '../../redux/modules/modal'
import { connect } from 'react-redux'
import * as api from '../../api'
import Spinner from '../commons/Spinner'
import vars from '../commons/vars'

const A = styled.a`TEXT-DECORATION: none;`
const Wrapper = styled.div`position: absolute;`
const WrapperLogin = styled.div`
  padding-right: 30px;
  border-right: 1px solid #a9a9a9;
`
const Text1 = styled.div`
  color: ${color.red};
  font-weight: 700;
  font-size: 1.5em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text2 = styled.div`
  color: ${color.red};
  font-weight: 100;
  font-size: 11px;
  font-family: Helvetica, Arial, sans-serif;
  padding: 0;
  text-align: center;
`
const ButtonLeft = styled.button`
  font-weight: bold;
  background-color: #b81111;
  border: none;
  color: white;
  padding: 10px 50px;
  text-align: center;
  display: inline-block;
  font-size: 1em;
`
const Button = styled.button`
  bottom: 2%;
  background-color: ${vars.red};
  border: 1px solid ${vars.red};
  color: white;
  padding: 10px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 600;
  font-size: 1em;
  &:disabled {
    background-color: ${vars.lightRed};
    border: 1px solid ${vars.lightRed};
  }
`
const Input = styled.input`
  width: 100%;
  padding: 6px 15px;
  margin: 8px 0;
  box-sizing: border-box;
`

class ChangePassStep2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      confirmPassword: '',
      loading: false,
    }
    this.submitCurrent = this.submitCurrent.bind(this)
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this)
    this.handleOnChangeConfirmPassword = this.handleOnChangeConfirmPassword.bind(
      this
    )
  }

  async submitCurrent() {
    console.log('jjffjfjfj')
    const providerData = {
      token: this.props.auth.token,
      password: this.state.password,
    }
    this.setState({ loading: true })
    console.log('passworddd', this.state.password)
    console.log('passworddd', this.state.confirmPassword)
    if (
      this.state.password === this.state.confirmPassword &&
      this.state.password != ''
    ) {
      const { status, data } = await api.post(
        `${api.SERVER}/change-password?token=${providerData.token}`,
        providerData
      )
      this.setState({
        status: status.message,
      })
      if (status.code == 200) {
        this.setState({ loading: false })
        this.props.closeModal()
        Router.push(`/successChangePass`)
      }
      //this.props.closeModal()
      //this.props.newPassword()
    } else if (this.state.password != this.state.confirmPassword) {
      this.setState({
        status: "confirm password doesn't match with password",
      })
    }
    this.setState({ loading: false })
    if (status.code == 200) {
      this.props.closeModal()
      Router.push(`/successChangePass`)
    }
  }

  handleOnChangePassword(event) {
    this.setState({
      password: event.target.value,
    })
  }
  handleOnChangeConfirmPassword(event) {
    this.setState({
      confirmPassword: event.target.value,
    })
  }
  render() {
    console.log('fjfsagadfgdffjfj')
    return (
      <div>
        <center>
          <form>
            <Box>
              <Box pt="3rem">
                <Text1>Please enter new password</Text1>
              </Box>
              <Box>
                <WrapperLogin>
                  <Box w={4 / 12}>
                    <Input
                      type="password"
                      placeholder="new password"
                      onChange={this.handleOnChangePassword}
                      //required
                    />
                    <Input
                      type="password"
                      placeholder="confirm password"
                      onChange={this.handleOnChangeConfirmPassword}
                      //required
                    />
                    <Text2>{this.state.status} </Text2>
                  </Box>
                  <Box pt="0.5rem">
                    <Button
                      style={{ width: '148px' }}
                      onClick={this.submitCurrent}
                      disabled={this.state.loading}
                    >
                      {this.state.loading ? <Spinner /> : 'confirm'}
                    </Button>
                  </Box>
                </WrapperLogin>
              </Box>
            </Box>
          </form>
        </center>
        <style jsx>
          {`
            a:link {
              COLOR: #660000;
            }
            a:visited {
              COLOR: #660000;
              TEXT-DECORATION: none;
            }
            a:hover {
              COLOR: #ff0000;
              //TEXT-DECORATION: none;
            }
          `}
        </style>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

// Login.getInitialProps = async ({ store, isServer, query, req }) => {
//   let state = store.getState()
//   const token = state.auth.token
//   await Promise.all([livePromise, vodPromise])
//   state = store.getState()
//   const props = mapStateToProps(state)
//   return props
// }

export default connect(mapStateToProps, {
  currentpassword,
  closeModal,
  newPassword,
})(ChangePassStep2)
