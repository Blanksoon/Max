import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import { Flex, Box, Image, Text } from 'rebass'
import Container from '../commons/Container'
import Main from '../../layouts/Main'
import vars from '../commons/vars'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../../redux/store'
import { fetchVods } from '../../redux/modules/vod'
import NewModal from '../../containers/NewModal'
import ThumbnailRight from '../thumbnail/ThumbnailRight'
import {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
} from '../../redux/modules/modal'
import * as api from '../../api'
import { I18nextProvider } from 'react-i18next'
import startI18n from '../../tools/startI18n'
import { getTranslation } from '../../tools/translationHelpers'
import { langSelector } from '../../redux/selectors/lang'
import { langUrl } from '../../tools/langUrl'
import { media } from '../../tools/responsive'

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
  cursor: pointer;
  margin-top: 7px;
  ${media.ipadpro`margin-left: 40%;`};
  ${media.iphone7p`font-size: 0.8em;padding: 8px 8%;`};
  ${media.phone`font-size: 0.8em`};
  ${media.iphone5`font-size: 0.7em;padding: 8px 8%;`};
`
const Text0 = styled.div`
  color: ${vars.white};
  font-size: 1.5em;
  font-weight: 700;
  padding-left: 1rem;
  padding-bottom: 1rem;
  font-family: Helvetica, Arial, sans-serif;
  ${media.phone`font-size: 0.8em`};
  ${media.iphone5`font-size: 0.7em;padding-bottom: 0rem;`};
`
const Text1 = styled.div`
  color: ${vars.white};
  font-size: 1.5em;
  font-weight: 700;
  // padding-left: 1rem;
  padding-bottom: 1rem;
  font-family: Helvetica, Arial, sans-serif;
  // height: 40px;
  // overflow: hidden;
  ${media.phone`font-size: 0.8em`};
  ${media.iphone5`font-size: 0.7em;padding-bottom: 0rem;`};
`
const Text2 = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 0.9em;
  font-family: Helvetica, Arial, sans-serif;
  height: 50px;
  overflow: hidden;
  ${media.phone`font-size: 0.8em;height: 45px;`};
  ${media.iphone5`font-size: 0.7em;height: 50px;`};
`
const Date = styled.div`
  color: ${vars.yellow};
  font-weight: 700;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
  ${media.phone`font-size: 0.8em`};
  ${media.iphone5`font-size: 0.7em`};
`
const Button = styled.button`
  background-color: #ffffff00;
  border: 1px solid white;
  color: white;
  padding: 8px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
  font-family: Helvetica, Arial, sans-serif;
  cursor: pointer;
`
const WrapperHilight = styled.div`
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
    rgba(1, 33, 71, 0.95) 85%,
    rgba(1, 33, 71, 0.97) 100%
  ); /* Chrome10-25,Safari5.1-6 */
`
const Wrapper = styled.div`background-color: #3c5c83;`
class MaxnewHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      translations: this.props.translations,
      lang: 'en', //this.props.lang,
    }
    this.i18n = startI18n(this.props.translations, this.props.lang)
    this.switchLang = this.switchLang.bind(this)
  }

  async switchLang(lang) {
    this.setState({
      lang: lang,
      translations: await getTranslation(lang, ['common', 'navbar'], langUrl),
    })
  }
  render() {
    // console.log('dddddddd', this.props.news[0])
    return (
      <I18nextProvider i18n={this.i18n}>
        <div>
          <Box pt="1rem">
            <center>
              <Text0>
                {this.props.common.Maxnew ? (
                  this.props.common.Maxnew
                ) : (
                  'MAX NEWS'
                )}
              </Text0>
            </center>
          </Box>
          <Flex wrap>
            <Box w={[12 / 12, 12 / 12, 12 / 12, 7 / 12, 7 / 12]}>
              <WrapperHilight>
                <Box w={12 / 12} className="imagesss">
                  <Image width="100%" pt={0} src="static/FT6A6495.jpg" />
                </Box>
                <Box w={12 / 12} pl="20px">
                  <WrapperHilightText>
                    <Image
                      width="10%"
                      pl="90%"
                      src="static/img_logo_white@2x.png"
                    />
                    {this.props.news[0] != undefined ? (
                      <Box
                        pt={['4rem', '0rem', '18rem', '13rem', '18rem']}
                        pl="1rem"
                        pr="1rem"
                      >
                        <Box>
                          <Text1>
                            {this.props.lang === 'en' ? (
                              this.props.news[0].heading_en
                            ) : (
                              this.props.news[0].heading_th
                            )}
                            {/* Headline consectetur adipicing elit, sed do eiusmod
                          tempor */}
                          </Text1>
                        </Box>
                        <Box pt="1rem">
                          <Text2>
                            {this.props.lang === 'en' ? (
                              this.props.news[0].article_en
                            ) : (
                              this.props.news[0].article_th
                            )}
                            {/* Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec ut lectus turpis. Mauris cursus mollis
                          nisi. */}
                          </Text2>
                        </Box>
                        <Flex>
                          <Box w={5 / 12} pt="1rem">
                            <Date>
                              {this.props.lang === 'en' ? (
                                this.props.news[0].createDate_en
                              ) : (
                                this.props.news[0].createDate_th
                              )}
                              {/* Aug 11, 2017 */}
                            </Date>
                          </Box>
                          <Box w={7 / 12}>
                            <a
                              href={`/maxnews_detail?id=${this.props.news[0]
                                .__v}&name=${this.props.news[0].programName}`}
                            >
                              <Button1>Read more</Button1>
                            </a>
                          </Box>
                        </Flex>
                      </Box>
                    ) : (
                      ''
                    )}
                  </WrapperHilightText>
                </Box>
              </WrapperHilight>
            </Box>
            <Box
              width={[12 / 12, 12 / 12, 12 / 12, 5 / 12, 5 / 12]}
              // minWidth={[20.1, 23.5, 26, 48, 64, 80]}
              pl={['0%', '0%', '0%', '1%', '1%']}
            >
              {this.props.news[1] != undefined ? (
                <Flex pt={['1rem', '1rem', '0rem', '0rem', '0rem']}>
                  <a
                    href={`/maxnews_detail?id=${this.props.news[1]
                      .__v}&name=${this.props.news[1].programName}`}
                  >
                    <ThumbnailRight
                      w="100%"
                      img="static/maxPromo.jpg"
                      text1={
                        this.props.lang === 'en' ? (
                          this.props.news[1].heading_en
                        ) : (
                          this.props.news[1].heading_th
                        )
                      } //"Headline Headline consect adipicing elit sedid"
                      text2={
                        this.props.lang === 'en' ? (
                          this.props.news[1].article_en
                        ) : (
                          this.props.news[1].article_th
                        )
                      } //"In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames."
                      date={
                        this.props.lang === 'en' ? (
                          this.props.news[1].createDate_en
                        ) : (
                          this.props.news[1].createDate_th
                        )
                      } //"Aug 11, 2017"
                    />
                  </a>
                </Flex>
              ) : (
                ''
              )}
              {this.props.news[2] != undefined ? (
                <Flex pt={['1rem', '1rem', '3.5rem', '2rem', '5rem']}>
                  <a
                    href={`/maxnews_detail?id=${this.props.news[2]
                      .__v}&name=${this.props.news[2].programName}`}
                  >
                    <ThumbnailRight
                      w="100%"
                      img="static/maxPromo.jpg"
                      text1={
                        this.props.lang === 'en' ? (
                          this.props.news[2].heading_en
                        ) : (
                          this.props.news[2].heading_th
                        )
                      } //"Headline Headline consect adipicing elit sedid"
                      text2={
                        this.props.lang === 'en' ? (
                          this.props.news[2].article_en
                        ) : (
                          this.props.news[2].article_th
                        )
                      } //"In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames."
                      date={
                        this.props.lang === 'en' ? (
                          this.props.news[2].createDate_en
                        ) : (
                          this.props.news[2].createDate_th
                        )
                      } //"Aug 11, 2017"
                    />
                  </a>
                </Flex>
              ) : (
                ''
              )}
              {this.props.news[3] != undefined ? (
                <Flex pt={['1rem', '1rem', '3.5rem', '2rem', '5rem']}>
                  <a
                    href={`/maxnews_detail?id=${this.props.news[3]
                      .__v}&name=${this.props.news[3].programName}`}
                  >
                    <ThumbnailRight
                      w="100%"
                      img="static/maxPromo.jpg"
                      text1={
                        this.props.lang === 'en' ? (
                          this.props.news[3].heading_en
                        ) : (
                          this.props.news[3].heading_th
                        )
                      } //"Headline Headline consect adipicing elit sedid"
                      text2={
                        this.props.lang === 'en' ? (
                          this.props.news[3].article_en
                        ) : (
                          this.props.news[3].article_th
                        )
                      } //"In in tempus risus. Aliquam erat volutpat. Nunc in nibh augue. Interdum et malesuada fames."
                      date={
                        this.props.lang === 'en' ? (
                          this.props.news[3].createDate_en
                        ) : (
                          this.props.news[3].createDate_th
                        )
                      } //"Aug 11, 2017"
                    />
                  </a>
                </Flex>
              ) : (
                ''
              )}
            </Box>
          </Flex>
          <Box pt="4rem">
            <center>
              <a href={`/maxnews`}>
                <Button className="button-hunger">
                  {this.props.lang === 'en' ? (
                    'Hunger for more'
                  ) : (
                    'กดเพื่อดูเพิ่ม'
                  )}
                </Button>
              </a>
            </center>
          </Box>
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
        </div>
      </I18nextProvider>
    )
  }
}

const mapStateToProps = state => {
  //console.log('ddddddsss', state.cookie)
  return {
    cookie: state.cookie,
    lang: langSelector(state),
  }
}
MaxnewHome.getInitialProps = async ({ store, isServer, query, req }) => {
  let state = store.getState()
  const token = state.auth.token
  state = store.getState()
  const translations = await getTranslation(
    state.cookie.lang,
    ['common', 'navbar'],
    langUrl
  )
  const props = mapStateToProps(state)
  props.translations = translations
  return props
}

export default withRedux(initStore, null, {
  toogleModal,
  updateModalType,
  indexModalURL,
  closeModal,
})(MaxnewHome)
