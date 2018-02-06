import { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Cookies from 'universal-cookie'
import ModalText from '../../containers/ModalText'
import UserInfo from '../../containers/commons/UserInfo'
import vars from '../commons/vars'
import Router from 'next/router'
import { media } from '../../tools/responsive'

const LoginLang = styled.span`
  color: ${vars.white};
  height: 100%;
  display: block;
  // padding-top: 1rem;
  padding-left: 1rem;
  ${media.phone`font-size: 0.8em`};
  ${media.iphone5`font-size: 0.8em`};
`
const ClearFix = styled.div`clear: both;`

export default class extends Component {
  constructor(props) {
    super(props)
    this.setLang = this.setLang.bind(this)
  }
  async setLang(lang) {
    //console.log('lang', lang)
    await this.props.setCookie('lang', lang)
    //Router.push(`http://localhost:8080/${this.props.www}`)
  }
  render() {
    // console.log('dddddddytry', this.props.www)
    const {
      url,
      lang,
      email,
      registerText,
      profileText,
      logoutText,
    } = this.props
    return (
      <LoginLang>
        {email !== undefined ? (
          <UserInfo
            email={email}
            profileText={profileText}
            logoutText={logoutText}
          />
        ) : (
          <ModalText modalType={3} text={registerText} />
        )}
        <ClearFix />
      </LoginLang>
    )
  }
}
