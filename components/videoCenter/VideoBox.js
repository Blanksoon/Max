import styled from 'styled-components'
import ThumbnailVideo from '../thumbnail/ThumbnailVideo'
import { Flex, Box, Image, Button, Text } from 'rebass'

const BackgroundImage = styled.div`
  background: '../../static/3.png';
  background-repeat: no-repeat;
  background-position: center;
`

const VideoBox = () => (
  <div>
    <Flex mb={3}>
      <Box w={6 / 12} bg="#022246" mr="1em">
        <div className="gradient">
          <Box w={12 / 12}>
            <Image width="100%" pt={0} src="static/FT6A2278.jpg" />
          </Box>
          <Box w={12 / 12} pl="20px">
            <Text color="#57b1fe" bold children="HILIGHT" fontSize="1em" />
            <Text
              pt="5px"
              color="#fff"
              bold
              children="Max Ultimate Tournament:Epic fight"
              fontSize="1.5em"
            />
            <Text
              color="#fff"
              bold
              children="&quot;Double knockdow&quot;"
              fontSize="1.5em"
            />
            <Flex>
              <Box w={6 / 12}>
                <Text
                  pt="15px"
                  pb="15px"
                  left
                  color="#f7f704"
                  bold
                  children="On air-Aug11,2017"
                  fontSize="0.9em"
                />
              </Box>
              <Box w={6 / 12}>
                <Text
                  pt="15px"
                  pb="15px"
                  pr="15px"
                  right
                  color="#f7f704"
                  bold
                  children="24.51"
                  fontSize="0.9em"
                />
              </Box>
            </Flex>
          </Box>
        </div>
      </Box>

      <Box w={6 / 12}>
        <Flex>
          <Box w={6 / 12} pr="7.5px" pb="7.5px">
            <ThumbnailVideo
              img="static/FT6A6133.jpg"
              name="MAX Ultimate Tournament & MAX World Champions (4/4)"
              date="On air - Aug 11, 2017"
            />
          </Box>
          <Box w={6 / 12} pl="7.5px" pb="7.5px">
            <ThumbnailVideo
              img="static/FT6A6483.jpg"
              name="MAX Ultimate Tournament & MAX World Champions (3/4)"
              date="On air - Aug 11, 2017"
            />
          </Box>
        </Flex>
        <Flex>
          <Box w={6 / 12} pr="7.5px" pt="7.5px">
            <ThumbnailVideo
              img="static/FT6A6495.jpg"
              name="MAX Ultimate Tournament & MAX World Champions (2/4)"
              date="On air - Aug 11, 2017"
            />
          </Box>
          <Box w={6 / 12} pl="7.5px" pt="7.5px">
            <ThumbnailVideo
              img="static/FT6A6676.jpg"
              name="MAX Ultimate Tournament & MAX World Champions (1/4)"
              date="On air - Aug 11, 2017"
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
    <RowVideo />
    <RowVideo />
    <RowVideo />
    <Box w={12 / 12} pb="3%" pt="2%">
      <center>
        <button className="button-hunger">Hunger for more</button>
      </center>
    </Box>
    <style jsx>
      {`
        .backgroundx {
          color: #ffffff;
          background-image: url('static/FT6A2278.jpg');
        }
        .button {
          background-color: red;
          border: none;
          color: white;
          padding: 8px 25px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-weight: 700;
          font-family: Helvetica, Arial, sans-serif;
        }
        .button-hunger {
          background-color: white;
          border: 1px solid red;
          color: red;
          padding: 8px 25px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-weight: 700;
          font-family: Helvetica, Arial, sans-serif;
        }
        .text-left {
          float: left;
        }
        .text-right {
          float: right;
        }
        .gradient {
          background: -moz-linear-gradient(
            top,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 100%
          ); /* FF3.6-15 */
          background: -webkit-linear-gradient(
            top,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 100%
          ); /* Chrome10-25,Safari5.1-6 */
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 100%
          ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: progid:DXImageTransform.Microsoft.gradient(
              startColorstr='#00000000',
              endColorstr='#000000',
              GradientType=0
            ); /* IE6-9 */
        }
      `}
    </style>
  </div>
)

const RowVideo = () => (
  <Flex mb={3}>
    <Box w={6 / 12} mr="1em">
      <Flex>
        <Box w={6 / 12} pr="7.5px">
          <ThumbnailVideo
            img="static/FT6A6133.jpg"
            name="The Battle Muay-Thai(4/4)"
            date="On air - Aug 11, 2017"
          />
        </Box>
        <Box w={6 / 12} pl="7.5px">
          <ThumbnailVideo
            img="static/FT6A6483.jpg"
            name="The Battle Muay-Thai(3/4)"
            date="On air - Aug 11, 2017"
          />
        </Box>
      </Flex>
    </Box>
    <Box w={6 / 12}>
      <Flex>
        <Box w={6 / 12} pr="7.5px">
          <ThumbnailVideo
            img="static/FT6A6495.jpg"
            name="The Battle Muay-Thai(2/4)"
            date="On air - Aug 11, 2017"
          />
        </Box>
        <Box w={6 / 12} pl="7.5px">
          <ThumbnailVideo
            img="static/FT6A6676.jpg"
            name="The Battle Muay-Thai(1/4)"
            date="On air - Aug 11, 2017"
          />
        </Box>
      </Flex>
    </Box>
  </Flex>
)
export { VideoBox }
