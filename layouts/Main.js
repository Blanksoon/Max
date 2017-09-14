import { Provider } from 'rebass'
import Navbar from '../components/commons/Navbar'
import AddressFooter from '../components/commons/AddressFooter'
import SocialFooter from '../components/commons/SocialFooter'
export default ({ children }) => (
  <Provider>
    <Navbar />
    {children}
    <AddressFooter />
    <SocialFooter />
  </Provider>
)
