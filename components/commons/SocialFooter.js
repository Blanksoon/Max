import styled from 'styled-components'
import { Container, Image } from 'rebass'
import vars from './vars'

const SocialFooter = styled.div`
  background: ${vars.darkblue};
  height: 64px;
  line-height: 64px;
`
const CopyRight = styled.span`
  color: ${vars.yellow};
  display: inline-block;
  float: right;
`

const Icon = styled(Image)`
  height: 64px;
  float: left;
  margin: 0;
  padding: 0;
  width: 64px;
`
export default () => (
  <SocialFooter>
    <Container>
      <a href="http://www.google.com" target="_blank">
        <Icon src="static/ic_facebook@2x.png" />
      </a>
      <a href="http://www.google.com" target="_blank">
        <Icon src="static/ic_googleplus@2x.png" />
      </a>
      <a href="http://www.google.com" target="_blank">
        <Icon src="static/ic_youtube@2x.png" />
      </a>
      <a href="http://www.google.com" target="_blank">
        <Icon src="static/ic_instagram@2x.png" />
      </a>
      <CopyRight>Copyright © 2016 All Rights Reserved</CopyRight>
    </Container>
  </SocialFooter>
)
