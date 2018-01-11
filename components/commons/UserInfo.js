import { Component } from 'react'
import styled from 'styled-components'
import vars from './vars'
import Link from 'next/link'
const Username = styled.div`
  color: ${vars.white};
  cursor: pointer;
  padding: 0.5rem 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`
const MenuTrigger = styled.span`
  border: solid ${props => (props.showMenu ? vars.red : vars.lightBlue)};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  position: relative;
  margin-left: 0.5rem;
  transform: rotate(45deg);
  top: -3px;
`
const Menu = styled.div`
  position: relative;
  display: inline-block;
`
const MenuContent = styled.div`
  color: ${vars.red};
  display: ${props => (props.showMenu ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  min-width: 200px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  top: 3rem;
  right: 0;
  z-index: 1;
`
const MenuItem = styled.div`
  cursor: pointer;
  padding: 12px 16px;
  text-align: left;
  &:hover {
    background: #b7b5b5;
  }
  &:active {
    background: #9e9d9d;
  }
`
class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }
  render() {
    const { email, logout, profileText, logoutText } = this.props
    const { showMenu } = this.state
    return (
      <Menu>
        <Username onClick={this.toggleMenu}>
          {email}
          <MenuTrigger showMenu={showMenu} />
        </Username>
        <MenuContent showMenu={showMenu}>
          <Link href={`/profile`}>
            <MenuItem>{profileText}</MenuItem>
          </Link>
          <MenuItem onClick={logout}>{logoutText}</MenuItem>
        </MenuContent>
      </Menu>
    )
  }
}
export default UserInfo
