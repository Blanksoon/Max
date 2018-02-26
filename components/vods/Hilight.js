import styled from 'styled-components'
import Link from 'next/link'
import { Image, Text, Provider } from 'rebass'
import vars from '../commons/vars'
import { media, theme } from '../../tools/responsive'

const Hilight = styled.a`
  display: block;
  margin: 3rem auto;
  position: relative;
  width: 640px;
  cursor: pointer;
  ${media.iphone7p`
  width: 382px;
  margin: 1.5rem auto;
  `};
  ${media.phone`
  width: 343px;
  margin: 1.5rem auto;
  `};
  ${media.iphone5`
  width: 288px;
  margin: 1.5rem auto;
  `};
`
const Gradient = styled.div`
  bottom: -5rem;
  height: 10rem;
  padding: 1rem;
  right: 0;
  width: 100%;
  position: absolute;
  background: -webkit-linear-gradient(
    top,
    rgba(1, 33, 71, 0.1) 0%,
    rgba(1, 33, 71, 1) 50%,
    rgba(1, 33, 71, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
`
const StickToBottom = styled.div`
  bottom: 1rem;
  position: absolute;
  width: 608px;
  ${media.phone`width: 343px;`};
  ${media.iphone5`width: 288px;`};
`
const OnAirInfo = styled.div`
  margin-top: 1rem;
  width: 100%;
  ${media.phone`width: 315px;`};
  ${media.iphone5`width: 258px;`};
`
const Left = styled.span`float: left;`
const Right = styled.span`float: right;`

export default ({ lang, common, hilight }) => {
  if (typeof hilight === 'undefined') {
    return null
  }
  return (
    <Provider>
      <Link as={`/vods/${hilight.id}`} href={`/videoPlayer?id=${hilight.id}`}>
        {/* <a> */}
        <Hilight>
          <Image
            width={['100%', '100%', '100%', '100%', '100%']}
            src={hilight.thumbnailUrl}
          />
          <Gradient>
            <StickToBottom>
              <Text color={vars.lightBlue} bold children={common.HILIGHT} />
              <Text
                pt="1rem"
                color={vars.white}
                bold
                children={lang === 'en' ? hilight.title_en : hilight.title_th}
                fontSize="1.3em"
              />
              <OnAirInfo>
                <Left>
                  <Text
                    color={vars.yellow}
                    bold
                    children={
                      lang === 'en' ? (
                        hilight.onAirDateStr_en
                      ) : (
                        hilight.onAirDateStr_en
                      )
                    }
                    fontSize="0.9em"
                  />
                </Left>
                <Right>
                  <Text
                    color={vars.yellow}
                    bold
                    children={hilight.duration}
                    fontSize="0.9em"
                  />
                </Right>
              </OnAirInfo>
            </StickToBottom>
          </Gradient>
        </Hilight>
        {/* </a> */}
      </Link>
    </Provider>
  )
}
