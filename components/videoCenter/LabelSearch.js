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

const LabelSearch = props => (
  <div className="LabelSearch">
    <Flex pb="1rem">
      {/* <Box className="1" w={2 / 12}>
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
      </Box> */}
      {/* <Box className="2" pl="30px" w={3 / 12}>  เอาตัวนี้*/}
      <Box className="2" w={3 / 12}>
        <AllShow>
          <option value="Filter the show"> {props.program_en[0]} </option>
          <option value="saab">{props.program_en[1]}</option>
          <option value="opel">{props.program_en[2]}</option>
          <option value="audi">{props.program_en[3]}</option>
        </AllShow>
      </Box>
      <Box w={2 / 12} />
      {/* <Box w={3 / 12}>
        <Input placeholder="Search" />
      </Box> */}
    </Flex>
  </div>
)

export { LabelSearch }
