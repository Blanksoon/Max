import ThumbnailRight from '../thumbnail/ThumbnailRight'
import styled from 'styled-components'
import color from '../commons/vars'
import { Media, Subhead, Image, Flex, Box, Text, Button } from 'rebass'

const Button1 = styled.button`
  bottom: 2%;
  background-color: #b81111;
  border: 1px solid #b81111;
  color: white;
  padding: 8px 10%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
  font-size: 1em;
  margin-left: 53%;
`
const Text1 = styled.div`
  color: ${color.blue};
  font-weight: 700;
  font-size: 1.5em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text2 = styled.div`
  color: ${color.black};
  font-weight: 700;
  font-size: 0.9em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text3 = styled.div`
  color: ${color.blue};
  font-weight: 700;
  font-size: 0.9em;
  font-family: Helvetica, Arial, sans-serif;
`
const Date = styled.div`
  color: ${color.blue};
  font-weight: 700;
  font-size: 1.5em;
  font-family: Helvetica, Arial, sans-serif;
`
const WrapperHilight = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-size: cover;
  font-family: Helvetica, Arial, sans-serif;
  position: relative;
`
const WrapperHilightText = styled.div`
  top: 0%;
  right: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: -webkit-linear-gradient(
    top,
    rgba(1, 33, 71, 0.1) 0%,
    rgba(1, 33, 71, 0.6) 76%,
    rgba(1, 33, 71, 1) 85%,
    rgba(1, 33, 71, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
`
const Wrapper = styled.div`background-color: #fff;`
const DetailLeft = () => (
  <Wrapper>
    <Box pl="1rem" pr="1rem" width={1}>
      <Box>
        <Text1>
          Headline consectetur adipicing elit, sed do eiusmod tempor consectetur
          adipicing elit
        </Text1>
      </Box>
      <Box>
        <Date>Aug 11, 2017</Date>
      </Box>
      <Box>
        <WrapperHilight>
          <Box w={12 / 12}>
            <Image width="100%" pt={0} src="static/FT6A6495.jpg" />
          </Box>
          <Box w={12 / 12}>
            <WrapperHilightText>
              <Image width="10%" pl="90%" src="static/img_logo_white@2x.png" />
            </WrapperHilightText>
          </Box>
        </WrapperHilight>
      </Box>
      <Box>
        <Text2>lorem</Text2>
        <br />
        <Text2>lorem</Text2>
      </Box>
      <Flex>
        <Box>
          <Text3>Share on</Text3>
        </Box>
        <Box>
          <Image width="100%" pt={0} src="static/FT6A6495.jpg" />
        </Box>
        <Box>
          <Image width="100%" pt={0} src="static/FT6A6495.jpg" />
        </Box>
      </Flex>
    </Box>
  </Wrapper>
)
export default DetailLeft
