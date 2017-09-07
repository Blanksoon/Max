import styled from 'styled-components'
import ThumbnailLive from '../thumbnail/ThumbnailLive'
import {
  Provider,
  Toolbar,
  Flex,
  Box,
  Text,
  Image,
  Tabs,
  TabItem,
  Border,
  NavLink,
  BackgroundImage,
  Button
} from 'rebass'

const H1 = styled.h1`
  margin: 0px;
`
const ComingLive = (props) => (
  <div className="ComingLive">
      <Box w={1} bg='green'>
        <H1><b>Up Coming LIVE</b></H1>
      </Box>
      <Flex>
      <Box w={1/2} bg='blue'>
        <ThumbnailLive />
      </Box>
      <Box w={1/32} bg='red'>
      </Box>
      <Box w={1/2} bg='blue'>
        <ThumbnailLive />
      </Box>
      </Flex>
      <Flex pt='2%'>
      <Box w={1/2} bg='blue'>
        <ThumbnailLive />
      </Box>
      <Box w={1/32} bg='red'>
      </Box>
      <Box w={1/2} bg='blue'>
        <ThumbnailLive />
      </Box>
      </Flex>
  </div>
)

export {
  ComingLive
}