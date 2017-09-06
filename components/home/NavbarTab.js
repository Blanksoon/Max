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

const TabNavbar = (props) => (
  <Box w={1.5 / 12} px={0} >
    <Text
      pt='20%'
      pb={2}
      center
      bold
      children={`${props.name}`}
      fontSize='0.9em'
    />
  </Box>
)

const Language = (props) => (
  <Flex w={2 / 12}>
    <Box className="box-of-en" w={6 / 12} >
      <div className="en" style={{ textAlign: 'right' }}>
        <Button
          mt='10%'
          children={`${props.en}`}
          fontSize='0.5em'
        />
      </div>
    </Box>
    <Box w={6 / 12} >
      <div className="th" style={{ textAlign: 'right' }}>
        <Button
          mt='10%'
          children={`${props.th}`}
          fontSize='0.5em'
        />
      </div>
    </Box>
  </Flex>
)

const Register = (props) => (
  <Box w={4 / 12} >
    <div style={{ textAlign: 'right' }}>
      <Button
        mt={2}
        children={`${props.register}`}
      />
    </div>
  </Box>
)

export {
  TabNavbar,
  Register,
  Language
}
