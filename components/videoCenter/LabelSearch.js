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
      <Box className="2" w={3 / 12}>
        <AllShow value={props.value} onChange={props.handleChange}>
          <option value="All shows">All shows</option>
          <option value="Max Muay Thai"> {props.program_en[0]} </option>
          <option value="The Champion Muay Thai">{props.program_en[1]}</option>
          <option value="Muay Thai Fighter">{props.program_en[2]}</option>
          <option value="Battle Muay Thai">{props.program_en[3]}</option>
        </AllShow>
      </Box>
      <Box w={2 / 12} />
    </Flex>
  </div>
)

export { LabelSearch }
