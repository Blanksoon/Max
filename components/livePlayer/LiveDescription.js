import { LogoFooter } from '../home/Footer'
import styled from 'styled-components'
import { Media, Subhead, Image, Flex, Box, Text } from 'rebass'
import color from '../commons/vars'

const H1 = styled.h1`margin: 0px;`
const P = styled.p`margin: 0px;`
const BackVideo = styled.div`
  padding-top: 6px;
  padding-bottom: 6px;
`
const HeadDesctiption = styled.div`
  font-size: 22px;
  font-weight: bold;
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

const LiveTelecom = styled.div`color: ${props => props.color.red};`
const LiveDescription = () => (
  <div className="liveDescription">
    <Flex>
      <Box w={9 / 12} ml="1rem">
        <Flex pt="1rem">
          <Box width={1 / 12} mr="1rem">
            <Image width="100%" src="/static/logoinvidoplayer.jpg" />
          </Box>
          <Box width={11 / 12} pb="1rem">
            <HeadDesctiption>
              Max Ultimate Tournament &MAX World Champions <br />
              7 International Fights(1/4)
            </HeadDesctiption>
          </Box>
        </Flex>
        <Flex pr="5%" pt="1rem" pb="0.6rem">
          <Box width={5 / 12}>
            <LiveTelecom color={color}>
              <b>Live telecast on Channel 8</b>
              <br />
              <b>every Sunday 7.20 - 9.50pm</b>
            </LiveTelecom>
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
        <Box width={1} pb={3} pr="5%">
          <hr size="0.1" />
        </Box>
        <Box width={1} pb={3} pr="5%">
          <P>
            On sait depuis longtemps que travailler avec du texte lisible et
            contenant du sens est source de distractions, et empêche de se
            concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum
            sur un texte générique comme 'Du texte. Du texte. Du texte.' est
            qu'il possède une distribution de lettres plus ou moins normale, et
            en tout cas comparable avec celle du français standard. De
            nombreuses suites logicielles de mise en page ou éditeurs de sites
            Web ont fait du Lorem Ipsum leur faux texte par défaut, et une
            recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites
            qui n'en sont encore qu'à leur phase de construction. Plusieurs
            versions sont apparues avec le temps, parfois par accident, souvent
            intentionnellement (histoire d'y rajouter de petits clins d'oeil,
            voire des phrases embarassantes).
          </P>
        </Box>
        <ButtonPromoClip color={color}>Watch Promo Clip</ButtonPromoClip>
      </Box>
      <Box w={3 / 12} mr="1rem">
        <Box w={12 / 12} pt="1rem">
          <Image
            width="100%"
            src="../static/DailyFightcard 12092017 .jpg"
            height="100%"
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
