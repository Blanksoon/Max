import { Component } from 'react'
import Link from 'next/link'
import { Fixed, Image } from 'rebass'
import styled from 'styled-components'
import { translate } from 'react-i18next'
import Container from './Container'
import NavItem from './NavItem'
import vars from './vars'
import FacebookLoginButton from '../login/FacebookLoginButton'
import LoginLang from '../../containers/commons/LoginLang'
import { media, theme } from '../../tools/responsive'

//rgba(1, 15, 30, 0.8)
const Wrapper = styled.div`
  display: flex;
  ${media.ipad`display: none`};
  ${media.phone`display: none`};
  ${media.iphone5`display: none`};
`
// height: ${vars.navHeight};
const Navbar = styled(Fixed)`
  background: ${props =>
    props.pathname == '/' ? 'rgba(1, 15, 30, 0.8)' : 'rgba(1, 15, 30, 10)'};
  height: 7rem;
  width: 100%;
  z-index: 2;
`
const Motto = styled.span`
  color: ${vars.white};
  display: inline-block;
  font-style: italic;
  float: left;
  height: 7rem;
  padding: 1.5rem 1rem;
  text-align: right;
  vertical-align: middle;
  ${media.desktop`display: none;`};
`
const Logo = styled(Image)`
  cursor: pointer;
  height: 5rem;
  float: right;
  margin-top: 0.5rem;
  margin-right: 1rem;
  ${media.ipadxl`display: none;`};
`

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.t = props.t
    this.state = {
      navItems: [
        { label: this.props.common.Home, href: '/', active: false },
        { label: this.props.common.Live, href: '/lives', active: false },
        { label: this.props.common.vod, href: '/vods', active: false },
        {
          label: this.props.common.GetTicket,
          href: '/getticket',
          active: false,
        },
        { label: this.props.common.ContactUs, href: '/contact', active: false },
        { label: this.props.common.MaxNews, href: '/maxnews', active: false },
      ],
      RegisterButton: this.props.common.REGISTERBUTTON,
      logoutText: this.props.common.PROFILETEXT,
      profileText: this.props.common.LOGOUTTEXT,
    }
    this.setActiveUrl = this.setActiveUrl.bind(this)
  }

  async componentWillReceiveProps(nextProps) {
    //console.log('nextProps', nextProps)
    await this.setState({
      navItems: [
        { label: nextProps.common.Home, href: '/', active: false },
        { label: nextProps.common.Live, href: '/lives', active: false },
        { label: nextProps.common.vod, href: '/vods', active: false },
        {
          label: nextProps.common.GetTicket,
          href: '/getticket',
          active: false,
        },
        { label: nextProps.common.ContactUs, href: '/contact', active: false },
        { label: nextProps.common.MaxNews, href: '/maxnews', active: false },
      ],
      RegisterButton: nextProps.common.REGISTERBUTTON,
      logoutText: nextProps.common.LOGOUTTEXT,
      profileText: nextProps.common.PROFILETEXT,
    })
    await this.setActiveUrl(nextProps.url.pathname)
  }

  componentWillMount() {
    this.setActiveUrl(this.props.url.pathname)
  }

  setActiveUrl(activeUrl) {
    this.setState({
      navItems: this.state.navItems.map(navItem => {
        if (navItem.href === activeUrl) {
          return { ...navItem, active: true }
        }
        return navItem
      }),
    })
  }

  render() {
    return (
      <Wrapper>
        <Navbar pathname={this.props.url.pathname} m={0} p={2} top left z={1}>
          <Container>
            <Motto>
              {this.props.common.TheMost} <br />
              {this.props.common.Fighting}
            </Motto>
            {this.state.navItems.map(({ label, href, active }) => (
              <NavItem key={label} label={label} href={href} active={active} />
            ))}
            <Link href="/">
              <Logo src="/static/logo.png" />
            </Link>
            <LoginLang
              url={this.props.url}
              www={this.props.www}
              registerText={this.state.RegisterButton}
              profileText={this.state.profileText}
              logoutText={this.state.logoutText}
            />
          </Container>
        </Navbar>
      </Wrapper>
    )
  }
}
//export default NavBar
export default translate(['navbar'])(NavBar)
