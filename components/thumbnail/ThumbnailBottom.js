import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Image, Text, Provider } from 'rebass'
import { media, theme } from '../../tools/responsive'

const WrapperName = styled.div`
  height: 15px;
  ${media.ipadpro`height: 30px`};
  ${media.ipad`height: 23px`};
  ${media.phone`height: 15px`};
  ${media.iphone5`height: 15px`};
  overflow: hidden;
`
const ThumbnailBottom = props => (
  <Provider theme={theme}>
    <div className="thumbnailbottom">
      <Box>
        <Box pb={props.pb}>
          <Image width="100%" pt={0} src={props.img} />
        </Box>
        <Box pt="0.3em" pb="0.3em">
          <WrapperName>
            <Text
              pl={props.pl}
              color="#ffffff"
              bold
              children={props.name}
              fontSize={['0.8em', '0.7em', '1em', '1.2em', '0.9em']}
            />
          </WrapperName>
        </Box>
        <Flex pt="0.8em" pb="0.5em">
          <Box w={8 / 12}>
            <Text
              pl="1em"
              pt="0.3em"
              color="#c2c405"
              left
              children={props.date}
              fontSize={['0.7em', '0.6em', '0.9em', '1.1em', '0.8em']}
            />
          </Box>
          <Box w={4 / 12}>
            <Text
              pr="1em"
              pt="0.3em"
              color="#c2c405"
              right
              children={props.time}
              fontSize={['0.7em', '0.6em', '0.9em', '1.1em', '0.8em']}
            />
          </Box>
        </Flex>
      </Box>
      <style jsx>
        {`
          .thumbnailbottom {
            font-family: Helvetica, Arial, sans-serif;
            background: #012147;
          }
        `}
      </style>
    </div>
  </Provider>
)

export default ThumbnailBottom
