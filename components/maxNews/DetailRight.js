import ThumbnailMaxnew from '../thumbnail/ThumbnailMaxnew'
import styled from 'styled-components'
import vars from '../commons/vars'
import { Media, Subhead, Image, Flex, Box, Text, Button } from 'rebass'

const Wrapper = styled.div`background-color: #fff;`
const Text1 = styled.div`
  color: ${vars.red};
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const DetailRight = () => (
  <Wrapper>
    <Box pl="6rem" pr="2rem">
      <Box>
        <Text1>You may also like</Text1>
      </Box>
      <Box pt="2rem">
        <ThumbnailMaxnew
          img="static/FT6A6495.jpg"
          name="Headline Headline consect adipicing elit sedid"
          text="incldidunt ut labore et dolore magna atiqua. Ut emim ad minim veniam, quis nostrud exercitation ullamco..."
          date="Aug 11, 2"
        />
      </Box>
      <Box pt="2rem">
        <ThumbnailMaxnew
          img="static/FT6A6495.jpg"
          name="Headline Headline consect adipicing elit sedid"
          text="incldidunt ut labore et dolore magna atiqua. Ut emim ad minim veniam, quis nostrud exercitation ullamco..."
          date="Aug 11, 2"
        />
      </Box>
      <Box pt="2rem">
        <ThumbnailMaxnew
          img="static/FT6A6495.jpg"
          name="Headline Headline adipicing elit sedid"
          text="incldidunt ut labore et dolore magna atiqua. Ut emim ad minim veniam, quis nostrud exercitation ullamco..."
          date="Aug 11, 2"
        />
      </Box>
    </Box>
  </Wrapper>
)

export default DetailRight
