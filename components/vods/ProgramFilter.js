import styled from 'styled-components'
import { Flex, Box, Text, Provider } from 'rebass'
import { media, theme } from '../../tools/responsive'

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
  ${media.iphone7p`font-size: 0.9em;`};
  ${media.iphone5`width: 16em;`};
`

export default ({
  lang,
  filteredProgram,
  onFilteredProgramChange,
  programEns,
}) => {
  let all = ''
  if (lang == 'en') {
    all = 'All shows'
  } else {
    all = 'ทั้งหมด'
  }
  //console.log('filteredProgram', filteredProgram)
  //console.log('onFilteredProgramChange', onFilteredProgramChange)
  //console.log('programEns', programEns)
  // console.log('ddddddddddddprogram', programEns)
  return (
    <Provider>
      <div className="LabelSearch">
        <Flex pb="1rem">
          <Box className="2" w={3 / 12}>
            <ProgramList
              value={filteredProgram}
              onChange={onFilteredProgramChange}
            >
              <option value="All shows">{all}</option>
              <option value={programEns[0]}> {programEns[0]} </option>
              <option value={programEns[1]}>{programEns[1]}</option>
              <option value={programEns[2]}>{programEns[2]}</option>
              <option value={programEns[3]}>{programEns[3]}</option>
              <option value={programEns[4]}>{programEns[4]}</option>
              <option value={programEns[5]}>{programEns[5]}</option>
              <option value={programEns[6]}>{programEns[6]}</option>
              <option value={programEns[7]}>{programEns[7]}</option>
            </ProgramList>
          </Box>
          <Box w={2 / 12} />
        </Flex>
      </div>
    </Provider>
  )
}
