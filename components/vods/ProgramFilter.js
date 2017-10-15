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

const ProgramList = styled.select`
  width: 18em;
  height: 2.4em;
  font-size: 1em;
`

export default ({ filteredProgram, onFilteredProgramChange, programEns }) => {
  return (
    <div className="LabelSearch">
      <Flex pb="1rem">
        <Box className="2" w={3 / 12}>
          <ProgramList
            value={filteredProgram}
            onChange={onFilteredProgramChange}
          >
            <option value="All shows">All shows</option>
            <option value="Max Muay Thai"> {programEns[0]} </option>
            <option value="Battle Muay Thai">{programEns[1]}</option>
            <option value="Muay Thai Fighter">{programEns[2]}</option>
            <option value="The Champion Muay Thai">{programEns[3]}</option>
          </ProgramList>
        </Box>
        <Box w={2 / 12} />
      </Flex>
    </div>
  )
}
