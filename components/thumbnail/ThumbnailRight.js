import React from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Image, Text } from 'rebass'
import { media } from '../../tools/responsive'

const Text1 = styled.div`
  ${media.phone`
    height: 28px;
    overflow: hidden;`};
  ${media.iphone5`
    height: 26px;
    overflow: hidden;`};
`
const Text2 = styled.div`
  ${media.phone`
    height: 39px;
    overflow: hidden;`};
  ${media.iphone5`
    height: 29px;
    overflow: hidden;`};
`
const ThumbnailRight = props => (
  <Provider>
    <div className="thumbnailright">
      <Flex bg="#000000e6">
        <Box
          w={5 / 12}
          pt={['0.5em', '0.5em', '0em', '1em', '0.5em']}
          pl="0.5em"
        >
          <Image width={props.w} src={props.img} />
        </Box>
        <Box w={7 / 12} pl="20px" pt="5px" pb="5px">
          <Box w={12 / 12}>
            <Text1>
              <Text
                color="#fff"
                bold
                children={props.text1}
                fontSize={['0.7em', '0.7em', '0.9em', '0.9em', '0.9em']}
              />
            </Text1>
          </Box>
          <Text2>
            <Text
              color="#fff"
              pt={['0.2rem', '0rem', '0.5rem', '0.5rem', '0.5rem']}
              children={props.text2}
              fontSize={['0.7em', '0.7em', '0.8em', '0.8em', '0.8em']}
            />
          </Text2>
          <Text
            color="blue"
            pt={['0.2rem', '0rem', '0.5rem', '0.5rem', '0.5rem']}
            children={props.date}
            fontSize={['0.7em', '0.7em', '0.9em', '0.9em', '0.9em']}
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
