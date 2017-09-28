import { Component } from 'react'
import Link from 'next/link'
import { Fixed, Image } from 'rebass'
import styled from 'styled-components'
import Container from './Container'
import NavItem from './NavItem'
import vars from './vars'
import FacebookLoginButton from '../login/FacebookLoginButton'
import LoginLang from './LoginLang'

//rgba(1, 15, 30, 0.8)
const Navbar = styled(Fixed)`
  background: ${props =>
    props.pathname == '/' ? 'rgba(1, 15, 30, 0.8)' : 'rgba(1, 15, 30, 10)'};
  display: block;
  height: 6rem;
  width: 100%;
  z-index: 9999;
`
const NavItemContainer = styled.div`
  position: absolute;
  bottom: 0;
`
const Logo = styled(Image)`
  cursor: pointer;
  height: 4rem;
  float: right;
  margin-right: 2rem;
`
export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navItems: [
        { label: 'Home', href: '/', active: false },
        { label: 'Live', href: '/lives', active: false },
        { label: 'On Demand', href: '/vods', active: false },
        { label: 'Get Ticket', href: '/getticket', active: false },
        { label: 'Contact Us', href: '/contact', active: false },
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
    return (
      <Navbar m={0} p={2} top left z={1} pathname={this.props.url.pathname}>
        <Container>
          <NavItemContainer>
            {this.state.navItems.map(({ label, href, active }) => (
              <NavItem key={label} label={label} href={href} active={active} />
            ))}
            <LoginLang url={this.props.url} />
          </NavItemContainer>
          <Link href="/">
            <Logo onClick={console.log('helo 1212')} src="/static/logo.png" />
          </Link>
        </Container>
      </Navbar>
    )
  }
}
