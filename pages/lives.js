import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Flex, Box, Image } from 'rebass'
import Main from '../layouts/Main'
import color from '../components/commons/vars'
import ThumbnailBigLive from '../components/thumbnail/ThumbnailBigLive'
import Container from '../components/commons/Container'
import { initStore } from '../redux/store'
import { fetchVods } from '../redux/modules/vod'
import { fetchLives } from '../redux/modules/live'
import withRedux from 'next-redux-wrapper'
import NewModal from '../containers/NewModal'
import {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../redux/modules/modal'
import { recentLivesSelector } from '../redux/selectors/live'

const Text = styled.div`
  color: #b81111;
  font-weight: 700;
  font-size: 2em;
`
const WrapperThumbnail = styled.div`
  cursor: pointer;
  position: relative;
`
const WrapperBlack = styled.div`
  // background-color: #000;
  z-index: 1;
  transition: ease-in-out 0.4s all;
  opacity: 0.5;
  height: 100%;
  width: 100%;
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.65) 0%,
    rgba(0, 0, 0, 0.65) 1%,
    rgba(0, 0, 0, 0.65) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  position: absolute;
  top: 0;
  left: 0;
  :hover {
    opacity: 0;
  }
`
const Wrapper = styled.div`
  background-color: #3d7fb8;
  font-family: Helvetica, Arial, sans-serif;
`
const LivePlayer = styled.div`height: 36rem;`

class lives extends React.Component {
  renderUI() {
    //console.log('llllllllllll',this.props.live)
    const rowLive = []
    const rowCount = this.props.lives.length
    let n = 0
    let br = [<br />, '', <br />, <br />, <br />, <br />]
    // Use splice on clone object, DONT MODIFY props
    if (rowCount % 2 == 0) {
      for (let i = 0; i < rowCount; i += 2) {
        rowLive.push(
          <Flex bg="#fff" pb="2rem">
            <Box w={6 / 12} pl="1.5rem" pr="0.75rem">
              <WrapperThumbnail>
                <ThumbnailBigLive
                  id={this.props.lives[i].id}
                  img={this.props.lives[i].bannerUrl}
                  text1={this.props.lives[i].programName}
                  text2={this.props.lives[i].shortDesc1_en}
                  text3={br[i]}
                  text4={this.props.lives[i].title_en}
                  live={this.props.lives[i]}
                />
                <WrapperBlack />
              </WrapperThumbnail>
            </Box>
            <Box w={6 / 12} pl="0.75rem" pr="1.5rem">
              <WrapperThumbnail>
                <ThumbnailBigLive
                  id={this.props.lives[i + 1].id}
                  img={this.props.lives[i + 1].bannerUrl}
                  text1={this.props.lives[i + 1].programName}
                  text2={this.props.lives[i + 1].shortDesc1_en}
                  text3={br[i + 1]}
                  text4={this.props.lives[i + 1].title_en}
                  live={this.props.lives[i + 1]}
                />
                <WrapperBlack />
              </WrapperThumbnail>
            </Box>
          </Flex>
        )
      }
    } else {
      for (let i = 0; i < rowCount - 1; i += 2) {
        rowLive.push(
          <Flex bg="#fff" pb="2rem">
            <Box w={6 / 12} pl="1.5rem" pr="0.75rem">
              <WrapperThumbnail>
                <ThumbnailBigLive
                  id={this.props.lives[i].id}
                  img={this.props.lives[i].bannerUrl}
                  text1={this.props.lives[i].programName}
                  text2={this.props.lives[i].shortDesc1_en}
                  text3={br[i]}
                  text4={this.props.lives[i].title_en}
                  live={this.props.lives[i]}
                />
                <WrapperBlack />
              </WrapperThumbnail>
            </Box>
            <Box w={6 / 12} pl="0.75rem" pr="1.5rem">
              <WrapperThumbnail>
                <ThumbnailBigLive
                  id={this.props.lives[i + 1].id}
                  img={this.props.lives[i + 1].bannerUrl}
                  text1={this.props.lives[i + 1].programName}
                  text2={this.props.lives[i + 1].shortDesc1_en}
                  text3={br[i + 1]}
                  text4={this.props.lives[i + 1].title_en}
                  live={this.props.lives[i + 1]}
                />
                <WrapperBlack />
              </WrapperThumbnail>
            </Box>
          </Flex>
        )
        n = i + 2
      }
      rowLive.push(
        <Flex bg="#fff" pb="2rem">
          <Box w={6 / 12} pl="1.5rem" pr="0.75rem">
            <WrapperThumbnail>
              <ThumbnailBigLive
                id={this.props.lives[n].id}
                img={this.props.lives[n].bannerUrl}
                text1={this.props.lives[n].programName}
                text2={this.props.lives[n].shortDesc1_en}
                text3={br[n]}
                text4={this.props.lives[n].title_en}
                live={this.props.lives[n]}
              />
              <WrapperBlack />
            </WrapperThumbnail>
          </Box>
          <Box w={6 / 12} pl="0.75rem" pr="1.5rem" />
        </Flex>
      )
    }
    return rowLive
  }

  render() {
    //console.log('live live',this.props.lives[0])
    return (
      <Main url={this.props.url}>
        <NewModal />
        <Wrapper>
          <Container>
            <Box pl="1.5rem" bg="#fff" pt="8rem" pb="2rem">
              <Text>LIVE</Text>
            </Box>
            {this.renderUI()}
          </Container>
        </Wrapper>
      </Main>
    )
  }
}

const mapStateToProps = state => {
  return {
    lives: recentLivesSelector(state),
  }
}
lives.getInitialProps = async ({ store, isServer, query, req }) => {
  let state = store.getState()
  const token = state.auth.token
  const response = await fetchLives(token)(store.dispatch)
  state = store.getState()
  const props = mapStateToProps(state)
  return props
}

export default withRedux(initStore, null, {
  fetchVods,
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
  fetchLives,
})(lives)
