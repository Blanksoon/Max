import { Component } from 'react'
import Link from 'next/link'
import { Fixed, Image } from 'rebass'
import styled from 'styled-components'
import NavItem from './NavItem'
import vars from '../commons/vars'

//rgba(1, 15, 30, 0.8)
const Navbar = styled.div`height: 1rem;`
const Logo = styled(Image)`
  cursor: pointer;
  height: 6rem;
  float: right;
  margin-right: 2rem;
`
export default class NavbarProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navItems: [
        { label: 'Profile', active: false },
        { label: 'Purchase history', active: false },
        { label: 'Subscribe', active: false },
      ],
    }
    this.setActiveUrl = this.setActiveUrl.bind(this)
  }

  componentWillMount() {
    console.log('..', this.props.url.pathname)
    //this.setActiveUrl(this.props.url.pathname)
  }

  setActiveUrl(activeUrl) {
    console.log(activeUrl)
    this.setState({
      navItems: this.state.navItems.map(navItem => {
        if (navItem.label === activeUrl) {
          return { ...navItem, active: true }
        }
        return navItem
      }),
    })
  }

  render() {
    return (
      <Navbar pathname={this.props.url.pathname} m={0} p={2}>
        <NavItem
          pathname={this.props.url.pathname}
          changeComponent={this.props.changeComponent}
        />
      </Navbar>
    )
  }
}
