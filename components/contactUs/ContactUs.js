import React, { PureComponent } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {
  Provider,
  Container,
  Flex,
  Box,
  Image,
  Input,
  button,
  Text,
} from 'rebass'

const ContactUs = () => (
  <div>
    <Box bg="#ffffff">
      <h1>Contact Us</h1>
      <Flex>
        <Box w={6 / 12}>
          <p>
            Lorem ipsum dolor sit amel. consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut lavore et doiore magna aliqua. Ut enim
            ad minim veniam.quis nostrud exercitation ullamco laboris nisi ul
            aliquip ex ea commodo consequat. Duls aute irure dolor in
            reprehendefit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborun.
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit
          </p>
          <br />
          <Image width={800} pt={0} src="static/maxPromo.jpg" />
        </Box>
        <Box w={6 / 12} pl={4}>
          <h4>Follow Max Muay Thai at</h4>
          <Flex>
            <Box w={1.5 / 12}>
              <Image pt={0} src="static/maxPromo.jpg" />
            </Box>
            <Box w={0.25 / 12} />
            <Box w={1.5 / 12}>
              <Image pt={0} src="static/maxPromo.jpg" />
            </Box>
            <Box w={0.25 / 12} />
            <Box w={1.5 / 12}>
              <Image pt={0} src="static/maxPromo.jpg" />
            </Box>
            <Box w={0.25 / 12} />
            <Box w={1.5 / 12}>
              <Image pt={0} src="static/maxPromo.jpg" />
            </Box>
            <Box w={0.25 / 12} />
            <Box w={1.5 / 12}>
              <Image pt={0} src="static/maxPromo.jpg" />
            </Box>
          </Flex>
          <br />
          <h4>Max Muay Thai Co.,Ltd.</h4>
          <p>
            42/108 Sukhunvit Rd. Moo.9 Nongprue<br />
            Banglamung chon Buri 20150 (Thailand)
          </p>
          <Flex>
            <Box w={5.5 / 12} pt={3} pb={3} bg="#707070">
              <center>
                <Image pt={0} width={80} src="static/facebookLogo.png" />
                (+66) 038-416-999
              </center>
            </Box>
            <Box w={1 / 12} />
            <Box w={5.5 / 12} pt={3} pb={3} bg="#707070">
              <center>
                <Image pt={0} width={80} src="static/facebookLogo.png" />
                (+66) 038-416-999
              </center>
            </Box>
          </Flex>
          <br />
          <h4>Let we hear from you,</h4>
          <p>Your email here:</p>
          <Flex>
            <Box w={1} pr={5} bg="#e1e1e1">
              <Input defaultValue="" placeholder="" />
            </Box>
          </Flex>
          <br />
          <Flex>
            <Box w={1} pr={5} bg="#e1e1e1">
              <Input
                defaultValue=""
                placeholder="Let us know what can we do more for our beloved fan"
              />
            </Box>
          </Flex>
          <Flex pt={3}>
            <Box w={12 / 12}>
              <center>
                <button style={{ width: '100%' }}>
                  <Text center bold children="Send email" fontSize="1.2em" />
                </button>
              </center>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  </div>
)

export default ContactUs
