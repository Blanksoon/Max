import styled from 'styled-components'
import { ButtonOutline } from 'rebass'
import vars from './vars'

const StyledButton = styled(ButtonOutline)`
  box-shadow: none;
  cursor: pointer;
  &:hover {
    background: transparent;
    color: ${vars.lightblue};
  }
`
export default StyledButton
