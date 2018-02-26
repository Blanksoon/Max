import ThumbnailRight from '../thumbnail/ThumbnailRight'
import styled from 'styled-components'
import color from '../commons/vars'
import { Media, Subhead, Image, Flex, Box, Text, Button ,Link} from 'rebass'

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
const MaxButtom = (props) => (
  <Wrapper>
    <Box pl="1rem" pr="1rem" width={1}>
      <Flex>
        <Box>
          <Flex pt={['0rem', '0rem', '0rem', '2rem', '2rem']} />
          <Thumbnailright news1={props.news[4]} news2={props.news[5]}/>
          <Thumbnailright news1={props.news[6]} news2={props.news[7]}/>
          <Thumbnailright news1={props.news[8]} news2={props.news[9]}/>
          {/* <Thumbnailright /> */}
          {/* <Thumbnailright /> */}
          {/* <Thumbnailright /> */}
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
  // console.log('ddddddddFWEF',props.news1),
  <Flex pt={['1rem', '1rem', '2rem', '1rem', '1rem']} wrap>
    <Box
      w={[12 / 12, 12 / 12, 12 / 12, 6 / 12, 6 / 12]}
      pr={['0em', '0em', '0em', '0.5em', '0.5em']}
    >
        <a href={`/maxnews_detail`}>
          <ThumbnailRight
            w="100%"
            img="static/maxPromo.jpg"
            text1={props.lang==='en'?props.news1.heading_en:props.news1.heading_th}//"Headline Headline consect adipicing elit sedid"
            text2={props.lang==='en'?props.news1.article_en:props.news1.article_th}//"In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames."
            date={props.lang==='en'?props.news1.createDate_en:props.news1.createDate_th}//"Aug 11, 2017"
            pt="0.9em"
          />
        </a>
    </Box>
    <Box
      w={[12 / 12, 12 / 12, 12 / 12, 6 / 12, 6 / 12]}
      pt={['1em', '1em', '2em', '0em', '0em']}
      pl={['0em', '0em', '0em', '0.5em', '0.5em']}
    >
        <a href={`/maxnews_detail`}>
          <ThumbnailRight
            w="100%"
            img="static/maxPromo.jpg"
            text1={props.news2.heading_en}//"Headline Headline consect adipicing elit sedid"
            text2={props.news2.article_en}//"In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames."
            date={props.news2.createDate_en}//"Aug 11, 2017"
            pt="0.9em"
          />
        </a>
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
  </Flex>
)
