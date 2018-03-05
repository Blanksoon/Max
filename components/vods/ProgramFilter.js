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
              <option value="Max Muay Thai"> {programEns[0]} </option>
              <option value="Battle Muay Thai">{programEns[1]}</option>
              <option value="Muay Thai Fighter">{programEns[2]}</option>
              <option value="The Champion Muay Thai">{programEns[3]}</option>
              <option value="Global Fight Wednesday">{programEns[4]}</option>
              <option value="Global Fight Thursday">{programEns[5]}</option>
              <option value="MUAY THAI FIGHTER Monday">{programEns[6]}</option>
              <option value="MUAY THAI FIGHTER Tuesday">{programEns[7]}</option>
            </ProgramList>
          </Box>
          <Box w={2 / 12} />
        </Flex>
      </div>
    </Provider>
  )
}
