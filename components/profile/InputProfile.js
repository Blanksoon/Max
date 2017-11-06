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
class InputProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment(),
      name: '',
      lastname: '',
      gender: 'Select your gender',
      country: 'Select you country',
    }
    this.toggleCalendar = this.toggleCalendar.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.dataProfile = this.dataProfile.bind(this)
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
    console.log('dataaaa', data)
    if (data[0].name != 'Undefined') {
      this.setState({ name: data[0].name })
    }
    if (data[0].lastname != 'Undefined') {
      this.setState({ lastname: data[0].lastname })
    }
    if (data[0].country != 'Undefined') {
      this.setState({ country: data[0].country })
    }
    if (data[0].gender != 'Undefined') {
      this.setState({ gender: data[0].gender })
    }
    //this.setState({ email: data[0].email })
  }
  render() {
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
                  <InputEmail value={this.state.name} />
                </Box>
              </Flex>
              <Flex>
                <Box w={2 / 12}>
                  <Text2>Lastname</Text2>
                </Box>
                <Box w={10 / 12}>
                  <InputEmail value={this.state.lastname} />
                </Box>
              </Flex>
              <Flex>
                <Box w={2 / 12}>
                  <Text2>Gender</Text2>
                </Box>
                <Box w={10 / 12}>
                  <Flex>
                    <Gender>
                      <option value="Select your gender">
                        {this.state.gender}
                      </option>
                      <option value="Select your gender">male</option>
                      <option value="Select your gender">female</option>
                    </Gender>
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
                  <Country>
                    <option value="Select you country">
                      {this.state.country}
                    </option>
                    <option value="Select you country">
                      Select you country2
                    </option>
                    <option value="Select you country">
                      Select you country3
                    </option>
                  </Country>
                </Box>
              </Flex>
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
