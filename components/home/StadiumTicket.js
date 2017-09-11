import {
  Media,
  Subhead,
  Image,
  Link,
  Flex,
  Box,
  Text,
  Provider,
} from 'rebass'

const stadium_ticket = () => (
    <div>
      <Flex>
        <Box w={1} >
          <Box w={1}>
            <h1>Witness the ultimate extreme MuayThai</h1>
            <h4>Call for suadilum ticket reservation</h4>
          </Box>
          <Flex>
            <Box w={1 / 12} >
              <Image
                width='100%'
                src='static/phone.png'
              />
            </Box>
            <Box w={11.5/12} >
              <button className='button' >(+66)038-416-999</button>
              <button className='button' >(+66)038-416-999</button>
            </Box>
          </Flex>
        </Box>
      </Flex>
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