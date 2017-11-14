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
  color: ${color.red};
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text3 = styled.div`
  color: ${color.white};
  font-weight: 700;
  font-size: 2em;
  font-family: Helvetica, Arial, sans-serif;
`

const Text4 = styled.div`
  color: ${color.white};
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text5 = styled.div`
  color: ${color.black};
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text6 = styled.div`
  color: ${color.black};
  font-weight: 500;
  font-size: 0.8em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text7 = styled.div`
  color: ${color.black};
  font-weight: 700;
  font-size: 2em;
  font-family: Helvetica, Arial, sans-serif;
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
const Wrapperprice = styled.div`
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
                  <Text2>Please select your package.</Text2>
                </Box>
              </Flex>
              <Flex pb="2em">
                <Box w={6 / 12} pr="1em" pl="2em">
                  <Box bg="red">
                    <center>
                      <Text3>$29.99</Text3>
                      <Text4>1MONTH</Text4>
                    </center>
                  </Box>
                  <Box pt="0.5em">
                    <center>
                      <Text5>SUBSCRIBE VDO AND LIVE STREAMING</Text5>
                      <Text6>Enjoy all video and live streamingthru all</Text6>
                      <Text6>
                        the month, so you never missany extreme shot
                      </Text6>
                    </center>
                  </Box>
                </Box>
                <Box w={6 / 12} pr="2em" pl="1em">
                  <Box bg="blue">
                    <center>
                      <Text3>$19.99</Text3>
                      <Text4>1MONTH</Text4>
                    </center>
                  </Box>
                  <Box pt="0.5em">
                    <center>
                      <Text5>SUBSCRIBE VIDEO ON DEMAND</Text5>
                      <Text6>All video are now here for you</Text6>
                      <Text6>thru all the month.</Text6>
                    </center>
                  </Box>
                </Box>
              </Flex>
              <Flex>
                <Box w={5 / 12} />
                <Box w={1 / 12}>
                  <Image w="100%" src="static/ic_live.png" />
                </Box>
                <Box w={2 / 12} pt="1em">
                  <Text7>$0.99</Text7>
                </Box>
              </Flex>
              <Flex pt="1em">
                <Box w={4 / 12} />
                <Box w={4 / 12}>
                  <center>
                    <Text5>GET 1 TIME LIVE STREAMING</Text5>
                    <Text6>
                      Watch 1 time of specific show live streaming on any
                      platfrom
                    </Text6>
                  </center>
                </Box>
              </Flex>
              <Box w={11 / 12} pt="2em">
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
