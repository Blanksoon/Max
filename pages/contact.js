import Head from 'next/head'
import Link from 'next/link'
import { LabelSearch } from '../components/videoCenter/LabelSearch'
import styled from 'styled-components'
import Detail from '../components/contact/detail'
import { NavbarHead } from '../components/home/NavbarHead'
import { Footer } from '../components/home/Footer'
import { VideoBox } from '../components/videoCenter/VideoBox'
import { Provider, Container, Flex, Box } from 'rebass'
const Wapper = styled.div`font-family: Helvetica, Arial, sans-serif;`
const Background = styled.div`background-color: ${props => props.color};`

const Contact = props => (
  <Provider>
    <Wapper>
      <Background color="#8b0303">
        <Container>
          <Box w={12 / 12}>
            <NavbarHead />
          </Box>
        </Container>
        <Container>
          <Box>
            <Detail />
          </Box>
        </Container>
      </Background>
    </Wapper>
  </Provider>
)

export default Contact
