import { Box, Text } from 'rebass'
import color from '../commons/vars'
const Welcome = () => {
  return (
    <Box w={12 / 12}>
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
