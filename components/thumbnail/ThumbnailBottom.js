import React from 'react'
import {
  Flex,
  Provider,
  Box,
  Image,
  Text,
} from 'rebass'

const ThumbnailBottom = (porps) => (
  <Provider>
    <Flex>
      <Box bg='#b7b7b7' >
        <Box>
          <Box>
            <Image
              width='100%'
              pt={0}
              src={porps.img}
            />
          </Box>
          <Box>
            <Text                
              bold
              children= {porps.name}
              fontSize='0.9em'
            />
            <br/>
            <Text
              children= {porps.date}
              fontSize='0.9em'
            />
          </Box>
        </Box>
      </Box>
    </Flex>
  </Provider>
)

export default ThumbnailBottom