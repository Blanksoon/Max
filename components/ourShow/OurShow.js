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

const OurShow = () => (
  <div className="OurShow">
    <Box w={1} bg="green">
      <h1>
        <b>Our Show</b>
      </h1>
    </Box>
    <Flex>
      <Box w={1 / 2} bg="blue">
        <Image width={767} pt={3} src="/static/maxPromo.jpg" />
      </Box>
      <Box w={1 / 32} bg="red" />
      <Box w={1 / 2} bg="blue">
        <Image width={767} pt={3} src="/static/maxPromo.jpg" />
      </Box>
    </Flex>
    <Flex>
      <Box w={1 / 2} bg="blue">
        <Image width={767} pt={3} src="/static/maxPromo.jpg" />
      </Box>
      <Box w={1 / 32} bg="red" />
      <Box w={1 / 2} bg="blue">
        <Image width={767} pt={3} src="/static/maxPromo.jpg" />
      </Box>
    </Flex>
    <Flex>
      <Box w={1 / 2} bg="blue">
        <Image width={767} pt={3} src="/static/maxPromo.jpg" />
      </Box>
      <Box w={1 / 32} bg="red" />
      <Box w={1 / 2} bg="blue">
        <Image width={767} pt={3} src="/static/maxPromo.jpg" />
      </Box>
    </Flex>
    <Flex>
      <Box w={1 / 2} bg="blue">
        <Image width={767} pt={3} src="/static/maxPromo.jpg" />
      </Box>
      <Box w={1 / 32} bg="red" />
      <Box w={1 / 2} bg="blue">
        <Image width={767} pt={3} src="/static/maxPromo.jpg" />
      </Box>
    </Flex>
    <style jsx>
      {`
        h1 {
          margin: 0;
        }
      `}
    </style>
  </div>
)

export default OurShow
