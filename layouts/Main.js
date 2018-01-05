import { Provider } from 'rebass'
import Navbar from '../components/commons/Navbar'
import AddressFooter from '../components/commons/AddressFooter'
import SocialFooter from '../components/commons/SocialFooter'
export default ({ children, url, nav }) => (
  <Provider>
    {/* {url.pathname === '/' && <Navbar activeUrl={url} />} */}
    <Navbar url={url} nav={nav} />
    {children}
    <AddressFooter />
    <SocialFooter />
    <style jsx global>
      {`
        body {
          padding: 0 !important;
          margin: 0 !important;
        }
        * {
          box-sizing: border-box;
        }
      `}
    </style>
  </Provider>
)
