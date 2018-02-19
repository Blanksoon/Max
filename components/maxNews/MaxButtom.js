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
const MaxButtom = () => (
  <Wrapper>
    <Box pl="1rem" pr="1rem" width={1}>
      <Flex>
        <Box>
          <Flex pt="2rem" />
          <Thumbnailright />
          <Thumbnailright />
          <Thumbnailright />
          <Thumbnailright />
          <Thumbnailright />
          <Thumbnailright />
          <Flex>
            <Box w={1} pt="40px" pb="60px">
              <center>
                <button className="button-hunger">Hunger for more</button>
              </center>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  </Wrapper>
)
export default MaxButtom

const Thumbnailright = props => (
  <Flex pt="1rem">
    <Box w={6 / 12} pr="0.5em">
      <ThumbnailRight
        w="100%"
        img="static/maxPromo.jpg"
        text1="Headline Headline consect adipicing elit sedid"
        text2="In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames."
        date="Aug 11, 2017"
        pt="0.9em"
      />
    </Box>
    <Box w={6 / 12} pl="0.5em">
      <ThumbnailRight
        w="100%"
        img="static/maxPromo.jpg"
        text1="Headline Headline consect adipicing elit sedid"
        text2="In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames."
        date="Aug 11, 2017"
        pt="0.9em"
      />
    </Box>
  </Flex>
)
