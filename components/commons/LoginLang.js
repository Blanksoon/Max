import { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import vars from '../commons/vars'
import ModalText from '../../containers/ModalText'

const LoginLang = styled.span`
  color: ${vars.white};
  float: left;
  margin-left: 1rem;
  height: 100%;
  width: 8rem;
  text-align: center;
`
const Login = styled.div`
  cursor: pointer;
  display: inline-block;
  padding: 1rem 0 1.8rem;
  &:hover {
    color: ${vars.lightBlue};
  }
`
const LanguagePanel = styled.div`float: right;`
const Language = styled.a`
  box-sizing: border-box;
  background-color: ${props =>
    props.active ? `${vars.lightBlue}` : 'transparent'};
  cursor: pointer;
  height: 100%;
  padding: 0.5rem 0.7rem;
  margin-bottom: 0.5rem;
`
export default class extends Component {
  render() {
    const { url } = this.props
    console.log(url)
    const lang = url.query.lang || 'en'
    return (
      <LoginLang>
        <Login>
          <ModalText modalType={3} text="Login/Register" />
        </Login>
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
