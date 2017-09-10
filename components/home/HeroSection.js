import React from 'react'
// import clock from 'react-live-clock'
import {
    Media,
    Subhead,
    Image,
    Link,
    Flex,
    Box,
    Text,
    BackgroundImage,
    Provider,
} from 'rebass'

const HeroSection = (porps) => (
    <Provider>
        <div className='big' >
            <div className='herohover'>
                <Flex>
                    <Box w={12 / 12} >
                        <div className='live-in' style={{ textAlign: 'right' }} >
                            Live in
                        </div>
                        <Flex>
                            <Box w={12 / 12} >
                                <div className='time' style={{ textAlign: 'right' }} >{porps.d} : {porps.h} : {porps.m}</div>
                            </Box>
                        </Flex>
                        <Flex>
                            <Box w={12 / 12} >
                                <div className='time-type' style={{ textAlign: 'right' }} >
                                    DAY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; HRS  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MIN&nbsp;
                                </div>
                            </Box>
                        </Flex>
                        <Flex >
                            <Box w={6 / 12} pt='17%'>
                                <Text
                                    bold
                                    children="Coming Up Next"
                                    fontSize='0.8em'
                                />
                                <Text
                                    pt='5px'
                                    bold
                                    children="The Battle Muay Thai"
                                    fontSize='0.9em'
                                />
                                <div className='text-date'>
                                    <Text
                                        pt='5px'
                                        bold
                                        children="Fri. Sep 1st,2017"
                                        fontSize='0.7em'
                                    />
                                </div>
                                <Flex pt='8%' >
                                    <Box w={5 / 12} >
                                        <button className='button'>Buy Ticket</button>
                                    </Box>
                                    <Box w={6 / 12} >
                                        <div className='text-more'>
                                            <Link>
                                                <a href="">
                                                    <Text
                                                        color= '#4e9fe5'
                                                        pt='3px'
                                                        bold
                                                        children="More Information"
                                                        fontSize='0.9em'
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                    </Box>
                                </Flex>
                            </Box>
                            <Box w={6 / 12} pt='14%' >
                                <Flex>
                                    <Box w={1 / 12} ></Box>
                                    <Box w={5 / 12} >
                                        <Box>
                                            <Image
                                                width='100%'
                                                src='static/maxPromo.jpg'
                                            />
                                        </Box>
                                        <Box>
                                            <Text
                                                bold
                                                children="Title of slide 3"
                                                fontSize='0.9em'
                                            />
                                        </Box>
                                    </Box>
                                    <Box w={1 / 12} ></Box>
                                    <Box w={5 / 12} >
                                        <Box>
                                            <Image
                                                width='100%'
                                                src='static/maxPromo.jpg'
                                            />
                                        </Box>
                                        <Box>
                                            <Text
                                                bold
                                                children="Title of slide 3"
                                                fontSize='0.9em'
                                            />
                                        </Box>
                                    </Box>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </div>
        </div>
        <style jsx>
            {`
            .button {
                background-color: #58b2ff; /* Green */
                border: none;
                color: white;
                padding: 5px 20px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: px;
            }
            .text-more{
                color: #4e9fe5;
            }
            .text-date{
                color: #e7e803;
            }
            .live-in {
                font-size: 100%;
                font-weight: bold;
            }
            .time{
                font-size: 130%;
                font-weight: bold;
            }
            .time-type{
                font-size: 50%;
                font-weight: bold;
            }
            .big {
                color: #ffffff;
            }
            .herohover {
                opacity: 0.8;
                height: 100%;
                width: 100%;
                background-size: cover;
                background-image: url("static/img_live_banner1.png");
                top: 0;
                left: 0;
            }
            .live-in {
                align: right;
                color: #e9e911;
            }
            a:link {} 
            a {
                color: #fff;
                TEXT-DECORATION: none
            }
            a:hover {COLOR: #FF0000; TEXT-DECORATION: none} 
        `}
        </style>
    </Provider>
)

export default HeroSection
