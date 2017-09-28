import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import { Container, Flex, Box, Image } from 'rebass'
import NewModal from '../containers/NewModal'
import Main from '../layouts/Main'
import color from '../components/commons/vars'
import ThumbnailBigLive from '../components/thumbnail/ThumbnailBigLive'

const Text = styled.div`
  color: #b81111;
  font-weight: 700;
  font-size: 2em;
`
const Wrapper = styled.div`
  background-color: #3d7fb8;
  font-family: Helvetica, Arial, sans-serif;
`
const LivePlayer = styled.div`height: 36rem;`

const live = ({ url }) => (
  <div>
    <Head>
      <link href="./static/css/video-react.css" rel="stylesheet" />
    </Head>
    <Main url={url}>
      <div>
        <Wrapper>
          <Container>
            <Box pl="1.5rem" bg="#fff" pt="8rem">
              <Text>LIVE</Text>
            </Box>
            <Flex bg="#fff" pt="2rem">
              <Box w={6 / 12} pl="1.5rem" pr="0.75rem">
                <Link>
                  <a href="/lives_vdo">
                    <ThumbnailBigLive
                      img="static/maxultimate-show.jpg"
                      text1="Now! LIVE-on Sun.Aug 20th, 2017"
                      text2="MAX Ultimate Tournament & MAX World Champions 7"
                      text3="InternationalFights"
                      text4="live telecast on Channel 8 HD 27"
                      text5="every Sunday 7.20-9.50 pm."
                    />
                  </a>
                </Link>
              </Box>
              <Box w={6 / 12} pl="0.75rem" pr="1.5rem">
                <Link>
                  <a href="/lives_vdo">
                    <ThumbnailBigLive
                      img="static/thairath-show.jpg"
                      text1="NEXT-on Sat. Aug 19th, 2017"
                      text2="Thairath Muay-Thai Figther"
                      text3={<br />}
                      text4="live telecast on ThairathTV HD 32"
                      text5="every Saturday 2.00-4.00 pm."
                    />
                  </a>
                </Link>
              </Box>
            </Flex>
            <Flex bg="#fff" pt="2rem" pb="3rem">
              <Box w={6 / 12} pl="1.5rem" pr="0.75rem">
                <Link>
                  <a href="/lives_vdo">
                    <ThumbnailBigLive
                      img="static/thechampion-show.jpg"
                      text1="Now! LIVE-on Sun.Aug 20th, 2017"
                      text2="The Champion Muay-Thai"
                      text3={<br />}
                      text4="live telecast on Channel 8 HD 27"
                      text5="every Sunday 7.20-9.50 pm."
                    />
                  </a>
                </Link>
              </Box>
              <Box w={6 / 12} pl="0.75rem" pr="1.5rem">
                <Link>
                  <a href="/lives_vdo">
                    <ThumbnailBigLive
                      img="static/thebattle-show.jpg"
                      text1="Now! LIVE-on Sun.Aug 20th, 2017"
                      text2="The Battle Muay-Thai"
                      text3={<br />}
                      text4="live telecast on Channel 8 HD 27"
                      text5="every Sunday 7.20-9.50 pm."
                    />
                  </a>
                </Link>
              </Box>
            </Flex>
          </Container>
        </Wrapper>
      </div>
    </Main>
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
  </div>
)

export default live
