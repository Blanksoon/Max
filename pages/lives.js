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
const Wrapper = styled.div`
  background-color: #3d7fb8;
  font-family: Helvetica, Arial, sans-serif;
`
const LivePlayer = styled.div`height: 36rem;`

class lives extends React.Component {
  render() {
    //console.log('live live',this.props.lives[0])
    return (
      <Main url={this.props.url}>
        <NewModal />
        <Wrapper>
          <Container>
            <Box pl="1.5rem" bg="#fff" pt="8rem">
              <Text>LIVE</Text>
            </Box>
            <Flex bg="#fff" pt="2rem">
              <Box w={6 / 12} pl="1.5rem" pr="0.75rem">
                <ThumbnailBigLive
                  id={this.props.lives[0].id}
                  img={this.props.lives[0].bannerUrl}
                  text1={this.props.lives[0].programName}
                  text2={this.props.lives[0].shortDesc1_en}
                  text3={<br />}
                  text4={this.props.lives[0].title_en}
                  live={this.props.lives[0]}
                />
              </Box>
              <Box w={6 / 12} pl="0.75rem" pr="1.5rem">
                <ThumbnailBigLive
                  id={this.props.lives[1].id}
                  img={this.props.lives[1].bannerUrl}
                  text1={this.props.lives[1].programName}
                  text2={this.props.lives[1].shortDesc1_en}
                  text4={this.props.lives[1].title_en}
                  live={this.props.lives[1]}
                />
              </Box>
            </Flex>
            <Flex bg="#fff" pt="2rem" pb="3rem">
              <Box w={6 / 12} pl="1.5rem" pr="0.75rem">
                <ThumbnailBigLive
                  id={this.props.lives[2].id}
                  img={this.props.lives[2].bannerUrl}
                  text1={this.props.lives[2].programName}
                  text2={this.props.lives[2].shortDesc1_en}
                  text3={<br />}
                  text4={this.props.lives[2].title_en}
                  live={this.props.lives[2]}
                />
              </Box>
              <Box w={6 / 12} pl="0.75rem" pr="1.5rem">
                <ThumbnailBigLive
                  id={this.props.lives[3].id}
                  img={this.props.lives[3].bannerUrl}
                  text1={this.props.lives[3].programName}
                  text2={this.props.lives[3].shortDesc1_en}
                  text3={<br />}
                  text4={this.props.lives[3].title_en}
                  live={this.props.lives[3]}
                />
              </Box>
            </Flex>
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
