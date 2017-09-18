import styled from 'styled-components'
import { Media, Subhead, Image, Flex, Box, Text } from 'rebass'

const WrapperAbout = styled.div`
  background-image: url('static/bg-about-home.jpg');
  background-position: left;
  background-position-x: 28%;
`
const Wrapper = styled.div`padding-top: ${props => props.paddingTop};`
const About = props => (
  <Wrapper className="abousss" paddingTop={props.paddingTop}>
    <WrapperAbout>
      <Box width={1} pb={5} />
      <Flex>
        <Box w={6 / 12} />
        <Box width={6 / 12} pt="0em" pb={5}>
          <Text pt="2em" bold children="ABOUT US" fontSize="1.5em" />
          <Text
            pt="1.5em"
            children="You've never really been to Thailand without witnessing extreme"
            fontSize="0.8em"
          />
          <Text
            children="muay thai at Max Muay Thai Stadium Pattaya.."
            fontSize="0.8em"
          />
          <Text
            pt="1em"
            children="We are the industry leader in Muay Thai Broadcasting. The no.1reated"
            fontSize="0.8em"
          />
          <Text
            children="boxing tv show in Thailand with our 3 round format of Non Stop"
            fontSize="0.8em"
          />
          <Text children="Aggressive Action." fontSize="0.8em" />
        </Box>
      </Flex>
    </WrapperAbout>
  </Wrapper>
)

About.defaultProps = {
  paddingTop: '0px',
}
export default About
