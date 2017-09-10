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
import Link from 'next/link'

const TabNavbar = (props) => {
  let nameLink = ''
  switch (props.name) {
    case 'Our Show':
      nameLink = 'ourShow'
      break;
    case 'Video Center':
      nameLink = 'videoCenter'
      break;
    case 'Our Show':
      nameLink = 'ourShow'
      break;
    case 'Max News':
      nameLink = 'maxNews'
      break;
    case 'Get Ticket':
      nameLink = 'get-ticket'
      break;
    case 'Contact Us':
      nameLink = 'contactUs'
      break;
    default:
      nameLink = ''
  }
  if (props.name == 'Video Center') {
    nameLink = 'videoCenter'
  }
  return (
    <Box w={1.8 / 12} pt='2%' >
      <div className="tab" style={{textAlign: 'center'}}>
        <Link href={`/${nameLink}`}>
          <a>{props.name}</a>
        </Link>
        <style jsx>{`
          a:link {} 
          a {
            color: #fff;
            TEXT-DECORATION: none
          }
          a:hover {COLOR: #FF0000; TEXT-DECORATION: none} 
        `}
        </style>
      </div>
    </Box>
  )
}

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
