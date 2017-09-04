import React, { PureComponent } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import GetTicketTabs from '../components/get-ticket/GetTicketTabs'
import {
  Provider,
  Container,
  Flex,
  Box,
} from 'rebass'

const styleGlobal = {
  defaultMargin: '20px',
  margin_1: '10px',
  defaultPadding: '20px',
}

export default class GetTicket extends PureComponent {
  state = {
    activeContent: 0
  }

  onChangeTabTicket = (active) => {
    this.setState({
      activeContent: active
    })
  }

  render() {

    const tickeyTabs = [
      'LIVE Ticket / Subscribe',
      'Stadium Ticket'
    ]
    const { activeContent } = this.state

    return (
      <Provider>
        <div id="get-ticket">
          <section id="get-ticket-head-tab">
            <Container>
              <h1>
                Get Ticket
              </h1>
              <GetTicketTabs
                activeNumber={activeContent}
                headTabs={tickeyTabs}
                contents={[
                  LiveTicket,
                  StadiumTicket,
                ]}
                onClick={this.onChangeTabTicket}
              />
            </Container>
          </section>
        </div>

        <style jsx global>
          {
            `
            body {
              padding: 0 !important;
              margin: 0 !important;
              color: #555;
            }
            * {
              box-sizing: border-box;
            }
            .btn-get-ticket-1 {
              width: 100%;
              height: 40px;
              background: #555;
              color: #fff;
              border: none;
              font-size: 15px;
              font-weight: bold;
            }
            `
          }
        </style>
        <style jsx>
          {`
          section {
            margin-bottom: 40px;
          }
        `}
        </style>
      </Provider>
    )
  }
}

const LiveTicket = () => {
  return (
    <div className="live-ticket">
      <h1>Get LIVE Ticket / Subscribe</h1>

      <h4>Please select the package</h4>

      <div>
        <Flex>
          <Box w={5 / 12} pr={1}>
            <div className="content-live-ticket">
              Live Stream
              <br />
              <br />
              Video On demand
            </div>
          </Box>
          <Box w={7 / 12}>
            <Flex>
              <Box px={1} w={6 / 12}>
                <div className="content-live-ticket content-right">
                  <h3>
                    One Time LIVE Ticket
                  </h3>
                  <br />
                  <br />
                  <br />
                  1 time for a specific show
                  <br />
                  <br />
                  <br />
                  ..

                <button className='btn-buy-ticket'>Purchase $xx.xx</button>
                </div>
              </Box>
              <Box px={1} w={6 / 12}>
                <div className="content-live-ticket content-right">
                  <h3>
                    One Time LIVE Ticket
                  </h3>
                  <br />
                  <br />
                  <br />
                  1 time for a specific show
                  <br />
                  <br />
                  <br />
                  ..

                  <button className='btn-buy-ticket'>Purchase $xx.xx</button>
                </div>
              </Box>
            </Flex>
          </Box>
        </Flex>

        <h3>Terms and Conditions</h3>
        <ul>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
        </ul>
      </div>
      <style jsx>
        {`
          .live-ticket {
            background: #ebebeb;
            padding: ${styleGlobal.defaultPadding};
          }
          .live-ticket h1 {
            margin-bottom: ${styleGlobal.defaultMargin};
          }
          .live-ticket h4 {
            margin-bottom: ${styleGlobal.defaultMargin};
          }
          .content-live-ticket {
            background: #fff;
            padding: 20px;
            min-height: 300px;

          }
          .content-live-ticket.content-right {
            text-align: center;
            position: relative;
          }
          .btn-buy-ticket {
            position: relative;
            bottom: -30px;
            width: 100%;
            height: 40px;
            background: #555;
            color: #fff;
            border: none;
            font-size: 15px;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  )
}

const StadiumTicket = () => {
  return (
    <div className="stadium-ticket">
      <h1>How to get  stadium ticket?</h1>

      <Flex>
        <Box w={8 / 12} pr={5}>
          <h4>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</h4>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical </p>
        </Box>
        <Box w={4 / 12} pl={5}>
          <h3>Reserve now!</h3>
          <button className="btn-get-ticket-1" style={{ marginBottom: styleGlobal.margin_1 }}>
            (+66) 038-416-999
          </button>
          <button className="btn-get-ticket-1">
            (+66) 038-416-999
          </button>
        </Box>
      </Flex>
      <style jsx>
        {`
          .stadium-ticket {
            background: #ebebeb;
            padding: ${styleGlobal.defaultPadding};
          }
          .stadium-ticket h1 {
            margin-bottom: ${styleGlobal.defaultMargin};
          }
        `}
      </style>
    </div>
  )
}