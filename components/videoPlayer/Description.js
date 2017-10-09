import styled from 'styled-components'
import { Media, Subhead, Image, Flex, Box, Text } from 'rebass'

const H1 = styled.h1`margin: 0px;`
const P = styled.p`margin: 0px;`
const BackVideo = styled.div`
  padding-top: 6px;
  padding-bottom: 6px;
`
const Description = ({ vod }) => (
  <div className="Description">
    <Flex pl="1rem">
      <Box width={1 / 12} pt="2%" mr="2%">
        <Image width="100%" src="/static/logoinvidoplayer.jpg" />
      </Box>
      <Box width={9 / 12} pb={1} pt={3}>
        <h2>
          <b>{vod.title}</b>
        </h2>
      </Box>
    </Flex>
    <Flex pl="1rem" pr="1rem">
      <Box width={5 / 12}>
        <div className="livetelecom">
          <h4>
            <b>Live telecast on {vod.channel}</b>
            <br />
            <b>{vod.onAirDate}</b>
          </h4>
        </div>
      </Box>
      <Box width={7 / 12} pl="46%">
        <div className="Share">
          {/* <h4>
            <b>Share on</b>
          </h4> */}
        </div>
      </Box>
      {/* <ShareOn />
      <ShareOn /> */}
      {/* <LogoFooter />
      <LogoFooter />
      <LogoFooter />
      <LogoFooter />
      <LogoFooter />
      <LogoFooter /> */}
      {/* <Box width={1} />
      <Box width={1} /> */}
    </Flex>
    <Box width={1} pb={3} pl="1rem" pr="1rem">
      <hr size="0.1" />
    </Box>
    <Box width={1} pb={3} pl="1rem" pr="1rem">
      <P>{vod.descriptionEn}</P>
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
)

const ShareOn = props => (
  <Box w={1 / 12}>
    <Image
      width={59}
      src="/static/facebookLogo.png"
      pt={2}
      pb={4}
      //m={1}
    />
  </Box>
)
export { Description }
