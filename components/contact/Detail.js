import { Media, Subhead, Image, Flex, Box, Text } from 'rebass'
import styled from 'styled-components'
import { MapWithAMarker } from './GoogleMap'
import Link from 'next/link'
import * as api from '../../api'
const Input = styled.input`
  padding: ${props => props.px} ${props => props.py};
  width: 90%;
`
const Button = styled.button`
  background-color: #b81111;
  padding: 1em 1em;
  text-align: center;
  border: 0;
`

const ButtonEmail = styled.button`
  background-color: #b81111;
  text-align: center;
  border: 0;
  width: 100%;
  height: 36px;
  cursor: pointer;
`

class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      message: '',
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
    try {
      const json = await api.post(url, { userEmail })
      //console.log(json)
      return json
      la1za3da1
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <Flex>
        <Box className="googleMaps" w={8 / 12} bg="gray">
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAx1PFatOg26tgLRPDqJ204-cmSlpqNeEM&callback=initMap"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </Box>
        <Box className="menuDetail" w={4 / 12} pl="4%" pr="4%" bg="#8b0303">
          <Text
            pt="1em"
            color="#ffffff"
            left
            bold
            children="Follow Max Muay Thai at"
            fontSize="0.9em"
          />
          <Flex pt="1em" pb="1em">
            <LogoFooter mr="1em" w="100%" name="static/ic_facebook@2x.png" />
            <LogoFooter mr="1em" name="static/ic_googleplus@2x.png" />
            <LogoFooter mr="1em" name="static/ic_youtube@2x.png" />
            <LogoFooter mr="1em" name="static/ic_instagram@2x.png" />
          </Flex>
          <Text
            pt="1em"
            color="#f8f2f2"
            left
            bold
            children="Max Muay Thai Co.,Ltd."
            fontSize="0.9em"
          />
          <Text
            color="#efe3e3"
            left
            children="40/108 Sukhumvit Rd. Moo.9 Nongprue"
            fontSize="0.50em"
          />
          <Text
            color="#efe3e3"
            left
            children="Banglamung Chon Buri 20150 (Thailand)"
            fontSize="0.5em"
          />
          <Flex pt="1em" pb="1em">
            <Box w={6 / 12} pr="3.5%">
              <Button p="0%">
                <center>
                  <Image width="2em" src="static/phone.png" />
                  <Text
                    color="#fff"
                    children="(+66) 038-416-999"
                    fontSize="0.77em"
                  />
                </center>
              </Button>
            </Box>
            <Box w={6 / 12} pl="3.5%">
              <Button>
                <center>
                  <Image width="2em" src="static/phone.png" />
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
            children="Let we hear from you,"
            fontSize="0.9em"
          />
          <Box w={12 / 12} mb="1em">
            <Input
              px="0.5em"
              py="1em"
              placeholder="Your email here"
              onChange={this.handleOnChangeEmail}
            />
          </Box>
          <Box w={12 / 12} mb="1em">
            <Input
              px="3em"
              py="1em"
              placeholder="Let us know what can we do more fro our beloved fan.+-+"
              onChange={this.handleOnChangeMessage}
            />
          </Box>
          <Box w={12 / 12} mb="3.5em">
            <ButtonEmail type="email" onClick={() => this.sendEmail()}>
              <center>
                <Text color="#fff" children="Send email" fontSize="1.3em" />
              </center>
            </ButtonEmail>
          </Box>
        </Box>
      </Flex>
    )
  }
}

const LogoFooter = props => (
  <Box w={1.6 / 12} mr={props.mr}>
    <a href="https://www.google.com">
      <Image width="100%" src={props.name} />
    </a>
  </Box>
)
export default Detail
