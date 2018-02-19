import ThumbnailRight from '../thumbnail/ThumbnailRight'
import styled from 'styled-components'
import color from '../commons/vars'
import { Media, Subhead, Image, Flex, Box, Text, Button } from 'rebass'
import FacebookProvider, { Comments } from 'react-facebook'
import ThumbnailMaxnew from '../thumbnail/ThumbnailMaxnew'
import { media } from '../../tools/responsive'

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
  ${media.iphone5`font-size: 1em;`};
`
const Text2 = styled.div`
  color: ${color.black};
  //font-weight: 700;
  font-size: 0.9em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text3 = styled.div`
color: ${color.red};
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
  position: relative;
`
const WrapperLogo = styled.div`
  cursor: pointer;
  top: 0px;
  left: 90%;
  width: 100%;
  height: 100%;
  position: absolute;
`
const Wrapper = styled.div`background-color: #fff;`
const DetailLeft = () => (
  <Wrapper>
    <Flex pl="1rem" pr="1rem" wrap>
      <Box w={[12/12, 12/12, 12/12, 8/12, 8/12]}>
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
            <Box>
              <Image width="100%" pt={0} src="static/FT6A6495.jpg" />
              {/* <WrapperLogo>
                <Image width="10%" pt={0} src="static/img_logo_white@2x.png" />
              </WrapperLogo> */}
            </Box>
            <Box>
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
      </Box>
      <Box w={[12/12, 12/12, 12/12, 4/12, 4/12]} 
      pl={["0rem", "0rem", "0rem", "6rem", "6rem"]} 
      pr={["0rem", "0rem", "0rem", "1rem", "1rem"]}>
        <Box>
          <Text3>You may also like</Text3>
        </Box>
        <Flex wrap>
          <Box w={[1/3, 1/3, 1/3, 1, 1]} pt={["1rem", "1rem", "1rem", "2rem", "2rem"]}>
            <ThumbnailMaxnew
              img="static/FT6A6495.jpg"
              name="Headline Headline consect adipicing elit sedid"
              text="incldidunt ut labore et dolore magna atiqua. Ut emim ad minim veniam, quis nostrud exercitation ullamco..."
              date="Aug 11, 2"
            />
          </Box>
          <Box w={[1/3, 1/3, 1/3, 1, 1]} pt={["1rem", "1rem", "1rem", "2rem", "2rem"]}>
            <ThumbnailMaxnew
              img="static/FT6A6495.jpg"
              name="Headline Headline consect adipicing elit sedid"
              text="incldidunt ut labore et dolore magna atiqua. Ut emim ad minim veniam, quis nostrud exercitation ullamco..."
              date="Aug 11, 2"
            />
          </Box>
          <Box w={[1/3, 1/3, 1/3, 1, 1]} pt={["1rem", "1rem", "1rem", "2rem", "2rem"]}>
            <ThumbnailMaxnew
              img="static/FT6A6495.jpg"
              name="Headline Headline adipicing elit sedid"
              text="incldidunt ut labore et dolore magna atiqua. Ut emim ad minim veniam, quis nostrud exercitation ullamco..."
              date="Aug 11, 2"
            />
          </Box>
        </Flex>
      </Box>
      {/* <Flex>
        <Box w={1.5 / 12} pt="0.5rem">
          <Text3>Share on</Text3>
        </Box>
        <Box w={0.6 / 12}>
          <Image width="100%" pt={0} src="static/ic_facebook.png" />
        </Box>
        <Box ml="0.5rem" w={0.6 / 12}>
          <Image width="100%" pt={0} src="static/ic_share_twitter.png" />
        </Box>
      </Flex>
      <Box>
        <FacebookProvider appId="135776387080938">
          <Comments href="http://localhost:8080/maxnew_detail" />
        </FacebookProvider>
      </Box> */}
    </Flex>
  </Wrapper>
)
export default DetailLeft
