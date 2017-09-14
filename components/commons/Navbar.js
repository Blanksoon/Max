import { Fixed, Container } from 'rebass'
import styled from 'styled-components'
import vars from './Vars'

const Navbar = styled(Fixed)`
  background: ${vars.darkblue};
  display: block;
  height: 70px;
  opacity: 0.8;
  width: 100%;
`
export default () => (
  <Navbar m={0} p={2} top left z={1}>
    <Container>Hello, world</Container>
  </Navbar>
)
