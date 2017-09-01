import {Media,
    Subhead,
    Image,
    Link,
    Flex,
    Box,
    Text
} from 'rebass'

const latest_video = (props) => (
    <div>
        <Box mt={2} width={1} pb={5} bg='gray'>
            <Flex wrap mx={0} my={-2} pb={2} bg='#2874A6'>
                <Box pt={15} pb={15} mt={1} width={1} bg='#2ECC71'>
                    <h1>{props.name}</h1>
                </Box>
            </Flex>
            <Flex bg='gray'>
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