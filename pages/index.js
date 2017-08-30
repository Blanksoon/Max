// This is the Link API
import Link from 'next/link'
import Test from '../components/navbar'
import {
  Provider,
  Container,
  Heading,
  Blockquote,
  Toolbar,
  NavLink,
  Flex,
  Box
} from 'rebass'
const Index = () => (
  <div>
    <Provider>
    <Heading is='h1' children='Next.js + Rebass' mb={3} center />

    <Container>
      <Toolbar bg='black'>
        <NavLink href='https://github.com/zeit/next.js/' target='_blank'>Next.js</NavLink>
        <NavLink ml='auto' href='http://jxnblk.com/rebass/' target='_blank'>
          REBASS docter jill
        </NavLink>
      </Toolbar>

      <Flex justify='center'>
        <Box width={1 / 2}>
          <Blockquote center fontSize={3} py={4}>
            "Next.js is a minimalistic framework for server-rendered React applications."
          </Blockquote>
        </Box>
        <Box width={6 / 12}>
          <Blockquote center fontSize={3} py={4}>
            "Functional React UI component library, built with styled-components"
          </Blockquote>
        </Box>
      </Flex>
    </Container>
  </Provider>
  </div>
)

export default Index