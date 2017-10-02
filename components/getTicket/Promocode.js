import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Text, overlay, Image } from 'rebass'
import color from '../commons/vars'
import Link from 'next/link'
import ThumbnailTicket from '../thumbnail/ThumbnailTicket'
import ModalButton from '../../containers/ModalButton'
import { connect } from 'react-redux'

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
const WrapperClose = styled.div`
  position: absolute;
  color: #000;
  top: 0.4rem;
  right: 20.2rem;
  width: 40px;
  height: 40px;
  //border: 3px solid #73ad81;
`
const WrapperVod = styled.div`
  position: relative;
  color: blue;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 240;
`
let token = ''
const Wrapper = styled.div`background-color: #fff;`
class Promocode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      promocode: '',
    }
    this.subScribe = this.subScribe.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this)
  }
  subScribe() {
    //console.log('test', this.props.cookie)
    //promocode = '1003'
    ///if (this.props.cookie == 'undefined' || this.props.cookie == undefined) {
    //console.log('cookie not found')
    //this.props.push('/login')
    //} else {
    console.log('not undefiend', typeof this.props.cookie)
    this.props.subScribe(this.state.promocode)
    //}
    //this.props.subScribe(this.state.promocode)
  }

  handleOnChange(event) {
    this.setState({
      promocode: event.target.value,
    })
  }

  handleOnKeyDown(event) {
    if (event.keyCode !== 13) {
      return
    }
    event.preventDefault()
    this.subScribe()
  }

  render() {
    console.log('props', this.props)
    let renderUI = <div />
    if (this.props.login == undefined) {
      renderUI = (
        <Box>
          <Box>
            <Text2>
              Please enter your pormotion code to enjoy all of our contents
            </Text2>
          </Box>
          <Box pt="0.7rem">
            <Flex w={12 / 12}>
              <Box w={4.148 / 12} />
              <Input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Promo code here"
                value={this.state.promocode}
                onChange={this.handleOnChange}
                onKeyDown={this.handleOnKeyDown}
              />&nbsp;&nbsp;&nbsp;
              <Box pt="0.45rem">
                <ModalButton
                  buttonID={3}
                  modalType={3}
                  modalURL=""
                  text="Submit"
                />
              </Box>
            </Flex>
          </Box>
        </Box>
      )
    } else if (this.props.id === 1) {
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
              value={this.state.promocode}
              onChange={this.handleOnChange}
              onKeyDown={this.handleOnKeyDown}
            />&nbsp;&nbsp;&nbsp;
            <Button onClick={() => this.subScribe()}>Submit</Button>
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
        <WrapperVod>
          <Box w={5.5 / 12}>
            <ThumbnailTicket
              img="static/wrong.jpg"
              text1="Opp!"
              text2="Invalid promo code, please try another one."
              color="#a82404"
            />
          </Box>
          <WrapperClose onClick={() => this.props.backToPromo()}>
            <Image width="50%" src="static/close.png" />
          </WrapperClose>
        </WrapperVod>
      )
    } else if (this.props.id === 4) {
      renderUI = (
        <Box w={5.5 / 12}>
          <ThumbnailTicket
            img="static/correct.jpg"
            text1="Success!"
            text2="Your purchase has been started you can watch in 30 day, Thank you."
            color="#79adff"
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

const mapStateToProps = state => {
  return {
    login: state.auth.token,
  }
}

export default connect(mapStateToProps, null)(Promocode)
