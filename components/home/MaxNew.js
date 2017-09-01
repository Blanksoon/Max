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
                <Flex wrap mx={-2} my={-2} bg='red'>
                    <Box px={0} py={2} width={1/5} bg='blue'>
                        <h2>Max News</h2>
                    </Box>
                </Flex>
                <Flex wrap mx={-2} my={2}>
                    <Box px={0} py={0} width={1/1.8} bg='green'>
                        <Box pt={2} pb={10} width={1} bg='gray'>
                            <Box pb={280} width={1}>
                            </Box>
                            <Box mx={0} my={0} bg='#48C9B0'>
                                <h>Headline consectetur adipicing</h>
                                <h>elit, sed do eiusmod tempor</h><br/>
                                <p>iicididunt ul labore magns aliqua. Ut</p>
                            </Box>
                            <Flex mb={0} mx={0} my={-3} bg='#48C9B0'>
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
                    <Box px={2} py={0} width={1/2.25} bg='#F1C40F'>
                        <Flex bg='#000000'>
                            <Box  my={0} width={1/1.9}>
                                <a href="#">
                                    <Image
                                        src='../../static/who_am_i.jpg'
                                    />
                                </a>
                            </Box>
                            <Box width={1/2.11} bg='#BDC3C7'>
                                <Box py={-1}>
                                    <p>Headline Headline consect adipicing elit</p>
                                    <h>Aug 11, 2017</h>
                                </Box>
                            </Box>
                        </Flex>
                        <Box pb={20} width={1}>
                        </Box>
                        <Flex bg='#000000'>
                            <Box width={1/1.9}>
                                <a href="#">
                                    <Image
                                        src='../../static/who_am_i.jpg'
                                    />
                                </a>
                            </Box>
                            <Box width={1/2.11} bg='#BDC3C7'>
                                <Box py={-1}>
                                    <p>Headline Headline consect adipicing elit</p>
                                    <h>Aug 11, 2017</h>
                                </Box>
                            </Box>
                        </Flex>
                        <Box pb={20} width={1}>
                        </Box>
                        <Flex bg='#000000'>
                            <Box  my={0} width={1/1.9}>
                                <a href="#">
                                    <Image
                                        src='../../static/who_am_i.jpg'
                                    />
                                </a>
                            </Box>
                            <Box width={1/2.11} bg='#BDC3C7'>
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