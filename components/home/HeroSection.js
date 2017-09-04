import {Media,
    Subhead,
    Image,
    Link,
    Flex,
    Box,
    Text,
    BackgroundImage
} from 'rebass'

const HeroSection = () => (
    <div>
        {/* <BackgroundImage
            ratio={1/2}
            src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
        /> */}
        <Flex pt={4} pb={4}>
            
            <Box width={1/10}>
            </Box>
            <Box width={4/10} bg='Yellow'>
                <Box pt={3} pb={5} >
                </Box>
                <Box pt={6} >
                    <h2>Coming Up Next</h2>
                    <h1>MAX Ultimate Tournament &MAX</h1>
                    <h1>World Champions 7 International Fights</h1>
                    <h2>Sun. Aug 27th, 2017</h2>
                    <Flex>
                        <button>
                            <Text
                                pl={4}
                                pr={4}
                                pt={2}
                                pb={2}
                                center
                                bold
                                children='Buy Ticket'
                                fontSize='1.6em'
                            />
                        </button>
                        <b>
                            <Text
                                pt={1}
                                pl={4}
                                bold
                                children='More Information'
                                fontSize='1.6em'
                            />
                        </b>
                    </Flex>
                </Box>
            </Box>
            <Box width={4/10} bg='blue'>
                <Box width={1} bg='gray'>
                    <Flex bg='blue'>
                        <Box width={4.4/6}>
                        </Box>
                        <Box width={1.6/6} pb={1} bg='Orange'>
                            <Text
                                center
                                bold
                                children='LIVE in'
                                fontSize='2.3em'
                            />
                        </Box>
                    </Flex>
                    <Flex>
                        <Box width={10/16} bg='green'>
                        </Box>
                        <Box width={2/16} bg='Yellow'>
                            <Text
                                center
                                bold
                                children='00'
                                fontSize='3em'
                            />
                            <Text
                                center
                                bold
                                children='DAY'
                                fontSize='1em'
                            />
                        </Box>
                        <Box width={2/16} bg='red'>
                            <Text
                                center
                                bold
                                children='01'
                                fontSize='3em'
                            />
                            <Text
                                center
                                bold
                                children='HRS'
                                fontSize='1em'
                            />
                        </Box>
                        <Box width={2/16} bg='gray'>
                            <Text
                                center
                                bold
                                children='48'
                                fontSize='3em'
                            />
                            <Text
                                center
                                bold
                                children='MIN'
                                fontSize='1em'
                            />
                        </Box>
                    </Flex>
                    <Flex pt={5} pb={5} bg='Orange'>
                        <Box pt={5} pb={4} >
                        </Box>
                    </Flex>
                    <Flex pt={2}>
                    </Flex>
                    <Flex bg='red'>
                        <Box width={7/16} >
                        </Box>
                        <Box width={4/16} >
                            <a href="#">
                                <Image
                                    src='../../static/3.png'
                                />
                            </a>
                            <Text
                                pt={1}
                                bold
                                children='Title of slide 2'
                                fontSize='1em'
                            />
                        </Box>
                        <Box width={0.5/16} >
                        </Box>
                        <Box width={4/16} bf='gray' >
                        <a href="#">
                                <Image
                                    src='../../static/3.png'
                                />
                            </a>
                            <Text
                                pt={1}
                                bold
                                children='Title of slide 3'
                                fontSize='1em'
                            />
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Flex>
        <Box width={1}>

        </Box>
    </div>
)

export default HeroSection
