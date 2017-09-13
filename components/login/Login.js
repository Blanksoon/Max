import React from 'react'
import FacebookLoginButton from './FacebookLoginButton'
import { Flex, Provider, Box, Image, Text, Input, Button, Link } from 'rebass'

const Login = () => (
  <Provider>
    <div>
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
              <Text pt="20%" bold children="Log in" fontSize="1.5em" />
            </Box>
          </Flex>
        </div>
        <div className="login/register">
          <Flex pt="5%">
            <Box w={6 / 12}>
              <div className="login">
                <Box w={10 / 12}>
                  <Input defaultValue="" placeholder=" Email" />
                </Box>
                <Box w={10 / 12} pt="5%">
                  <Input defaultValue="" placeholder=" Password" />
                </Box>
                <Box w={10 / 12} pt="8%">
                  <div style={{ textAlign: 'right' }}>
                    <Link>
                      <a href="#/">Forgot password?</a>
                    </Link>
                  </div>
                </Box>
                <Box w={10 / 12} pt="8%" style={{ textAlign: 'right' }}>
                  <button className="button-left">Go</button>
                </Box>
              </div>
            </Box>
            <Box w={6 / 12}>
              <center>
                <Box>
                  <FacebookLoginButton />
                </Box>
                <Box pt="4%">
                  <button className="button-right">
                    &nbsp; Log in with Google &nbsp;
                  </button>
                </Box>
                <Box pt="6%">
                  <Link href="#!" children="Wanna register with email" />
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
          background-color: gray;
          border: none;
          color: white;
          padding: 10px 70px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: px;
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
        .login {
          border-right: 1px solid;
          border-color: gray;
        }
        .close {
          position: relative;
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
