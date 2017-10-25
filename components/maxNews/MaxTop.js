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
  color: #fff;
  font-weight: 700;
  font-size: 1.5em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text2 = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 0.9em;
  font-family: Helvetica, Arial, sans-serif;
`
const Date = styled.div`
  color: ${color.yellow};
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Select = styled.select`
  width: 9em;
  height: 2.4em;
  font-size: 1em;
`

const AllShow = styled.select`
  width: 18em;
  height: 2.4em;
  font-size: 1em;
`
const WrapperHilight = styled.div`
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
    rgba(1, 33, 71, 0.95) 85%,
    rgba(1, 33, 71, 0.97) 100%
  ); /* Chrome10-25,Safari5.1-6 */
`
const Wrapper = styled.div`background-color: #fff;`
const MaxTop = () => (
  <Wrapper>
    <Box pl="1rem" pr="1rem" width={1}>
      <Flex>
        <Box width={1}>
          <Flex>
            <Box pt="2em" pb="1em" width={1}>
              <Text color="red" bold children="MAX NEWS" fontSize="1.5em" />
            </Box>
            <Box pt="1.5rem">
              <AllShow>
                <option value="Filter the show">Search</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </AllShow>
            </Box>
          </Flex>
          <Flex>
            <Box w={7 / 12}>
              <WrapperHilight>
                <Box w={12 / 12} className="imagesss">
                  <Image width="100%" pt={0} src="static/FT6A6495.jpg" />
                </Box>
                <Box w={12 / 12} pl="20px">
                  <WrapperHilightText>
                    <Image
                      width="10%"
                      pl="90%"
                      src="static/img_logo_white@2x.png"
                    />
                    <Box pt="18rem" pl="1rem" pr="1rem">
                      <Box w={8 / 12}>
                        <Text1>
                          Headline consectetur adipicing elit, sed do eiusmod
                          tempor
                        </Text1>
                      </Box>
                      <Box pt="1rem">
                        <Text2>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec ut lectus turpis. Mauris cursus mollis
                          nisi.
                        </Text2>
                      </Box>
                      <Flex>
                        <Box w={5 / 12} pt="1rem">
                          <Date>Aug 11, 2017</Date>
                        </Box>
                        <Box w={7 / 12}>
                          <Button1>Read more</Button1>
                        </Box>
                      </Flex>
                    </Box>
                  </WrapperHilightText>
                </Box>
              </WrapperHilight>
            </Box>
            <Box width={5 / 12} ml="2%">
              <Flex>
                <ThumbnailRight
                  w="100%"
                  img="static/maxPromo.jpg"
                  text1="Headline Headline consect adipicing elit sedid"
                  text2="In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames."
                  date="Aug 11, 2017"
                />
              </Flex>
              <Flex pt="3.5rem">
                <ThumbnailRight
                  w="100%"
                  img="static/maxPromo.jpg"
                  text1="Headline Headline consect adipicing elit sedid"
                  text2="In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames."
                  date="Aug 11, 2017"
                />
              </Flex>
              <Flex pt="3.5rem">
                <ThumbnailRight
                  w="100%"
                  img="static/maxPromo.jpg"
                  text1="Headline Headline consect adipicing elit sedid"
                  text2="In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames."
                  date="Aug 11, 2017"
                />
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  </Wrapper>
)
export default MaxTop

const Thumbnailright = props => (
  <Flex pt="3rem">
    <Box w={6 / 12}>
      <ThumbnailRight
        w="100%"
        img="static/maxPromo.jpg"
        text1="Headline Headline consect adipicing elit sedid"
        text2="In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames."
        date="Aug 11, 2017"
      />
    </Box>
    <Box w={6 / 12}>
      <ThumbnailRight
        w="100%"
        img="static/maxPromo.jpg"
        text1="Headline Headline consect adipicing elit sedid"
        text2="In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames."
        date="Aug 11, 2017"
      />
    </Box>
  </Flex>
)
