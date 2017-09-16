import { Component } from 'react'
import { Fixed, Container, Image } from 'rebass'
import styled from 'styled-components'
import NavItem from './NavItem'
import vars from './vars'

const Navbar = styled(Fixed)`
  background: ${vars.darkblue};
  display: block;
  height: 4rem;
  opacity: 0.8;
  width: 100%;
`
const NavItemContainer = styled.div`
  position: absolute;
  bottom: 0;
`
const Logo = styled(Image)`
  height: 4rem;
  float: right;
  margin-right: 1rem;
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
      <Navbar m={0} p={2} top left z={1}>
        <Container>
          <NavItemContainer>
            {this.state.navItems.map(({ label, href, active }) => (
              <NavItem label={label} href={href} active={active} />
            ))}
          </NavItemContainer>
          <Logo src="/static/logo.png" />
        </Container>
      </Navbar>
    )
  }
}
