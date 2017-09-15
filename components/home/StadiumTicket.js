import styled from 'styled-components'
import { Media, Subhead, Image, Link, Flex, Box, Text, Provider } from 'rebass'

const BorderRight = styled.div`border-right: 1px solid #fff;`
const stadium_ticket = () => (
  <Provider>
    <div>
      <Flex>
        <Box w={1} pt="2em" pb="2em">
          <Box w={1}>
            <h1>Witness the ultimate extreme MuayThai</h1>
            <h4>Call for suadilum ticket reservation</h4>
          </Box>
          <Flex>
            <Box w={1 / 16}>
              <BorderRight>
                <Image width="60%" src="static/phone.png" />
              </BorderRight>
            </Box>
            <Box w={11 / 12} pt="1ex">
              <Flex>
                <Box pl="2em" pr="1em">
                  <BorderRight>
                    <Text
                      color="#fff"
                      bold
                      children="(+66)038-416-999"
                      fontSize="0.9em"
                    />
                  </BorderRight>
                </Box>
                <Box pl="1em" pr="1em">
                  <Text
                    color="#fff"
                    bold
                    children="08-2495-5549"
                    fontSize="0.9em"
                  />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <style jsx>
        {`
          .button {
            left: 1px;
            color: #ffffff;
            background-color: red;
            margin-left: 21px;
          }
        `}
      </style>
    </div>
  </Provider>
)

export default stadium_ticket
