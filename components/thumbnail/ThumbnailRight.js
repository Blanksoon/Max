import React from 'react'
import { Flex, Provider, Box, Image, Text } from 'rebass'

const ThumbnailRight = props => (
  <Provider>
    <div className="thumbnailright">
      <Flex>
        <Box w={5 / 12}>
          <Image width={props.w} pt={0} src={props.img} />
        </Box>
        <Box w={7 / 12} pl="20px">
          <Box w={10 / 12}>
            <Text bold children={props.text1} fontSize="0.9em" />
          </Box>
          <Text pt="0.5rem" children={props.text2} fontSize="0.9em" />
          <Text
            color="blue"
            pt="0.5rem"
            children={props.date}
            fontSize="0.9em"
          />
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
