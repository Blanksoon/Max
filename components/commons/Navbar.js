import { Component } from 'react'
import Link from 'next/link'
import { Fixed, Container, Image } from 'rebass'
import styled from 'styled-components'
import NavItem from './NavItem'
import vars from './vars'
//rgba(1, 15, 30, 0.8)
const Navbar = styled(Fixed)`
  background: ${props =>
    props.url == '/' ? 'rgba(1, 15, 30, 0.8)' : 'rgba(1, 15, 30, 10)'};
  display: block;
  height: 4rem;
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
        { label: 'Get Ticket', href: '/ticket', active: false },
        { label: 'Contact Us', href: '/contact', active: false },
      ],
    }
    this.setActiveUrl = this.setActiveUrl.bind(this)
  }

  componentWillMount() {
    this.setActiveUrl(this.props.activeUrl.pathname)
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
      <Navbar m={0} p={2} top left z={1} url={this.props.activeUrl.pathname}>
        {console.log('url', this.props.activeUrl.pathname)}
        <Container>
          <NavItemContainer>
            {this.state.navItems.map(({ label, href, active }) => (
              <NavItem key={label} label={label} href={href} active={active} />
            ))}
          </NavItemContainer>
          <Link href="/">
            <Logo src="/static/logo.png" />
          </Link>
        </Container>
      </Navbar>
    )
  }
}
