import {
  TabNavbar,
  Register,
  Language
} from './NavbarTab'
import {
  Provider,
  Toolbar,
  Flex,
  Box,
  Text,
  Image,
  Tabs,
  TabItem,
  Border,
  NavLink
} from 'rebass'
import Link from 'next/link'

const NavbarHead = () => (
  <div className="Navbar">
    <Flex>
      <Box w={3 / 12} px={0}>
      <Link href={`/`}>
        <Image
          width={100}
          borderWidth={5} color='red'
          //height={1/12}
          src='/static/logo.png'
          ml={15}
          mt={2}
        />
      </Link>
      </Box>
      <Box w={9 / 12} >
        <Flex w={12 / 12}>
        <Box w={9/12}></Box>
          <Register register='Register/login' />
        </Flex>
        <Flex w={12 / 12} pt='1%' >
        <Box w={1/12} />
          <TabNavbar name='Home' />
          <TabNavbar name='Our Show' />
          <TabNavbar name='Video Center' />
          <TabNavbar name='Max News' />
          <TabNavbar name='Get Ticket' />
          <TabNavbar name='Contact Us' />
          <Language en='EN' th='Th' />
        </Flex>
      </Box>
    </Flex>
  </div>
)


export {
  NavbarHead
}

