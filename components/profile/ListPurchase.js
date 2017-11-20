import { Box, Image, Text, Flex } from 'rebass'
import styled from 'styled-components'
import color from '../commons/vars'
import FacebookLoginButton from '../login/FacebookLoginButton'
import moment from 'moment'

const Text3 = styled.div`
  color: ${color.Black};
  font-weight: 500;
  font-size: 1em;
  padding-top: 0.3rem;
  font-family: Helvetica, Arial, sans-serif;
  margin-bottom: 0.2rem;
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
  cursor: pointer;
`
export const ListPurchase = purchaseList => {
  const purchaseDate = moment(purchaseList.purchase.purchaseDate).format(
    'D MMM YYYY'
  )
  return (
    <Box w={12 / 12}>
      <Flex className="List-Purchase" pb="1rem">
        <Box w={2 / 12}>
          <Text3>{purchaseDate}</Text3>
        </Box>
        <Box w={2 / 12}>
          <Text3>{purchaseList.purchase.orderId}</Text3>
        </Box>
        <Box w={4 / 12}>
          <Text3>
            <b>Live</b>: {purchaseList.purchase.productName}
          </Text3>
        </Box>
        <Box w={3 / 12}>
          <Flex className="Status-purchase">
            <Text3>{purchaseList.purchase.status}</Text3>
          </Flex>
        </Box>
        <Box w={1 / 12}>{/* <Button>Receipt</Button> */}</Box>
      </Flex>
    </Box>
  )
}
