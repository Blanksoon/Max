import styled from 'styled-components'
import { Media, Subhead, Image, Flex, Box, Text, Provider } from 'rebass'
import { media, theme } from '../../tools/responsive'

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
  ${media.ipadpro`font-size: 15px;`};
  ${media.ipad`font-size: 14px;`};
  ${media.iphone7p`font-size: 11px;`};
  ${media.phone`font-size: 11px;`};
  ${media.iphone5`font-size: 10px;
  padding: 8px 19px;`};
`
const Witness = styled.div`
  font-weight: 700;
  font-size: 32px;
  ${media.ipadpro`font-size: 23px;`};
  ${media.ipad`font-size: 21px;`};
  ${media.iphone7p`font-size: 18px;`};
  ${media.phone`font-size: 15px;`};
  ${media.iphone5`font-size: 13px;`};
`
const Call = styled.div`
  font-weight: 700;
  font-size: 18px;
  ${media.ipadpro`font-size: 19px;`};
  ${media.ipad`font-size: 17px;`};
  ${media.phone`font-size: 11px;`};
`
const Wrapper = styled.div`
  color: #ffffff;
  background-image: url('../../static/stadiumticket_banner.jpg');
  background-position-x: right;
  ${media.ipad`background-position-x: -400px;`};
  ${media.phone`background-position-x: 0px;`};
`
const stadium_ticket = ({ common }) => (
  // <Provider theme={theme}>
  <Wrapper>
    <Flex>
      <Box w={1} pt="2em" pb="1em">
        <Box w={1}>
          <Witness>{common.Witness}</Witness>
          <br />
          <Call>{common.Call}</Call>
          <br />
        </Box>
        <Flex wrap>
          <Box w={[1 / 12, 1 / 12, 0.7 / 12, 0.5 / 12, 0.5 / 12]}>
            <Image
              pt={['0.5rem', '0.3rem', '0rem', '0rem', '0rem']}
              width="100%"
              src="../static/phone.png"
            />
          </Box>
          <Box
            w={[6.5 / 12, 6.5 / 12, 4 / 12, 2.3 / 12, 2 / 12]}
            pl="1em"
            pt="0.4em"
          >
            <Button>(+66)038-416-999</Button>
          </Box>
          <Box
            w={[4.5 / 12, 4.5 / 12, 4 / 12, 3 / 12, 2 / 12]}
            pl={['0em', '0em', '1em', '1em', '1em']}
            pt="0.4em"
          >
            <Button>08-2495-5549</Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </Wrapper>
  // </Provider>
)

export default stadium_ticket
