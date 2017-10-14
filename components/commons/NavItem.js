import styled from 'styled-components'
import Link from 'next/link'
import vars from './vars'

const Inactive = styled.a`
  color: ${vars.lightBlue};
  cursor: pointer;
  height: 6.5rem;
  float: left;
  padding: 4rem 1rem 2.3rem;
  text-decorate: none;
  vertical-align: bottom;
  &:hover {
    color: ${vars.white};
  }
`
const Active = styled(Inactive)`
  color: ${vars.white};
  border-bottom: 2px solid ${vars.white};
`

export default ({ label, href, active }) => (
  <Link href={href}>
    {active ? <Active>{label}</Active> : <Inactive>{label}</Inactive>}
  </Link>
)
