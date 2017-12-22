import ThumbnailVideo from '../thumbnail/ThumbnailVideo'
import { Media, Subhead, Image, Flex, Box, Text } from 'rebass'

const renderThumbnail = vod => (
  <Box width={1 / 4} key={vod.id} px={2}>
    <ThumbnailVideo
      img={vod.thumbnailUrl}
      name={vod.title_en}
      date={vod.onAirDateStr_en}
      time={vod.duration}
      id={vod.id}
    />
  </Box>
)
const UpNext = ({ name, vods, progname }) => {
  const relateVods = vods.filter(vod => vod.programName_en == progname)
  //console.log('ddddddddd', progname)
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
        <Flex>{relateVods.map(vod => renderThumbnail(vod))}</Flex>
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
