import ThumbnailVideo from '../thumbnail/ThumbnailVideo'
import { Media, Subhead, Image, Flex, Box, Text } from 'rebass'

const renderVideos = (lang, vod) => {
  // console.log('dddddddwefw', vod)
  const rowVideos = []
  const rowCount = 4
  // Use splice on clone object, DONT MODIFY props
  for (let i = 0; i < rowCount && vod[i] != undefined; i++) {
    rowVideos.push(
      <Box width={1 / 4} key={vod[i].id} px={2}>
        <ThumbnailVideo
          img={vod[i].thumbnailUrl}
          name={lang === 'en' ? vod[i].programName_en : vod[i].programName_th}
          date={lang === 'en' ? vod[i].onAirDateStr_en : vod[i].onAirDateStr_th}
          time={vod.duration}
          id={vod[i].id}
        />
      </Box>
    )
  }
  return rowVideos
}
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
        <Flex>{renderVideos(lang, vods)}</Flex>
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
