// This is the Link API
import Head from 'next/head'
import Link from 'next/link'
import { Flex, Box } from 'rebass'
import Cookies from 'universal-cookie'
import styled from 'styled-components'
import withRedux from 'next-redux-wrapper'
import Login from '../components/login/Login'
import NewModal from '../containers/NewModal'
import Container from '../components/commons/Container'
import Main from '../layouts/Main'
import vars from '../components/commons/vars'
import color from '../components/commons/vars'
import { initStore } from '../redux/store'
import Spinner from '../components/commons/Spinner'
import * as api from '../api'
import { I18nextProvider } from 'react-i18next'
import startI18n from '../tools/startI18n'
import { getTranslation } from '../tools/translationHelpers'
import { langSelector } from '../redux/selectors/lang'

const WrapperTop = styled.div`
  color: #fff;
  background-color: #011020;
`
const WrapperLive = styled.div`
  color: #fff;
  background-image: url('/static/bg-upcoming-home.jpg');
  background-size: cover;
  background-position-y: 0px;
`
const WrapperStadiumTicket = styled.div`
  color: #ffffff;
  background-color: #b71111;
`
const WrapperAbout = styled.div`
  color: #ffffff;
  background: -webkit-linear-gradient(
    left,
    rgba(7, 70, 141, 1) 0%,
    rgba(7, 70, 141, 1) 48%,
    rgba(139, 3, 3, 1) 52%,
    rgba(139, 3, 3, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
`
const GradientBg = styled.div`
  background: -webkit-linear-gradient(
    top,
    #020f1f 0%,
    #020f1f 12%,
    #020f1f 64%,
    #020f1f 75%,
    #08488f 92%,
    #08488f 100%
  ); /* Chrome10-25,Safari5.1-6 */
`

const Text1 = styled.div`
  color: ${color.red};
  font-weight: 100;
  font-size: 2rem;
  font-family: Helvetica, Arial, sans-serif;
  padding-bottom: 0.4em;
  text-align: center;
`
const Input = styled.input`
  width: 100%;
  padding: 6px 15px;
  margin: 8px 0;
  box-sizing: border-box;
`

const Button = styled.button`
  bottom: 2%;
  background-color: ${vars.red};
  border: 1px solid ${vars.red};
  color: white;
  cursor: pointer;
  padding: 10px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 600;
  font-size: 1em;
  &:disabled {
    background-color: ${vars.lightRed};
    border: 1px solid ${vars.lightRed};
  }
`
const Text2 = styled.div`
  color: ${color.red};
  font-weight: 100;
  font-size: 15px;
  font-family: Helvetica, Arial, sans-serif;
  padding-bottom: 0.5em;
  text-align: center;
`
const Home = styled.div`font-family: Helvetica, Arial, sans-serif;`

class Verify extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: '',
      newPassword: '',
      comfirePassword: '',
      loading: false,
      translations: this.props.translations,
      lang: this.props.lang,
    }
    this.changePassword = this.changePassword.bind(this)
    this.handleOnChangeNewPassword = this.handleOnChangeNewPassword.bind(this)
    this.handleOnChangeConfirmPassword = this.handleOnChangeConfirmPassword.bind(
      this
    )
    this.i18n = startI18n(this.props.translations, this.props.lang)
    this.switchLang = this.switchLang.bind(this)
  }
  async changePassword() {
    const token = this.props.url.query.token
    if (this.state.newPassword !== this.state.comfirePassword) {
      this.setState({
        status: 'comfirm password is not matach',
      })
    } else {
      const url = `${api.SERVER}/change-password?token=` + token
      const providerData = {
        password: this.state.newPassword,
      }
      this.setState({ loading: true })
      const { data, status } = await api.post(url, providerData)
      this.setState({
        status: status.message,
      })
      this.setState({ loading: false })
      if (status.code == 200) {
        this.props.url.push(`/successChangePass`)
      }
    }
    // try {
    //   let json = await api.get(url)
    // } catch (error) {
    //   return console.log(error)
    // }
    console.log('token', token)
  }
  componentDidMount() {
    // console.log('hi')
    // this.verify(this.props.url.query.token)
  }

  handleOnChangeNewPassword(event) {
    this.setState({
      ...this.state,
      newPassword: event.target.value,
    })
  }

  handleOnChangeConfirmPassword(event) {
    this.setState({
      ...this.state,
      comfirePassword: event.target.value,
    })
  }
  async switchLang(lang) {
    this.setState({
      lang: lang,
      translations: await getTranslation(
        lang,
        ['common', 'navbar'],
        'http://localhost:8080/static/locales/'
      ),
    })
  }
  render() {
    return (
      <I18nextProvider i18n={this.i18n}>
        <Main
          url={this.props.url}
          nav={this.state.translations.translation.common}
          www="changePassword"
          switchLanguage={this.switchLang}
        >
          <NewModal
            common={this.state.translations.translation.common}
            lang={this.state.lang}
            V
          />
          <Container pt="10rem" pb="5rem">
            <center>
              <Text1>
                {this.state.translations.translation.common.TITLENEWPASSWORD}
              </Text1>
              <Flex>
                <Box w={4 / 12} />
                <Box w={4 / 12}>
                  <Input
                    type="password"
                    placeholder={
                      this.state.translations.translation.common.NEWPASSWORD
                    }
                    onChange={this.handleOnChangeNewPassword}
                    required
                  />
                  <Input
                    type="password"
                    placeholder={
                      this.state.translations.translation.common.CONFIRMPASSWORD
                    }
                    onChange={this.handleOnChangeConfirmPassword}
                    required
                  />
                  <Text2>{this.state.status} </Text2>
                  <Button
                    style={{ width: '148px' }}
                    onClick={this.changePassword}
                    disabled={this.state.loading}
                  >
                    {this.state.loading ? (
                      <Spinner />
                    ) : (
                      `${this.state.translations.translation.common.SUBMIT}`
                    )}
                  </Button>
                </Box>
                <Box w={4 / 12} />
              </Flex>
            </center>
          </Container>
        </Main>
      </I18nextProvider>
    )
  }
}
const mapStateToProps = state => {
  return {
    lang: langSelector(state),
  }
}
Verify.getInitialProps = async ({ store, isServer, query, req }) => {
  let state = store.getState()
  state = store.getState()
  const translations = await getTranslation(
    state.cookie.lang,
    ['common', 'navbar'],
    'http://localhost:8080/static/locales/'
  )
  const props = mapStateToProps(state)
  props.translations = translations
  return props
}

export default withRedux(initStore)(Verify)
