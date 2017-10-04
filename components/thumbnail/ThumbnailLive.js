import React from 'react'
import ModalPromo from '../modal/ModalPromo'
import ModalFightcard from '../modal/ModalFightcard'
import styled from 'styled-components'
import ModalImg from '../../containers/ModalImg'
import { Flex, Box, Image, Text, Button, overlay } from 'rebass'
import Link from 'next/link'
const Wrapper = styled.div`
  color: red;
  z-index: 2;
  position: relative;
`
const WrapperText = styled.div`background: #012147;`
const ThumbnailLive = ({ live }) => {
  return (
    <div>
      <div className="wraperlive">
        <Box>
          <Image width="100%" pt={0} src={live.bannerUrl} />
        </Box>
        <div className="livehover">
          <Box pl="5%" pt="5%">
            <Text bold children={live.title} fontSize="0.9em" />
            <Text children={live.shortDescription_en} fontSize="0.8em" />
            <br />
            <br />
            <Text
              children={`live telecast on ${live.channel}`}
              fontSize="0.8em"
            />
            <Text children={live.OnAirDate} fontSize="0.8em" />
          </Box>
          <Flex pt="2.3rem">
            <Box w={4 / 12} pl="20%">
              <center>
                <ModalImg
                  modalType={2}
                  modalURL={live.fightcardUrl}
                  w="100%"
                  img="/static/01.jpg"
                />
              </center>
            </Box>
            <Box w={4 / 12}>
              <center>
                <ModalImg
                  modalType={1}
                  modalURL={live.promoUrl}
                  w="40%"
                  img="static/02.jpg"
                />
              </center>
            </Box>
            <Box w={4 / 12} pr="20%">
              <center>
                <Link
                  as={`/lives/${live.id}`}
                  href={`/lives_vdo?id=${live.id}`}
                >
                  <a>
                    <Image width="100%" src="/static/03.jpg" />
                  </a>
                </Link>
              </center>
            </Box>
          </Flex>
        </div>
      </div>
      <WrapperText>
        <Box pt="2%" pb="2%">
          <center>
            <Text
              color="#d6ff00"
              bold
              children={`Next on ${live.OnAirTime}`}
              fontSize="1em"
            />
          </center>
        </Box>
      </WrapperText>
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
    </div>
  )
}

export default ThumbnailLive
