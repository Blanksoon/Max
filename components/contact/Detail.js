import { Media, Subhead, Image, Flex, Box, Text, Provider } from 'rebass'
import vars from '../commons/vars'
import Spinner from '../commons/Spinner'
import styled from 'styled-components'
import { MapWithAMarker } from './GoogleMap'
import { media, theme } from '../../tools/responsive'
import Link from 'next/link'
import * as api from '../../api'

const Input = styled.input`
  padding: ${props => props.px} ${props => props.py};
  width: 90%;
  ${media.ipadpro`width: 100%;
  padding: ${props => props.px} ${props => props.py}`};
  ${media.ipad`width: 100%;
  padding: ${props => props.px} 3em`};
  ${media.iphone7p`width: 90%;
  padding: ${props => props.px} ${props => props.py}`};
  ${media.phone`width: 90%;
  padding: ${props => props.px} ${props => props.py}`};
`
const Button = styled.button`
  background-color: #b81111;
  padding: 1em 1em;
  text-align: center;
  border: 0;
  ${media.ipad`padding: 0.5em 0.5em;`};
  ${media.iphone7p`padding: 0.5em 2em;`};
  ${media.phone`padding: 0.5em 1.5em;`};
  ${media.iphone5`padding: 0.8em 0.8em;`};
`

const ButtonEmail = styled.button`
  background: ${vars.red};
  color: ${vars.white};
  background-color: #b81111;
  cursor: pointer;
  text-align: center;
  border: 0;
  width: 90%;
  height: 36px;
  display: inline-block;
  fontSize: 1.3em;
  &:active {
    background: ${vars.red};
  }
  ${media.ipadpro`width: 100%;`};
  ${media.ipad`width: 100%;`};
  ${media.iphone7p`width: 90%;`};
  ${media.phone`width: 90%;`};
`
const Text1 = styled.div`
  color: ${vars.white};
  font-weight: 100;
  font-size: 0.9em;
  font-family: Helvetica, Arial, sans-serif;
  padding: 0;
  text-align: center;
`

const Map = styled.div`
  height: 350;
  width: 100%;
  display: flex;
  flexFlow: row nowrap;
  justifyContent: center;
  padding: 0;
  marginLeft: 0;
`

const ShowMap = styled.div`height: 100px;`

class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      message: '',
      status: '',
      loading: false,
    }
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this)
    this.handleOnChangeMessage = this.handleOnChangeMessage.bind(this)
    this.sendEmail = this.sendEmail.bind(this)
  }

  handleOnChangeEmail(event) {
    this.setState({
      email: event.target.value,
    })
  }

  handleOnChangeMessage(event) {
    this.setState({
      message: event.target.value,
    })
  }

  async sendEmail() {
    const userEmail = this.state
    const url = `${api.SERVER}/email`
    this.setState({ loading: true })
    try {
      const json = await api.post(url, { userEmail })
      //console.log(json)
      this.setState({ status: 'thank your for your inquiry' })
      this.setState({ loading: false })
      return json
      la1za3da1
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const {
      FOLLOWMAX,
      NameAddress,
      Address1,
      Address2,
      TITLECOMMENT,
      EMILPLACEHOLDER,
      INBOXEMAILPLACEHOLDER,
      SENDEMAILBUTTON,
    } = this.props.common
    return (
      <div>
        <Flex wrap>
          <Box
            className="googleMaps"
            w={[12 / 12, 12 / 12, 8 / 12, 8 / 12, 8 / 12]}
            bg="red"
          >
            <MapWithAMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAx1PFatOg26tgLRPDqJ204-cmSlpqNeEM&callback=initMap"
              loadingElement={<div className="map" />}
              containerElement={<div className="map" />}
              mapElement={<div className="map" />}
            />
          </Box>
          <Box
            className="menuDetail"
            w={[12 / 12, 12 / 12, 4 / 12, 4 / 12, 4 / 12]}
            pl={['9%', '9%', '4.5%', '4%', '4%']}
            pr={['0%', '0%', '4%', '4%', '4%']}
            bg="#8b0303"
          >
            <Text
              pt="1em"
              color="#ffffff"
              left
              bold
              children={FOLLOWMAX}
              fontSize={['0.9em', '0.9em', '0.9em', '0.9em', '0.9em']}
            />
            <Flex pt="1em" pb={['0.1em', '0.3em', '0.3em', '1em', '1em']}>
              <LogoFooter
                mr="1em"
                w="100%"
                name="static/ic_facebook@2x.png"
                src="https://www.facebook.com/maxmuaythaipage/"
              />
              <LogoFooter
                mr="1em"
                w="100%"
                name="static/ic_googleplus@2x.png"
                src="https://plus.google.com/109034798571741545704"
              />
              <LogoFooter
                mr="1em"
                w="100%"
                name="static/ic_youtube@2x.png"
                src="https://www.youtube.com/user/maxmuaythaichannel"
              />
              <LogoFooter
                mr="1em"
                w="100%"
                name="static/ic_instagram@2x.png"
                src="https://www.instagram.com/maxmuaythai.th/"
              />
            </Flex>
            <Text
              pt="1em"
              color="#f8f2f2"
              left
              bold
              children={NameAddress}
              fontSize="0.9em"
            />
            <Text color="#efe3e3" left children={Address1} fontSize="0.7em" />
            <Text color="#efe3e3" left children={Address2} fontSize="0.7em" />
            <Flex pt="1em" pb={['0.1em', '0.4em', '1em', '1em', '1em']} wrap>
              <Box
                w={[6 / 12, 6 / 12, 6 / 12, 6 / 12, 6 / 12]}
                pr={['0%', '0%', '3.5%', '3.5%', '3.5%']}
              >
                <Button p="0%" className="bt2222">
                  <center>
                    <Image
                      width={['2em', '2em', '2em', '2em', '2em']}
                      src="static/phone.png"
                    />
                    <Text
                      color="#fff"
                      children="(+66) 038-416-999"
                      fontSize="0.77em"
                    />
                  </center>
                </Button>
              </Box>
              <Box
                w={[6 / 12, 6 / 12, 6 / 12, 6 / 12, 6 / 12]}
                pl={['0%', '0%', '3.5%', '3.5%', '3.5%']}
              >
                <Button>
                  <center>
                    <Image
                      width={['2em', '2em', '2em', '2em', '2em']}
                      src="static/phone.png"
                    />
                    <Text
                      color="#fff"
                      children="(+66) 038-416-999"
                      fontSize="0.77em"
                    />
                  </center>
                </Button>
              </Box>
            </Flex>
            <Text
              pt="1em"
              pb="1.2em"
              color="#faf7f7"
              left
              bold
              children={TITLECOMMENT}
              fontSize="0.9em"
            />
            <Box w={[12 / 12, 12 / 12, 12 / 12, 12 / 12, 12 / 12]} mb="1em">
              <Input
                px="0.5em"
                py="1em"
                placeholder={EMILPLACEHOLDER}
                onChange={this.handleOnChangeEmail}
              />
            </Box>
            <Box className="email" w={12 / 12} mb="1em">
              <Input
                px="3em"
                py="1em"
                placeholder={INBOXEMAILPLACEHOLDER}
                onChange={this.handleOnChangeMessage}
              />
            </Box>
            <Box w={12 / 12} mb="3.5em">
              <Box>
                <ButtonEmail type="email" onClick={() => this.sendEmail()}>
                  <center>
                    {this.state.loading ? <Spinner /> : `${SENDEMAILBUTTON}`}
                  </center>
                </ButtonEmail>
              </Box>
              <Box pr="10%" pt="1rem">
                <center>
                  <Text1>{this.state.status}</Text1>
                </center>
              </Box>
            </Box>
          </Box>
        </Flex>
        <style jsx global>
          {`
            .map {
              height: 100%;
            }

            @media screen and (min-width: 318px) {
              .map {
                height: 300px;
              }
            }
            @media screen and (min-width: 374px) {
              .map {
                height: 350px;
              }
            }
            @media screen and (min-width: 766px) {
              .map {
                // height: 100%;
                //height: 368px;
                height: 566px;
              }
            }
            @media screen and (min-width: 1022px) {
              .map {
                height: 100%;
              }
            }
            @media screen and (min-width: 1118px) {
              .map {
                height: 100%;
              }
            }
          `}
        </style>
      </div>
    )
  }
}

const LogoFooter = props => (
  <Box w={1.6 / 12} mr={props.mr}>
    <a href={props.src} target="_blank">
      <Image width="100%" src={props.name} />
    </a>
  </Box>
)
export default Detail
