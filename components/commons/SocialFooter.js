import styled from 'styled-components'
import { Container } from 'rebass'
import vars from './vars'

const SocialFooter = styled.div`
  background: ${vars.darkblue};
  height: 60px;
  line-height: 60px;
`
const CopyRight = styled.span`
  color: ${vars.yellow};
  display: inline-block;
  float: right;
`
export default () => (
  <SocialFooter>
    <Container>
      <CopyRight>Copyright © 2016 All Rights Reserved</CopyRight>
    </Container>
  </SocialFooter>
)
