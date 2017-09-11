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
  Button,
} from 'rebass'

const H1 = styled.h1`margin: 0px;`
const ComingLive = props => (
  <div className="ComingLive">
    <Box w={1}>
      <Text
        pt="2%"
        pb="2%"
        bold
        color="red"
        children="Up Coming LIVE"
        fontSize="0.9em"
      />
    </Box>
    <Flex>
      <Box w={1 / 2}>
        <ThumbnailLive />
      </Box>
      <Box w={1 / 32} />
      <Box w={1 / 2}>
        <ThumbnailLive />
      </Box>
    </Flex>
    <Flex pt="2%">
      <Box w={1 / 2}>
        <ThumbnailLive />
      </Box>
      <Box w={1 / 32} />
      <Box w={1 / 2}>
        <ThumbnailLive />
      </Box>
    </Flex>
  </div>
)

export { ComingLive }
