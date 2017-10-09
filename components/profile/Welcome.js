import { Box, Text } from 'rebass'
import color from '../commons/vars'
const Welcome = () => {
  return (
    <Box w={12 / 12} pb="1rem">
      <Text
        children="WELCOME BACK, Username"
        fontSize="2rem"
        bold
        color={color.red}
      />
    </Box>
  )
}

export { Welcome }
