import ThumbnailVideo from '../thumbnail/ThumbnailVideo'
import { Media, Subhead, Image, Flex, Box, Text } from 'rebass'

const renderThumbnail = (lang, vod) => (
  <Box width={1 / 4} key={vod.id} px={2}>
    <ThumbnailVideo
      img={vod.thumbnailUrl}
      name={lang === 'en' ? vod.programName_en : vod.programName_th}
      date={lang === 'en' ? vod.onAirDateStr_en : vod.onAirDateStr_th}
      time={vod.duration}
      id={vod.id}
    />
  </Box>
)
const UpNext = ({ lang, name, vods, progname }) => {
  const relateVods = vods.filter(vod => vod.programName_en == progname)
  //console.log('ddddddddd', vods)
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
        <Flex>{relateVods.map(vod => renderThumbnail(lang, vod))}</Flex>
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
