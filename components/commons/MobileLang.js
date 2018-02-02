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
  ${media.phone`font-size: 0.8em`};
  ${media.iphone5`font-size: 0.8em`};
`
const LanguagePanel = styled.div`padding-top: 1rem;`
const Language = styled.a`
  text-align: left;
  display: block;
  box-sizing: border-box;
  background-color: ${props =>
    props.active ? `${vars.lightBlue}` : 'transparent'};
  color: ${props => (!props.active ? `${vars.lightBlue}` : `${vars.white}`)};
  cursor: pointer;
  height: 100%;
  padding: 1rem 1rem;
  margin-bottom: 0.5rem;
`

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
        <LanguagePanel>
          <div>
            <Language
              onClick={() => this.setLang('en')}
              borderRight
              active={lang === 'en'}
            >
              English
            </Language>
          </div>
          <div>
            <Language onClick={() => this.setLang('th')} active={lang === 'th'}>
              Thai
            </Language>
          </div>
        </LanguagePanel>
      </LoginLang>
    )
  }
}
