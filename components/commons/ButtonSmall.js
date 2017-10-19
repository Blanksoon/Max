import styled from 'styled-components'
import { Button } from 'rebass'
import vars from './vars'

const StyledButtonSmall = styled(Button)`
  background: ${vars.red};
  color: ${vars.white};
  cursor: pointer;
  background-color: #b81111;
  border: 1px solid #b81111;
  padding: 12px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 0px;
  font-weight: 700;
  font-family: Helvetica, Arial, sans-serif;

  &:active {
    background: ${vars.red};
  }
`
export default StyledButtonSmall
