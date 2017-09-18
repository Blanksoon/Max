import Head from 'next/head'
import Link from 'next/link'
import { LabelSearch } from '../components/videoCenter/LabelSearch'
import styled from 'styled-components'
import { NavbarHead } from '../components/home/NavbarHead'
import { Footer } from '../components/home/Footer'
import { VideoBox } from '../components/videoCenter/VideoBox'
import { Provider as Rebass, Container, Flex, Box } from 'rebass'
import rootReducer from '../reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
const WrapperNavbar = styled.div`background-color: #009999;`
import Main from '../layouts/Main'
const store = createStore(rootReducer, composeWithDevTools())
const videoCenter = ({ url }) => (
  <Provider store={store}>
    <Rebass>
      <Main url={url}>
        <div className="videocenter">
          <Container>
            <Box>
              <LabelSearch />
            </Box>
            <Box pt="20px">
              <VideoBox />
            </Box>
          </Container>
        </div>
        <style jsx global>
          {`
            body {
              padding: 0 !important;
              margin: 0 !important;
            }
             {
              /* * {
              box-sizing: border-box;
            } */
            }
          `}
        </style>
      </Main>
    </Rebass>
  </Provider>
)

export default videoCenter
