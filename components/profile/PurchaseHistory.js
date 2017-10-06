import { Box, Image, Text, Flex } from 'rebass'
import styled from 'styled-components'
import color from '../commons/vars'
import FacebookLoginButton from '../login/FacebookLoginButton'

const WrapperBoxProfile = styled.div`
  margin-left: 1.2rem;
  margin-right: 1.2rem;
`
const Text1 = styled.div`
  color: ${color.black};
  font-weight: 700;
  font-size: 1.3em;
  font-family: Helvetica, Arial, sans-serif;
`

const Text2 = styled.div`
  color: ${color.black};
  font-weight: 700;
  font-size: 1.1em;

  font-family: Helvetica, Arial, sans-serif;
  margin-bottom: 1rem;
`
const InputEmail = styled.input`
  color: ${color.black};
  font-weight: 400;
  font-size: 1.1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Button = styled.button`
  background-color: white;
  border: 1px solid red;
  color: red;
  padding: 5px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
  font-family: Helvetica, Arial, sans-serif;
  margin-top: 0.3rem;
`
export const PurchaseHistory = () => {
  return (
    <Box w={12 / 12}>
      <WrapperBoxProfile>
        <Box w={12 / 12}>
          <Flex className="Profile-pic" pb="1rem">
            <Box w={1 / 12} py="0.5rem">
              <Image src="../../static/ic_purchase@3x.png" width="80%" />
            </Box>
            <Box w={11.7 / 12} pt="1.4rem">
              <Text1>Purchase history</Text1>
            </Box>
          </Flex>
          <hr size="0.1" />
          <Flex className="Title-Purchase" pt="1.4rem">
            <Box w={2 / 12}>
              <Text2>Purchase data</Text2>
            </Box>
            <Box w={2 / 12}>
              <Text2>Purchase ID</Text2>
            </Box>
            <Box w={4 / 12}>
              <Text2>Type</Text2>
            </Box>
            <Box w={4 / 12}>
              <Text2>Status</Text2>
            </Box>
          </Flex>
        </Box>
      </WrapperBoxProfile>
    </Box>
  )
}
