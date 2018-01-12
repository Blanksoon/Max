import styled from 'styled-components'
import { Flex, Box, Image, Text } from 'rebass'
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

const WrapperHilight = styled.div`
  width: 55%;
  padding-left: 23%;
  background-size: cover;
  font-family: Helvetica, Arial, sans-serif;
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
      this.props.vod.index = 4
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
      this.props.startindex(4)
    }
  }

  render() {
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
        <Flex mb={3} pt="7rem">
          <Box w={1} pl="1rem">
            <Text
              color="red"
              bold
              children={this.props.common.vod}
              fontSize="2em"
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
        <Box pt="3rem" pl="1rem" pr="1rem">
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
            .backgroundx {
              color: #ffffff;
              background-image: url('static/FT6A2278.jpg');
            }
            .button {
              background-color: red;
              border: none;
              color: white;
              padding: 8px 25px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-weight: 700;
              font-family: Helvetica, Arial, sans-serif;
            }
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
            .text-left {
              float: left;
            }
            .text-right {
              float: right;
            }
            .gradient {
              width: 100%;
              height: 75vh;
              background: -webkit-linear-gradient(
                top,
                rgba(119, 133, 153, 1) 0%,
                rgba(2, 34, 70, 1) 100%
              ); /* Chrome10-25,Safari5.1-6 */
            }
          `}
        </style>
      </div>
    )
  }
}

const RowVideo = ({ lang, vods }) => {
  return (
    <Flex mb={3}>
      <Box w={6 / 12} mr="1em">
        <Flex>
          <Box w={6 / 12} pr="7.5px">
            {vods[0] !== undefined && (
              <ThumbnailVideo
                id={vods[0].id}
                img={vods[0].thumbnailUrl}
                name={lang === 'en' ? vods[0].title_en : vods[0].title_th}
                date={
                  lang === 'en' ? (
                    vods[0].onAirDateStr_en
                  ) : (
                    vods[0].onAirDateStr_en
                  )
                }
                time={vods[0].duration}
                pt="1em"
              />
            )}
          </Box>
          <Box w={6 / 12} pl="7.5px">
            {vods[1] !== undefined && (
              <ThumbnailVideo
                id={vods[1].id}
                img={vods[1].thumbnailUrl}
                name={lang === 'en' ? vods[1].title_en : vods[1].programName_th}
                date={
                  lang === 'en' ? (
                    vods[1].onAirDateStr_en
                  ) : (
                    vods[1].onAirDateStr_en
                  )
                }
                time={vods[1].duration}
                pt="1em"
              />
            )}
          </Box>
        </Flex>
      </Box>
      <Box w={6 / 12}>
        <Flex>
          <Box w={6 / 12} pr="7.5px">
            {vods[2] !== undefined && (
              <ThumbnailVideo
                id={vods[2].id}
                img={vods[2].thumbnailUrl}
                name={lang === 'en' ? vods[2].title_en : vods[2].title_th}
                date={
                  lang === 'en' ? (
                    vods[2].onAirDateStr_en
                  ) : (
                    vods[2].onAirDateStr_en
                  )
                }
                time={vods[2].duration}
                pt="1em"
              />
            )}
          </Box>
          <Box w={6 / 12} pl="7.5px">
            {vods[3] !== undefined && (
              <ThumbnailVideo
                id={vods[3].id}
                img={vods[3].thumbnailUrl}
                name={lang === 'en' ? vods[3].title_en : vods[3].title_th}
                date={
                  lang === 'en' ? (
                    vods[3].onAirDateStr_en
                  ) : (
                    vods[3].onAirDateStr_en
                  )
                }
                time={vods[3].duration}
                pt="1em"
              />
            )}
          </Box>
        </Flex>
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
