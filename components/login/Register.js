import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { Flex, Box, Image, Text, Border } from 'rebass'
import styled from 'styled-components'
import FacebookLoginButton from './FacebookLoginButton'
import color from '../commons/vars'
import ModalRegister from '../../containers/ModalRegister'
import * as api from '../../api'
import Spinner from '../commons/Spinner'
import vars from '../commons/vars'
import { media, theme } from '../../tools/responsive'

const A = styled.a`TEXT-DECORATION: none;`
const Wrapper = styled.div`position: absolute;`
const WrapperLogin = styled.div`
  padding-right: 30px;
  border-right: 1px solid #a9a9a9;
  ${media.iphone7p`border-right: none;
  padding-right: 0px;`} ${media.phone`border-right: none;
  padding-right: 0px;`};
  ${media.iphone5`border-right: none;
  padding-right: 0px;`};
`
const Text1 = styled.div`
  color: ${color.red};
  font-weight: 700;
  font-size: 1.5em;
  font-family: Helvetica, Arial, sans-serif;
  ${media.phone`font-size: 1.4em;`};
  ${media.iphone5`font-size: 1.1em;`};
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
  padding: 10px 30px;
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
  border: 1px solid #a9a9a9;
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
      loading: false,
    }
    this.submitRegister = this.submitRegister.bind(this)
    this.handleOnChangeId = this.handleOnChangeId.bind(this)
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this)
    this.handleOnChangeConfirmPassword = this.handleOnChangeConfirmPassword.bind(
      this
    )
  }

  async submitRegister() {
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
      this.setState({ loading: true })
      const url = `${api.SERVER}/local-register`
      try {
        let json = await api.post(url, jsonData)
        if (json.status.code == 400) {
          this.setState({
            errMessageEmail: '',
            errMessageConfirmPwd: `You already register with this email`,
          })
        } else {
          this.props.closeModal()
          Router.push(`/successRegister?email=${json.data.email}`)
        }
      } catch (error) {}
      this.setState({ loading: false })
    } else if (
      chkEmail.test(this.state.email) == false &&
      this.state.password != this.state.confirmPassword
    ) {
      this.setState({
        errMessageEmail: 'Email is invalid',
        errMessageConfirmPwd: `confirm password doesn't match with password`,
      })
    } else if (chkEmail.test(this.state.email) == false) {
      this.setState({
        errMessageEmail: 'Email is invalid',
        errMessageConfirmPwd: ``,
      })
    } else {
      this.setState({
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
    const {
      EMAIL,
      PASSWORD,
      FACEBOOKBUTTON,
      ALREADYACCOUNT,
      RETYPEPASSWORD,
      REGISTERTEXTBUTTON,
      TITLEREGISTER,
    } = this.props.commonInRegister
    return (
      <div>
        <form>
          <Box>
            <Box>
              <Image width="100%" src="../../static/logo_max_new.jpg" />
            </Box>
            <Box pl="3rem">
              <Text1>{TITLEREGISTER}</Text1>
            </Box>
            <Flex pt="0.5rem" pl="3rem" pr="3rem" wrap>
              <Box w={[12 / 12, 12 / 12, 12 / 12, 5 / 12, 5 / 12, 5 / 12]}>
                <WrapperLogin>
                  <Box>
                    <Input
                      placeholder={EMAIL}
                      onChange={this.handleOnChangeId}
                      required
                    />
                    <Text2>{this.state.errMessageEmail}</Text2>
                  </Box>
                  <Box>
                    <Input
                      placeholder={PASSWORD}
                      type="password"
                      onChange={this.handleOnChangePassword}
                      required
                    />
                  </Box>
                  <Box>
                    <Input
                      placeholder={RETYPEPASSWORD}
                      type="password"
                      onChange={this.handleOnChangeConfirmPassword}
                      required
                    />
                    <Text2>{this.state.errMessageConfirmPwd}</Text2>
                  </Box>
                  <Flex>
                    <Box w={6.4 / 12} />
                    <Box pt="0.5rem">
                      <Button
                        style={{
                          cursor: this.state.loading ? 'arrow' : 'pointer',
                          width: '148px',
                        }}
                        disabled={this.state.loading}
                        type="submit"
                        onClick={this.submitRegister}
                      >
                        {this.state.loading ? (
                          <Spinner />
                        ) : (
                          `${REGISTERTEXTBUTTON}`
                        )}
                      </Button>
                    </Box>
                  </Flex>
                </WrapperLogin>
              </Box>
              <Box
                w={[12 / 12, 12 / 12, 12 / 12, 7 / 12, 7 / 12, 7 / 12]}
                pt={['3rem', '3rem', '3rem', '0rem', '0rem', '0rem']}
              >
                <center>
                  <FacebookLoginButton textButton={FACEBOOKBUTTON} />
                  <Box pt="1rem">
                    <a href="#">
                      <ModalRegister modalType={3} text={ALREADYACCOUNT} />
                    </a>
                  </Box>
                </center>
              </Box>
            </Flex>
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
