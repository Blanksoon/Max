import React from 'react'
import { Flex, Box, Image, Text } from 'rebass'
import styled from 'styled-components'
import vars from '../commons/vars'
import { media } from '../../tools/responsive'

const Text1 = styled.div`
  color: ${vars.black};
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
  height: 38px;
  overflow: hidden;
  ${media.ipadpro`height: 20px;`};
  ${media.ipad`height: 18px;`};
  ${media.phone`height: 14px;font-size: 0.7em;`};
  ${media.iphone5`height: 14px;`};
`
const Text2 = styled.div`
  color: ${vars.black};
  //font-weight: 700;
  font-size: 0.8em;
  font-family: Helvetica, Arial, sans-serif;
  height: 47px;
  overflow: hidden;
  ${media.ipadpro`height: 47px;`};
  ${media.ipad`height: 47px;`};
  ${media.phone`height: 50px;font-size: 0.7em;`};
  ${media.iphone5`height: 38px;`};
`
const Text3 = styled.div`
  color: ${vars.lightBlue};
  //font-weight: 700;
  font-size: 0.8em;
  font-family: Helvetica, Arial, sans-serif;
  height: 22px;
  overflow: hidden;
  ${media.ipadpro`height: 22px;`};
  ${media.ipad`height: 25px;`};
  ${media.phone`height: 25px;font-size: 0.7em;`};
  ${media.iphone5`height: 38px;`};
`
const Img = styled.img`
  object-fit: cover;
  width: ${props => props.width};
  height: 140px;
  src: url(${props => props.src});
  ${media.ipadpro`height: 120px;`};
  ${media.ipad`height: 157px;`};
  ${media.iphone7p`height: 82px;`};
  ${media.phone`height: 73px;`};
`
const ThumbnailMaxnew = props => (
  <div>
    <a
      href={`/maxnews_detail?id=${props.news._id}&name=${props.news
        .programName}`}
    >
      <Box>
        <Img
          width={['100%', '100%', '100%', '70%', '60%']}
          pt={0}
          src={props.news.imageUrl}
        />
      </Box>
      <Box pt="1rem">
        <Text1>
          {props.lang === 'en' ? props.news.heading_en : props.news.heading_th}
        </Text1>
      </Box>
      <Box pt="0.5rem">
        <Text2>
          {props.lang === 'en' ? props.news.article_en : props.news.article_th}
        </Text2>
      </Box>
      <Box pt="0.5rem">
        <Text3>
          {' '}
          {props.lang === 'en' ? (
            props.news.createDate_en
          ) : (
            props.news.createDate_th
          )}{' '}
        </Text3>
      </Box>
    </a>
    <style jsx>
      {`
        a:link {
          text-decoration: none;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        a:hover {
          color: #ff0000;
          text-decoration: none;
        }
      `}
    </style>
  </div>
)

export default ThumbnailMaxnew
