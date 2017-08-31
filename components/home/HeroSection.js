import {Media,
    Subhead,
    Image,
    Link,
    Flex,
    Box,
    Text
} from 'rebass'

const HeroSection = () => (
    <div>
        <Flex>
            <Box width={4/6} bg='#A9CCE3'>
                <p>Coming Up Next</p>
                <h2>MAX Ultimate Tournament &MAX</h2>
                <h2>World Champions 7 International Fights</h2>
                <h4>Sun. Aug 27th, 2017</h4>
                <button>Buy Ticket</button>
                <b> More Information</b>
            </Box>
            <Box width={2/6} bg='#AED6F1'>
                <Box width={1} bg='#5DADE2'>
                    <Flex>
                        <Box mx={0} my={0} width={3.7/4.9} bg='#48C9B0'>
                        </Box>
                        <Box mx={0} my={0} width={1.1/4.9} bg='#3498DB'>
                            <h3>LIVE in</h3>
                        </Box>
                    </Flex>
                    <Flex>
                        <Box mx={0} my={0} width={2/5} bg='#3498DB'>
                        </Box>
                        <Box mx={0} my={0} width={1/5} bg='#73C6B6'>
                            <center>
                            <h1>00</h1>
                            <h4>DAY</h4>
                            </center>
                        </Box>
                        <Box mx={0} my={0} width={1/5} bg='#F1C40F'>
                            <center>
                            <h3>01</h3>
                            <h4>HRS</h4>
                            </center>
                        </Box>
                        <Box mx={0} my={0} width={1/5} bg='#F39C12'>
                            <center>
                            <h3>48</h3>
                            <h4>MIN</h4>
                            </center>
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
