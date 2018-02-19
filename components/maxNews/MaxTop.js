import ThumbnailRight from '../thumbnail/ThumbnailRight'
import styled from 'styled-components'
import color from '../commons/vars'
import { Media, Subhead, Image, Flex, Box, Text, Button, Link } from 'rebass'
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
  ${media.ipadpro`
  width: 45%;
  padding: 5px 10%;
  margin-left: 44%;
  font-size: 0.8em;
  margin-top: 10px;
  `} ${media.ipad`
  width: 40%;
  padding: 5px 10%;
  margin-left: 52%;
  font-size: 0.9em;
  margin-top: 10px;
  `} ${media.phone`
  width: 63%;
  padding: 5px 10%;
  margin-left: 37%;
  font-size: 0.8em;
  margin-top: 10px;
  `} ${media.iphone5`
  width: 75%;
  padding: 5px 10%;
  margin-left: 24%;
  font-size: 0.7em;
  margin-top: 0px;
  `};
`
const Text1 = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 1.5em;
  padding-top: 20rem;
  font-family: Helvetica, Arial, sans-serif;
  ${media.ipadpro`padding-top: 18rem;`};
  ${media.ipad`padding-top: 20rem;`};
  ${media.phone`padding-top: 4rem;font-size: 1em;`};
  ${media.iphone5`font-size: 0.7em;padding: 8px 8%;padding-top: 3rem;`};
`
const Text2 = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 0.9em;
  font-family: Helvetica, Arial, sans-serif;
  ${media.ipadpro`padding-top: 1rem;`};
  ${media.ipad`padding-top: 1rem;`};
  ${media.phone`font-size: 0.8em;padding-top: 1rem;`};
  ${media.iphone5`font-size: 0.7em;padding: 8px 8%;padding-top: 0rem;`};
`
const Date = styled.div`
  color: ${color.yellow};
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
  ${media.ipadpro`padding-top: 1rem;`};
  ${media.ipad`padding-top: 1rem;`};
  ${media.phone`padding-top: 1rem;`};
  ${media.iphone5`font-size: 0.7em;padding-top: 0.4rem;padding-left: 1.7em;`};
`
const Select = styled.select`
  width: 9em;
  height: 2.4em;
  font-size: 1em;
`

const AllShow = styled.select`
  width: 17.8em;
  height: 2.4em;
  font-size: 1em;
  ${media.ipadpro`font-size: 0.8em`};
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
const MaxTop = (props) => (
  <Wrapper>
    <Box pl="1rem" pr="1rem" width={1}>
      <Flex>
        <Box width={1}>
          <Flex wrap>
            <Box
              pt="2em"
              pb={['0em', '0em', '1em', '1em', '1em']}
              width={[12 / 12, 12 / 12, 7 / 12, 8 / 12, 9 / 12]}
            >
              <Text color="red" bold children="MAX NEWS" fontSize="1.5em" />
            </Box>
            {/* <Box
              pt={['0.5rem', '1.5rem', '1.9rem', '2rem', '1.5rem']}
              pl={['0px', '0px', '65px', '90px', '0px']}
              pb={['1em', '1em', '0em', '0em', '0em']}
              w={[12 / 12, 12 / 12, 5 / 12, 4 / 12, 3 / 12]}
            >
              <AllShow>
                <option value="Filter the show">Search</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </AllShow>
            </Box> */}
          </Flex>
          <Flex wrap>
            <Box w={[12 / 12, 12 / 12, 12 / 12, 7 / 12, 7 / 12]}>
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
                    <Box pl="1rem" pr="1rem">
                      <Box w={[12 / 12, 12 / 12, 8 / 12, 8 / 12, 8 / 12]}>
                        <Text1>
                          {props.news[0].heading_en}
                          {/* Headline consectetur adipicing elit, sed do eiusmod
                          tempor */}
                        </Text1>
                      </Box>
                      <Box>
                        <Text2>
                          {props.news[0].article_en}
                          {/* Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec ut lectus turpis. Mauris cursus mollis
                          nisi. */}
                        </Text2>
                      </Box>
                      <Flex>
                        <Box w={5 / 12}>
                          <Date>
                            {props.news[0].createDate_en}
                            {/* Aug 11, 2017 */}
                          </Date>
                        </Box>
                        <Box w={7 / 12}>
                            <a href={`/maxnews_detail`}>
                              <Button1>Read more</Button1>
                            </a>
                        </Box>
                      </Flex>
                    </Box>
                  </WrapperHilightText>
                </Box>
              </WrapperHilight>
            </Box>
            <Box
              width={[12 / 12, 12 / 12, 12 / 12, 5 / 12, 5 / 12]}
              pl={['0%', '0%', '0%', '2%', '2%']}
            >
              <Flex pt={['1rem', '1rem', '2rem', '0rem', '0rem']}>
                  <a href={`/maxnews_detail`}>
                    <ThumbnailRight
                      w="100%"
                      img="static/maxPromo.jpg"
                      text1={props.news[0].heading_en}//"Headline Headline consect adipicing elit sedid"
                      text2={props.news[0].article_en}//"In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames."
                      date={props.news[0].createDate_en}//"Aug 11, 2017"
                    />
                  </a>
              </Flex>
              <Flex pt={['1rem', '1rem', '2rem', '3.5rem', '3.5rem']}>
                  <a href={`/maxnews_detail`}>
                    <ThumbnailRight
                      w="100%"
                      img="static/maxPromo.jpg"
                      text1={props.news[0].heading_en}//"Headline Headline consect adipicing elit sedid"
                      text2={props.news[0].article_en}//"In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames."
                      date={props.news[0].createDate_en}//"Aug 11, 2017"
                    />
                  </a>
              </Flex>
              <Flex pt={['1rem', '1rem', '2rem', '3.5rem', '3.5rem']}>
                  <a href={`/maxnews_detail`}>
                    <ThumbnailRight
                      w="100%"
                      img="static/maxPromo.jpg"
                      text1={props.news[0].heading_en}//"Headline Headline consect adipicing elit sedid"
                      text2={props.news[0].article_en}//"In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames."
                      date={props.news[0].createDate_en}//"Aug 11, 2017"
                    />
                  </a>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
    <style jsx>
      {`
        a:link {
          text-decoration: none;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        a:hover {
          color: #ff0000;
          text-decoration: none;
        }
      `}
    </style>
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
