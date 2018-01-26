import styled from 'styled-components'
import { ButtonOutline } from 'rebass'
import vars from './vars'
import { media, theme } from '../../tools/responsive'

const StyledButton = styled(ButtonOutline)`
  background: transparent;
  box-shadow: none;
  font-weight: 500;
  font-size: 1rem;
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
  ${media.phone`font-size: 0.5rem`};
  ${media.iphone5`font-size: 0.5rem;`};
`
export default StyledButton
