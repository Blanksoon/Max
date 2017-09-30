import { Component } from 'react'
import Link from 'next/link'
import { Fixed, Image } from 'rebass'
import styled from 'styled-components'
import Container from './Container'
import NavItem from './NavItem'
import vars from './vars'
import FacebookLoginButton from '../login/FacebookLoginButton'
import LoginLang from '../../containers/commons/LoginLang'

//rgba(1, 15, 30, 0.8)
const Navbar = styled(Fixed)`
  background: ${props =>
    props.pathname == '/' ? 'rgba(1, 15, 30, 0.8)' : 'rgba(1, 15, 30, 10)'};
  box-sizing: 'border-box';
  height: ${vars.navHeight};
  width: 100%;
  z-index: 9999;
`
const Motto = styled.span`
  box-sizing: border-box;
  color: ${vars.white};
  display: inline-block;
  font-style: italic;
  float: left;
  height: ${vars.navHeight};
  padding: 1.5rem 1rem;
  text-align: right;
  vertical-align: middle;
`
const Logo = styled(Image)`
  cursor: pointer;
  height: 6rem;
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
      <Navbar m={0} p={2} top left z={1}>
        <Container>
          <Motto>
            The Most Exciting <br />Fightingsport in the World
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
