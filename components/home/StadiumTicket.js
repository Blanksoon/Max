import styled from 'styled-components'
import { Media, Subhead, Image, Flex, Box, Text, Provider } from 'rebass'

const BorderRight = styled.div`border: 1px solid #fff;`
const Button = styled.button`
  background-color: #b81111;
  border: 1px solid white;
  color: white;
  padding: 8px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
  font-family: Helvetica, Arial, sans-serif;
`
const Wrapper = styled.div`
  color: #ffffff;
  background-image: url('../../static/stadiumticket_banner.jpg');
  background-position-x: right;
`
const stadium_ticket = () => (
  <Wrapper>
    <Flex>
      <Box w={1} pt="2em" pb="1em">
        <Box w={1}>
          <h1>Witness the ultimate extreme MuayThai</h1>
          <h4>Call for suadilum ticket reservation</h4>
        </Box>
        <Flex>
          <Box w={1 / 24}>
            <Image width="100%" src="../static/phone.png" />
          </Box>
          <Box pl="1em" pt="0.4em">
            <Button>(+66)038-416-999</Button>
          </Box>
          <Box pl="1em" pt="0.4em">
            <Button>08-2495-5549</Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </Wrapper>
)

export default stadium_ticket
