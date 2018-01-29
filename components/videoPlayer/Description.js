import styled from 'styled-components'
import { Media, Subhead, Image, Flex, Box, Text, Provider } from 'rebass'
import { media, theme } from '../../tools/responsive'

const H1 = styled.h1`margin: 0px;`
const P = styled.p`margin: 0px;`
const BackVideo = styled.div`
  padding-top: 6px;
  padding-bottom: 6px;
`
const Description = ({ lang, common, vod }) => (
  <Provider theme={theme}>
    <div className="Description">
      <Flex pl="1rem">
        <Box
          width={[3 / 12, 3 / 12, 1 / 12, 1 / 12, 1 / 12]}
          pt={['1.3em', '0.9em', '1.5em', '0.9em', '0.9em']}
          mr="2%"
        >
          <Image width="100%" src={vod.logoUrl} />
        </Box>
        <Box width={9 / 12} pb={1} pt={'1em'}>
          <h2>
            <b>{lang === 'en' ? vod.title_en : vod.title_th}</b>
          </h2>
        </Box>
      </Flex>
      <Flex pl="1rem" pr="1rem">
        <Box width={12 / 12}>
          <div className="livetelecom">
            <h4>
              <b>
                {common.ONAIR} -{' '}
                {lang === 'en' ? vod.onAirDateStr_en : vod.onAirDateStr_th}
              </b>
            </h4>
          </div>
        </Box>
      </Flex>
      <Box width={1} pb={3} pl="1rem" pr="1rem">
        <hr size="0.1" />
      </Box>
      <Box width={1} pb={3} pl="1rem" pr="1rem">
        <P>{lang === 'en' ? vod.desc_en : vod.desc_en}</P>
      </Box>
      <style jsx>
        {`
          .livetelecom {
            color: #175499;
          }
          .Share {
            color: #bb2121;
          }
        `}
      </style>
    </div>
  </Provider>
)

export { Description }
