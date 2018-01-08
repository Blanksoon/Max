import { Component } from 'react'
import Link from 'next/link'
import { Fixed, Image } from 'rebass'
import styled from 'styled-components'
import Container from './Container'
import NavItem from './NavItem'
import vars from './vars'
import FacebookLoginButton from '../login/FacebookLoginButton'
import LoginLang from '../../containers/commons/LoginLang'
import { translate } from 'react-i18next'

//rgba(1, 15, 30, 0.8)
const Navbar = styled(Fixed)`
  background: ${props =>
    props.pathname == '/' ? 'rgba(1, 15, 30, 0.8)' : 'rgba(1, 15, 30, 10)'};
  height: ${vars.navHeight};
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
`
const Logo = styled(Image)`
  cursor: pointer;
  height: 7rem;
  float: right;
  margin-right: 2rem;
`
class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.t = props.t
    this.state = {
      navItems: [
        { label: this.props.nav.home, href: '/', active: false },
        { label: this.props.nav.live, href: '/lives', active: false },
        { label: this.props.nav.vod, href: '/vods', active: false },
        { label: this.props.nav.buyticket, href: '/getticket', active: false },
        { label: this.props.nav.contact, href: '/contact', active: false },
      ],
    }
    this.setActiveUrl = this.setActiveUrl.bind(this)
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
    // console.log('dddddddddd', this.props.nav)
    return (
      <Navbar pathname={this.props.url.pathname} m={0} p={2} top left z={1}>
        <Container>
          <Motto>
            The Most Exciting <br />Fighting sport in the World
          </Motto>
          {this.state.navItems.map(({ label, href, active }) => (
            <NavItem key={label} label={label} href={href} active={active} />
          ))}
          <LoginLang url={this.props.url} />
          <Link href="/">
            <Logo src="/static/logo.png" />
          </Link>
        </Container>
      </Navbar>
    )
  }
}
//export default NavBar
export default translate(['navbar'])(NavBar)
