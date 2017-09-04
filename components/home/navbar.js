import {
  TabNavbar,
  Register
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

const Navbar = () => (
  <div className="Navbar">
        <Flex>
          <Box w={1/3} px={0} bg='black'>
              <Image
                width={100}
                borderWidth={5} color='red'
                //height={1/12}
                src='/static/logo.png'
                ml = {15}
                mt = {2}
              />
          </Box>
          <TabNavbar name='Home'/>
          <TabNavbar name='Our Show'/>
          <TabNavbar name='Video Center'/>
          <TabNavbar name='Max News'/>
          <TabNavbar name='Get Ticket'/>
          <TabNavbar name='Contact Us'/>
          <Register register='Register/login' en='EN' th='Th'/>
      </Flex>
  </div>
)


export {
  Navbar
}

