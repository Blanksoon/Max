import React from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Text, overlay } from 'rebass'
import color from '../commons/vars'

const Text1 = styled.div`
  color: #b81111;
  font-weight: 700;
  font-size: 1.5em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text2 = styled.div`
  color: #000;
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Input = styled.input`
  width: 22%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid red;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
`
const Wrapper = styled.div`background-color: #fff;`
const Promocode = props => (
  <Provider>
    <Wrapper>
      <Box pl="1rem" pt="8rem">
        <Text1>GET TICKET</Text1>
      </Box>
      <Box pt="10rem" />
      <center>
        <Text2>Please enter your pormotion code to enjoy our contents</Text2>
        <Input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Promo code here"
        />
      </center>
    </Wrapper>
  </Provider>
)

export default Promocode
