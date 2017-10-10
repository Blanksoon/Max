import styled from 'styled-components'
import { Button } from 'rebass'
import vars from './vars'

const StyledButton = styled(Button)`
  background: ${vars.red};
  color: ${vars.white};
  cursor: pointer;
  background-color: #b81111;
  border: 1px solid #b81111;
  padding: 12px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 0px;
  font-size: 1rem;
  font-weight: 700;

  &:active {
    background: ${vars.red};
  }
`
export default StyledButton
