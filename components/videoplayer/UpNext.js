import ThumbnailBottom from '../thumbnail/ThumbnailBottom'
import { Media, Subhead, Image, Link, Flex, Box, Text } from 'rebass'

const UpNext = props => (
  <div>
    <Box pb="5%" pl="5%" pr="5%">
      <Flex>
        <Box width={1} color="red">
          <h2>
            {props.name}
            {/* <hr /> */}
          </h2>
        </Box>
      </Flex>
      <Flex>
        <Box width={8 / 35}>
          <ThumbnailBottom
            img="static/maxPromo.jpg"
            name="The Battle Muay-Thai(4/4)"
            date="On air - Aug 11, 2017"
          />
        </Box>
        <Box width={1 / 35} />
        <Box width={8 / 35}>
          <ThumbnailBottom
            img="static/maxPromo.jpg"
            name="The Battle Muay-Thai(4/4)"
            date="On air - Aug 11, 2017"
          />
        </Box>
        <Box width={1 / 35} />
        <Box width={8 / 35}>
          <ThumbnailBottom
            img="static/maxPromo.jpg"
            name="The Battle Muay-Thai(4/4)"
            date="On air - Aug 11, 2017"
          />
        </Box>
        <Box width={1 / 35} />
        <Box width={8 / 35}>
          <ThumbnailBottom
            img="static/maxPromo.jpg"
            name="The Battle Muay-Thai(4/4)"
            date="On air - Aug 11, 2017"
          />
        </Box>
      </Flex>
    </Box>
  </div>
)
export default UpNext
