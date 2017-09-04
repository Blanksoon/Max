import {Media,
  Subhead,
  Image,
  Link,
  Flex,
  Box,
  Text
} from 'rebass'

const stadium_ticket = () => (
    <div>
      <Flex bg='#909497'>
        <Box width={1}>
          <Flex>
            <Box px={0} py={0} width={3/4} bg='red'>
              <h1>Witness the ultimate extreme MuayThai</h1>
              <h2>Get Stadium Ticket</h2>
            </Box>
            <Box px={0} py={4} width={1/4} bg='blue'>
              <center>
                <button>
                  <Text
                    pl= {3}
                    pr= {3}
                    pt= {3}
                    pb = {3}
                    center
                    bold
                    children= "Reserve Now!"
                    fontSize='2em'
                  />
                </button>
              </center>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </div>
  )
  
  export default stadium_ticket