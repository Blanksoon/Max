import styled from 'styled-components'
import { Media, Subhead, Image, Flex, Box, Text, Provider } from 'rebass'
import { media, theme } from '../../tools/responsive'
import color from '../commons/vars'
import ModalButton from '../../containers/ModalButton'
import ModalImg from '../../containers/ModalImg'

const H1 = styled.h1`margin: 0px;`
const P = styled.p`
  margin: 0px;
  ${media.phone`font-size: 0.9em;`};
  ${media.iphone5`font-size: 0.8em;`};
`
const BackVideo = styled.div`
  padding-top: 6px;
  padding-bottom: 6px;
`
const HeadDesctiption = styled.div`
  font-size: 22px;
  font-weight: bold;
  ${media.phone`font-size: 0.9em;`};
  ${media.iphone5`font-size: 0.8em;`};
`
const ButtonPromoClip = styled.button`
  background-color: white;
  border: 1px solid ${props => props.color.red};
  padding: 8px 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
  font-size: 14px;
  font-family: Helvetica, Arial, sans-serif;
  color: ${props => props.color.red};
  cursor: pointer;
`
const LiveTelecom = styled.div`
  color: ${props => props.color.red};
  ${media.phone`font-size: 0.9em;`};
  ${media.iphone5`font-size: 0.8em;`};
`

const LiveDescription = ({ lang, common, live }) => (
  <div className="liveDescription">
    <Provider theme={theme}>
      <Flex pt="1.5rem">
        <Box
          w={[9.5 / 12, 9.5 / 12, 9 / 12, 9 / 12, 9 / 12]}
          ml={['1rem', '1rem', '1rem', '1rem', '1rem']}
        >
          <Flex pt={['0rem', '0rem', '1rem', '1rem', '1rem']}>
            <Box //logo
              width={[2 / 12, 2 / 12, 1 / 12, 1 / 12, 1 / 12]}
              mr={['0.5rem', '0.5rem', '1rem', '1rem', '1rem']}
            >
              <Image width="100%" src={live.logoUrl} />
            </Box>
            <Box
              width={[10 / 12, 10 / 12, 11 / 12, 11 / 12, 11 / 12]}
              mr={['0.5em', '0.3em', '0em', '0em', '0em']}
              pb={['0.5rem', '1rem', '1rem', '1rem', '1rem']}
            >
              <HeadDesctiption>
                {lang === 'en' ? live.liveDateStr_en : live.liveDateStr_th}
              </HeadDesctiption>
            </Box>
          </Flex>
          <Flex
            pr={['0%', '0%', '5%', '5%', '5%']}
            pt={['0.2rem', '0.3rem', '1rem', '1rem', '1rem']}
            pb={['0.1rem', '0.6rem', '0.6rem', '0.6rem', '0.6rem']}
          >
            <Box w={[12 / 12, 12 / 12, 5 / 12, 5 / 12, 5 / 12]}>
              <LiveTelecom color={color}>
                <b>
                  {common.Livetelecaston}
                  {lang === 'en' ? live.title_en : live.title_th}
                </b>
                <br />
                <b>{lang === 'en' ? live.shortDesc2_en : live.shortDesc2_en}</b>
              </LiveTelecom>
            </Box>
            <Box
              w={[0, 0, 7 / 12, 7 / 12, 7 / 12]}
              pl={['10%', '10%', '46%', '46%', '46%']}
            >
              <div className="Share">
                {/* <h4>
            <b>Share on</b>
          </h4> */}
              </div>
            </Box>
          </Flex>
          <Box width={1} pb={[0.6, 1, 3, 3, 3]} pr="5%">
            <hr size="0.1" />
          </Box>
          <Box width={1} pb={['10px', 3, 3, 3, 3]} pr="5%">
            <P>{lang === 'en' ? live.desc_en : live.desc_en}</P>
          </Box>
          <ModalButton
            buttonID={2}
            modalType={1}
            modalURL={live.promoUrl}
            text={common.WatchPromoClip}
          />
          {/* <ButtonPromoClip color={color}>Watch Promo Clip</ButtonPromoClip> */}
        </Box>
        <Box
          w={[2.5 / 12, 2.5 / 12, 3 / 12, 3 / 12, 3 / 12]}
          mr={['0.5rem', '0.5rem', '1rem', '1rem', '1rem']}
        >
          <Box
            w={[12 / 12, 12 / 12, 12 / 12, 12 / 12, 12 / 12]}
            pt={['0rem', '0rem', '1rem', '1rem', '1rem']}
          >
            <ModalImg
              modalType={2}
              modalURL={live.fightcardUrl}
              w="100%"
              img={live.fightcardUrl}
            />
          </Box>
        </Box>
      </Flex>
      <style jsx>
        {`
          .Share {
            color: #bb2121;
          }
        `}
      </style>
    </Provider>
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
export { LiveDescription }
