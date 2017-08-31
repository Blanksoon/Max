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
  NavLink,
  Button
} from 'rebass'

const TabNavbar = (props) =>(
  <Box w={1/10} px={0} bg='green' >
    <Text
      pt= {65}
      pb = {2}
      center
      bold
      children= {`${props.name}`}
      fontSize='0.9em'
    />
  </Box>
)

const Register = (props) =>(
  <Box w={1/8} px={0} bg='yellow' >
    <Button
      mt = {2}
      w = {1}
	    children={`${props.register}`}
    />
    <Flex>
      <Box w={1/5} bg='purple'>
      </Box>
      <Box w={1/2} bg='pink' >
        <Button
          mt = {20}
          children={`${props.en}`}
        />
      </Box>
      <Box w={1/2} bg='gray' >
      <Button
          mt = {20}
          center
          children={`${props.th}`}
        />
      </Box>
    </Flex>
  </Box>
)

export {
  TabNavbar,
  Register
}
