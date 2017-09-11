import { Media, Subhead, Image, Link, Flex, Box, Text } from 'rebass'

const about = () => (
  <div>
    <Box width={1} pb={5} />
    <Flex>
      <Box w={10 / 12} />
      <Box width={2 / 12} pt={5} pb={5}>
        <center>
          <h1>About</h1>
          <b>Lorem ipsum</b>
          <br />
          <b>sed do diusmod</b>
        </center>
      </Box>
    </Flex>
    <Box width={1} pb={5} />
  </div>
)
export default about
