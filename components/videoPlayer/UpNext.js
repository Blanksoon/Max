import ThumbnailVideo from '../thumbnail/ThumbnailVideo'
import { Media, Subhead, Image, Flex, Box, Text } from 'rebass'

const UpNext = ({ name, vods, progname }) => {
  const relateVods = vods.filter(vod => vod.programName_en == progname)
  console.log(relateVods[0].thumbnailUrl)
  return (
    <div>
      <Box pb="5%" ml="1rem" mr="1rem">
        <Flex>
          <Box width={1} color="red">
            <h2>
              {name}
              {/* <hr /> */}
            </h2>
          </Box>
        </Flex>
        <Flex>
          <Box width={8 / 35}>
            <ThumbnailVideo
              img={relateVods[0].thumbnailUrl}
              name={relateVods[0].title_en}
              date={relateVods[0].onAirDateStr_en}
              time={relateVods[0].duration}
              id={relateVods[0].id}
            />
          </Box>
          <Box width={1 / 35} />
          <Box width={8 / 35}>
            <ThumbnailVideo
              img={relateVods[1].thumbnailUrl}
              name={relateVods[1].title_en}
              date={relateVods[1].onAirDateStr_en}
              time={relateVods[1].duration}
              id={relateVods[1].id}
            />
          </Box>
          <Box width={1 / 35} />
          <Box width={8 / 35}>
            <ThumbnailVideo
              img={relateVods[2].thumbnailUrl}
              name={relateVods[2].title_en}
              date={relateVods[2].onAirDateStr_en}
              time={relateVods[2].duration}
              id={relateVods[2].id}
            />
          </Box>
          <Box width={1 / 35} />
          <Box width={8 / 35}>
            <ThumbnailVideo
              img={relateVods[3].thumbnailUrl}
              name={relateVods[3].title_en}
              date={relateVods[3].onAirDateStr_en}
              time={relateVods[3].duration}
              id={relateVods[3].id}
            />
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
}
export default UpNext
