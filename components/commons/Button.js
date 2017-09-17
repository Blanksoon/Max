import styled from 'styled-components'
import { Button } from 'rebass'
import vars from './vars'

const StyledButton = styled(Button)`
  background: ${vars.red};
  color: ${vars.white};
  cursor: pointer;
`
export default StyledButton
