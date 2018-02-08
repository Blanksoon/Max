import React from 'react'
import { Flex, Box, Image, Text, Provider } from 'rebass'
import Link from 'next/link'
import styled from 'styled-components'
import { media, theme } from '../../tools/responsive'

const WrapperName = styled.div`
  ${media.phone`height: 30px;overflow: hidden;`};
  ${media.iphone5`height: 30px;overflow: hidden;`};
`
const ThumbnailVideo = props => (
  <Provider theme={theme}>
    <Link as={`/vods/${props.id}`} href={`/videoPlayer?id=${props.id}`}>
      <a style={{ textDecoration: 'none' }}>
        <div className="thumbnailbottom">
          <Box>
            <Image
              width={['100%', '100%', '100%', '100%', '100%']}
              pt={0}
              src={props.img}
            />
          </Box>
          <Box>
            <WrapperName>
              <Text
                left
                pt="1em"
                bold
                children={props.name}
                fontSize={['0.9em', '0.75em', '0.8em', '0.9em', '0.9em']}
              />
            </WrapperName>
          </Box>
          <Flex pt={props.pt} wrap>
            <Box w={[9 / 12, 12 / 12, 9 / 12, 9 / 12, 9 / 12]}>
              <Text
                left
                pt="5px"
                pb="3px"
                color="#0d74ec"
                children={props.date}
                fontSize={['0.8em', '0.8em', '0.8em', '0.9em', '0.9em']}
              />
            </Box>
            <Box w={[3 / 12, 4 / 12, 3 / 12, 3 / 12, 3 / 12]}>
              <Text
                right
                pt="5px"
                pb="3px"
                color="#0d74ec"
                children={props.time}
                fontSize={['0.8em', '0.9em', '0.8em', '0.9em', '0.9em']}
              />
            </Box>
          </Flex>
        </div>
        <style jsx>
          {`
            .thumbnailbottom {
              cursor: pointer;
              font-family: Helvetica, Arial, sans-serif;
            }
          `}
        </style>
      </a>
    </Link>
  </Provider>
)

export default ThumbnailVideo
