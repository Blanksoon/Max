import styled from 'styled-components'
import React from 'react'
import ThumbnailLive from '../thumbnail/ThumbnailLive'
import {
  Provider,
  Toolbar,
  Flex,
  Box,
  Text,
  Image,
  Tabs,
  TabItem,
  Border,
  NavLink,
  BackgroundImage,
  Button,
} from 'rebass'
import { connect } from 'react-redux'

const H1 = styled.h1`margin: 0px;`
class ComingLive extends React.Component {

  renderUI() {
    //console.log('llllllllllll',this.props.live)
    const rowLive = []
    const rowCount = this.props.lives.length
    let n = 0
    // Use splice on clone object, DONT MODIFY props
    if(rowCount%2 == 0){
      for(let i = 0; i< rowCount; i+=2){
        rowLive.push(
          <Flex pb='1em'>
            <Box w={1 / 2}>
              <ThumbnailLive live={this.props.lives[i]} />
            </Box>
            <Box w={1 / 32} />
            <Box w={1 / 2}>
              <ThumbnailLive live={this.props.lives[i+1]} />
            </Box>
          </Flex>
        )
      }
    } else {
      for(let i = 0; i< rowCount-1; i+=2){
        rowLive.push(
          <Flex pb='1em'>
            <Box w={1 / 2}>
              <ThumbnailLive live={this.props.lives[i]} />
            </Box>
            <Box w={1 / 32} />
            <Box w={1 / 2}>
              <ThumbnailLive live={this.props.lives[i+1]} />
            </Box>
          </Flex>
        )
        n=i+2
      }
      rowLive.push(
        <Flex>
          <Box w={1 / 2}>
            <ThumbnailLive live={this.props.lives[n]} />
          </Box>
          <Box w={1 / 32} />
          <Box w={1 / 2} />
        </Flex>
      )
    }
    return rowLive
  }

  render() {
    return(
      <div className="ComingLive">
        <Box w={1} pb="1em">
          <center>
            <Text
              pt="2%"
              pb="2%"
              bold
              color="#fff"
              children="UP COMING LIVE"
              fontSize="1.5em"
            />
          </center>
        </Box>
        {this.renderUI()}
      </div>
    )
  }
}

export default ComingLive 
