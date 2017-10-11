import React from 'react'
import Link from 'next/link'
import { Flex, Provider, Box, Image, Text, Border } from 'rebass'
import styled from 'styled-components'
import FacebookLoginButton from './FacebookLoginButton'
import color from '../commons/vars'
import ModalRegister from '../../containers/ModalRegister'

const A = styled.a`TEXT-DECORATION: none;`
const Wrapper = styled.div`position: absolute;`
const WrapperLogin = styled.div`
  padding-right: 30px;
  border-right: 1px solid #a9a9a9;
`
const Text1 = styled.div`
  color: ${color.red};
  font-weight: 700;
  font-size: 1.5em;
  font-family: Helvetica, Arial, sans-serif;
`
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
const Button = styled.button`
  bottom: 2%;
  background-color: #b81111;
  border: 1px solid #b81111;
  color: white;
  padding: 10px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 600;
  font-size: 1em;
`
const Input = styled.input`
  width: 100%;
  padding: 6px 15px;
  margin: 8px 0;
  box-sizing: border-box;
`
const Login = () => (
  <Provider>
    <div>
      <Box>
        <Box>
          <Image width="100%" src="../../static/img_login.png" />
        </Box>
        <Box pl="3rem">
          <Text1>Didn't have an account?</Text1>
        </Box>
        <Flex pt="0.5rem" pl="3rem" pr="3rem">
          <Box w={5 / 12}>
            <WrapperLogin>
              <Box>
                <Input placeholder="Email" />
              </Box>
              <Box>
                <Input placeholder="Password" />
              </Box>
              <Box>
                <Input placeholder="Re-type Password" />
              </Box>
              <Box pt="0.5rem" pl="10.4rem">
                <Button>GO!</Button>
              </Box>
            </WrapperLogin>
          </Box>
          <Box w={7 / 12}>
            <center>
              <FacebookLoginButton />
              <Box pt="1rem">
                <a href="#">
                  <ModalRegister
                    modalType={3}
                    text="Already have an account, log in"
                  />
                </a>
              </Box>
            </center>
          </Box>
        </Flex>
        {/* <ButtonFace>f &nbsp;&nbsp; Log in with Facebook</ButtonFace> fffff */}
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
          //TEXT-DECORATION: none;
        }
      `}
    </style>
  </Provider>
)

export default Login
