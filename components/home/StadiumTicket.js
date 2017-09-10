import {
  Media,
  Subhead,
  Image,
  Link,
  Flex,
  Box,
  Text
} from 'rebass'

const stadium_ticket = () => (
  <div>
    <Box mt='2%' pt='1%' pb='3%'>
      <Box pt='0%' >
        <h1>Witness the ultimate extreme MuayThai</h1>
        <h4>Call for suadilum ticket reservation</h4>
      </Box>
      <Flex>
        <Box w={0.5 / 12} >
          <Image
            width='100%'
            src='static/phone.png'
          />
        </Box>
        <button className='button' >(+66)038-416-999</button>
        <button className='button' >(+66)038-416-999</button>
      </Flex>
    </Box>
    <style jsx>
      {`
        .button{
          left: 1px;
          color: #ffffff;
          background-color: red;
          margin-left: 21px;
        }
      `}
    </style>
  </div>
)

export default stadium_ticket