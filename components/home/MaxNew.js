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
        <Flex>
            <Box px={2} py={2} width={1}>
                <Flex wrap mx={-2} my={-2}>
                    <Box px={0} py={2} width={1/5}>
                        <h2>Max News</h2>
                    </Box>
                </Flex>
                <Flex wrap mx={-2} my={2}>
                    <Box px={0} py={2} width={1/1.8}>
                        <Box px={2} py={2} width={1} bg='gray'>
                            <Flex wrap mx={0} my={4}>
                            </Flex>
                            <Flex wrap mx={0} my={4}>
                            </Flex>
                            <h>Headline consectetur adipicing</h>
                            <h>elit, sed do eiusmod tempor</h>
                            <p>iicididunt ul labore magns aliqua. Ut</p>
                            <Flex wrap mx={-2} my={0}>
                                <Box px={2} py={2} width={1/2}>
                                    <h>Aug 11, 2017</h>
                                </Box>
                                <Box px={2} py={0} width={1/4}>
                                </Box>
                                <Box px={0} py={2} width={1/5}>
                                    <button >Read more</button>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                    <Box px={2} py={0} width={1/2.25}>
                        <Flex my={2} bg='#000000'>
                            <Box  my={0} width={1/1.9}>
                                <a href="#">
                                    <Image
                                        src='../../static/who_am_i.jpg'
                                    />
                                </a>
                            </Box>
                            <Box px={1} width={1/2.11} bg='#BDC3C7'>
                                <Box py={-1}>
                                    <p>Headline Headline consect adipicing elit</p>
                                    <h>Aug 11, 2017</h>
                                </Box>
                            </Box>
                        </Flex>
                        <Flex my={3} bg='#000000'>
                            <Box  my={0} width={1/1.9}>
                                <a href="#">
                                    <Image
                                        src='../../static/who_am_i.jpg'
                                    />
                                </a>
                            </Box>
                            <Box px={1} width={1/2.11} bg='#BDC3C7'>
                                <Box py={-1}>
                                    <p>Headline Headline consect adipicing elit</p>
                                    <h>Aug 11, 2017</h>
                                </Box>
                            </Box>
                        </Flex>
                        <Flex my={0} bg='#000000'>
                            <Box  my={0} width={1/1.9}>
                                <a href="#">
                                    <Image
                                        src='../../static/who_am_i.jpg'
                                    />
                                </a>
                            </Box>
                            <Box px={1} width={1/2.11} bg='#BDC3C7'>
                                <Box py={-1}>
                                    <p>Headline Headline consect adipicing elit</p>
                                    <h>Aug 11, 2017</h>
                                </Box>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    </div>
)
export default max_new