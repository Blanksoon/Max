import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Text, overlay, Image } from 'rebass'
import color from '../commons/vars'
import Link from 'next/link'
import ThumbnailShowTime from '../thumbnail/ThumbnailShowTime'
import ModalButton from '../../containers/ModalButton'
import { connect } from 'react-redux'
import YouSelect from './YouSelect'

const Button = styled.button`
  bottom: 2%;
  background-color: #b81111;
  border: 1px solid #b81111;
  color: white;
  padding: 12px 36.5%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
`
const Text1 = styled.div`
  color: ${color.red};
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
const Text3 = styled.div`
  color: #fff;
  //font-weight: 700;
  font-size: 0.8em;
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
const Input = styled.input`
  width: 22%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  // border: 1px solid red;
  // border-radius: 4px;
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
const Wrapperright = styled.div`
  position: relative;
  background-position: center;
  background-position-y: 20%;
  //background: #022346;
  //background-image: url('/static/FT6A6495.jpg');
  background: -webkit-linear-gradient(
    top,
    rgba(10, 74, 148, 1) 0%,
    rgba(10, 74, 148, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
`
const Wrapperin = styled.div`
  position: absolute;
  background: -webkit-linear-gradient(
    top,
    rgba(10, 74, 148, 0.65) 0%,
    rgba(10, 74, 148, 0.65) 100%
  ); /* Chrome10-25,Safari5.1-6 */
`
const Wrapperleft = styled.div`
background: #fff:
`
const Wrapper = styled.div`background: #fff;`
class ShowTime extends Component {
  render() {
    return (
      <Provider>
        <Wrapper>
          <Flex>
            <Box w={8 / 12} pl="1.5rem">
              <Flex pt="2rem" pb="2rem">
                <Box w={6 / 12} pt="1rem">
                  <Text1>GET TICKET</Text1>
                  <br />
                  <br />
                  <Text2>Please select showtime</Text2>
                </Box>
                <Box w={6 / 12}>
                  <Image
                    pl="9rem"
                    width="60%"
                    src="/static/progress-bar_3.png"
                  />
                </Box>
              </Flex>
              <Box w={11 / 12}>
                <ThumbnailShowTime
                  imglogo="/static/logo_max.png"
                  img="/static/maxultimate-show.jpg"
                  text1="MAX Ultimate Tournament & MAX World Champions 7 International"
                  text2="07.20-10.00 pm."
                  text3="SUN"
                  text4="10 SEP"
                />
              </Box>
              <Box w={11 / 12} pt="2rem">
                <ThumbnailShowTime
                  imglogo="/static/logo_battle.png"
                  img="/static/thebattle-show.jpg"
                  text1="The Battle Muay Thai"
                  text2="06.10-08.00 pm."
                  text3="FRI"
                  text4="15 SEP"
                  textrb={<br />}
                />
              </Box>
              <Box w={11 / 12} pt="2rem">
                <ThumbnailShowTime
                  imglogo="/static/logo_fighter.png"
                  img="/static/thairath-show.jpg"
                  text1="Thairath Muay Thai Fighter"
                  text2="02.00-04.00 pm."
                  text3="SAT"
                  text4="16 SEP"
                  textrb={<br />}
                />
              </Box>
              <Box w={11 / 12} pt="2rem" pb="4rem">
                <ThumbnailShowTime
                  imglogo="/static/logo_champion.png"
                  img="/static/thechampion-show.jpg"
                  text1="The Champion Muay Thai"
                  text2="07.20-10.00 pm."
                  text3="SAT"
                  text4="16 SEP"
                  textrb={<br />}
                />
              </Box>
            </Box>
            <Box w={4 / 12}>
              <YouSelect />
            </Box>
          </Flex>
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

export default connect(mapStateToProps, null)(ShowTime)
