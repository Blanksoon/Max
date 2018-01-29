import { Component } from 'react'
import Link from 'next/link'
import { Fixed, Image } from 'rebass'
import styled from 'styled-components'
import { translate } from 'react-i18next'
import Container from './Container'
import vars from './vars'
import Hamburger from './Hamburger/Hamburger'
import { media } from '../../tools/responsive'

const Wrapper = styled.div`
  display: none;
  ${media.ipad`display: flex`}
`
const Navbar = styled(Fixed) `
  background: ${props =>
    props.pathname == '/' ? 'rgba(1, 15, 30, 0.8)' : 'rgba(1, 15, 30, 10)'};
  height: ${vars.mobileNavHeight};
  width: 100%;
  z-index: 2;
`
const Motto = styled.span`
  color: ${vars.white};
  display: none;
  font-style: italic;
  float: right;
  margin-top: 0.3rem;
  margin-right: 0.2rem;
  ${media.ipad`display: inline-block`}
`
const Logo = styled(Image) `
  cursor: pointer;
  display: none;
  height: 3rem;
  float: right;
  position: relative;
  right: -0.2rem;
  ${media.ipad`display: inline-block`}
`
/*const Line = styled.div`
  width: 35px;
  height: 3px;
  background: ${vars.white};
  margin: 6px 0;
  cursor: pointer;
  &:hover {
    background: ${vars.red};
  }
`
const Hamburger = styled.div`
  float: left;
  background: ${vars.red};
  margin-top: 0.4rem;
  margin-right: 0.2rem;
  cursor: pointer;
`
class NavToggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapse: true
    }
  }
  render() {
    return (
      <Hamburger>
        <Line >
        <Line />
        <Line />
      </Hamburger>
    )
  }
}*/

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
            <Hamburger />
            <Link href="/">
              <Logo src="/static/logo.png" />
            </Link>
            <Motto>
              {this.props.common.TheMost} <br />
              {this.props.common.Fighting}
            </Motto>
            {/* this.state.navItems.map(({ label, href, active }) => (
              <NavItem key={label} label={label} href={href} active={active} />
            )) */}
          </Container>
        </Navbar>
      </Wrapper>
    )
  }
}
//export default NavBar
export default translate(['navbar'])(NavBar)