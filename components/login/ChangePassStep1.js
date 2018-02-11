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
import { media, theme } from '../../tools/responsive'

const A = styled.a`TEXT-DECORATION: none;`
const Wrapper = styled.div`position: absolute;`
const WrapperLogin = styled.div`
  padding-right: 30px;
  border-right: 1px solid #a9a9a9;
  ${media.phone`padding-right: 0px;`};
  ${media.iphone5`padding-right: 0px;`};
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
  ${media.phone`padding: 5px 2px;`};
  ${media.iphone5`padding: 5px 2px;`};
`
const Input = styled.input`
  width: 100%;
  padding: 6px 15px;
  margin: 8px 0;
  box-sizing: border-box;
`

class ChangePassStep1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      errMessageEmail: '',
      loading: false,
    }
    this.submitCurrent = this.submitCurrent.bind(this)
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this)
  }

  async submitCurrent() {
    const providerData = {
      token: this.props.auth.token,
      password: this.state.password,
    }
    this.setState({ loading: true })
    const { status, data } = await api.post(
      `${api.SERVER}/check-old-password?token=${providerData.token}`,
      providerData
    )
    //await this.props.currentpassword(providerData)
    if (status.success == true) {
      this.setState({
        status: '',
      })
      //this.props.closeModal()
      this.props.newPassword()
    } else {
      this.setState({
        status: status.message,
      })
    }
    this.setState({ loading: false })
  }

  handleOnChangePassword(event) {
    this.setState({
      password: event.target.value,
      errMessageEmail: '',
    })
  }
  render() {
    return (
      <div>
        <center>
          <form>
            <Box>
              <Box pt="3rem">
                <Text1>{this.props.common.TITLEOLDPASSWORD}</Text1>
              </Box>
              <Box>
                <WrapperLogin>
                  <Box
                    w={[6 / 12, 4 / 12, 4 / 12, 4 / 12, 4 / 12]}
                    pt={['1em', '0em', '0em', '0em', '0em']}
                  >
                    <Input
                      type="password"
                      placeholder={this.props.common.OlDPASSWORD}
                      onChange={this.handleOnChangePassword}
                      required
                    />
                    <Text2>{this.state.status} </Text2>
                  </Box>
                  <Box w={[6 / 12, 4 / 12, 4 / 12, 4 / 12, 4 / 12]} pt="0.5rem">
                    <Button
                      style={{ width: '100%' }}
                      onClick={this.submitCurrent}
                      disabled={this.state.loading}
                    >
                      {this.state.loading ? (
                        <Spinner />
                      ) : (
                        `${this.props.common.CONTINUE}`
                      )}
                    </Button>{' '}
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
})(ChangePassStep1)
