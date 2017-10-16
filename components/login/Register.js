import React from 'react'
import Link from 'next/link'
import { Flex, Box, Image, Text, Border } from 'rebass'
import styled from 'styled-components'
import FacebookLoginButton from './FacebookLoginButton'
import color from '../commons/vars'
import ModalRegister from '../../containers/ModalRegister'
import * as api from '../../api'
import Router from 'next/router'
//import { closeModal } from '../../redux/modules/modal'
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
  background-color: #b81111;
  border: 1px solid #b81111;
  color: white;
  padding: 10px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 600;
  font-size: 1em;
`
const Input = styled.input`
  width: 100%;
  padding: 6px 15px;
  margin: 8px 0;
  box-sizing: border-box;
`
export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      errMessageEmail: '',
      errMessageConfirmPwd: '',
    }
    this.submitRegister = this.submitRegister.bind(this)
    this.handleOnChangeId = this.handleOnChangeId.bind(this)
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this)
    this.handleOnChangeConfirmPassword = this.handleOnChangeConfirmPassword.bind(
      this
    )
  }

  async submitRegister() {
    console.log('this.state', this.state)
    const jsonData = {
      provider_name: 'local',
      provider_data: {
        email: this.state.email,
        password: this.state.password,
      },
    }
    const chkEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (
      chkEmail.test(this.state.email) &&
      this.state.password == this.state.confirmPassword
    ) {
      console.log('0')
      const url = `${api.SERVER}/local-register`
      try {
        let json = await api.post(url, jsonData)
        console.log('success', json)
        if (json.status.code == 400) {
          // if user have register yet
          return console.log('error')
        } else {
          this.props.closeModal()
          Router.push('/successRegister')
          return console.log('success register')
        }
      } catch (error) {
        return console.log(error)
      }
    } else if (
      chkEmail.test(this.state.email) == false &&
      this.state.password != this.state.confirmPassword
    ) {
      console.log('3')
      return this.setState({
        errMessageEmail: 'Email is invalid',
        errMessageConfirmPwd: `confirm password doesn't match with password`,
      })
    } else if (chkEmail.test(this.state.email) == false) {
      console.log('2')
      return this.setState({
        errMessageEmail: 'Email is invalid',
        errMessageConfirmPwd: ``,
      })
    } else if (this.state.password != this.state.confirmPassword) {
      console.log('1')
      return this.setState({
        errMessageEmail: '',
        errMessageConfirmPwd: `confirm password doesn't match with password`,
      })
    }
  }

  handleOnChangeId(event) {
    this.setState({
      email: event.target.value,
      errMessageEmail: '',
      errMessageConfirmPwd: '',
    })
  }

  handleOnChangePassword(event) {
    this.setState({
      password: event.target.value,
      errMessageEmail: '',
      errMessageConfirmPwd: '',
    })
  }
  handleOnChangeConfirmPassword(event) {
    this.setState({
      confirmPassword: event.target.value,
      errMessageEmail: '',
      errMessageConfirmPwd: '',
    })
  }
  render() {
    return (
      <div>
        <form>
          <Box>
            <Box>
              <Image width="100%" src="../../static/img_login.png" />
            </Box>
            <Box pl="3rem">
              <Text1>Didn't have an account?</Text1>
            </Box>
            <Flex pt="0.5rem" pl="3rem" pr="3rem">
              <Box w={5 / 12}>
                <WrapperLogin>
                  <Box>
                    <Input
                      placeholder="Email"
                      onChange={this.handleOnChangeId}
                      required
                    />
                    <Text2>{this.state.errMessageEmail}</Text2>
                  </Box>
                  <Box>
                    <Input
                      placeholder="Password"
                      type="password"
                      onChange={this.handleOnChangePassword}
                      required
                    />
                  </Box>
                  <Box>
                    <Input
                      placeholder="Re-type Password"
                      type="password"
                      onChange={this.handleOnChangeConfirmPassword}
                      required
                    />
                    <Text2>{this.state.errMessageConfirmPwd}</Text2>
                  </Box>
                  <Flex>
                    <Box w={6.4/12}/>
                    <Box pt="0.5rem">
                      <Button type="submit" onClick={this.submitRegister}>
                      Register {/*  แก้จาก go เป็น Register ให้ด้วย */}
                      </Button>
                    </Box>
                  </Flex>
                </WrapperLogin>
              </Box>
              <Box w={7 / 12}>
                <center>
                  <FacebookLoginButton />
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
            {/* <ButtonFace>f &nbsp;&nbsp; Log in with Facebook</ButtonFace> fffff */}
          </Box>
        </form>
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
