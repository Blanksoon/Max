import styled from 'styled-components'
import { Subhead, Image, Flex, Box, Text } from 'rebass'
import { media } from '../../tools/responsive'

const WrapperAbout = styled.div`
  background-image: url('/static/bg-about-home.jpg');
  background-position: left;
  background-position-x: 28%;

  ${media.ipad`background-position-x: -300px;
  `};
  ${media.phone`background-position-x: -500px;`};
`
const Wrapper = styled.div`padding-top: ${props => props.paddingTop};`
const About = props => (
  <Wrapper className="abousss" paddingTop={props.paddingTop}>
    <WrapperAbout>
      <Box width={1} pb={5} />
      <Flex>
        <Box w={[2 / 12, 4 / 12, 4 / 12, 6 / 12]} />
        <Box width={[10 / 12, 6 / 12, 6 / 12, 6 / 12]} pt="0em" pb={5}>
          <Text
            pt="2em"
            bold
            children={props.common.ABOUTUS}
            fontSize="1.5em"
          />
          <Text pt="1.5em" children={props.common.About1} fontSize="0.8em" />
          <Text children={props.common.About2} fontSize="0.8em" />
          <Text pt="1em" children={props.common.About3} fontSize="0.8em" />
          <Text children={props.common.About4} fontSize="0.8em" />
          <Text children={props.common.About5} fontSize="0.8em" />
        </Box>
      </Flex>
    </WrapperAbout>
  </Wrapper>
)

About.defaultProps = {
  paddingTop: '0px',
}
export default About
