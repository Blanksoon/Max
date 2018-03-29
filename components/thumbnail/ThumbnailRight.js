import React from 'react'
import styled from 'styled-components'
import color from '../commons/vars'
import { Flex, Provider, Box, Image, Text } from 'rebass'
import { media } from '../../tools/responsive'

const Text1 = styled.div`
  height: 18px;
  overflow: hidden;
  ${media.ipadpro`
    height: 19px;
    overflow: hidden;`};
  ${media.ipad`
    height: 35px;
    overflow: hidden;`};
  ${media.iphone7p`
    height: 14px;
    overflow: hidden;`};
  ${media.phone`
    height: 13px;
    overflow: hidden;`};
  ${media.iphone5`
    height: 13px;
    overflow: hidden;`};
`
const Text2 = styled.div`
  line-height: 21px;
  height: 52px;
  overflow: hidden;
  text-overflow: ellipsis;
  ${media.ipadpro`
    line-height: 23px;
    height: 55px;
    overflow: hidden;`};
  ${media.ipad`
    line-height: 21px;
    height: 70px;
    overflow: hidden;`};
  ${media.iphone7p`
    line-height: 22px;
    height: 50px;
    overflow: hidden;`};
  ${media.phone`
    line-height: 18px;
    height: 40px;
    overflow: hidden;`};
  ${media.iphone5`
    height: 41px;
    overflow: hidden;`};
`
const Text3 = styled.div`
  color: ${color.yellow}
  height: 24px;
  overflow: hidden;
  ${media.phone`
    height: 16px;
    overflow: hidden;`};
  ${media.iphone5`
    height: 17px;
    overflow: hidden;`};
`
const Img = styled.img`
  object-fit: cover;
  width: ${props => props.width};
  height: 110px;
  src: url(${props => props.src});
  ${media.ipadpro`height: 100px;`};
  ${media.ipad`height: 157px;`};
  ${media.iphone7p`height: 82px;`};
  ${media.phone`height: 73px;`};
`
const ThumbnailRight = props => (
  <div>
    <div className="thumbnailright">
      <Flex bg="#000000e6">
        <Box w={5 / 12} pt={['0.2em', '0em', '0em', '0.3em', '0em']} pl="0.5em">
          <Img width={props.w} src={props.img} />
        </Box>
        <Box
          w={7 / 12}
          pl="20px"
          pt={['5px', '5px', '1em', '5px', '5px']}
          pb={['5px', '5px', '1em', '5px', '5px']}
        >
          <Box w={12 / 12}>
            <Text1>
              <Text
                color="#fff"
                bold
                children={props.text1}
                fontSize={['0.7em', '0.7em', '0.9em', '0.9em', '0.9em']}
              />
            </Text1>
          </Box>
          <Text2>
            <Text
              color="#fff"
              pt={['0.2rem', '0rem', '0.5rem', '0.5rem', '0.5rem']}
              children={props.text2}
              fontSize={['0.7em', '0.7em', '0.8em', '0.8em', '0.8em']}
            />
          </Text2>
          <Text3>
            <Text
              color={color.yellow}
              pt={['0.2rem', '0rem', '0.5rem', '0.5rem', '0.5rem']}
              children={props.date}
              fontSize={['0.7em', '0.7em', '0.9em', '0.9em', '0.9em']}
            />
          </Text3>
        </Box>
      </Flex>
      <style jsx>
        {`
          .thumbnailright {
            font-family: Helvetica, Arial, sans-serif;
          }
        `}
      </style>
    </div>
  </div>
)

export default ThumbnailRight
