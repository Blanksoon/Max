import { Box, Image, Text, Flex } from 'rebass'
import styled from 'styled-components'
import color from '../commons/vars'
import FacebookLoginButton from '../login/FacebookLoginButton'

const Text3 = styled.div`
  color: ${color.red};
  font-weight: 700;
  font-size: 1em;
  padding-top: 0.3rem;
  font-family: Helvetica, Arial, sans-serif;
  margin-bottom: 0.2rem;
`
const Text1 = styled.div`
  color: ${color.black};
  font-weight: 100;
  font-size: 1em;
  padding-top: 0.3rem;
  font-family: Helvetica, Arial, sans-serif;
  margin-bottom: 0.2rem;
`

const Text2 = styled.div`
  color: ${color.black};
  font-weight: 200;
  font-size: 0.8em;
  font-family: Helvetica, Arial, sans-serif;
  margin-bottom: 0.2rem;
`

const Text4 = styled.div`
  color: ${color.white};
  font-weight: 200;
  font-size: 0.8em;
  font-family: Helvetica, Arial, sans-serif;
  margin-bottom: 0.2rem;
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
  cursor: pointer;
`

const CancelButton = styled(Button)`
  background-color: ${color.white};
  border: 1px solid ${color.red};
  padding: 8px 62px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
  font-size: 14px;
  font-family: Helvetica, Arial, sans-serif;
  color: ${color.red};
  cursor: pointer;
`
export const ListSubscribe = () => {
  return (
    <Box w={12 / 12}>
      <Flex className="List-Purchase" pb="1rem">
        <Box w={0.95 / 12} />
        <Box w={3 / 12}>
          <Flex>
            <Text3>Purchase date</Text3>
            &nbsp;&nbsp;
            <Text1>Jun 30,2017</Text1>
          </Flex>
        </Box>
        <Box w={7 / 12} />
      </Flex>
      <Flex className="List-Purchase" pb="0.2rem">
        <Box w={1.5 / 12} />
        <Box w={4 / 12} bg={color.blue} mr="1em">
          <Flex>
            <Box w={5 / 12}>
              <Box pt="0.7rem" />
              <Image w="100%" src="static/img_vodondemand@3x.png" />
            </Box>
            <Box w={7 / 12} color="white">
              <Box w={12 / 12} pt={3} />
              <center>
                <Text4>SUBSCRIBE VIDEO</Text4>
                <Text4>ON DEMAND</Text4>
              </center>
            </Box>
          </Flex>
        </Box>
        <Box w={4.5 / 12}>
          <Text3>Subscribe Video on Demand</Text3>
          <Text2>1 Month</Text2>
          <br />
          <br />
          <Flex>
            <Text3>Purchase ID:&nbsp;&nbsp;</Text3>
            <Box w={6 / 12} pt="0.4em">
              <Text2>4852625700</Text2>
            </Box>
          </Flex>
          <Flex>
            <Text3>Status&nbsp;&nbsp;</Text3>
            <Box w={6 / 12} pt="0.45em">
              <Text2>Valid thru Aug 30,2017</Text2>
            </Box>
          </Flex>
        </Box>
        <Box w={2 / 12} pt="6em">
          {/* <CancelButton>Cancel</CancelButton> */}
        </Box>
      </Flex>
      <hr size="0.1" />
    </Box>
  )
}
