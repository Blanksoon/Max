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
      <Box bg='#021e3d' >
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
              color= '#ffffff'            
              bold
              children= {porps.name}
              fontSize='0.9em'
            />
            <br/>
            <Text
              color= '#c2c405'
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