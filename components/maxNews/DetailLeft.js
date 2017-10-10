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
  //font-weight: 700;
  font-size: 0.9em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text3 = styled.div`
  color: ${color.blue};
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text4 = styled.div`
  color: ${color.black};
  font-weight: 700;
  font-size: 0.9em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text5 = styled.div`
  color: ${color.black};
  //font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Date = styled.div`
  color: ${color.lightBlue};
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Gender = styled.select`
  //width: 3.5em;
  height: 2.2em;
  font-size: 0.8em;
  margin-bottom: 1rem;
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
    <Box pt="2rem" pl="1rem" pr="1rem" width={1}>
      <Box>
        <Text1>
          Headline consectetur adipicing elit, sed do eiusmod tempor consectetur
          adipicing elit
        </Text1>
      </Box>
      <Box>
        <br />
        <Date>Aug 11, 2017</Date>
        <br />
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
      <Box pt="2rem">
        <Text2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Text2>
        <br />
        <Text2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum."
        </Text2>
        <br />
      </Box>
      <Flex>
        <Box w={2 / 12}>
          <Text3>Share on</Text3>
        </Box>
        <Box w={1 / 12}>
          <Image width="90%" pt={0} src="static/FT6A6495.jpg" />
        </Box>
        <Box ml="0.5rem" w={1 / 12}>
          <Image width="90%" pt={0} src="static/FT6A6495.jpg" />
        </Box>
      </Flex>
      <Flex pl="1rem" pt="2rem">
        <Box w={6 / 12}>
          <Text4>184082 Comments</Text4>
        </Box>
        <Box w={6 / 12}>
          <Flex>
            <Box pr="0.5rem">
              <Text5>Sort by</Text5>
            </Box>
            <Box>
              <Gender>
                <option value="Select your gender">Top</option>
              </Gender>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  </Wrapper>
)
export default DetailLeft
