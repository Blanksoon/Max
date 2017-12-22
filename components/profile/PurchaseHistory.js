import { Box, Image, Text, Flex } from 'rebass'
import styled from 'styled-components'
import color from '../commons/vars'
import FacebookLoginButton from '../login/FacebookLoginButton'
import { ListPurchase } from './ListPurchase'
import { connect } from 'react-redux'
import * as api from '../../api'

const WrapperBoxProfile = styled.div`
  margin-left: 1.2rem;
  margin-right: 1.2rem;
`
const Text1 = styled.div`
  color: ${color.black};
  font-weight: 700;
  font-size: 1.3em;
  font-family: Helvetica, Arial, sans-serif;
`

const Text2 = styled.div`
  color: ${color.red};
  font-weight: 700;
  font-size: 1.1em;

  font-family: Helvetica, Arial, sans-serif;
  margin-bottom: 1rem;
`
const InputEmail = styled.input`
  color: ${color.black};
  font-weight: 400;
  font-size: 1.1em;
  font-family: Helvetica, Arial, sans-serif;
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
  margin-top: 0.3rem;
  cursor: pointer;
`
class PurchaseHistory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      errMessageEmail: '',
      loading: false,
      puschaseList: {},
    }
    this.fetchPurchaseHistory = this.fetchPurchaseHistory.bind(this)
    this.logout = this.logout.bind(this)
  }

  logout() {
    Router.push(`http://localhost:8080/index`)
  }

  async fetchPurchaseHistory() {
    //console.log('token', this.props.auth.token)
    const { status, data } = await api.get(
      `${api.SERVER}/purchase-history?token=${this.props.auth.token}`
    )
    console.log('daddddta', data)
    this.setState({ puschaseList: data })
  }

  renderPurchaseList(purchaseList) {
    const purchaseHistory = []
    if (purchaseList == `you have't purchase`) {
    } else {
      for (let i = 0; i < purchaseList.length; i++) {
        purchaseHistory.push(
          <ListPurchase key={i} purchase={purchaseList[i]} />
        )
      }
    }
    return purchaseHistory
  }

  componentDidMount() {
    this.fetchPurchaseHistory()
  }

  render() {
    if (this.props.auth.token === undefined) {
      // console.log('tokennnnnmmm', this.props.auth.token)
      {
        this.logout()
      }
    }
    return (
      <Box w={12 / 12}>
        <Box w={12 / 12}>
          <Flex className="Profile-pic" py="1rem">
            <Box w={1 / 12} py="0.5rem">
              <Image src="../../static/ic_purchase@3x.png" width="80%" />
            </Box>
            <Box w={11.7 / 12} pt="2.3rem">
              <Text1>Purchase history</Text1>
            </Box>
          </Flex>
          <hr size="0.1" />
          <Flex className="Title-Purchase" pt="1.4rem" pb="1rem">
            <Box w={2 / 12}>
              <Text2>Purchase data</Text2>
            </Box>
            <Box w={2 / 12}>
              <Text2>Purchase ID</Text2>
            </Box>
            <Box w={4 / 12}>
              <Text2>Type</Text2>
            </Box>
            <Box w={4 / 12}>
              <Text2>Status</Text2>
            </Box>
          </Flex>
        </Box>
        {this.renderPurchaseList(this.state.puschaseList)}
      </Box>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

// const rowPurchaseHistory = purchaseList => {
//   console.log(purchaseList)
//   let i = 0
//   while (i < purchaseList) {
//     ;<ListPurchase purchaseId={purchaseList[i]} />
//     i++
//   }
// }

export default connect(mapStateToProps, null)(PurchaseHistory)
