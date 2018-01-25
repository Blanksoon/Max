import ThumbnailVideo from '../thumbnail/ThumbnailVideo'
import { Media, Subhead, Image, Flex, Box, Text, Provider } from 'rebass'
import { media, theme } from '../../tools/responsive'
import styled from 'styled-components'
const Title = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  display: block;
  font-size: 1.5em;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  ${media.phone`font-size: 1em;`};
  ${media.iphone5`font-size: 0.9em;`};
`

const renderVideos = (lang, vod) => {
  // console.log('dddddddwefw', vod)
  const rowVideos = []
  const rowCount = 4
  // Use splice on clone object, DONT MODIFY props
  for (let i = 0; i < rowCount && vod[i] != undefined; i++) {
    rowVideos.push(
      <Box width={[2 / 4, 2 / 4, 1 / 4, 1 / 4, 1 / 4]} key={vod[i].id} px={2}>
        <ThumbnailVideo
          img={vod[i].thumbnailUrl}
          name={lang === 'en' ? vod[i].title_en : vod[i].title_th}
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
      <Provider theme={theme}>
        <Box pb={['5%', '5%', '5%', '5%', '5%']} ml="1rem" mr="1rem">
          <Flex>
            <Box width={1} color="red">
              <Title>
                {name}
                {/* <hr /> */}
              </Title>
            </Box>
          </Flex>
          <Flex wrap>{renderVideos(lang, vods)}</Flex>
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
      </Provider>
    </div>
  )
}
export default UpNext
