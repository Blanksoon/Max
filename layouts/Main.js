import { Provider } from 'rebass'
import Navbar from '../components/commons/Navbar'
import SocialFooter from '../components/commons/SocialFooter'
export default ({ children }) => (
  <Provider>
    <Navbar />
    {children}
    <SocialFooter />
  </Provider>
)
