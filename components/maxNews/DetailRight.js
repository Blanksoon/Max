import ThumbnailMaxnew from '../thumbnail/ThumbnailMaxnew'
import styled from 'styled-components'
import vars from '../commons/vars'
import { Media, Subhead, Image, Flex, Box, Text, Button } from 'rebass'
import FacebookProvider, { Comments, Like, Share } from 'react-facebook'

const Wrapper = styled.div`background-color: #fff;`
const Text3 = styled.div`
  color: ${vars.blue};
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const DetailRight = props => (
  <Wrapper>
    <Box pl="1rem" pr="1rem">
      <Flex>
        <Box w={[4 / 12, 3 / 12, 1.5 / 12, 1.5 / 12, 1.5 / 12]} pt="0.5rem">
          <Text3>Share on</Text3>
        </Box>
        <Box w={[1 / 12, 0.6 / 12, 0.6 / 12, 0.6 / 12, 0.6 / 12]}>
          <FacebookProvider appId="135776387080938">
            <Share
              href={`https://www.maxmuaythai.com/maxnew_detail?id${props.news
                ._id}`}
            >
              <Image width="100%" pt={0} src="static/ic_facebook@2x.png" />
            </Share>
          </FacebookProvider>
        </Box>
        {/* <Box ml="0.5rem" w={[1 / 12, 0.6 / 12, 0.6 / 12, 0.6 / 12, 0.6 / 12]}>
          <Image width="100%" pt={0} src="static/ic_share_twitter.png" />
        </Box> */}
      </Flex>
      <Box>
        <FacebookProvider appId="135776387080938">
          <Comments
            href={`
            https://www.maxmuaythai.com/maxnew_detail?id${props.news._id}`}
          />
        </FacebookProvider>
      </Box>
    </Box>
  </Wrapper>
)

export default DetailRight
