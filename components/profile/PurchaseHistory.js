import { Box, Image, Text, Flex, Provider } from 'rebass'
import styled from 'styled-components'
import color from '../commons/vars'
import FacebookLoginButton from '../login/FacebookLoginButton'
import { ListPurchase } from './ListPurchase'
import { connect } from 'react-redux'
import * as api from '../../api'
import Router from 'next/router'
import { media, theme } from '../../tools/responsive'

const WrapperBoxProfile = styled.div`
  margin-left: 1.2rem;
  margin-right: 1.2rem;
`
const WrapperType = styled.div`
  ${media.ipad`display: none;`};
  ${media.phone`display: none;`};
`
const Text1 = styled.div`
  color: ${color.black};
  font-weight: 700;
  font-size: 1.3em;
  font-family: Helvetica, Arial, sans-serif;
  ${media.iphone5`font-size: 1em;`};
`

const Text2 = styled.div`
  color: ${color.red};
  font-weight: 700;
  font-size: 1.1em;

  font-family: Helvetica, Arial, sans-serif;
  margin-bottom: 1rem;
  ${media.iphone5`font-size: 0.8em;`};
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
    Router.push(`/`)
  }

  async fetchPurchaseHistory() {
    //console.log('token', this.props.auth.token)
    const { status, data } = await api.get(
      `${api.SERVER}/purchase-history?token=${this.props.auth.token}`
    )
    //console.log('daddddta', data)
    this.setState({ puschaseList: data })
  }

  renderPurchaseList(purchaseList) {
    const purchaseHistory = []
    if (purchaseList == `you have't purchase`) {
    } else {
      for (let i = 0; i < purchaseList.length; i++) {
        purchaseHistory.push(
          <ListPurchase
            key={i}
            purchase={purchaseList[i]}
            typeSub={this.props.common.TYPESUBPRODUCT}
            typeLive={this.props.common.TYPELIVEPRODUCT}
            typePackage={this.props.common.TYPEPACKAGE}
          />
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
      <div>
        <Box w={12 / 12}>
          <Box w={12 / 12}>
            <Flex className="Profile-pic" py="1rem">
              <Box w={[3 / 12, 3 / 12, 1 / 12, 1 / 12, 1 / 12]} py="0.5rem">
                <Image src="../../static/ic_purchase@3x.png" width="80%" />
              </Box>
              <Box
                w={[9 / 12, 9 / 12, 11 / 12, 11 / 12, 11 / 12]}
                pt={['1.6rem', '2rem', '1.3rem', '2rem', '2rem']}
              >
                <Text1>{this.props.common.PURCHASEHISTORY}</Text1>
              </Box>
            </Flex>
            <hr size="0.1" />
            <Flex className="Title-Purchase" pt="1.4rem" pb="1rem">
              <Box w={[5.5 / 12, 6 / 12, 2.7 / 12, 2 / 12, 2 / 12]}>
                <Text2>{this.props.common.PURCHASEDATA}</Text2>
              </Box>
              <Box w={[6.5 / 12, 6 / 12, 9.3 / 12, 10 / 12, 10 / 12]}>
                <Flex>
                  <Box w={[12 / 12, 12 / 12, 4 / 12, 3 / 12, 3 / 12]}>
                    <Text2>{this.props.common.PURCHASEID}</Text2>
                  </Box>
                  <Box w={[0 / 12, 0 / 12, 0 / 12, 4 / 12, 4 / 12]}>
                    <WrapperType>
                      <Text2>{this.props.common.TYPE}</Text2>
                    </WrapperType>
                  </Box>
                  <Box w={[0 / 12, 0 / 12, 0 / 12, 3 / 12, 3 / 12]}>
                    <WrapperType>
                      <Text2>{this.props.common.STATUS}</Text2>
                    </WrapperType>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
          {this.renderPurchaseList(this.state.puschaseList)}
        </Box>
      </div>
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
