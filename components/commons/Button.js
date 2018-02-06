import styled from 'styled-components'
import { Button } from 'rebass'
import vars from './vars'
import { media, theme } from '../../tools/responsive'

const StyledButton = styled(Button)`
  background: ${vars.red};
  color: ${vars.white};
  cursor: pointer;
  background-color: #b81111;
  border: 1px solid #b81111;
  padding: 12px 16%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 0px;
  font-size: 1rem;
  font-weight: 700;
  ${media.ipadpro`font-size: 1em`};
  ${media.ipad`font-size: 0.9em`};
  ${media.phone`font-size: 0.5em;padding: 5px 6%;`};
  ${media.iphone5`font-size: 0.5em;padding: 4px 6%;`};
  &:active {
    background: ${vars.red};
  }
`
export default StyledButton
