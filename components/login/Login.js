import React from 'react'
import Link from 'next/link'
import { Flex, Provider, Box, Image, Text, Input, Button, Border } from 'rebass'
import styled from 'styled-components'
import FacebookLoginButton from './FacebookLoginButton'

const A = styled.a`TEXT-DECORATION: none;`
const Wrapper = styled.div`position: absolute;`
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
  font-size: 1em;
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
          <Image width="100%" src="../../static/img_login.png" />
          <Text
            color="#B81111"
            pt="1rem"
            pb="3em"
            bold
            children="Almost there, Please log in to continue."
            fontSize="1em"
          />
          <FacebookLoginButton />
          {/* <ButtonFace>f &nbsp;&nbsp; Log in with Facebook</ButtonFace> fffff */}
        </center>
      </Box>
    </div>
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
