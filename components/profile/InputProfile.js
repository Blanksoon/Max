import { Box, Image, Text, Flex } from 'rebass'
import styled from 'styled-components'
import color from '../commons/vars'
import FacebookLoginButton from '../login/FacebookLoginButton'
import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { closeModal } from '../../redux/modules/modal'
import { connect } from 'react-redux'
import * as api from '../../api'
import Spinner from '../commons/Spinner'
import vars from '../commons/vars'
import { datepickerStyled } from './datepickerStyle'
import Router from 'next/router'
import { media, theme } from '../../tools/responsive'

const Text1 = styled.div`
  color: ${color.black};
  font-weight: 700;
  font-size: 1.3em;
  font-family: Helvetica, Arial, sans-serif;
`

const Text2 = styled.div`
  color: ${color.black};
  font-weight: 400;
  font-size: 0.9em;
  font-family: Helvetica, Arial, sans-serif;
  margin-top: 0.35rem;
  margin-bottom: 0.5rem;
`

const Text3 = styled.div`
  color: ${vars.red};
  font-weight: 100;
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
  padding: 0;
  text-align: center;
`

const InputEmail = styled.input`
  width: 16em;
  height: 2.2em;
  color: ${color.black};
  font-weight: 400;
  font-size: 0.8em;
  font-family: Helvetica, Arial, sans-serif;
  margin-bottom: 1rem;
`
const Button = styled.button`
  background-color: white;
  border: 1px solid red;
  color: red;
  padding: 5px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
  font-family: Helvetica, Arial, sans-serif;
  margin-top: 0.3rem;
  cursor: pointer;
`

const Gender = styled.select`
  width: 16em;
  height: 2.2em;
  font-size: 0.8em;
  margin-bottom: 1rem;
`

const Age = styled.div`
  width: 16em;
  height: 2.2em;
`

const Country = styled.select`
  width: 16em;
  height: 2.2em;
  font-size: 0.8em;
`

const ButtonSubmit = styled.button`
  bottom: 2%;
  background-color: #b81111;
  border: 1px solid #b81111;
  color: white;
  padding: 5px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 300;
  font-size: 1em;
  cursor: pointer;
`
class InputProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      birthDay: '', //moment(),
      name: '',
      lastname: '',
      oldGender: this.props.common.SELECTGENDER,
      country: this.props.common.SELECTCOUNTRY,
      status: '',
      loading: false,
      gender: '',
      countryy: [
        this.props.common.SELECTCOUNTRY,
        this.props.common.THAILAND,
        this.props.common.UNITEDSTATES,
        this.props.common.ENGLAND,
        this.props.common.CHINA,
        this.props.common.OTHER,
      ],
      countryen: [
        'Select you country',
        'Thailand',
        'United States',
        'England',
        'China',
        'Other',
      ],
      countryth: [
        'เลือกประเทศของคุณ',
        'ไทย',
        'สหรัฐ',
        'อังกฤษ',
        'จีน',
        'อื่นๆ',
      ],
    }
    this.toggleCalendar = this.toggleCalendar.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.dataProfile = this.dataProfile.bind(this)
    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeLastName = this.onChangeLastName.bind(this)
    this.onChangeGender = this.onChangeGender.bind(this)
    this.onChangeCountry = this.onChangeCountry.bind(this)
    this.sumbitProfile = this.sumbitProfile.bind(this)
    this.logout = this.logout.bind(this)
  }

  toggleCalendar(event) {
    event && event.preventDefault()
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleChange(date) {
    this.setState({
      birthDay: date,
    })
    this.toggleCalendar()
  }

  componentWillReceiveProps(nextProps) {
    // console.log('ddddddddd', nextProps)
    if (this.state.countryy.SELECTCOUNTRY !== nextProps.common.SELECTCOUNTRY) {
      this.setState({
        countryy: [
          nextProps.common.SELECTCOUNTRY,
          nextProps.common.THAILAND,
          nextProps.common.UNITEDSTATES,
          nextProps.common.ENGLAND,
          nextProps.common.CHINA,
          nextProps.common.OTHER,
        ],
      })
    }
  }

  componentDidMount() {
    {
      this.dataProfile()
    }
  }
  logout() {
    this.props.url.push('/')
  }
  async dataProfile() {
    const { status, data } = await api.get(
      `${api.SERVER}/profile?token=${this.props.auth.token}`
    )
    this.setState({ profile: data })
    // console.log('dataaaa', data)
    if (data.name != null) {
      this.setState({ name: data.name })
    }
    if (data.lastname != null) {
      this.setState({ lastname: data.lastname })
    }
    if (data.date_birth != null) {
      //console.log('test', data.date_birth)
      const birthDate = moment(new Date(data.date_birth))
      //console.log('birthDate', birthDate)
      this.setState({ birthDay: birthDate })
    }
    if (data.gender != null) {
      this.setState({ oldGender: data.gender })
      this.setState({ gender: data.gender })
    }
    if (data.country != null) {
      this.setState({ country: data.country })
    }
    //this.setState({ email: data[0].email })
  }

  renderCountry() {
    const rowCountry = []
    const rowCount = this.state.countryy.length
    // Use splice on clone object, DONT MODIFY props
    //console.log('ddddddddddd', this.state.country)
    for (let i = 0; i < rowCount; i++) {
      if (
        this.state.country == this.state.countryen[i] ||
        this.state.country == this.state.countryth[i]
      ) {
        rowCountry.push(
          <option selected value={this.state.countryy[i]}>
            {this.state.countryy[i]}
          </option>
        )
      } else {
        rowCountry.push(
          <option value={this.state.countryy[i]}>
            {this.state.countryy[i]}
          </option>
        )
      }
    }
    return rowCountry
  }

  onChangeName(event) {
    this.setState({
      name: event.target.value,
    })
  }

  onChangeLastName(event) {
    this.setState({
      lastname: event.target.value,
    })
  }

  onChangeGender(event) {
    this.setState({
      gender: event.target.value,
    })
  }

  onChangeCountry(event) {
    this.setState({
      country: event.target.value,
    })
  }

  async sumbitProfile() {
    //console.log('numberone', this.state.birthDay)
    this.setState({ loading: true })
    const { status, data } = await api.post(
      `${api.SERVER}/update-user?token=${this.props.auth.token}`,
      this.state
    )
    if (status.code == 200) {
      this.setState({ status: 'Successful to update profile' })
    }
    this.setState({ loading: false })
    //console.log('status', status)
  }

  render() {
    // console.log('startDate', this.state.startDate.format('YYYY-MM-DD HH:mm:ss'))
    // let today = new Date(moment().format('YYYY-MM-DD HH:mm:ss'))
    // console.log('today', today)
    let genderDiv = ''
    if (this.props.auth.token === undefined) {
      // console.log('tokennnnnmmm', this.props.auth.token)
      {
        this.logout()
      }
    }
    if (this.state.oldGender == 'male') {
      genderDiv = (
        <Gender onChange={this.onChangeGender}>
          <option value="male">{this.props.common.MALE}</option>
          <option value="female">{this.props.common.FEMALE}</option>
        </Gender>
      )
    } else if (this.state.oldGender == 'female') {
      genderDiv = (
        <Gender onChange={this.onChangeGender}>
          <option value="female">{this.props.common.FEMALE}</option>
          <option value="male">{this.props.common.MALE}</option>
        </Gender>
      )
    } else {
      genderDiv = (
        <Gender onChange={this.onChangeGender}>
          <option value="please select you gender">
            {this.props.common.SELECTGENDER}
          </option>
          <option value="male">{this.props.common.MALE}</option>
          <option value="female">{this.props.common.FEMALE}</option>
        </Gender>
      )
    }
    return (
      <Box w={12 / 12}>
        <Box w={12 / 12}>
          <Flex
            className="Input-user"
            pb="0.5rem"
            pt={['1rem', '1rem', '1rem', '1rem', '1rem']}
          >
            <Box
              w={12 / 12}
              pt={['0.4rem', '0.4rem', '0.4rem', '0.4rem', '0.4rem']}
            >
              <Flex>
                <Box w={2 / 12}>
                  <Text2>{this.props.common.NAME}</Text2>
                </Box>
                <Box w={10 / 12}>
                  <InputEmail
                    value={this.state.name}
                    onChange={this.onChangeName}
                  />
                </Box>
              </Flex>
              <Flex>
                <Box w={2 / 12}>
                  <Text2>{this.props.common.LASTNAME}</Text2>
                </Box>
                <Box w={10 / 12}>
                  <InputEmail
                    value={this.state.lastname}
                    onChange={this.onChangeLastName}
                  />
                </Box>
              </Flex>
              <Flex>
                <Box w={2 / 12}>
                  <Text2>{this.props.common.GENDER}</Text2>
                </Box>
                <Box w={10 / 12}>
                  <Flex>
                    {genderDiv}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Text2>{this.props.common.BIRTHDAY}</Text2>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {/* {console.log('aaaaa', this.state.birthDay)} */}
                    <DatePicker
                      //selected={this.state.startDate}
                      //onChange={this.handleChange}
                      //width: 16em;
                      //height: 2.2em;
                      style={{ height: '16em' }}
                      fixedHeight
                      placeholderText={this.props.common.SELECTDATE}
                      selected={this.state.birthDay}
                      onChange={this.handleChange}
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      dateFormat="DD/MM/YYYY"
                    />
                    <style jsx global>
                      {datepickerStyled}
                    </style>
                  </Flex>
                </Box>
              </Flex>
              <Flex>
                <Box w={2 / 12}>
                  <Text2>{this.props.common.COUNTRY}</Text2>
                </Box>
                <Box w={10 / 12}>
                  <Country onChange={this.onChangeCountry}>
                    {this.renderCountry()}
                  </Country>
                </Box>
              </Flex>
              <Box w={12 / 12} pt="0.5em" pb="0.5em">
                <center>
                  <ButtonSubmit onClick={this.sumbitProfile}>
                    <center>
                      {this.state.loading ? (
                        <Spinner />
                      ) : (
                        this.props.common.SUBMIT
                      )}
                    </center>
                  </ButtonSubmit>
                  {/* <ButtonSubmit onClick={this.sumbitProfile}>
                  {' '}
                  Submit{' '}
                </ButtonSubmit> */}
                </center>
              </Box>
              <Box w={12 / 12} pt="0.3em">
                <center>
                  <Text3>{this.state.status}</Text3>
                </center>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

// Login.getInitialProps = async ({ store, isServer, query, req }) => {
//   let state = store.getState()
//   const token = state.auth.token
//   await Promise.all([livePromise, vodPromise])
//   state = store.getState()
//   const props = mapStateToProps(state)
//   return props
// }

export default connect(mapStateToProps, { closeModal })(InputProfile)
