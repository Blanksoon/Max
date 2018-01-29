import styled from 'styled-components'
import Link from 'next/link'
import vars from '../commons/vars'
import { Flex, Box, Image } from 'rebass'
import { media, theme } from '../../tools/responsive'

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
  ${media.iphone5`font-size: 0.7rem`};
`
const Active = styled.div`
  text-align: center;
  color: ${vars.lightBlue};
  padding-bottom: 10px;
  border-bottom: 4px solid ${vars.lightBlue};
  font-weight: 700;
  font-family: Helvetica, Arial, sans-serif;
  ${media.iphone5`font-size: 0.7rem;
  padding-bottom: 13px;`};
`
const Logo = styled(Image)`
  height: 1.5rem;
  padding-right: 1rem;
`

export default ({ label, active, lang, common, changeComponent, pathname }) => {
  if (pathname == 'Profile') {
    return (
      <div>
        <Flex>
          <Box w={[4 / 12, 3 / 12, 3 / 12, 3 / 12, 3 / 12]}>
            {/* <Logo src="../../static/ic_profile@3x.png" /> */}
            <Active onClick={() => changeComponent('Profile')}>
              {common.PROFILE}
            </Active>
          </Box>
          <Box w={[4 / 12, 3 / 12, 3 / 12, 3 / 12, 3 / 12]}>
            <Inactive onClick={() => changeComponent('Purchase history')}>
              {common.PURCHASEHISTORY}
            </Inactive>
          </Box>
          <Box w={[4 / 12, 3 / 12, 3 / 12, 3 / 12, 3 / 12]}>
            <Inactive onClick={() => changeComponent('Subscribe')}>
              {common.SUBSCRIBE}
            </Inactive>
          </Box>
          <Box w={[0, 7 / 12, 7 / 12, 7 / 12, 7 / 12]} />
        </Flex>
      </div>
    )
  } else if (pathname == 'Purchase history') {
    return (
      <div>
        <Flex>
          <Box w={3 / 12}>
            <Inactive onClick={() => changeComponent('Profile')}>
              {common.PROFILE}
            </Inactive>
          </Box>
          <Box w={3 / 12}>
            <Active onClick={() => changeComponent('Purchase history')}>
              {common.PURCHASEHISTORY}
            </Active>
          </Box>
          <Box w={3 / 12}>
            <Inactive onClick={() => changeComponent('Subscribe')}>
              {common.SUBSCRIBE}
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
          <Box w={3 / 12}>
            <Inactive onClick={() => changeComponent('Profile')}>
              {common.PROFILE}
            </Inactive>
          </Box>
          <Box w={3 / 12}>
            <Inactive onClick={() => changeComponent('Purchase history')}>
              {common.PURCHASEHISTORY}
            </Inactive>
          </Box>
          <Box w={3 / 12}>
            <Active onClick={() => changeComponent('Subscribe')}>
              {common.SUBSCRIBE}
            </Active>
          </Box>
          <Box w={7 / 12} />
        </Flex>
      </div>
    )
  }
}
