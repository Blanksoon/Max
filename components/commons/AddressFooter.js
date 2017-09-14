import styled from 'styled-components'
import { Container, Image } from 'rebass'
import vars from './Vars'

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
`
const AddressPanel = styled.div`
  float: right;
  text-align: right;
  margin-top: 3.125rem;
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
`

const Tel = styled.span`
  color: ${vars.lightBlue};
  display: block;
  margin-top: 1rem;
`
export default () => (
  <AddressFooter>
    <Container>
      <Logo src="static/img_logo_white@2x.png" />
      <AddressPanel>
        <Name>Max Muay Thai Co.,Ltd.</Name>
        <Address>42/108 Sukumvit Rd. Moo.9 Nongprue</Address>
        <Address>Banglamung Chon Buri 20150 (Thailand)</Address>
        <Tel>Tel(+66) 038-416-999,08-2495-5549</Tel>
      </AddressPanel>
    </Container>
  </AddressFooter>
)
