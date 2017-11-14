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
  width: 11em;
  height: 2.2em;
  font-size: 0.8em;
  margin-bottom: 1rem;
`

const Age = styled.select`
  width: 5em;
  height: 2.2em;
  font-size: 0.8em;
`

const Country = styled.select`
  width: 15.7em;
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
      startDate: moment(),
      name: '',
      lastname: '',
      gender: 'Select your gender',
      country: 'Select you country',
      status: '',
      loading: false,
      newGender: '',
    }
    this.toggleCalendar = this.toggleCalendar.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.dataProfile = this.dataProfile.bind(this)
    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeLastName = this.onChangeLastName.bind(this)
    this.onChangeGender = this.onChangeGender.bind(this)
    this.onChangeCountry = this.onChangeCountry.bind(this)
    this.sumbitProfile = this.sumbitProfile.bind(this)
  }

  toggleCalendar(event) {
    event && event.preventDefault()
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    })
    this.toggleCalendar()
  }

  componentDidMount() {
    {
      this.dataProfile()
    }
  }

  async dataProfile() {
    const { status, data } = await api.get(
      `${api.SERVER}/profile?token=${this.props.auth.token}`
    )
    //console.log('dataaaa', data)
    if (data[0].name != 'Undefined') {
      this.setState({ name: data[0].name })
    }
    if (data[0].lastname != 'Undefined') {
      this.setState({ lastname: data[0].lastname })
    }
    // if (data[0].country != 'Undefined') {
    //   this.setState({ country: data[0].country })
    // }
    if (data[0].gender != 'Undefined') {
      this.setState({ gender: data[0].gender })
    }
    //this.setState({ email: data[0].email })
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
      newGender: event.target.value,
    })
  }

  onChangeCountry(event) {
    this.setState({
      country: event.target.value,
    })
  }

  async sumbitProfile() {
    this.setState({ loading: true })
    const { status, data } = await api.post(
      `${api.SERVER}/update-user?token=${this.props.auth.token}`,
      this.state
    )
    if (status.code == 200) {
      this.setState({ status: 'Successful to update profile' })
    }
    this.setState({ loading: false })
    console.log('status', status)
  }

  render() {
    let gender = ''
    if (this.state.gender == 'male') {
      gender = (
        <Gender onChange={this.onChangeGender}>
          <option value="male">male</option>
          <option value="female">female</option>
        </Gender>
      )
    } else {
      gender = (
        <Gender onChange={this.onChangeGender}>
          <option value="female">female</option>
          <option value="male">male</option>
        </Gender>
      )
    }
    return (
      <Box w={12 / 12}>
        <Box w={12 / 12}>
          <Flex className="Input-user" pb="0.5rem" pt="1rem">
            <Box w={12 / 12} pt="0.4rem">
              <Flex>
                <Box w={2 / 12}>
                  <Text2>Name</Text2>
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
                  <Text2>Lastname</Text2>
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
                  <Text2>Gender</Text2>
                </Box>
                <Box w={10 / 12}>
                  <Flex>
                    {gender}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Text2>Birthday</Text2>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Age>
                      <option value="Select your Month">Day</option>
                    </Age>&nbsp;
                    <Age>
                      <option value="Select your Month">Month</option>
                    </Age>&nbsp;
                    <Age>
                      <option value="Select your Month">Year</option>
                    </Age>
                    {/* <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                      showMonthDropdown
                      showYearDropdown
                      inline
                      dateFormat="DD/MM/YYYY"
                      dropdownMode="select"
                    /> */}
                  </Flex>
                </Box>
              </Flex>
              <Flex>
                <Box w={2 / 12}>
                  <Text2>Country</Text2>
                </Box>
                <Box w={10 / 12}>
                  <Country onChange={this.onChangeCountry}>
                    <option value="Thailand">Thailand</option>
                    <option value="United States">United States</option>
                    <option value="England">England</option>
                    <option value="China">China</option>
                    <option value="Other">Other</option>
                  </Country>
                </Box>
              </Flex>
              <Box w={12 / 12} pt="0.5em" pb="0.5em">
                <center>
                  <ButtonSubmit onClick={this.sumbitProfile}>
                    <center>
                      {this.state.loading ? <Spinner /> : 'Submit'}
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
