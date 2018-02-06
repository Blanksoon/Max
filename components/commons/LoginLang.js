import { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Cookies from 'universal-cookie'
import ModalText from '../../containers/ModalText'
import UserInfo from '../../containers/commons/UserInfo'
import vars from '../commons/vars'
import Router from 'next/router'

const LoginLang = styled.span`
  color: ${vars.white};
  float: right;
  text-align: center;
`
const Login = styled.div`
  border: 1px solid ${vars.lightBlue};
  color: ${vars.lightBlue};
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  &:hover {
    color: ${vars.white};
    background: ${vars.lightBlue};
  }
  &:active {
    background: #336998;
  }
`
const LanguagePanel = styled.div`float: right;`
const Language = styled.a`
  box-sizing: border-box;
  background-color: ${props =>
    props.active ? `${vars.lightBlue}` : 'transparent'};
  cursor: pointer;
  height: 100%;
  padding: 0.7rem 0.7rem;
  margin-bottom: 0.5rem;
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
        <LanguagePanel>
          <Language
            onClick={() => this.setLang('en')}
            borderRight
            active={lang === 'en'}
          >
            EN
          </Language>
          <Language onClick={() => this.setLang('th')} active={lang === 'th'}>
            TH
          </Language>
        </LanguagePanel>
      </LoginLang>
    )
  }
}
