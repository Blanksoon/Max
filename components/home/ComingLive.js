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
import { media, theme } from '../../tools/responsive'

const H1 = styled.h1`margin: 0px;`
class ComingLive extends React.Component {
  renderUI() {
    const rowLive = []
    const rowCount = this.props.lives.length
    let n = 0
    // Use splice on clone object, DONT MODIFY props
    if (rowCount % 2 == 0) {
      for (let i = 0; i < rowCount; i += 2) {
        rowLive.push(
          <Flex pb="1em" wrap>
            <Box w={[1, 1 / 2]} pr={['0em', '0.5em']}>
              <ThumbnailLive
                lang={this.props.lang}
                live={this.props.lives[i]}
              />
            </Box>
            <Box w={[1, 1 / 2]} pl={['0em', '0.5em']} pt={['1em', '0em']}>
              <ThumbnailLive
                lang={this.props.lang}
                live={this.props.lives[i + 1]}
              />
            </Box>
          </Flex>
        )
      }
    } else {
      for (let i = 0; i < rowCount - 1; i += 2) {
        rowLive.push(
          <Flex pb="1em" wrap>
            <Box w={[1, 1 / 2]} pr={['0em', '0.5em']}>
              <ThumbnailLive
                lang={this.props.lang}
                live={this.props.lives[i]}
              />
            </Box>
            <Box w={[1, 1 / 2]} pl={['0em', '0.5em']} pt={['1em', '0em']}>
              <ThumbnailLive
                lang={this.props.lang}
                live={this.props.lives[i + 1]}
              />
            </Box>
          </Flex>
        )
        n = i + 2
      }
      rowLive.push(
        <Flex wrap>
          <Box w={[1, 1 / 2]} pr={['0em', '0.5em']}>
            <ThumbnailLive lang={this.props.lang} live={this.props.lives[n]} />
          </Box>
          <Box w={[1, 1 / 2]} />
        </Flex>
      )
    }
    return rowLive
  }

  render() {
    return (
      <Provider theme={theme}>
        <div className="ComingLive">
          <Box w={1} pb="1em">
            <center>
              <Text
                pt="2%"
                pb="2%"
                bold
                color="#fff"
                children={this.props.common.UPCOMINGLIVE}
                fontSize={['1em', '1.5em']}
              />
            </center>
          </Box>
          {this.renderUI()}
        </div>
      </Provider>
    )
  }
}

export default ComingLive
