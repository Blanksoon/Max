import styled from 'styled-components'
import Link from 'next/link'
import vars from '../commons/vars'
import { Flex, Box, Image } from 'rebass'

const Inactive = styled.div`
  color: ${vars.red};
  cursor: pointer;
  height: 1rem;
  vertical-align: bottom;
  &:hover {
    color: ${vars.black};
  }
  text-align: center;
  font-weight: 700;
  font-family: Helvetica, Arial, sans-serif;
`
const Active = styled.div`
  text-align: center;
  color: ${vars.lightBlue};
  padding-bottom: 10px;
  border-bottom: 4px solid ${vars.lightBlue};
  font-weight: 700;
  font-family: Helvetica, Arial, sans-serif;
`
const Logo = styled(Image)`
  height: 1.5rem;
  padding-right: 1rem;
`

export default ({ label, active, changeComponent, pathname }) => {
  console.log('pathname', pathname)
  if (pathname == 'Profile') {
    return (
      <div>
        <Flex>
          <Box w={2 / 12}>
            {/* <Logo src="../../static/ic_profile@3x.png" /> */}
            <Active onClick={() => changeComponent('Profile')}>Profile</Active>
          </Box>
          <Box w={3 / 12}>
            <Inactive onClick={() => changeComponent('Purchase history')}>
              Purchase history
            </Inactive>
          </Box>
          <Box w={7 / 12} />
        </Flex>
      </div>
    )
  } else {
    return (
      <div>
        <Flex>
          <Box w={2 / 12}>
            <Inactive onClick={() => changeComponent('Profile')}>
              Profile
            </Inactive>
          </Box>
          <Box w={3 / 12}>
            <Active onClick={() => changeComponent('Purchase history')}>
              Purchase history
            </Active>
          </Box>
          <Box w={7 / 12} />
        </Flex>
      </div>
    )
  }
}
