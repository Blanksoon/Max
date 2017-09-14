import React from 'react'
import Link from 'next/link'
import { Flex, Provider, Box, Image, Text, Input, Button, Border } from 'rebass'

const Login = () => (
  <Provider>
    <div className="login/register">
      <Box w={1}>
        <Flex>
          <Box w={11 / 12} />
          <Box w={1 / 12}>
            <div className="close">
              <a href="#/">
                <Image width="50%" src="static/close.jpg" />
              </a>
            </div>
          </Box>
        </Flex>
      </Box>
      <Box w={11 / 12}>
        <div className="logomax">
          <Flex>
            <Box w={3 / 12}>
              <Image width="100%" src="static/logo.png" />
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
                  <Input pl="0em" pr="0em" placeholder=" Email" />
                </Border>
              </Box>
              <Box w={10 / 12} pt="5%">
                <Border color="gray">
                  <Input pl="0em" pr="0em" placeholder=" Password" />
                </Border>
              </Box>
              <Box w={10 / 12} pt="5%">
                <div style={{ textAlign: 'right' }}>
                  <Link>
                    <a href="#/">
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
                <button className="button-left">GO!</button>
              </Box>
            </Box>
            <Box w={6 / 12}>
              <center>
                <Box>
                  <button className="button-right">Log in with Facebook</button>
                </Box>
                <Box pt="4%">
                  <button className="button-right">
                    &nbsp; Log in with Google &nbsp;
                  </button>
                </Box>
                <Box pt="6%">
                  <Link href={`#`}>
                    <a>Register with email</a>
                  </Link>
                </Box>
              </center>
            </Box>
          </Flex>
        </div>
      </Box>
    </div>
    <style jsx>
      {`
        .logomax {
        }
        .button-left {
          font-weight: bold;
          background-color: #b81111;
          border: none;
          color: white;
          padding: 10px 50px;
          text-align: center;
          display: inline-block;
          font-size: 1em;
        }
        .button-right {
          background-color: gray;
          border: none;
          color: white;
          padding: 10px 80px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: px;
        }
        .login/register {
          z-index: 50;
          position: relative;
          transition: ease-in-out 0.4s all;
          opacity: 0;
          height: 100%;
          width: 100%;
          color: #ffffff;
          background: #000;
          top: 0;
          left: 0;
        }
        a:link {
          COLOR: #660000;
          TEXT-DECORATION: none;
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
