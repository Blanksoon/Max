import styled from 'styled-components'
import {
  Flex,
  Box,
  Image,
  Button
} from 'rebass'

const BackgroundImage = styled.div`
  background: '../../static/3.png';
  background-repeat: no-repeat;
  background-position: center;
`;

const VideoBox = () => (
  <div>
    <Flex mb={3}>
      <Box w={6 / 12} mr='1em'>
        <Image
          src='../../static/3.png'
        />
      </Box>
      <Box w={6 / 12}>
        <Flex>
          <Box w={6 / 12} pr='7.5px' pb='7.5px'>
            <Image
              src='../../static/3.png'
            />
          </Box>
          <Box w={6 / 12} pl='7.5px' pb='7.5px'>
            <Image
              src='../../static/3.png'
            />
          </Box>
        </Flex>
        <Flex>
          <Box w={6 / 12} pr='7.5px' pt='7.5px'>
            <Image
              src='../../static/3.png'
            />
          </Box>
          <Box w={6 / 12} pl='7.5px' pt='7.5px'>
            <Image
              src='../../static/3.png'
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
    <RowVideo />
    <RowVideo />
    <RowVideo />
    <Box w={12 / 12} pb='3%' pt='2%'>
    <center>
      <Button
        pr="100px"
        pl="100px"
        children='Load more'
        fontSize='15px'
      />
    </center>
    </Box>
  </div>
)

const RowVideo = () => (
  <Flex mb={3}>
    <Box w={6 / 12} mr='1em'>
      <Flex>
        <Box w={6 / 12} pr='7.5px'>
          <Image
            src='../../static/3.png'
          />
        </Box>
        <Box w={6 / 12} pl='7.5px'>
          <Image
            src='../../static/3.png'
          />
        </Box>
      </Flex>
    </Box>
    <Box w={6 / 12}>
      <Flex>
        <Box w={6 / 12} pr='7.5px'>
          <Image
            src='../../static/3.png'
          />
        </Box>
        <Box w={6 / 12} pl='7.5px'>
          <Image
            src='../../static/3.png'
          />
        </Box>
      </Flex>
    </Box>
  </Flex>
)
export {
  VideoBox
}