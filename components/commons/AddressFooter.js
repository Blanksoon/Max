import styled from 'styled-components'
import { Container, Image } from 'rebass'
import vars from './vars'
import { media } from '../../tools/responsive'

const AddressFooter = styled.div`
  background: ${vars.blue};
  height: 13.125rem;
  position: relative;
`
const Logo = styled(Image)`
  display: inline-block;
  bottom: 0;
  float: left;
  margin: auto;
  position: absolute;
  top: 0;
  ${media.phone`width: 106px;`};
  ${media.iphone5`display: none;`};
`
const AddressPanel = styled.div`
  float: right;
  text-align: right;
  margin-top: 3.125rem;
  ${media.iphone5`text-align: left;
  float: left;`};
`
const Name = styled.span`
  color: ${vars.white};
  display: block;
  font-weight: bold;
  margin-bottom: 1rem;
`
const Address = styled.span`
  color: ${vars.lightBlue};
  display: block;
  ${media.phone`font-size: 12px;`};
`

const Tel = styled.span`
  color: ${vars.lightBlue};
  display: block;
  margin-top: 1rem;
  ${media.phone`font-size: 12px;`};
`
export default ({ common }) => (
  <AddressFooter>
    <Container>
      <Logo src="/static/img_logo_white@2x.png" />
      <AddressPanel>
        <Name>{common.NameAddress}</Name>
        <Address>{common.Address1}</Address>
        <Address>{common.Address2}</Address>
        <Tel>{common.tel}</Tel>
      </AddressPanel>
    </Container>
  </AddressFooter>
)
