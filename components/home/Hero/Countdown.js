import { Component } from 'react'
import styled from 'styled-components'
import vars from '../../commons/vars'

const Countdown = styled.div`
  background: ${vars.darkblue};
  position: absolute;
  top: 8rem;
  right: 20px;
  opacity: 0.8;
  z-index: 1;
`
const Panel = styled.span`
  background: ${vars.darkblue};
  display: inline-block;
  font-size: 2rem;
  margin: 0.5rem;
  opacity: 0.8;
  padding: 0.7rem;
`
const Digit = styled.div`
  color: ${vars.yellow};
  font-family: 'Lucida Console', Monaco, monospace;
  font-size: 1.5rem;
  text-align: center;
`
const Text = styled.div`
  color: ${vars.white};
  font-family: 'Lucida Console', Monaco, monospace;
  font-size: 1rem;
  text-align: center;
`
const Label = styled.div`
  background: ${vars.darkblue};
  border-bottom: 1px solid ${vars.white};
  color: ${vars.yellow};
  font-family: 'Lucida Console', Monaco, monospace;
  font-size: 1.5rem;
  opacity: 0.8;
  margin: 0 0.5rem;
  padding: 0.5rem 0.7rem;
`
// Calculate date2 - date2
// date1 and date2 must be date object
const dateDiff = (date1, date2) => {
  const diff = date2.getTime() - date1.getTime()
  const MS_IN_DAY = 1000 * 3600 * 24
  const MS_IN_HRS = 1000 * 3600
  const MS_IN_MIN = 1000 * 60
  return {
    day: Math.floor(diff / MS_IN_DAY),
    hrs: Math.floor((diff % MS_IN_DAY) / MS_IN_HRS),
    min: Math.floor(((diff % MS_IN_DAY) % MS_IN_HRS) / MS_IN_MIN),
  }
}
const pad = num => {
  const length = `${num}`.length
  return `${'0'.repeat(2 - length)}${num}`
}

export default ({ liveDateStr }) => {
  const curDate = new Date()
  const liveDate = new Date(liveDateStr)
  const diff = dateDiff(curDate, liveDate)

  return (
    <Countdown>
      <Label>LIVE in</Label>
      <Panel>
        <Digit>{pad(diff.day)}</Digit>
        <Text>DAY</Text>
      </Panel>
      <Panel>
        <Digit>{pad(diff.hrs)}</Digit>
        <Text>HRS</Text>
      </Panel>
      <Panel>
        <Digit>{pad(diff.min)}</Digit>
        <Text>MIN</Text>
      </Panel>
    </Countdown>
  )
}
