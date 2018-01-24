import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { Flex, Provider, Box, Text, overlay } from 'rebass'

//import 'react-datepicker/dist/react-datepicker.css'
//import '../node_modules/react-datepicker/dist/datepicker.css'
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment(),
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    })
  }

  render() {
    return (
      <div>
        <Flex>
          <Box w={1}>hi</Box>
          <Box w={1}>hi</Box>
        </Flex>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
export default Test
