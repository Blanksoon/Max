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
        <Box px={0} py={0} width={1} bg='gray'>
            <Flex wrap mx={0} my={-2}>
                <Box px={0} py={2} width={1/5}>
                    <b>Latest Videos</b>
                </Box>
            </Flex>
            <Flex>
                <Box px={0} py={2} mx={0} width={8/35}>
                    <a href="#">
                        <Image
                            src='../../static/photo.jpg'
                        />
                    </a>
                </Box>
                <Box px={0} py={2} mx={0} width={1/35}>
                </Box>
                <Box px={0} py={2} mx={0} width={8/35}>
                    <a href="#">
                        <Image
                            src='../../static/photo.jpg'
                        />
                    </a>
                </Box>
                <Box px={0} py={2} mx={0} width={1/35}>
                </Box>
                <Box px={0} py={2} mx={0} width={8/35}>
                    <a href="#">
                        <Image
                            src='../../static/photo.jpg'
                        />
                    </a>
                </Box>
                <Box px={0} py={2} mx={0} width={1/35}>
                </Box>
                <Box px={0} py={2} mx={0} width={8/35}>
                    <a href="#">
                        <Image
                            src='../../static/photo.jpg'
                        />
                    </a>
                </Box>
            </Flex>
        </Box>
    </div>
)
export default latest_video