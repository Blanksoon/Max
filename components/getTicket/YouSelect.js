import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Text, overlay, Image } from 'rebass'
import color from '../commons/vars'
import Link from 'next/link'
import ModalButton from '../../containers/ModalButton'
import { connect } from 'react-redux'

const Button = styled.button`
  cursor: pointer;
  bottom: 2%;
  background-color: #b81111;
  border: 1px solid #b81111;
  color: white;
  padding: 12px 33%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
`
const Text2 = styled.div`
  color: #8e97a9;
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text3 = styled.div`
  color: #fff;
  //font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text4 = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 1.5em;
  font-family: Helvetica, Arial, sans-serif;
`
const Date = styled.div`
  text-align: left;
  color: #fcfc00;
  //font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Time = styled.div`
  text-align: right;
  color: #fcfc00;
  //font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  //border: 3px solid #73ad81;
  background: -webkit-linear-gradient(
    top,
    rgba(10, 74, 148, 0.8) 0%,
    rgba(10, 74, 148, 0.8) 100%
  ); /* Chrome10-25,Safari5.1-6 */
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
const Wrapperright = styled.div`
  position: relative;
  width: 100%;
  height: 72rem;
  background-position: center;
  background-position-y: 20%;
  //background: #022346;
  background-image: url('/static/FT6A6495.jpg');
  // background: -webkit-linear-gradient(
  //   top,
  //   rgba(10, 74, 148, 1) 0%,
  //   rgba(10, 74, 148, 1) 100%
  // ); /* Chrome10-25,Safari5.1-6 */
`
class YouSelect extends Component {
  render() {
    return (
      <Provider>
        <Wrapperright>
          <Wrapper>
            <Box pt="2rem" pl="1.5rem" pr="1.5rem">
              <Text3>You select</Text3>
              <Text2>1 TIME LIVE STREAMING</Text2>
              <br />
              <Text4>
                MAX Ultimate Tournament & MAX World Champions 7 International
              </Text4>
              <Flex pt="1rem" pb="3rem">
                <Box w={6 / 12}>
                  <Date>Sep 10th, 2017</Date>
                </Box>
                <Box w={6 / 12}>
                  <Time>07.20-10.00 pm.</Time>
                </Box>
              </Flex>
              <Image
                pb="1.5rem"
                width="100%"
                src="/static/maxultimate-show.jpg"
              />
              <center>
                <Button>Purchase $xx.xx</Button>
              </center>
            </Box>
          </Wrapper>
        </Wrapperright>
      </Provider>
    )
  }
}

const mapStateToProps = state => {
  return {
    login: state.auth.token,
  }
}

export default connect(mapStateToProps, null)(YouSelect)
