import {Media,
    Subhead,
    Image,
    Link,
    Flex,
    Box,
    Text
} from 'rebass'

const latest_video = () => (
    <div>
        <Box px={2} py={2} width={1} bg='gray'>
            <Flex wrap mx={-2} my={-2}>
                <Box px={2} py={2} width={1/5.7}>
                    
                </Box>
                <Box px={2} py={2} width={1/5}>
                    <b>Latest Videos</b>
                </Box>
            </Flex>
            <Flex wrap mx={-2} my={-3}>
                <Box px={2} py={2} width={1/6}>
                    
                </Box>
                <Box px={2} py={2} width={1/6}>
                    <a href="#">
                        <Image p={1}
                            src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
                        />
                    </a>
                </Box>
                <Box px={2} py={2} width={1/6} >
                    <a href="#">
                        <Image p={1}
                            src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
                        />
                    </a>
                </Box>
                <Box px={2} py={2} width={1/6}>
                    <a href="#">
                        <Image p={1}
                            src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
                        />
                    </a>
                </Box>
                <Box px={2} py={2} width={1/6}>
                    <a href="#">
                        <Image p={1}
                            src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
                        />
                    </a>
                </Box>
            </Flex>
            <Flex wrap mx={-2} my={-2}>
                <Box px={2} py={2} width={1/5.7}>
                    
                </Box>
            </Flex>
        </Box>
    </div>
)
export default latest_video