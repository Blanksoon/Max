import styled from 'styled-components'
import { ButtonOutline } from 'rebass'
import vars from './vars'

const StyledButton = styled(ButtonOutline)`
  box-shadow: none;
  cursor: pointer;
  color: ${vars.lightblue};
  &:hover {
    background: transparent;
    color: ${vars.white};
  }
  &:active {
    color: ${vars.lightBlue};
  }
  &:focus {
    box-shadow: none;
  }
`
export default StyledButton
