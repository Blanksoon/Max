import { Component } from 'react'
import Link from 'next/link'
import { Fixed, Image, Provider } from 'rebass'
import styled from 'styled-components'
import NavItem from './NavItem'
import vars from '../commons/vars'
import { media, theme } from '../../tools/responsive'

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
        { label: this.props.common.PROFILE, active: false },
        { label: this.props.common.PURCHASEHISTORY, active: false },
        { label: this.props.common.SUBSCRIBE, active: false },
      ],
    }
    this.setActiveUrl = this.setActiveUrl.bind(this)
  }

  componentWillMount() {
    //console.log('..', this.props.url.pathname)
    //this.setActiveUrl(this.props.url.pathname)
  }

  setActiveUrl(activeUrl) {
    //console.log(activeUrl)
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
      // <Provider theme={theme}>
      <Navbar pathname={this.props.url.pathname} m={0} p={[2, 2, 2, 2, 2]}>
        <NavItem
          lang={this.props.lang}
          common={this.props.common}
          pathname={this.props.url.pathname}
          changeComponent={this.props.changeComponent}
        />
      </Navbar>
      // </Provider>
    )
  }
}
