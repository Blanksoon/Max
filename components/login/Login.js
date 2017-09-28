import React from 'react'
import Link from 'next/link'
import { Flex, Provider, Box, Image, Text, Input, Button, Border } from 'rebass'
import styled from 'styled-components'

const A = styled.a`TEXT-DECORATION: none;`
const ButtonLeft = styled.button`
  font-weight: bold;
  background-color: #b81111;
  border: none;
  color: white;
  padding: 10px 50px;
  text-align: center;
  display: inline-block;
  font-size: 1em;
`
const ButtonFace = styled.button`
  background-color: #3a559f;
  border: none;
  color: white;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.5em;
`
const ButtonGoogle = styled.button`
  background-color: #dd4b39;
  border: none;
  color: white;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: px;
`

const Login = () => (
  <Provider>
    <div>
      <Box>
        <center>
          <Image width="20%" src="static/logo.png" />
          <Text
            color="#B81111"
            pt="20%"
            pb="3em"
            bold
            children="Almost there, Please log in to continue."
            fontSize="1.5em"
          />
          <ButtonFace>f &nbsp;&nbsp; Log in with Facebook</ButtonFace>
        </center>
      </Box>
    </div>
    {/* <div className="login/register">
      <Box w={1}>
        <Flex>
          <Box w={11 / 12} />
          <Box w={1 / 12}>
            <div className="close">
              <a href={`#`}>
                <Image width="50%" src="static/close.jpg" />
              </a>
            </div>
          </Box>
        </Flex>
      </Box>
      <Box w={11 / 12} pl="4em" pb="1em">
        <div className="logomax">
          <Flex>
            <Box w={9 / 24} />
            <Box w={3 / 12}>
              <Image width="100%" src="static/logo.png" />
            </Box>
          </Flex>
          <Flex>
            <Box w={3 / 12}>
              <Text
                color="#b81111"
                pt="20%"
                bold
                children="Log in"
                fontSize="1.5em"
              />
            </Box>
          </Flex>
        </div>
        <div>
          <Flex pt="5%">
            <Box w={6 / 12}>
              <Box w={10 / 12}>
                <Border color="gray">
                  <Input color="back" pl="0em" pr="0em" placeholder=" Email" />
                </Border>
              </Box>
              <Box w={10 / 12} pt="5%">
                <Border color="gray">
                  <Input
                    color="back"
                    pl="0em"
                    pr="0em"
                    placeholder=" Password"
                  />
                </Border>
              </Box>
              <Box w={10 / 12} pt="5%">
                <div style={{ textAlign: 'right' }}>
                  <Link href="/">
                    <a href="/">
                      <Text
                        color="#b81111"
                        right
                        bold
                        children="Forgot password?"
                        fontSize="1em"
                      />
                    </a>
                  </Link>
                </div>
              </Box>
              <Box w={10 / 12} pt="8%" style={{ textAlign: 'right' }}>
                <ButtonLeft>GO!</ButtonLeft>
              </Box>
            </Box>
            <Box w={6 / 12}>
              <center>
                <Box>
                  <ButtonFace>f &nbsp;&nbsp; Log in with Facebook</ButtonFace>
                </Box>
                <Box pt="4%">
                  <ButtonGoogle>
                    G+ &nbsp;&nbsp;&nbsp; Log in with Google
                  </ButtonGoogle>
                </Box>
                <Box pt="6%">
                  <Link href="/">
                    <a>Register with email</a>
                  </Link>
                </Box>
              </center>
            </Box>
          </Flex>
        </div>
      </Box>
    </div> */}
    <style jsx>
      {`
        a:link {
          COLOR: #660000;
        }
        a:visited {
          COLOR: #660000;
          TEXT-DECORATION: none;
        }
        a:hover {
          COLOR: #ff0000;
          TEXT-DECORATION: none;
        }
      `}
    </style>
  </Provider>
)

export default Login
