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
  Button
} from 'rebass'

const Footer = (props) => (
  <div className="Footer">
    <Flex>
      <Box w={1} bg='green'>
        <Box w={1/5} bg='black'>
          <Image
            width={100}
            pt={4}
            pb={5}
            src='/static/logo.png'
            ml = {15}
          />
        </Box>
        <Box w={1/2} bg='pink'>
        <Flex>
          <LogoFooter />
          <LogoFooter />
          <LogoFooter />
          <LogoFooter />
          <LogoFooter />
        </Flex>
        </Box>
      </Box>
      <Box w={1/2} bg='blue' pt={80}>
        <div className="contact">
          <h10><b>Max Muay Thai Co.,Ltd.</b></h10><br/>
          <h10>42/108 Sukumvit Rd. Moo.9 Nongprue</h10><br/>
          <h10>Banglamung Chon Buri 20150 (Thailand)</h10><br/><br/>
          <h10>Tel(+66) 038-416-999,08-2495-5549</h10><br/><br/><br/>
          <h10>Copyright @ 2016 All Rights Reserved</h10><br/>
        </div>
      </Box>
    </Flex>
    <style jsx>
          {`
            .contact {
              text-align: right;
            }
          `}
      </style>
  </div>
)

const LogoFooter = (props) => (
  <Box w={1/6} bg='yellow'>
    <Image
      width={59}
      src='/static/facebookLogo.png'
      pt={2}
      pb={4}
      //m={1}
    />
  </Box>
)

export {
  Footer
}