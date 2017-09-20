import ThumbnailVideo from '../thumbnail/ThumbnailVideo'
import { Media, Subhead, Image, Flex, Box, Text } from 'rebass'

const UpNext = props => (
  <div>
    <Box pb="5%" ml="1rem" mr="1rem">
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
          <ThumbnailVideo
            img="static/maxPromo.jpg"
            name="The Battle Muay-Thai(4/4)"
            date="On air - Aug 11, 2017"
          />
        </Box>
        <Box width={1 / 35} />
        <Box width={8 / 35}>
          <ThumbnailVideo
            img="static/maxPromo.jpg"
            name="The Battle Muay-Thai(4/4)"
            date="On air - Aug 11, 2017"
          />
        </Box>
        <Box width={1 / 35} />
        <Box width={8 / 35}>
          <ThumbnailVideo
            img="static/maxPromo.jpg"
            name="The Battle Muay-Thai(4/4)"
            date="On air - Aug 11, 2017"
          />
        </Box>
        <Box width={1 / 35} />
        <Box width={8 / 35}>
          <ThumbnailVideo
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
