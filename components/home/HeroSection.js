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
            
            <Box width={1/12}>
            </Box>
            <Box width={6/12} bg='Yellow'>
                <Box pt={1} >
                </Box>
                <Box pt={6} >
                    <h3>Coming Up Next</h3>
                    <h2>MAX Ultimate Tournament &MAX</h2>
                    <h2>World Champions 7 International Fights</h2>
                    <h4>Sun. Aug 27th, 2017</h4>
                    <button><h>Buy Ticket</h></button>
                    <b> More Information</b>
                </Box>
            </Box>
            <Box width={4/12} bg='blue'>
                <Box width={1} bg='gray'>
                    <Flex bg='blue'>
                        <Box width={4.5/6}>
                        </Box>
                        <Box width={1.5/6} pb={1} bg='Orange'>
                            <Text
                                center
                                bold
                                children='LIVE in'
                                fontSize='1.6em'
                            />
                        </Box>
                    </Flex>
                    <Flex bg=''>
                        <Box width={10/16} bg='green'>
                        </Box>
                        <Box width={2/16} bg='Yellow'>
                            <Text
                                center
                                bold
                                children='00'
                                fontSize='2em'
                            />
                            <Text
                                center
                                bold
                                children='DAY'
                                fontSize='0.8em'
                            />
                        </Box>
                        <Box width={2/16} bg='red'>
                            <Text
                                center
                                bold
                                children='01'
                                fontSize='2em'
                            />
                            <Text
                                center
                                bold
                                children='HRS'
                                fontSize='0.8em'
                            />
                        </Box>
                        <Box width={2/16} bg='gray'>
                            <Text
                                center
                                bold
                                children='48'
                                fontSize='2em'
                            />
                            <Text
                                center
                                bold
                                children='MIN'
                                fontSize='0.8em'
                            />
                        </Box>
                    </Flex>
                    <Flex pt={5} pb={5} bg='Orange'>
                    </Flex>
                    <Box pt={4} pb={2}>
                    </Box>
                    <Flex bg='red'>
                        <Box width={4/14} bg='' >
                        </Box>
                        <Box width={4/14} bf='' >
                            <a href="#">
                                <Image
                                    src='../../static/3.png'
                                />
                            </a>
                            <Text
                                pt={1}
                                bold
                                children='Title of slide 2'
                                fontSize='0.8em'
                            />
                        </Box>
                        <Box width={1/14} bg='' >
                        </Box>
                        <Box width={4/14} bf='gray' >
                        <a href="#">
                                <Image
                                    src='../../static/3.png'
                                />
                            </a>
                            <Text
                                pt={1}
                                bold
                                children='Title of slide 3'
                                fontSize='0.8em'
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
