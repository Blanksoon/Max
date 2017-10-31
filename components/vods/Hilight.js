import styled from 'styled-components'
import Link from 'next/link'
import { Image, Text } from 'rebass'
import vars from '../commons/vars'

const Hilight = styled.a`
  display: block;
  margin: 3rem auto;
  position: relative;
  width: 640px;
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
`
const OnAirInfo = styled.div`
  margin-top: 1rem;
  width: 100%;
`
const Left = styled.span`float: left;`
const Right = styled.span`float: right;`

export default ({ hilight }) => {
  if (typeof hilight === 'undefined') {
    return null
  }
  return (
    <Link as={`/vods/${hilight.id}`} href={`/videoPlayer?id=${hilight.id}`}>
      <a>
        <Hilight>
          <Image width="100%" src={hilight.thumbnailUrl} />
          <Gradient>
            <StickToBottom>
              <Text color={vars.lightBlue} bold children="HILIGHT" />
              <Text
                pt="1rem"
                color={vars.white}
                bold
                children={hilight.title_en}
                fontSize="1.3em"
              />
              <OnAirInfo>
                <Left>
                  <Text
                    color={vars.yellow}
                    bold
                    children={hilight.onAirDateStr_en}
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
      </a>
    </Link>
  )
}
