import { Component } from 'react'
import Link from 'next/link'
import { Fixed, Image, Flex, Box } from 'rebass'
import styled from 'styled-components'
import { translate } from 'react-i18next'
import Sidebar from 'react-sidebar'
import Container from './Container'
import vars from './vars'
import Hamburger from './Hamburger/Hamburger'
import NavItem from './MobileNavItem'
import Login from '../../containers/commons/MobileLogin'
import Lang from '../../containers/commons/MobileLang'
import { media } from '../../tools/responsive'

const Wrapper = styled.div`
  display: none;
  ${media.ipad`display: flex`};
  ${media.phone`display: flex`};
  ${media.iphone5`display: flex`};
`
const WrapperSide = styled.div`
  z-index: 230;
  background: #020f1f;
  padding-top: 5rem;
  height: 100%;
`
const Text = styled.div`
  color: ${vars.white};
  padding-left: 1rem;
  ${media.phone`font-size: 0.8em`};
  ${media.iphone5`font-size: 0.8em`};
`
const Text1 = styled.div`
  color: ${vars.white};
  padding-left: 1rem;
  padding-bottom: 1rem;
  ${media.phone`font-size: 0.8em`};
  ${media.iphone5`font-size: 0.8em`};
`
const Navbar = styled(Fixed)`
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
  ${media.ipad`display: inline-block`};
  ${media.iphone5`font-size: 0.7em`};
`
const Logo = styled(Image)`
  cursor: pointer;
  display: none;
  height: 3rem;
  float: right;
  position: relative;
  right: -0.2rem;
  ${media.ipad`display: inline-block`};
`
const sidebarStyles = {
  sidebar: {
    backgroundColor: 'dodgerblue',
    width: '50%',
    position: 'fixed',
    overflow: 'none',
  },
}
const Hr = styled.hr`
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
  ${media.phone`
  margin-top: 0em;
  margin-bottom: 0em;
  `};
  ${media.iphone5`
  margin-top: -0.2em;
  margin-bottom: 0em;
  `};
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
      ],
      hamburgerActive: false,
      RegisterButton: this.props.common.REGISTERBUTTON,
      logoutText: this.props.common.PROFILETEXT,
      profileText: this.props.common.LOGOUTTEXT,
    }
    this.setActiveUrl = this.setActiveUrl.bind(this)
    this.toggleHamburger = this.toggleHamburger.bind(this)
  }

  toggleHamburger() {
    this.setState({
      hamburgerActive: !this.state.hamburgerActive,
    })
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
    const sidebarContent = (
      <WrapperSide>
        <div style={{ color: '#fff' }}>
          <Text>Welcome, username</Text>
          <Login
            url={this.props.url}
            www={this.props.www}
            registerText={this.state.RegisterButton}
            profileText={this.state.profileText}
            logoutText={this.state.logoutText}
          />
        </div>
        <Hr size="0.1" />
        <br />
        <div style={{ color: '#fff' }}>
          <Text1>Menu Other</Text1>
          {this.state.navItems.map(({ label, href, active }) => (
            <NavItem key={label} label={label} href={href} active={active} />
          ))}
        </div>
        <Hr size="0.1" />
        <br />
        <div style={{ color: '#fff' }}>
          <Text>Language Setting</Text>
          <Lang
            url={this.props.url}
            www={this.props.www}
            registerText={this.state.RegisterButton}
            profileText={this.state.profileText}
            logoutText={this.state.logoutText}
          />
        </div>
      </WrapperSide>
    )
    const mainContent = (
      <Wrapper>
        <Navbar pathname={this.props.url.pathname} m={0} p={2} top left z={1}>
          <Container>
            <Hamburger
              active={this.state.hamburgerActive}
              toggleHamburger={this.toggleHamburger}
            />
            <Link href="/">
              <Logo src="/static/logo.png" />
            </Link>
            <Motto>
              {this.props.common.TheMost} <br />
              {this.props.common.Fighting}
            </Motto>

            {/* {this.state.navItems.map(({ label, href, active }) => (
              <NavItem key={label} label={label} href={href} active={active} />
            ))} */}
          </Container>
        </Navbar>
      </Wrapper>
    )
    return (
      <Sidebar
        sidebar={sidebarContent}
        open={this.state.hamburgerActive}
        styles={sidebarStyles}
        onSetOpen={() => {
          this.setState({ hamburgerActive: true })
        }}
      >
        {mainContent}
      </Sidebar>
    )
  }
}
//export default NavBar
export default translate(['navbar'])(NavBar)
