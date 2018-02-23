import styled from 'styled-components'
import Link from 'next/link'
import { Media, Subhead, Image, Flex, Box, Text } from 'rebass'

const BackVideo = styled.div`
  padding-top: 6px;
  padding-bottom: 6px;
  color: #d2dbe8;
  cursor: pointer;
`
const BackVideoCenter = ({ name, url }) => (
  <div className="VideoCenter">
    <Box width={1} pt={['60px', '60px', '64px', '80px', '80px']} />
    <Box width={1} bg="#084a94" pl="1.5rem">
      <div
        onClick={() => {
          url.back()
        }}
      >
        <BackVideo className="back-video">
          {'<'}
          {name}
        </BackVideo>
      </div>
    </Box>
  </div>
)
export { BackVideoCenter }
