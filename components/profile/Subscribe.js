import { Box, Image, Text, Flex } from 'rebass'
import styled from 'styled-components'
import color from '../commons/vars'
import { media, theme } from '../../tools/responsive'

const WrapperBoxProfile = styled.div`
  margin-left: 1.2rem;
  margin-right: 1.2rem;
`
const Text1 = styled.div`
  color: ${color.black};
  font-weight: 700;
  font-size: 1.3em;
  font-family: Helvetica, Arial, sans-serif;
  ${media.iphone5`font-size: 1em`};
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

const Hr = styled.hr`
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
  ${media.phone`
  margin-top: -0.2em;
  margin-bottom: 0.5em;
  `};
  ${media.iphone5`
  margin-top: -0.2em;
  margin-bottom: 0.5em;
  `};
  ${media.ipad`
  margin-top: 0em;
  margin-bottom: 0.5em;
  `};
`

const Subscribe = props => {
  return (
    <Box w={12 / 12}>
      <Box w={12 / 12}>
        <Flex
          className="Profile-pic"
          py={['0.5rem', '1rem', '1rem', '1rem', '1rem']}
        >
          <Box
            w={[2 / 12, 2 / 12, 1 / 12, 1 / 12, 1 / 12]}
            py={['0.5rem', '0.5rem', '0.5rem', '0.5rem', '0.5rem']}
          >
            <Image src="../../static/ic_vod.png" width="80%" />
          </Box>
          <Box
            w={[10 / 12, 10 / 12, 11.7 / 12, 11.7 / 12, 11.7 / 12]}
            pt={['0.8rem', '0.8rem', '1rem', '1.8rem', '1.8rem']}
          >
            <Text1>{props.common.SUBSCRIBE}</Text1>
          </Box>
        </Flex>
        <Hr size="0.1" />
      </Box>
    </Box>
  )
}

export default Subscribe
