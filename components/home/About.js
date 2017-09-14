import styled from 'styled-components'
import { Media, Subhead, Image, Link, Flex, Box, Text } from 'rebass'

const WrapperAbout = styled.div`
  background-image: url('static/img_home_about.png');
  background-position: left;
`
const about = () => (
  <div>
    <WrapperAbout>
      <Box width={1} pb={5} />
      <Flex>
        <Box w={8 / 12} />
        <Box width={4 / 12} pt={5} pb={5}>
          <center>
            <h1>About</h1>
            <b>Lorem ipsum</b>
            <br />
            <b>sed do diusmod</b>
          </center>
        </Box>
      </Flex>
      <Box width={1} pb={5} />
    </WrapperAbout>
  </div>
)
export default about
