import styled from 'styled-components'
import { Flex, Box, Text } from 'rebass'
const Input = styled.input`
  padding: 1em;
  width: 19em;
  color: palevioletred;
  background: papayawhip;
  border: red;
  border-radius: 3px;
  font-size: 12px;
`

const Select = styled.select`
  width: 9em;
  height: 2.4em;
  font-size: 1em;
`

const AllShow = styled.select`
  width: 18em;
  height: 2.4em;
  font-size: 1em;
`

const LabelSearch = () => (
  <div className="LabelSearch">
    <Flex mb={3}>
      <Box w={1 / 2}>
        <Text
          pt="5px"
          color="red"
          bold
          children="VIDEO CENTER"
          fontSize="1.4em"
        />
      </Box>
    </Flex>
    <Flex>
      <Box className="1" w={2 / 12}>
        <Select>
          <option value="Filter month">Filter month</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </Select>
      </Box>
      <Box className="2" pl="15px" w={2 / 12}>
        <Select>
          <option value="Filter year">Filter year</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </Select>
      </Box>
      <Box className="2" pl="30px" w={3 / 12}>
        <AllShow>
          <option value="Filter the show">Filter the show</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </AllShow>
      </Box>
      <Box w={2 / 12} />
      <Box w={3 / 12}>
        <Input placeholder="Search" />
      </Box>
    </Flex>
  </div>
)

export { LabelSearch }
