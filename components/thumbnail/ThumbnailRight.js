import React from 'react'
import { Flex, Provider, Box, Image, Text } from 'rebass'

const ThumbnailRight = porps => (
  <Provider>
    <div className="thumbnailright">
      <Flex>
        <Box w={5 / 12}>
          <Image width="100%" pt={0} src={porps.img} />
        </Box>
        <Box w={7 / 12} pl="20px" pt="3%" bg="#ebebeb">
          <Text bold children={porps.text1} fontSize="0.9em" />
          <Text bold children={porps.text2} fontSize="0.9em" />
          <br />
          <Text color="blue" pt="3px" children={porps.date} fontSize="0.9em" />
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
  </Provider>
)

export default ThumbnailRight
