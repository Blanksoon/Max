import styled from 'styled-components'
import {
  Provider,
  Toolbar,
  Flex,
  Box,
  Text,
  Image,
  Tabs,
  TabItem,
  Border,
  NavLink,
  BackgroundImage,
  Button,
} from 'rebass'

const Contact = styled.div`text-align: right;`
const Footer = props => (
  <div className="Footer">
    <Flex bg="#001F3D">
      <Box w={1}>
        <Box w={1 / 5}>
          <Image width={100} pt={4} pb={5} src="/static/logo.png" ml={15} />
        </Box>
        <Box w={1 / 2}>
          <Flex>
            <LogoFooter />
            <LogoFooter />
            <LogoFooter />
            <LogoFooter />
            <LogoFooter />
          </Flex>
        </Box>
      </Box>
      <Box w={1 / 2} pt="7%">
        <Contact>
          <h10 style={{ color: 'white' }}>
            <b>Max Muay Thai Co.,Ltd.</b>
          </h10>
          <br />
          <h10 style={{ color: 'white' }}>
            42/108 Sukumvit Rd. Moo.9 Nongprue
          </h10>
          <br />
          <h10 style={{ color: 'white' }}>
            Banglamung Chon Buri 20150 (Thailand)
          </h10>
          <br />
          <br />
          <h10 style={{ color: 'white' }}>
            Tel(+66) 038-416-999,08-2495-5549
          </h10>
          <br />
          <br />
          <br />
          <h10 style={{ color: 'white' }}>
            Copyright @ 2016 All Rights Reserved
          </h10>
          <br />
        </Contact>
      </Box>
    </Flex>
  </div>
)

const LogoFooter = props => (
  <Box w={3 / 12}>
    <Image
      width={59}
      src="/static/facebookLogo.png"
      pt={2}
      pb={4}
      //m={1}
    />
  </Box>
)

export { Footer, LogoFooter }
