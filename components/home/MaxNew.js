import ThumbnailRight from '../thumbnail/ThumbnailRight'
import {Media,
    Subhead,
    Image,
    Link,
    Flex,
    Box,
    Text,
    Button,
} from 'rebass'

const max_new = () => (
    <div className='maxnew'>
        <Flex>
            <Box width={1}>
                <Flex >
                    <Box px={0} py={2} width={1/5} >
                        <h2>Max News</h2>
                    </Box>
                </Flex>
                <Flex>
                    <Box w={7/12}>
                        <div className='backgroundx'>
                            <Box pt='27%' pl='1.5%' width={1} >
                            <h3>Headline consectetur adipicing<br/>elit, sed do eiusmod tempor</h3>
                            <h>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br/>
                            exercitation ullamco laboris nisi ut aliquip ex</h>
                            <Flex pt='1.5%'>
                            <Box w={8/12} pt='6px' >
                                <Text    
                                color= '#ffeb3b'            
                                bold
                                children= "Aug 11, 2017"
                                fontSize='0.9em'
                                />
                            </Box>
                            <Box w={4/12} >
                                <Button style={{width:'70%'}}>
                                    <Text                
                                    bold
                                    children= "Read more"
                                    fontSize='1.1em'
                                    />
                                </Button>
                            </Box>
                            </Flex>
                            </Box>
                        </div>
                    </Box>
                    <Box width={5/12}>
                        <Flex>
                            <ThumbnailRight img= 'static/maxPromo.jpg'
                                text1='Headline Headline consect'
                                text2='adipicing elit sedid'
                                date='Aug 11, 2017'
                            />
                        </Flex>
                        <Flex pt='3.9%'>
                            <ThumbnailRight img= 'static/maxPromo.jpg'
                                text1='Headline Headline consect'
                                text2='adipicing elit sedid'
                                date='Aug 11, 2017'
                            />
                        </Flex>
                        <Flex pt='3.9%'>
                            <ThumbnailRight img= 'static/maxPromo.jpg'
                                text1='Headline Headline consect'
                                text2='adipicing elit sedid'
                                date='Aug 11, 2017'
                            />
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Flex>
        <style jsx>
        {`
            .backgroundx{
                color: #ffffff;
                background-image: url("static/img_hilight_new_mockup.png");
            }
          `}
      </style>
    </div>
)
export default max_new