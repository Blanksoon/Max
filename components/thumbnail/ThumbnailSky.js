import React from 'react'
import styled from 'styled-components'
import { Flex, Provider, Box, Image, Text } from 'rebass'

const Wrapper = styled.div`
  width: 100%;
  height: 35vh;
  background-size: cover;
  background-color: #57b3fe;
  // background-image: url('static/img_live_banner.jpg');
  font-family: Helvetica, Arial, sans-serif;
  position: relative;
`
const WrapperText = styled.div`
  color: #fff;
  bottom: 40%;
  left: 35%;
  width: 100%;
  position: absolute;
  font-weight: 700;
  font-size: 3em;
`

const ThumbnailVideo = props => (
  <Provider>
    <Wrapper>
      <WrapperText>ADS</WrapperText>
    </Wrapper>
  </Provider>
)

export default ThumbnailVideo
