import { Box, Image, Text, Flex } from 'rebass'
import styled from 'styled-components'
import color from '../commons/vars'
import FacebookLoginButton from '../login/FacebookLoginButton'

const WrapperBoxProfile = styled.div`
  margin-left: 1.2rem;
  margin-right: 1.2rem;
  margin-bottom: 1.2rem;
`
const Text1 = styled.div`
  color: ${color.black};
  font-weight: 700;
  font-size: 1.3em;
  font-family: Helvetica, Arial, sans-serif;
`

const Text2 = styled.div`
  color: ${color.black};
  font-weight: 400;
  font-size: 0.9em;
  font-family: Helvetica, Arial, sans-serif;
  margin-top: 0.35rem;
  margin-bottom: 0.5rem;
`

const InputEmail = styled.input`
  color: ${color.black};
  font-weight: 400;
  font-size: 1.1em;
  font-family: Helvetica, Arial, sans-serif;
  margin-bottom: 1rem;
`
const Button = styled.button`
  background-color: white;
  border: 1px solid red;
  color: red;
  padding: 5px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
  font-family: Helvetica, Arial, sans-serif;
  margin-top: 0.3rem;
`

const Gender = styled.select`
  width: 11em;
  height: 2.2em;
  font-size: 0.8em;
  margin-bottom: 1rem;
`

const Age = styled.select`
  width: 4em;
  height: 2.2em;
  font-size: 0.8em;
`

const Country = styled.select`
  width: 15.7em;
  height: 2.2em;
  font-size: 0.8em;
`
export const InputProfile = () => {
  return (
    <Box w={12 / 12}>
      <WrapperBoxProfile>
        <Box w={12 / 12}>
          <Flex className="Input-user" pb="0.5rem" pt="1rem">
            <Box w={12 / 12} pt="0.4rem">
              <Flex>
                <Box w={2 / 12}>
                  <Text2>Name</Text2>
                </Box>
                <Box w={10 / 12}>
                  <InputEmail />
                </Box>
              </Flex>
              <Flex>
                <Box w={2 / 12}>
                  <Text2>Lastname</Text2>
                </Box>
                <Box w={10 / 12}>
                  <InputEmail />
                </Box>
              </Flex>
              <Flex>
                <Box w={2 / 12}>
                  <Text2>Gender</Text2>
                </Box>
                <Box w={10 / 12}>
                  <Flex>
                    <Gender>
                      <option value="Select your gender">
                        Select your gender
                      </option>
                    </Gender>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Text2>Age</Text2>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Age>
                      <option value="--">--</option>
                    </Age>
                  </Flex>
                </Box>
              </Flex>
              <Flex>
                <Box w={2 / 12}>
                  <Text2>Country</Text2>
                </Box>
                <Box w={10 / 12}>
                  <Country>
                    <option value="Select you country">
                      Select you country
                    </option>
                  </Country>
                </Box>
              </Flex>
            </Box>
            {/* <Box w={10 / 12}>
              <InputEmail />
              <br />
              <InputEmail />
              <br />
              <InputEmail /> */}
            {/* <Text3>Age</Text3> */}
            {/* <br />
              <InputEmail /> */}
            {/* <Text2>youremail@email.com</Text2>
              <Text2>......</Text2>
              <Button>Change password</Button> */}
            {/* </Box> */}
          </Flex>
        </Box>
      </WrapperBoxProfile>
    </Box>
  )
}
