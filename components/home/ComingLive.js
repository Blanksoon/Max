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
        <ThumbnailLive
          text="Now! LIVE-on Fri. Aug 18th, 2017"
          img="static/maxultimate-show.jpg"
          urlimg="static/DailyFightcard 12092017 .jpg"
        />
      </Box>
      <Box w={1 / 32} />
      <Box w={1 / 2}>
        <ThumbnailLive
          text="NEXT-on Fri. Aug 18th, 2017"
          img="static/thairath-show.jpg"
          urlimg="static/logoinvidoplayer.jpg"
        />
      </Box>
    </Flex>
    <Flex pt="2%">
      <Box w={1 / 2}>
        <ThumbnailLive
          text="Now! LIVE-on Fri. Aug 18th, 2017"
          img="static/thechampion-show.jpg"
          urlimg="static/DailyFightcard 12092017 .jpg"
        />
      </Box>
      <Box w={1 / 32} />
      <Box w={1 / 2}>
        <ThumbnailLive
          text="NEXT-on Fri. Aug 18th, 2017"
          img="static/thebattle-show.jpg"
          urlimg="static/DailyFightcard 12092017 .jpg"
        />
      </Box>
    </Flex>
  </div>
)

export { ComingLive }
