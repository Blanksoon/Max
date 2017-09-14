import React from 'react'
import Link from 'next/link'
import ThumbnailBottom from '../thumbnail/ThumbnailBottom'
import {
  Media,
  Subhead,
  Image,
  Flex,
  Box,
  Text,
  BackgroundImage,
  Provider,
} from 'rebass'

const HeroSection = porps => (
  <Provider>
    <div className="herohover">
      <Box w={12 / 12} pt="4%">
        <div className="live-in" style={{ textAlign: 'right' }}>
          Live in
        </div>
        <Flex>
          <Box w={12 / 12}>
            <div className="time" style={{ textAlign: 'right' }}>
              {porps.d} : {porps.h} : {porps.m}
            </div>
          </Box>
        </Flex>
        <Flex>
          <Box w={12 / 12}>
            <div className="time-type" style={{ textAlign: 'right' }}>
              DAY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; HRS
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MIN&nbsp;
            </div>
          </Box>
        </Flex>
        <Flex>
          <Box w={7 / 12} pt="14%">
            <Text pt="20px" bold children="Coming Up Next" fontSize="1.5em" />
            <div className="text-title">
              <Text
                pt="15px"
                bold
                children="Max Ultimate Tournament & MAX World"
              />
              <Text bold children="Champions 7 International Fights" />
              <div className="text-date">
                <Text pt="15px" bold children="Sun. Aug 27st,2017" />
              </div>
            </div>
            <Flex pt="5%">
              <Box w={5 / 24}>
                <button className="button">Buy Ticket</button>
              </Box>
              <Box w={6 / 12}>
                <div className="text-more">
                  <Flex>
                    <Box w={6 / 12}>
                      <Link>
                        <a href="">
                          <Text
                            color="#4e9fe5"
                            pt="3px"
                            bold
                            children="View Fightcard"
                            fontSize="0.9em"
                          />
                        </a>
                      </Link>
                    </Box>
                    <Box w={6 / 12}>
                      <Link>
                        <a href="">
                          <Text
                            color="#4e9fe5"
                            pt="3px"
                            bold
                            children="Promo Clip"
                            fontSize="0.9em"
                          />
                        </a>
                      </Link>
                    </Box>
                  </Flex>
                </div>
              </Box>
            </Flex>
          </Box>
          <Box w={5 / 12} pt="22%">
            <Flex>
              <Box w={1 / 12} />
              <Box w={5 / 12}>
                <Link>
                  <a href={`#`}>
                    <ThumbnailBottom
                      img="static/maxPromo.jpg"
                      name="The Battle Muay Thai"
                      pb="0.8em"
                    />
                  </a>
                </Link>
              </Box>
              <Box w={1 / 12} />
              <Box w={5 / 12}>
                <Link>
                  <a href={`#`}>
                    <ThumbnailBottom
                      img="static/maxPromo.jpg"
                      name="Max World Champion 2013: DVD boxset"
                      pb="0.8em"
                    />
                  </a>
                </Link>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </div>
    <style jsx>
      {`
        .button {
          background-color: red;
          border: none;
          color: white;
          padding: 5px 20px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: px;
        }
        .text-font-face {
          font-family: Helvetica, Arial, sans-serif;
        }
        .text-title {
          font-size: 150%;
        }
        .text-more {
          color: #4e9fe5;
        }
        .text-date {
          font-size: 60%;
          color: #e7e803;
        }
        .live-in {
          font-size: 100%;
          font-weight: bold;
        }
        .time {
          font-size: 130%;
          font-weight: bold;
        }
        .time-type {
          font-size: 50%;
          font-weight: bold;
        }
        .herohover {
          color: #ffffff;
          opacity: 0.8;
          height: 100%;
          width: 100%;
          background-size: cover;
          background-image: url('static/img_live_banner1.png');
          background-position-y: 68%;
          font-family: Helvetica, Arial, sans-serif;
        }
        .live-in {
          align: right;
          color: #e9e911;
        }
        a:link {
        }
        a {
          color: #fff;
          TEXT-DECORATION: none;
        }
        a:hover {
          COLOR: #ff0000;
          TEXT-DECORATION: none;
        }
      `}
    </style>
  </Provider>
)

export default HeroSection
