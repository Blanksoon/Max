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
const stadium_ticket = ({ common }) => (
  <Wrapper>
    <Flex>
      <Box w={1} pt="2em" pb="1em">
        <Box w={1}>
          <h1>{common.Witness}</h1>
          <h4>{common.Call}</h4>
        </Box>
        <Flex wrap>
          <Box w={[1.5 / 12, 1 / 12, 0.5 / 12]}>
            <Image width="100%" src="../static/phone.png" />
          </Box>
          <Box
            w={[5.5 / 12, 4 / 12, 3 / 12, 2.3 / 12, 2 / 12]}
            pl="1em"
            pt="0.4em"
          >
            <Button>(+66)038-416-999</Button>
          </Box>
          <Box w={[5 / 12, 4 / 12, 3 / 12, 2 / 12]} pl="1em" pt="0.4em">
            <Button>08-2495-5549</Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </Wrapper>
)

export default stadium_ticket
