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
          <a href={`/videoPlayer`}>
            <ThumbnailVideo
              img="/static/FT6A6133.jpg"
              name="The Battle Muay-Thai(4/4)"
              date="On air - Aug 11, 2017"
              time="16.24"
            />
          </a>
        </Box>
        <Box width={1 / 35} />
        <Box width={8 / 35}>
          <a href={`/videoPlayer`}>
            <ThumbnailVideo
              img="/static/FT6A6483.jpg"
              name="The Battle Muay-Thai(3/4)"
              date="On air - Aug 11, 2017"
              time="16.24"
            />
          </a>
        </Box>
        <Box width={1 / 35} />
        <Box width={8 / 35}>
          <a href={`/videoPlayer`}>
            <ThumbnailVideo
              img="/static/FT6A6495.jpg"
              name="The Battle Muay-Thai(2/4)"
              date="On air - Aug 11, 2017"
              time="16.24"
            />
          </a>
        </Box>
        <Box width={1 / 35} />
        <Box width={8 / 35}>
          <a href={`/videoPlayer`}>
            <ThumbnailVideo
              img="/static/FT6A6676.jpg"
              name="The Battle Muay-Thai(1/4)"
              date="On air - Aug 11, 2017"
              time="16.24"
            />
          </a>
        </Box>
      </Flex>
    </Box>
    <style jsx>
      {`
        a:link {
          COLOR: #660000;
          TEXT-DECORATION: none;
        }
        a:visited {
          COLOR: #660000;
          TEXT-DECORATION: none;
        }
      `}
    </style>
  </div>
)
export default UpNext
