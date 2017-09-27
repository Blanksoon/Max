import styled from 'styled-components'
import Link from 'next/link'
import vars from './vars'

const Inactive = styled.a`
  color: ${vars.lightBlue};
  cursor: pointer;
  float: left;
  margin-top: 2.4rem;
  padding: 0.5rem 1rem;
  text-decorate: none;
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
