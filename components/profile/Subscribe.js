import { Box, Image, Text, Flex } from 'rebass'
import styled from 'styled-components'
import color from '../commons/vars'

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
  color: ${color.red};
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
  cursor: pointer;
`

const Subscribe = props => {
  return (
    <Box w={12 / 12}>
      <Box w={12 / 12}>
        <Flex className="Profile-pic" py="1rem">
          <Box w={1 / 12} py="0.5rem">
            <Image src="../../static/ic_vod.png" width="80%" />
          </Box>
          <Box w={11.7 / 12} pt="1.8rem">
            <Text1>{props.common.SUBSCRIBE}</Text1>
          </Box>
        </Flex>
        <hr size="0.1" />
      </Box>
    </Box>
  )
}

export default Subscribe
