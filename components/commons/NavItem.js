import styled from 'styled-components'
import Link from 'next/link'
import vars from './vars'

const Inactive = styled.a`
  color: ${vars.lightBlue};
  cursor: pointer;
  float: left;
  padding: 0.5rem 1rem;
  text-decorate: none;
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
