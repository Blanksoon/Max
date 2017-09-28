import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Text, overlay } from 'rebass'
import color from '../commons/vars'
import ThumbnailTicket from '../thumbnail/ThumbnailTicket'

const Button = styled.button`
  bottom: 2%;
  background-color: #b81111;
  border: 1px solid #b81111;
  color: white;
  padding: 12px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
`
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
export default class Promocode extends Component {
  render() {
    let renderUI = <div />
    if (this.props.id === 1) {
      renderUI = (
        <Box>
          <Box>
            <Text2>
              Please enter your pormotion code to enjoy all of our contents
            </Text2>
          </Box>
          <Box pt="0.7rem">
            <Input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Promo code here"
            />&nbsp;&nbsp;&nbsp;
            <Button>Submit</Button>
          </Box>
        </Box>
      )
    } else if (this.props.id === 2) {
      renderUI = (
        <Box w={5.5 / 12}>
          <ThumbnailTicket
            img="static/correct.jpg"
            text1="Success!"
            text2="Your purchase has been confirmed, Thank you."
            color="#79adff"
          />
        </Box>
      )
    } else if (this.props.id === 3) {
      renderUI = (
        <Box w={5.5 / 12}>
          <ThumbnailTicket
            img="static/wrong.jpg"
            text1="Opp!"
            text2="Invalid promo code, please try another one."
            color="#a82404"
          />
        </Box>
      )
    }
    return (
      <Provider>
        <Wrapper>
          <Box pl="1rem" pt="8rem">
            <Text1>GET TICKET</Text1>
          </Box>
          <Box pt="10rem" />
          <center>{renderUI}</center>
        </Wrapper>
      </Provider>
    )
  }
}
