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
import { connect } from 'react-redux'

const H1 = styled.h1`margin: 0px;`
const ComingLive = props => (
  <div className="ComingLive">
    <Box w={1} pt="2em" pb="1em">
      <center>
        <Text
          pt="2%"
          pb="2%"
          bold
          color="#fff"
          children="UP COMING LIVE"
          fontSize="1.5em"
        />
      </center>
    </Box>
    <Flex>
      <Box w={1 / 2}>
        <ThumbnailLive live={props.lives[0]} />
      </Box>
      <Box w={1 / 32} />
      <Box w={1 / 2}>
        <ThumbnailLive live={props.lives[1]} />
      </Box>
    </Flex>
    <Flex pt="2%">
      <Box w={1 / 2}>
        <ThumbnailLive live={props.lives[2]} />
      </Box>
      <Box w={1 / 32} />
      <Box w={1 / 2}>
        <ThumbnailLive live={props.lives[3]} />
      </Box>
    </Flex>
  </div>
)

export { ComingLive }
