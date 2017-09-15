import React from 'react'
import ModalPromo from '../modal/ModalPromo'
import ModalFightcard from '../modal/ModalFightcard'
import styled from 'styled-components'
import { Flex, Provider, Box, Image, Text, Button, overlay } from 'rebass'
import Link from 'next/link'
const Wrapper = styled.div`
  color: red;
  z-index: 2;
  position: relative;
`
const ThumbnailLive = props => (
  <Provider>
    <div className="wraperlive">
      <Box>
        <Image width="100%" pt={0} src={props.img} />
      </Box>
      <div className="livehover">
        <Box pl="5%" pt="5%">
          <Text bold children="Thairath Muay-Thai Fighter" fontSize="0.9em" />
          <Text
            children="6 fights of hardcore muaythai action"
            fontSize="0.8em"
          />
          <br />
          <br />
          <Text children="live telecast on ThairathTV HD 32" fontSize="0.8em" />
          <Text children="every Saturday 2.00 - 4.00pm" fontSize="0.8em" />
        </Box>
        <Flex pt="2.3rem">
          <Box w={4 / 12} pl="20%">
            <center>
              <ModalPromo img="static/01.jpg" />
            </center>
          </Box>
          <Box w={4 / 12}>
            <center>
              <ModalFightcard
                img="static/02.jpg"
                imgFight="static/DailyFightcard 12092017 .jpg"
              />
            </center>
          </Box>
          <Box w={4 / 12} pr="20%">
            <center>
              <Link href={`#`}>
                <a>
                  <Image width="100%" src="static/03.jpg" />
                </a>
              </Link>
            </center>
          </Box>
        </Flex>
      </div>
    </div>
    <Box bg="#022246" pt="2%" pb="2%">
      <center>
        <Text color="#d6ff00" bold children={props.text} fontSize="1em" />
      </center>
    </Box>
    <style jsx>
      {`
        .textlive {
          color: #d6ff00;
        }
        .livehover {
          z-index: 1;
          transition: ease-in-out 0.4s all;
          opacity: 0;
          height: 100%;
          width: 100%;
          color: #ffffff;
          background: #000;
          position: absolute;
          top: 0;
          left: 0;
        }
        .livehover:hover {
          opacity: 0.9;
        }
        .wraperlive {
          position: relative;
          font-family: Helvetica, Arial, sans-serif;
        }
      `}
    </style>
  </Provider>
)

export default ThumbnailLive
