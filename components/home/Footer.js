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
      <Box w={6 / 12}>
        <Image width="40%" pt="8%" pb="10%" src="/static/img_logo_white.png" />
      </Box>
      <Box w={6 / 12} pt="5%">
        <Contact>
          <Text
            color="#fff"
            right
            bold
            children="Max Muay Thai Co.,Ltd."
            fontSize="0.9em"
          />
          <Text
            pt="0.5em"
            color="#53a9f2"
            right
            children="42/108 Sukhumvit Rd. Moo.9 Nongprue"
            fontSize="0.9em"
          />
          <Text
            color="#53a9f2"
            right
            children="Banglamung Chon Buri 20150 (Thailand)"
            fontSize="0.9em"
          />
          <Text
            pt="0.5em"
            color="#53a9f2"
            right
            children="Tel. (+66) 038-416-999, 08-2495-5549"
            fontSize="0.9em"
          />
        </Contact>
      </Box>
    </Flex>
    <Flex bg="#010f1e">
      <Box w={6 / 12}>
        <Flex>
          <LogoFooter name="static/ic_facebook@2x.png" />
          <LogoFooter name="static/ic_googleplus@2x.png" />
          <LogoFooter name="static/ic_youtube@2x.png" />
          <LogoFooter name="static/ic_instagram@2x.png" />
        </Flex>
      </Box>
      <Box w={6 / 12}>
        <Text
          pt="2em"
          color="#eeef02"
          right
          bold
          children="Copyright@2016 All Rights Reserved"
          fontSize="0.9em"
        />
      </Box>
    </Flex>
  </div>
)

const LogoFooter = props => (
  <Box w={1 / 6}>
    <Image width="100%" src={props.name} pt={0} pb={0} />
  </Box>
)

export { Footer, LogoFooter }
