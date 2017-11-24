import React from 'react'
import Link from 'next/link'
import { Flex, Provider, Box, Image, Text, Border } from 'rebass'
import styled from 'styled-components'
import FacebookLoginButton from './FacebookLoginButton'
import color from '../commons/vars'
import ModalRegister from '../../containers/ModalRegister'
import { localLogin } from '../../redux/modules/auth'
import { fbLogin } from '../../redux/modules/auth'
import { closeModal } from '../../redux/modules/modal'
import { connect } from 'react-redux'
import vars from '../commons/vars'
import Spinner from '../commons/Spinner'

const A = styled.a`TEXT-DECORATION: none;`
const Wrapper = styled.div`position: absolute;`
const WrapperLogin = styled.div`
  padding-right: 30px;
  border-right: 1px solid #a9a9a9;
`
const WrapperForgot = styled.div`
  text-align: right;
  padding-top: 5px;
`
const Text1 = styled.div`
  color: ${color.red};
  font-weight: 700;
  font-size: 1.5em;
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
        password: '',
      },
      loading: false,
    }
    this.loginLocal = this.loginLocal.bind(this)
    this.handleOnChangeId = this.handleOnChangeId.bind(this)
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this)
  }
  async loginLocal() {
    //console.log('data', this.state.data)
    const providerData = {
      provider_name: 'local',
      provider_data: this.state.data,
    }
    this.setState({ loading: true })
    await this.props.localLogin(providerData)
    if (this.props.auth.token != undefined) {
      //console.log('success')
      this.setState({
        status: '',
      })
      //this.props.closeModal()
    } else {
      this.setState({
        status: this.props.auth.error.message,
      })
      //console.log('false')
    }
    this.setState({ loading: false })
  }

  handleOnChangeId(event) {
    this.setState({
      data: {
        ...this.state.data,
        email: event.target.value,
      },
    })
  }

  handleOnChangePassword(event) {
    this.setState({
      data: {
        ...this.state.data,
        password: event.target.value,
      },
    })
  }
  render() {
    //console.log('props', this.props)
    return (
      <Provider>
        <div>
          <Box>
            <Box>
              <Image width="100%" src="../../static/img_login.png" />
            </Box>
            <Box pl="3rem">
              <Text1>LOG IN</Text1>
            </Box>
            <Flex pt="0.5rem" pl="3rem" pr="3rem">
              <Box w={5 / 12}>
                <WrapperLogin>
                  <form>
                    <Box w={1}>
                      <Input
                        placeholder="Email"
                        onChange={this.handleOnChangeId}
                      />
                    </Box>
                    <Box>
                      <Input
                        placeholder="Password"
                        type="password"
                        onChange={this.handleOnChangePassword}
                      />
                    </Box>
                    <Text2>{this.state.status} </Text2>
                    <Flex>
                      <Box w={6.4 / 12} />
                      <Box pt="0.5rem">
                        <Button
                          style={{ width: '148px' }}
                          onClick={this.loginLocal}
                          disabled={this.state.loading}
                        >
                          {this.state.loading ? <Spinner /> : 'Log in'}
                        </Button>{' '}
                        <a href="#">
                          <WrapperForgot>
                            <ModalRegister
                              modalType={7}
                              text="Forgot password"
                            />
                          </WrapperForgot>
                        </a>
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
                </center>
              </Box>
            </Flex>
            {/* <ButtonFace>f &nbsp;&nbsp; Log in with Facebook</ButtonFace> fffff */}
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

export default connect(mapStateToProps, { localLogin, closeModal })(Login)
