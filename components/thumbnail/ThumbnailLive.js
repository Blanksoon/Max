import React from 'react'
import ModalPromo from '../modal/ModalPromo'
import ModalFightcard from '../modal/ModalFightcard'
import styled from 'styled-components'
import ModalImg from '../../containers/ModalImg'
import { Flex, Box, Image, Text, Button, overlay } from 'rebass'
import Link from 'next/link'
import { media, theme } from '../../tools/responsive'
const Wrapper = styled.div`
  color: red;
  z-index: 2;
  position: relative;
`
const WrapperFight = styled.div`
  //height: 100%;
  width: 13%;
  bottom: 10%;
  left: 20%;
  z-index: 2;
  position: absolute;
`
const WrapperPromo = styled.div`
  //height: 100%;
  width: 13%;
  bottom: 10%;
  left: 43.5%;
  z-index: 2;
  position: absolute;
`
const WrapperMore = styled.div`
  //height: 100%;
  width: 13%;
  bottom: 10%;
  right: 20%;
  z-index: 2;
  position: absolute;
`
const WrapperFront = styled.div`
  font-size: 0.9em;
  ${media.ipad`font-size: 0.9em`};
  ${media.phone`font-size: 0.8em`};
  ${media.iphone5`font-size: 0.7em`};
`
const WrapperDes = styled.div`
  height: 70px;
  ${media.ipadpro`height: 70px`};
  ${media.ipad`height: 33px`};
  ${media.phone`height: 32px`};
  ${media.iphone5`height: 43px`};
  overflow: hidden;
`
const Text1 = styled.div`
  font-size: 1em;
  ${media.ipadpro`font-size: 0.9em`};
  ${media.ipad`font-size: 0.8em`};
  ${media.phone`font-size: 0.8em`};
  ${media.iphone5`font-size: 0.5em`};
`
const WrapperText = styled.div`background: #012147;`
const ThumbnailLive = ({ lang, live }) => {
  // const Next = common.Nexton
  let Next = ''
  if (lang === 'en') {
    Next = 'Next on'
  } else if (lang === 'th') {
    Next = 'ถ่ายทอดสด'
  }
  return (
    <div>
      <div className="wraperlive">
        <Box>
          <Image width="100%" pt={0} src={live.bannerUrl} />
        </Box>
        <div className="livehover">
          <Box pl="5%" pt="5%">
            <WrapperFront>
              <Text
                bold
                children={lang === 'en' ? live.title_en : live.title_th}
              />
              <WrapperDes>
                <Text children={lang === 'en' ? live.desc_en : live.desc_th} />
              </WrapperDes>
              <br />
              <Text
                children={
                  lang === 'en' ? live.shortDesc2_en : live.shortDesc2_th
                }
              />
            </WrapperFront>
          </Box>
          <Flex pt="2.3rem">
            <Box w={4 / 12} pl="20%">
              <WrapperFight>
                <ModalImg
                  modalType={2}
                  modalURL={live.fightcardUrl}
                  w="100%"
                  img="/static/01.jpg"
                />
              </WrapperFight>
            </Box>
            <Box w={4 / 12}>
              <WrapperPromo>
                <center>
                  <ModalImg
                    modalType={1}
                    modalURL={live.promoUrl}
                    w="100%"
                    img="static/02.jpg"
                  />
                </center>
              </WrapperPromo>
            </Box>
            <Box w={4 / 12} pr="20%">
              <WrapperMore>
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
              </WrapperMore>
            </Box>
          </Flex>
        </div>
      </div>
      <WrapperText>
        <Box pt="2%" pb="2%">
          <center>
            <Text1>
              <Text
                color="#d6ff00"
                bold
                children={`${Next} ${lang === 'en'
                  ? live.liveDateStr_en
                  : live.liveDateStr_th}`}
                // fontSize={['0.5em', '0.8em', '0.8em', '0.9em', '1em']}
              />
            </Text1>
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
            background: -webkit-linear-gradient(
              top,
              rgba(0, 0, 0, 0.65) 0%,
              rgba(0, 0, 0, 0.65) 1%,
              rgba(0, 0, 0, 0.65) 100%
            ); /* Chrome10-25,Safari5.1-6 */
            position: absolute;
            top: 0;
            left: 0;
          }
          .livehover:hover {
            opacity: 1;
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
