import ThumbnailBottom from '../thumbnail/ThumbnailBottom'
import Link from 'next/link'
import { Media, Subhead, Image, Flex, Box, Text } from 'rebass'

const latest_video = props => (
  <div>
    <Box pb="5%">
      <Flex>
        <Box width={1}>
          <h3>
            {props.name}
            {/* <hr /> */}
          </h3>
        </Box>
      </Flex>
      <Flex>
        <Box width={8 / 35}>
          <a href="#">
            <ThumbnailBottom
              img="static/maxPromo.jpg"
              name="The Battle Muay-Thai(4/4)"
              date="On air - Aug 11, 2017"
            />
          </a>
        </Box>
        <Box width={1 / 35} />
        <Box width={8 / 35}>
          <Link href={`/videoPlayer`}>
            <a>
              <ThumbnailBottom
                img="static/maxPromo.jpg"
                name="The Battle Muay-Thai(4/4)"
                date="On air - Aug 11, 2017"
              />
            </a>
          </Link>
        </Box>
        <Box width={1 / 35} />
        <Box width={8 / 35}>
          <a href="#">
            <ThumbnailBottom
              img="static/maxPromo.jpg"
              name="The Battle Muay-Thai(4/4)"
              date="On air - Aug 11, 2017"
            />
          </a>
        </Box>
        <Box width={1 / 35} />
        <Box width={8 / 35}>
          <a href="#">
            <ThumbnailBottom
              img="static/maxPromo.jpg"
              name="The Battle Muay-Thai(4/4)"
              date="On air - Aug 11, 2017"
            />
          </a>
        </Box>
      </Flex>
    </Box>
  </div>
)
export default latest_video
