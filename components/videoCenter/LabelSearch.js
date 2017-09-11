import styled from 'styled-components'
import {
  Flex,
  Box
} from 'rebass'
const Input = styled.input`
  padding: 1em;
  width: 32.5em;
  color: palevioletred;
  background: papayawhip;
  border: red;
  border-radius: 3px;
  font-size: 12px
`;

const Select = styled.select`
  width: 10em;
  height: 2.4em;
  font-size: 1em;
`

const AllShow = styled.select`
  width: 21.1em;
  height: 2.4em;
  font-size: 1em;
`

const LabelSearch = () => (
  <div className="LabelSearch">
    <Flex mb={3}>
      <Box w={1/2}>
        <h1><b>Video Center</b></h1>
      </Box>
      <Box w={1/2}>
        <Flex>
          <Box w={1/3}>
          </Box>
          <Box w={1} mt='1.5em' mb='1.1em'>
            <Input placeholder="search"></Input>
          </Box>
        </Flex>
      </Box>
    </Flex>
    <Flex>
      <Box className="1" w={1/2.3}>
      <Select>
        <option value="Filter month">All Month</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </Select>
      </Box>
      <Box className="2" w={1}>
        <Select>
          <option value="Filter year">All Year</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </Select>
      </Box>
      <Box className="2" w={1}>
        <Flex mb='1em'>
          <Box className="2" w={1/3.5}>
          </Box>
          <Box className="2" w={1}>
            <AllShow>
              <option value="All Show">Filter the show</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </AllShow>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </div>
)

export {
  LabelSearch
}