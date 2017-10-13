import styled from 'styled-components'
import { Container, Image } from 'rebass'
import vars from './vars'

const SocialFooter = styled.div`
  background: ${vars.darkblue};
  height: 4rem;
  line-height: 4rem;
`
const CopyRight = styled.span`
  color: ${vars.yellow};
  display: inline-block;
  float: right;
`

const SocialIcon = styled(Image)`
  height: 4rem;
  float: left;
  margin: 0;
  padding: 0;
  width: 4rem;
`
export default () => (
  <SocialFooter>
    <Container>
      <a href="https://www.facebook.com/maxmuaythaipage/" target="_blank">
        <SocialIcon src="/static/ic_facebook@2x.png" />
      </a>
      <a href="https://plus.google.com/109034798571741545704" target="_blank">
        <SocialIcon src="/static/ic_googleplus@2x.png" />
      </a>
      <a href="https://www.youtube.com/user/maxmuaythaichannel" target="_blank">
        <SocialIcon src="/static/ic_youtube@2x.png" />
      </a>
      <a href="https://www.instagram.com/maxmuaythai.th/" target="_blank">
        <SocialIcon src="/static/ic_instagram@2x.png" />
      </a>
      <CopyRight>Copyright © 2016 All Rights Reserved</CopyRight>
    </Container>
  </SocialFooter>
)
