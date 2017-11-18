import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { Flex, Provider, Box, Image, Text, Border } from 'rebass'
import styled from 'styled-components'
import FacebookLoginButton from './FacebookLoginButton'
import color from '../commons/vars'
import ModalRegister from '../../containers/ModalRegister'
import { forgotPassword } from '../../redux/modules/auth'
import { fbLogin } from '../../redux/modules/auth'
import { closeModal } from '../../redux/modules/modal'
import { connect } from 'react-redux'
import vars from '../commons/vars'
import Spinner from '../commons/Spinner'
import * as api from '../../api'

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
const Text3 = styled.div`
  color: ${color.black};
  font-weight: 200;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
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
const ButtonFace = styled.button`
  background-color: #3a559f;
  border: none;
  color: white;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1em;
`
const Button = styled.button`
  bottom: 2%;
  background-color: ${vars.red};
  border: 1px solid ${vars.red};
  color: white;
  cursor: pointer;
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
const Text2 = styled.div`
  color: ${color.red};
  font-weight: 100;
  font-size: 11px;
  font-family: Helvetica, Arial, sans-serif;
  padding: 0;
  text-align: center;
`
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: '',
      data: {
        email: '',
      },
      loading: false,
    }
    this.forgotPassword = this.forgotPassword.bind(this)
    this.handleOnChangeId = this.handleOnChangeId.bind(this)
  }

  async forgotPassword() {
    console.log('data', this.state.data)
    const providerData = {
      email: this.state.data.email,
    }
    this.setState({ loading: true })
    const { data, status } = await api.post(
      `${api.SERVER}/forgot-password`,
      providerData
    )
    this.setState({
      status: status.message,
    })
    this.setState({ loading: false })
    if (status.code == 200) {
      console.log('hissss')
      this.props.closeModal()
      Router.push(`/successForgotPass`)
    }
  }

  handleOnChangeId(event) {
    this.setState({
      data: {
        ...this.state.data,
        email: event.target.value,
      },
    })
  }

  render() {
    console.log('props', this.props)
    return (
      <Provider>
        <div>
          <Box>
            <Box>
              <Image width="100%" src="../../static/img_login.png" />
            </Box>
            <Box pl="3rem">
              <Text1>Forgot pasword</Text1>
            </Box>
            <Flex pt="0.5rem" pl="3rem" pr="3rem">
              <Box w={5 / 12}>
                <WrapperLogin>
                  <Text3>Please enter your email for change password</Text3>
                  <form>
                    <Box w={1}>
                      <Input
                        placeholder="Email"
                        onChange={this.handleOnChangeId}
                      />
                    </Box>
                    <Text2>{this.state.status} </Text2>
                    <Flex>
                      <Box w={6.4 / 12} />
                      <Box pt="0.5rem">
                        <Button
                          style={{ width: '148px' }}
                          onClick={this.forgotPassword}
                          disabled={this.state.loading}
                        >
                          {this.state.loading ? <Spinner /> : 'Submit'}
                        </Button>{' '}
                      </Box>
                    </Flex>
                  </form>
                </WrapperLogin>
              </Box>
              <Box w={7 / 12}>
                <center>
                  <FacebookLoginButton />
                  <Box pt="1rem">
                    <a href="#">
                      <ModalRegister modalType={4} text="Register with email" />
                    </a>
                  </Box>
                  <Box pt="1rem">
                    <a href="#">
                      <ModalRegister
                        modalType={3}
                        text="Already have an account, log in"
                      />
                    </a>
                  </Box>
                </center>
              </Box>
            </Flex>
          </Box>
        </div>
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
      </Provider>
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

export default connect(mapStateToProps, { forgotPassword, closeModal })(Login)
