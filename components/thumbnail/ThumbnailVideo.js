import React from 'react'
import { Flex, Provider, Box, Image, Text } from 'rebass'

const ThumbnailVideo = porps => (
  <Provider>
    <Flex>
      <div className="thumbnailbottom">
        <Box>
          <Box>
            <Box>
              <Image width="100%" pt={0} src={porps.img} />
            </Box>
            <Box>
              <Text bold children={porps.name} fontSize="0.9em" />
              <Text
                pt="5px"
                color="#0d74ec"
                children={porps.date}
                fontSize="0.9em"
              />
            </Box>
          </Box>
        </Box>
      </div>
      <style jsx>
        {`
          .thumbnailbottom {
            font-family: Helvetica, Arial, sans-serif;
          }
        `}
      </style>
    </Flex>
  </Provider>
)

export default ThumbnailVideo
