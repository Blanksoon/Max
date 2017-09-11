import ThumbnailRight from '../thumbnail/ThumbnailRight'
import { Media, Subhead, Image, Link, Flex, Box, Text, Button } from 'rebass'

const max_new = () => (
  <div className="maxnew">
    <Flex>
      <Box width={1}>
        <Flex>
            <Box width={1}>
                <Flex >
                    <Box px={0} py={2} width={1} >
                        <center>
                            <h2>Max News</h2>
                        </center>
                    </Box>
                </Flex>
                <Flex>
                    <Box w={7 / 12}>
                        <div className='backgroundx'>
                            <Box pb='1%' pt='27%' pl='1.5%' width={1} >
                                <h3>Headline consectetur adipicing<br />elit, sed do eiusmod tempor</h3>
                                <h>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br />
                                    exercitation ullamco laboris nisi ut aliquip ex</h>
                                <Flex pt='1.5%'>
                                    <Box w={8 / 12} pt='6px' >
                                        <Text
                                            color='#ffeb3b'
                                            bold
                                            children="Aug 11, 2017"
                                            fontSize='0.9em'
                                        />
                                    </Box>
                                    <Box w={4 / 12} >
                                        <button className='button' >Read more</button>
                                    </Box>
                                </Flex>
                            </Box>
                        </div>
                    </Box>
                    <Box width={5 / 12} ml='2%'>
                        <Flex>
                            <ThumbnailRight img='static/maxPromo.jpg'
                                text1='Headline Headline consect'
                                text2='adipicing elit sedid'
                                date='Aug 11, 2017'
                            />
                        </Flex>
                        <Flex pt='5.2%'>
                            <ThumbnailRight img='static/maxPromo.jpg'
                                text1='Headline Headline consect'
                                text2='adipicing elit sedid'
                                date='Aug 11, 2017'
                            />
                        </Flex>
                        <Flex pt='5.2%'>
                            <ThumbnailRight img='static/maxPromo.jpg'
                                text1='Headline Headline consect'
                                text2='adipicing elit sedid'
                                date='Aug 11, 2017'
                            />
                        </Flex>
                    </Box>
                </Flex>
                <Flex>

                </Flex>
                <Flex>
                    <Box w={1} pt='40px' pb='60px'>
                        <center>
                            <button className='button-hunger'>Hunger for more</button>
                        </center>
                    </Box>
                </Flex>
              </Box>
          </Box>
          <Box width={5 / 12} ml="2%">
            <Flex>
              <ThumbnailRight
                img="static/maxPromo.jpg"
                text1="Headline Headline consect"
                text2="adipicing elit sedid"
                date="Aug 11, 2017"
              />
            </Flex>
            <Flex pt="5.2%">
              <ThumbnailRight
                img="static/maxPromo.jpg"
                text1="Headline Headline consect"
                text2="adipicing elit sedid"
                date="Aug 11, 2017"
              />
            </Flex>
            <Flex pt="5.2%">
              <ThumbnailRight
                img="static/maxPromo.jpg"
                text1="Headline Headline consect"
                text2="adipicing elit sedid"
                date="Aug 11, 2017"
              />
            </Flex>
          </Box>
        </Flex>
        <style jsx>
            {`
            .backgroundx{

                color: #ffffff;
                background-image: url("static/img_hilight_new_mockup.png");
            }
            .button {
                background-color: red;
                border: none;
                color: white;
                padding: 8px 25px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-weight: 700;
                font-family: Helvetica, Arial, sans-serif;
            }
            .button-hunger {
                background-color: white;
                border: 1px solid red;
                color: red;
                padding: 8px 25px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-weight: 700;
                font-family: Helvetica, Arial, sans-serif;
            }
          `}
        </style>
    </div>
)
export default max_new
