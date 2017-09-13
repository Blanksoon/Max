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
          <Link>
            <a href={`/videoPlayer`}>
              <ThumbnailBottom
                img="static/maxPromo.jpg"
                name="The Battle Muay-Thai(4/4)"
                date="On air - Aug 11, 2017"
                time="16:24"
                bg="#021e3d"
              />
            </a>
          </Link>
        </Box>
        <Box width={1 / 35} />
        <Box width={8 / 35}>
          <Link>
            <a href={`/videoPlayer`}>
              <ThumbnailBottom
                img="static/maxPromo.jpg"
                name="The Battle Muay-Thai(3/4)"
                date="On air - Aug 11, 2017"
                time="16:24"
                bg="#021e3d"
              />
            </a>
          </Link>
        </Box>
        <Box width={1 / 35} />
        <Box width={8 / 35}>
          <Link>
            <a href={`/videoPlayer`}>
              <ThumbnailBottom
                img="static/maxPromo.jpg"
                name="The Battle Muay-Thai(2/4)"
                date="On air - Aug 11, 2017"
                time="16:24"
                bg="#021e3d"
              />
            </a>
          </Link>
        </Box>
        <Box width={1 / 35} />
        <Box width={8 / 35}>
          <Link>
            <a href={`/videoPlayer`}>
              <ThumbnailBottom
                img="static/maxPromo.jpg"
                name="The Battle Muay-Thai(1/4)"
                date="On air - Aug 11, 2017"
                time="16:24"
                bg="#021e3d"
              />
            </a>
          </Link>
        </Box>
      </Flex>
    </Box>
    <style jsx>
      {`
        a:link {
        }
        a {
          color: #fff;
          TEXT-DECORATION: none;
        }
        a:hover {
          COLOR: #ff0000;
          TEXT-DECORATION: none;
        }
      `}
    </style>
  </div>
)
export default latest_video
