import ThumbnailRight from '../thumbnail/ThumbnailRight'
import React, { Component, PropTypes } from 'react'
import * as api from '../../api'
import styled from 'styled-components'
import color from '../commons/vars'
import { Media, Subhead, Image, Flex, Box, Text, Button, Link } from 'rebass'
import { fetchNews, pagination, startindex } from '../../redux/modules/maxnews'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../../redux/store'

const Button1 = styled.button`
  bottom: 2%;
  background-color: #b81111;
  border: 1px solid #b81111;
  color: white;
  padding: 8px 10%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
  font-size: 1em;
  margin-left: 53%;
`
const Text1 = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 1.5em;
  font-family: Helvetica, Arial, sans-serif;
`
const Text2 = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 0.9em;
  font-family: Helvetica, Arial, sans-serif;
`
const Date = styled.div`
  color: ${color.yellow};
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
`
const Select = styled.select`
  width: 9em;
  height: 2.4em;
  font-size: 1em;
`

const AllShow = styled.select`
  width: 18em;
  height: 2.4em;
  font-size: 1em;
`
const WrapperHilight = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-size: cover;
  font-family: Helvetica, Arial, sans-serif;
  position: relative;
`
const WrapperHilightText = styled.div`
  top: 0%;
  right: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: -webkit-linear-gradient(
    top,
    rgba(1, 33, 71, 0.1) 0%,
    rgba(1, 33, 71, 0.6) 76%,
    rgba(1, 33, 71, 1) 85%,
    rgba(1, 33, 71, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
`
const Wrapper = styled.div`background-color: #fff;`
class MaxButtom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newsmax: 0,
    }
    this.check = this.check.bind(this)
  }

  async check() {
    // if (this.props.News.index == 0) {
    //   this.props.News.index = 6
    // }
    // if (this.props.News.index < this.props.numberOfVods) {
    //   const json = await api.get(
    //     `${api.SERVER}/vods-ondemand?token=${this.props.auth.token}&index=${this
    //       .props.vod.index}`
    //   )
    //   // console.log('dddddddddddfgdgd', json)
    //   this.props.fetchVodsSuccess(json)
    //   this.props.pagination()
    // }
    this.props.pagination()
  }

  renderNews(lang, news) {
    // console.log('dddddddd', news)
    const rowNews = []
    const rowCount = this.props.News.index / 2 //this.props.news.index / 2
    // Use splice on clone object, DONT MODIFY props
    const tmpNews = [...news]
    for (let i = 1; i < rowCount; i++) {
      if (i == 1) {
        ;<Thumbnailright key={i} lang={lang} news={tmpNews.splice(0, 4)} />
      } else {
        rowNews.push(
          <Thumbnailright key={i} lang={lang} news={tmpNews.splice(0, 2)} />
        )
      }
    }
    return rowNews
  }

  componentDidMount() {
    {
      this.props.startindex(6)
    }
  }

  render() {
    // console.log('dddddddddddd', this.props.news)
    return (
      <Wrapper>
        <Box pl="1rem" pr="1rem" width={1}>
          <Flex>
            <Box>
              <Flex pt={['0rem', '0rem', '0rem', '2rem', '2rem']} />
              {this.renderNews(this.props.lang, this.props.news)}
              <Flex>
                <Box w={1} pt="40px" pb="60px">
                  {this.props.News.index < this.props.news.length ? (
                    <center>
                      <button onClick={this.check} className="button-hunger">
                        Hunger for more
                      </button>
                    </center>
                  ) : (
                    ''
                  )}
                </Box>
              </Flex>
            </Box>
          </Flex>
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
      </Wrapper>
    )
  }
}
const mapStateToProps = state => {
  // console.log('ddddddddwfewef', state)
  return {
    News: state.news,
  }
}
export default withRedux(initStore, mapStateToProps, {
  pagination,
  startindex,
})(MaxButtom)
// export default MaxButtom

const Thumbnailright = props => (
  // console.log('ddddddddFWEF', props.news.length),
  <Flex pt={['1rem', '1rem', '2rem', '1rem', '1rem']} wrap>
    {props.news[0] != undefined ? (
      <Box
        w={[12 / 12, 12 / 12, 12 / 12, 6 / 12, 6 / 12]}
        pr={['0em', '0em', '0em', '0.5em', '0.5em']}
      >
        <a href={`/maxnews_detail?id=${props.news[0].__v}`}>
          <ThumbnailRight
            w="100%"
            img="static/maxPromo.jpg"
            text1={
              props.lang === 'en' ? (
                props.news[0].heading_en
              ) : (
                props.news[0].heading_th
              )
            } //"Headline Headline consect adipicing elit sedid"
            text2={
              props.lang === 'en' ? (
                props.news[0].article_en
              ) : (
                props.news[0].article_th
              )
            } //"In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames."
            date={
              props.lang === 'en' ? (
                props.news[0].createDate
              ) : (
                props.news[0].createDate
              )
            } //"Aug 11, 2017"
            pt="0.9em"
          />
        </a>
      </Box>
    ) : (
      ''
    )}
    {props.news[1] != undefined ? (
      <Box
        w={[12 / 12, 12 / 12, 12 / 12, 6 / 12, 6 / 12]}
        pt={['1em', '1em', '2em', '0em', '0em']}
        pl={['0em', '0em', '0em', '0.5em', '0.5em']}
      >
        <a href={`/maxnews_detail?id=${props.news[1].__v}`}>
          <ThumbnailRight
            w="100%"
            img="static/maxPromo.jpg"
            text1={
              props.lang === 'en' ? (
                props.news[1].heading_en
              ) : (
                props.news[1].heading_th
              )
            } //"Headline Headline consect adipicing elit sedid"
            text2={
              props.lang === 'en' ? (
                props.news[1].article_en
              ) : (
                props.news[1].article_th
              )
            } //"In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames.In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames."
            date={
              props.lang === 'en' ? (
                props.news[1].createDate
              ) : (
                props.news[1].createDate
              )
            } //"Aug 11, 2017"
            pt="0.9em"
          />
        </a>
      </Box>
    ) : (
      ''
    )}
    <style jsx>
      {`
        a:link {
          text-decoration: none;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        a:hover {
          color: #ff0000;
          text-decoration: none;
        }
      `}
    </style>
  </Flex>
)
