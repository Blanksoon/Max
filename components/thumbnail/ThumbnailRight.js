import React from 'react'
import {
  Flex,
  Provider,
  Box,
  Image,
  Text,
} from 'rebass'

const ThumbnailRight = (porps) => (
  <Provider>
    <Flex>
      <Box w={4.5/12} >
        <Image
          width='100%'
          pt={0}
          src= {porps.img}
        />
      </Box>
      <Box w={8/12} pl='20px' pt='3%' bg='#ebebeb' >
        <Text                
          bold
          children= {porps.text1}
          fontSize='0.9em'
        />
        <Text                
          bold
          children= {porps.text2}
          fontSize='0.9em'
        />
        <br/>
        <Text
          children= {porps.date}
          fontSize='0.9em'
        />
      </Box>
    </Flex>
  </Provider>
)

export default ThumbnailRight