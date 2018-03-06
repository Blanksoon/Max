import styled from 'styled-components'
import { Flex, Box, Image, Text, Provider } from 'rebass'
import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import Link from 'next/link'
import ThumbnailVideo from '../thumbnail/ThumbnailVideo'
import ThumbnailBottom from '../thumbnail/ThumbnailBottom'
import ThumbnailSky from '../thumbnail/ThumbnailSky'
import Hilight from './Hilight'
import ProgramFilter from './ProgramFilter'
import { formattedDate } from '../../util'
import vars from '../commons/vars'
import {
  fetchVodsSuccess,
  pagination,
  startindex,
} from '../../redux/modules/vod'
import * as api from '../../api'
import { media, theme } from '../../tools/responsive'

const WrapperHilight = styled.div`
  width: 55%;
  padding-left: 23%;
  background-size: cover;
  font-family: Helvetica, Arial, sans-serif;
  ${media.ipadpro`padding-left: 20%;`};
  ${media.ipad`padding-left: 6.5%;`};
  ${media.iphone7p`padding-left: 0%;`};
  ${media.phone`padding-left: 0%;`};
  ${media.iphone5`padding-left: 0%;`};
`

const WrapperImg = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  position: relative;
`
const WrapperText = styled.div`
  color: ${vars.white};
  top: 24%;
  left: 29%;
  font-weight: 700;
  font-size: 2.5em;
  position: absolute;
`
const Button = styled.button`
  background-color: white;
  border: 1px solid red;
  color: red;
  padding: 8px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
  font-family: Helvetica, Arial, sans-serif;
`
class VideoBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vodmax: 0,
    }
    this.check = this.check.bind(this)
  }

  async check() {
    if (this.props.vod.index == 0) {
      this.props.vod.index = 16
    }
    if (this.props.vod.index < this.props.numberOfVods) {
      const json = await api.get(
        `${api.SERVER}/vods-ondemand?token=${this.props.auth.token}&index=${this
          .props.vod.index}`
      )
      // console.log('dddddddddddfgdgd', json)
      this.props.fetchVodsSuccess(json)
      this.props.pagination()
    }
  }

  renderVideos(lang, vods) {
    const rowVideos = []
    const rowCount = this.props.vod.index / 4
    // Use splice on clone object, DONT MODIFY props
    const tmpVods = [...vods]
    for (let i = 0; i < rowCount; i++) {
      rowVideos.push(
        <RowVideo key={i} lang={lang} vods={tmpVods.splice(0, 4)} />
      )
    }
    return rowVideos
  }

  componentDidMount() {
    {
      this.props.startindex(16)
    }
  }

  render() {
    // console.log('ddddddddd', this.props)
    if (
      this.props.vod.index >= this.props.numberOfVods &&
      this.state.vodmax != 1
    ) {
      this.setState({ vodmax: 1 })
    } else if (
      this.props.vod.index < this.props.numberOfVods &&
      this.state.vodmax != 0
    ) {
      this.setState({ vodmax: 0 })
    }
    let renderUI = ''
    const { hilight, vods, filteredProgram } = this.props

    const filteredVods = vods.filter(vod => {
      if (filteredProgram === '') {
        return true
      }
      //this.props.startindex(4)
      return vod.programName_en === filteredProgram
    })
    //console.log('filteredProgram', filteredVods)
    if (this.state.vodmax === 0) {
      renderUI = (
        <Button onClick={this.check} className="button-hunger">
          {this.props.lang === 'en' ? 'Hunger for more' : 'กดเพื่อดูเพิ่ม'}
        </Button>
      )
    } else {
      renderUI = ''
    }

    return (
      <div>
        <Flex mb={3} pt={['4rem', '5rem', '4rem', '7rem', '7rem']}>
          <Box pl="1rem">
            <Text
              color="red"
              bold
              children={this.props.common.vod}
              fontSize={['1em', '1.5em', '2em', '2em', '2em']}
            />
          </Box>
        </Flex>
        <WrapperHilight>
          <Hilight
            lang={this.props.lang}
            common={this.props.common}
            hilight={hilight}
          />
        </WrapperHilight>
        <Box
          pt={['4.5rem', '4.5rem', '3rem', '3rem', '3rem']}
          pl="1rem"
          pr="1rem"
        >
          <ProgramFilter
            lang={this.props.lang}
            programEns={this.props.programEns}
            onFilteredProgramChange={this.props.onFilteredProgramChange}
            filteredProgram={this.props.filteredProgram}
          />
          {this.renderVideos(this.props.lang, filteredVods)}
        </Box>
        <Box w={12 / 12} pb="3rem" pt="2rem">
          <center>{renderUI}</center>
        </Box>
        <style jsx>
          {`
            .button-hunger {
              background-color: white;
              border: 1px solid red;
              color: red;
              padding: 8px 25px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-weight: 700;
              font-family: Helvetica, Arial, sans-serif;
            }
          `}
        </style>
      </div>
    )
  }
}

const RowVideo = ({ lang, vods }) => {
  return (
    <Flex mb={3} wrap>
      <Box
        w={[4 / 4, 2 / 4, 1 / 4, 1 / 4, 1 / 4]}
        pr={['0em', '0.5em', '0.75em', '0.75em', '0.75em']}
      >
        {vods[0] !== undefined && (
          <ThumbnailVideo
            id={vods[0].id}
            img={vods[0].thumbnailUrl}
            name={lang === 'en' ? vods[0].title_en : vods[0].title_th}
            date={
              lang === 'en' ? vods[0].onAirDateStr_en : vods[0].onAirDateStr_th
            }
            time={vods[0].duration}
            // pt="1em"
          />
        )}
      </Box>
      <Box
        w={[4 / 4, 2 / 4, 1 / 4, 1 / 4, 1 / 4]}
        pt={['1em', '0em', '0em', '0em', '0em']}
        pr={['0em', '0em', '0.5em', '0.5em', '0.5em']}
        pl={['0em', '0.5em', '0.25em', '0.25em']}
      >
        {vods[1] !== undefined && (
          <ThumbnailVideo
            id={vods[1].id}
            img={vods[1].thumbnailUrl}
            name={lang === 'en' ? vods[1].title_en : vods[1].programName_th}
            date={
              lang === 'en' ? vods[1].onAirDateStr_en : vods[1].onAirDateStr_th
            }
            time={vods[1].duration}
            // pt="1em"
          />
        )}
      </Box>
      <Box
        w={[4 / 4, 2 / 4, 1 / 4, 1 / 4, 1 / 4]}
        pt={['1em', '1em', '0em', '0em', '0em']}
        pl={['0em', '0em', '0.5em', '0.5em', '0.5em']}
        pr={['0em', '0.5em', '0.25em', '0.25em']}
      >
        {vods[2] !== undefined && (
          <ThumbnailVideo
            id={vods[2].id}
            img={vods[2].thumbnailUrl}
            name={lang === 'en' ? vods[2].title_en : vods[2].title_th}
            date={
              lang === 'en' ? vods[2].onAirDateStr_en : vods[2].onAirDateStr_th
            }
            time={vods[2].duration}
            // pt="1em"
          />
        )}
      </Box>
      <Box
        w={[4 / 4, 2 / 4, 1 / 4, 1 / 4, 1 / 4]}
        pt={['1em', '1em', '0em', '0em', '0em']}
        pl={['0em', '0.5em', '0.75em', '0.75em', '0.75em']}
      >
        {vods[3] !== undefined && (
          <ThumbnailVideo
            id={vods[3].id}
            img={vods[3].thumbnailUrl}
            name={lang === 'en' ? vods[3].title_en : vods[3].title_th}
            date={
              lang === 'en' ? vods[3].onAirDateStr_en : vods[3].onAirDateStr_th
            }
            time={vods[3].duration}
            // pt="1em"
          />
        )}
      </Box>
    </Flex>
  )
}

const mapStateToProps = state => {
  // console.log('dddddddd', state)
  return {
    auth: state.auth,
    vod: state.vod,
  }
}

export default connect(mapStateToProps, {
  fetchVodsSuccess,
  pagination,
  startindex,
})(VideoBox)
