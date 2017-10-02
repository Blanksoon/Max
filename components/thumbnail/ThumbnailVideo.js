import React from 'react'
import { Flex, Box, Image, Text } from 'rebass'
import Link from 'next/link'

const ThumbnailVideo = props => (
  <Link as={`/vods/${props.id}`} href={`/videoPlayer?id=${props.id}`}>
    <a style={{ textDecoration: 'none' }}>
      <div className="thumbnailbottom">
        <Box>
          <Image width="100%" pt={0} src={props.img} />
        </Box>
        <Box>
          <Text left pt="1em" bold children={props.name} fontSize="0.9em" />
        </Box>
        <Flex pt={props.pt}>
          <Box w={9 / 12}>
            <Text
              left
              pt="5px"
              pb="3px"
              color="#0d74ec"
              children={props.date}
              fontSize="0.9em"
            />
          </Box>
          <Box w={3 / 12}>
            <Text
              right
              pt="5px"
              pb="3px"
              color="#0d74ec"
              children={props.time}
              fontSize="0.9em"
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
)

export default ThumbnailVideo
