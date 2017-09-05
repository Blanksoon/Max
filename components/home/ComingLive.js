import styled from 'styled-components'
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
        <Image
              width={700}
              pt={3}
              src='/static/maxPromo.jpg'
            />
      </Box>
      <Box w={1/32} bg='red'>
      </Box>
      <Box w={1/2} bg='blue'>
        <Image
              width={700}
              pt={3}
              src='/static/maxPromo.jpg'
            />
      </Box>
      </Flex>
      <Flex>
      <Box w={1/2} bg='blue'>
        <Image
              width={700}
              pt={3}
              src='/static/maxPromo.jpg'
            />
      </Box>
      <Box w={1/32} bg='red'>
      </Box>
      <Box w={1/2} bg='blue'>
        <Image
              width={700}
              pt={3}
              src='/static/maxPromo.jpg'
            />
      </Box>
      </Flex>
  </div>
)

export {
  ComingLive
}