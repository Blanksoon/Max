import { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import vars from '../commons/vars'

const LoginLang = styled.span`
  border: 1px solid ${vars.white};
  color: ${vars.white};
  float: left;
  margin-left: 1rem;
  height: 100%;
  width: 8rem;
  text-align: center;
`
const Login = styled.div`
  border-bottom: 1px solid ${vars.white};
  cursor: pointer;
  display: inline-block;
  padding: 0.5rem;
  &:hover {
    background-color: ${vars.lightBlue};
  }
`
const LanguagePanel = styled.div`width: 100%;`
const Language = styled.a`
  box-sizing: border-box;
  border-right: ${props =>
    props.borderRight ? `1px solid ${vars.white}` : '0px'};
  background-color: ${props =>
    props.active ? `${vars.lightBlue}` : 'transparent'};
  cursor: pointer;
  height: 100%;
  padding: 0.5rem 1rem;
  float: left;
  width: 50%;
  &:hover {
    background-color: ${vars.lightBlue};
  }
`
export default class extends Component {
  render() {
    const { url } = this.props
    console.log(url)
    const lang = url.query.lang || 'en'
    return (
      <LoginLang>
        <Login>Login/Register</Login>
        <LanguagePanel>
          <Link href={`${url.pathname}?lang=en`}>
            <Language borderRight active={lang === 'en'}>
              EN
            </Language>
          </Link>
          <Link href={`${url.pathname}?lang=th`}>
            <Language active={lang === 'th'}>TH</Language>
          </Link>
        </LanguagePanel>
      </LoginLang>
    )
  }
}
