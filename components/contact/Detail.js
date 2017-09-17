import { Media, Subhead, Image, Flex, Box, Text } from 'rebass'
import { LogoFooter } from '../home/Footer'
import styled from 'styled-components'
const Input = styled.input`
  padding: ${props => props.px} ${props => props.py};
  width: 90%;
`
const Button = styled.button`
  background-color: #b81111;
  padding: 1em 2em;
  text-align: center;
  border: 0;
`

const Detail = props => (
  <Flex>
    <Box w={8 / 12} />
    <Box w={4 / 12}>
      <Text
        pt="1em"
        color="#fff"
        left
        bold
        children="Follow Max Muay Thai at"
        fontSize="0.9em"
      />
      <Flex pt="1em">
        <LogoFooter mr="1em" name="static/ic_facebook@2x.png" />
        <LogoFooter mr="1em" name="static/ic_googleplus@2x.png" />
        <LogoFooter mr="1em" name="static/ic_youtube@2x.png" />
        <LogoFooter mr="1em" name="static/ic_instagram@2x.png" />
      </Flex>
      <Text
        pt="1em"
        color="#fff"
        left
        bold
        children="Max Muay Thai Co.,Ltd."
        fontSize="0.9em"
      />
      <Text
        color="#fff"
        left
        children="40/108 Sukhumvit Rd. Moo.9 Nongprue"
        fontSize="0.9em"
      />
      <Text
        color="#fff"
        left
        children="Banglamung Chon Buri 20150 (Thailand)"
        fontSize="0.9em"
      />
      <Flex pt="1em" pb="1em">
        <Box w={6 / 12}>
          <Button>
            <center>
              <Image width="2em" src="static/phone.png" />
              <Text
                color="#fff"
                children="(+66) 038-416-999"
                fontSize="0.9em"
              />
            </center>
          </Button>
        </Box>
        <Box w={6 / 12}>
          <Button>
            <center>
              <Image width="2em" src="static/phone.png" />
              <Text
                color="#fff"
                children="(+66) 038-416-999"
                fontSize="0.9em"
              />
            </center>
          </Button>
        </Box>
      </Flex>
      <Text
        pt="1em"
        color="#fff"
        left
        bold
        children="Let we hear from you,"
        fontSize="0.9em"
      />
      <Input px="0.5em" py="1em" placeholder="Your email here" />
      <Input px="0.5em" py="1em" placeholder="Let us know what can we do more fro our beloved fan.+-+" />
    </Box>
  </Flex>
)

export default Detail
