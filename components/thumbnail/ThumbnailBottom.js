import React from 'react'
import { Flex, Provider, Box, Image, Text } from 'rebass'

const ThumbnailBottom = props => (
  <Provider>
    <div className="thumbnailbottom">
      <Box bg={props.bg}>
        <Box pb={props.pb}>
          <Image width="100%" pt={0} src={props.img} />
        </Box>
        <Box pt="0.3em" pb="0.3em">
          <Text color="#ffffff" bold children={props.name} fontSize="0.9em" />
        </Box>
        <Flex pt="0.8em" pb="0.5em">
          <Box w={8 / 12}>
            <Text
              pt="0.3em"
              color="#c2c405"
              left
              children={props.date}
              fontSize="0.8em"
            />
          </Box>
          <Box w={4 / 12}>
            <Text
              pt="0.3em"
              color="#c2c405"
              right
              children={props.time}
              fontSize="0.8em"
            />
          </Box>
        </Flex>
      </Box>
    </div>
    <style jsx>
      {`
        .thumbnailbottom {
          font-family: Helvetica, Arial, sans-serif;
        }
      `}
    </style>
  </Provider>
)

export default ThumbnailBottom
