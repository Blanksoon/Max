import styled from 'styled-components'
import { Fixed, Image, Flex, Box } from 'rebass'
import Link from 'next/link'
import vars from './vars'
import { media, theme } from '../../tools/responsive'

const Inactive = styled.a`
  color: ${vars.lightBlue};
  cursor: pointer;
  text-decorate: none;
  vertical-align: bottom;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 10rem;
  padding-bottom: 1rem;
  font-size: 0.9rem;
  font-family: Helvetica, Arial, sans-serif;
  &:hover {
    color: ${vars.white};
  }
  ${media.phone`display: none`};
`
const Active = styled(Inactive)`
  color: ${vars.white};
  background: #58b2ff;
  //border-bottom: 2px solid ${vars.white};
  ${media.phone`display: none`};
`
export default ({ label, href, active }) => (
  <Box pt="1rem" pb="1rem" w={12 / 12} bg="">
    <Link href={href}>
      {active ? <Active>{label}</Active> : <Inactive>{label}</Inactive>}
    </Link>
  </Box>
)
