import styled from 'styled-components'
import { Media, Subhead, Image, Link, Flex, Box, Text } from 'rebass'

const BackVideo = styled.div`
  padding-top: 6px;
  padding-bottom: 6px;
`
const BackVideoCenter = () => (
  <div className="VideoCenter">
    <Box width={1} bg="pink">
      <BackVideo className="back-video">{'<'} Back to Video Center</BackVideo>
    </Box>
  </div>
)
export { BackVideoCenter }
