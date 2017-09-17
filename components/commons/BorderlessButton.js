import styled from 'styled-components'
import { ButtonOutline } from 'rebass'
import vars from './vars'

const StyledButton = styled(ButtonOutline)`
  background: transparent;
  box-shadow: none;
  cursor: pointer;
  color: ${vars.lightblue};
  &:hover {
    background: transparent;
    color: ${vars.white};
  }
  &:active {
    background: transparent;
    color: ${vars.lightBlue};
  }
  &:focus {
    background: transparent;
    box-shadow: none;
  }
`
export default StyledButton
