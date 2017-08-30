import {Media,
    Subhead,
    Image,
    Link,
    Flex,
    Box,
    Text
} from 'rebass'

const max_new = () => (
    <div>
        <Box px={2} py={2} width={1}>
        <Flex wrap mx={-2} my={-2}>
            <Box px={2} py={2} width={1/5.7}>
                
            </Box>
            <Box px={2} py={2} width={1/5}>
                <b>Max News</b>
            </Box>
        </Flex>
        <Flex wrap mx={-2} my={-3}>
            <Box px={2} py={2} width={1/6}>
                
            </Box>
            <Box px={2} py={2} width={1/2.5}>
                <Box px={2} py={2} width={1} bg='gray'>
                    <Flex wrap mx={-2} my={4}>
                    </Flex>
                    <h>Headline consectetur adipicing</h>
                    <h>elit, sed do eiusmod tempor</h>
                    <p>iicididunt ul labore magns aliqua. Ut</p>
                    <Flex wrap mx={-2} my={-2}>
                        <Box px={2} py={2} width={1/2}>
                            <h>Aug 11, 2017</h>
                        </Box>
                        <Box px={2} py={2} width={1/4}>
                            
                        </Box>
                        <Box px={2} py={2} width={1/4}>
                            <a href='#' color='red'>Read more</a>
                        </Box>
                    </Flex>
                </Box>
            </Box>
            
        </Flex>
        <Flex wrap mx={-2} my={-2}>
            <Box px={2} py={2} width={1/5.7}>
                
            </Box>
        </Flex>
    </Box>
    </div>
)
export default max_new